import React, { useEffect, useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

interface ContentRendererProps {
  htmlContent: string
  loading?: boolean
  error?: boolean
  errorMessage?: string
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({
  htmlContent,
  loading = false,
  error = false,
  errorMessage = 'The requested content could not be loaded.',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Automatically wrap local raster <img> elements in <picture> tags with AVIF and WebP sources
  // Note: Skip avatar layers with custom cutout transparency/stacking classes so their original source and attributes remain intact
  const processedHtml = useMemo(() => {
    if (!htmlContent) return ''
    return htmlContent.replace(
      /(<picture[^>]*>[\s\S]*?<\/picture>)|(<img\b[^>]*>)/gi,
      (_match, pictureTag, imgTag) => {
        if (pictureTag) return pictureTag
        // Do not wrap avatar cutout layers or transparent overlay images
        if (imgTag.includes('avatar-layer-') || imgTag.includes('class="avatar')) {
          return imgTag
        }
        const srcMatch = imgTag.match(/(?:\s|^)src=["']((?:https?:\/\/[^/'"\s>]+)?\/(?:images|photos)\/[^'"\s>]+\.(?:jpg|jpeg|png))["']/i)
        if (!srcMatch) return imgTag
        const src = srcMatch[1]
        const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif')
        const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
        return `<picture><source type="image/avif" srcset="${avifSrc}"><source type="image/webp" srcset="${webpSrc}">${imgTag}</picture>`
      }
    )
  }, [htmlContent])

  // Execute embedded scripts when HTML updates (enables interactive charts, timers, map renders, audio)
  useEffect(() => {
    const container = containerRef.current
    if (!container || !processedHtml || loading || error) return

    let isCancelled = false
    const scripts = Array.from(container.querySelectorAll('script'))

    // Filter out JSON data configurations
    const executableScripts = scripts.filter(
      (s) => !(s.type && s.type.includes('json'))
    )

    // Execute scripts sequentially so external libraries (Leaflet, OpenLayers, D3)
    // finish loading before dependent inline scripts run.
    const executeScriptsSequentially = async () => {
      for (const oldScript of executableScripts) {
        if (isCancelled) return

        await new Promise<void>((resolve) => {
          const newScript = document.createElement('script')
          Array.from(oldScript.attributes).forEach((attr) => {
            newScript.setAttribute(attr.name, attr.value)
          })

          if (oldScript.src) {
            newScript.async = false
            newScript.onload = () => resolve()
            newScript.onerror = () => {
              console.warn(`[ContentRenderer] Failed to load external script: ${oldScript.src}`)
              resolve()
            }
            newScript.src = oldScript.src
            oldScript.parentNode?.replaceChild(newScript, oldScript)
          } else {
            let code = oldScript.textContent || ''
            code = code.replace(
              /document\.addEventListener\(\s*["']DOMContentLoaded["']\s*,\s*(function|\()/g,
              '(function(cb){ if(document.readyState !== "loading") { setTimeout(cb, 10); } else { document.addEventListener("DOMContentLoaded", cb); } })($1'
            )
            newScript.textContent = code
            oldScript.parentNode?.replaceChild(newScript, oldScript)
            resolve()
          }
        })
      }

      if (isCancelled) return

      // Dispatch lifecycle events to trigger listeners and force layout calculations
      document.dispatchEvent(new Event('DOMContentLoaded'))
      window.dispatchEvent(new Event('DOMContentLoaded'))
      window.dispatchEvent(new Event('load'))
      window.dispatchEvent(new Event('resize'))
    }

    executeScriptsSequentially()

    // Inject code copy buttons on code blocks
    const preBlocks = container.querySelectorAll('pre')
    preBlocks.forEach((pre) => {
      if (pre.querySelector('.code-copy-btn')) return
      const button = document.createElement('button')
      button.className = 'code-copy-btn'
      button.textContent = 'Copy'
      button.setAttribute('aria-label', 'Copy code to clipboard')
      button.addEventListener('click', (e) => {
        e.stopPropagation()
        const code = pre.querySelector('code')?.innerText || pre.innerText
        navigator.clipboard.writeText(code).then(() => {
          button.textContent = 'Copied!'
          setTimeout(() => {
            button.textContent = 'Copy'
          }, 2000)
        })
      })
      pre.style.position = 'relative'
      pre.appendChild(button)
    })

    return () => {
      isCancelled = true
    }
  }, [processedHtml, loading, error])

  // Intercept internal navigation to keep SPA navigation smooth
  useEffect(() => {
    const container = containerRef.current
    if (!container || loading || error) return

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href) return

      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault()
        navigate(href)
      } else if (href.startsWith('#')) {
        e.preventDefault()
        const el = document.getElementById(href.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }

    container.addEventListener('click', handleLinkClick)
    return () => container.removeEventListener('click', handleLinkClick)
  }, [processedHtml, loading, error, navigate])

  if (loading) {
    return (
      <main
        className="main"
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            color: 'var(--secondary)',
            fontFamily: 'var(--code-font)',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span className="loading-spinner" />
          Loading content...
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="main" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Content Not Found</h1>
        <p style={{ color: 'var(--secondary)', marginTop: '10px', maxWidth: '480px', margin: '0 auto' }}>
          {errorMessage}
        </p>
        <button
          onClick={() => navigate('/')}
          className="read-more-link"
          style={{
            marginTop: '24px',
            padding: '8px 20px',
            background: 'var(--entry)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            cursor: 'pointer',
            color: 'var(--primary)',
            fontSize: '0.9rem',
          }}
        >
          Return Home
        </button>
      </main>
    )
  }

  const hasMainTag = processedHtml.trim().startsWith('<main')

  if (hasMainTag) {
    return (
      <div
        className="content-renderer-wrapper"
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: processedHtml }}
      />
    )
  }

  return (
    <main
      className="main"
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  )
}
