import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, Trash2, Users, Sparkles } from 'lucide-react'
import { API_BASE_URL, DEFAULT_MODEL } from '../config/api'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { AuthModal } from '../components/AuthModal'

interface SwarmAgent {
  id: string
  title: string
  name: string
  excerpt: string
  description?: string
  image: string
}

interface Message {
  agent: string
  content: string
  role: 'nexus' | 'swarm' | 'user'
  avatar?: string
}

interface SwarmTurn {
  agent: string
  content: string
}

interface OrchestratorResponse {
  detected_language?: string
  nexus_analysis?: string
  swarm_turns: SwarmTurn[]
  nexus_summary?: string
  usageMetadata?: {
    promptTokenCount?: number
    candidatesTokenCount?: number
    totalTokenCount?: number
  }
}

const DEFAULT_PHILOSOPHER_IDS = ['camus', 'diogenes', 'immanuel-kant']
const NEXUS_NAME = 'The Oracle'
const NEXUS_ICON = 'Ω'
const MAX_SESSION_TOKENS = 50000

const QUICK_TOPICS = [
  'Is free will an illusion in a deterministic universe?',
  'Can artificial intelligence possess authentic consciousness?',
  'Does morality exist independently of human convention?',
  'What is the relationship between suffering and a meaningful life?',
]

function parseInlineFormatting(str: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  const tokenRegex = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = tokenRegex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push(str.substring(lastIndex, match.index))
    }
    const token = match[0]
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={match.index} style={{ color: '#ffffff', fontWeight: 700 }}>
          {token.slice(2, -2)}
        </strong>
      )
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code
          key={match.index}
          style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2px 6px',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '0.85em',
            color: '#e2d49e',
          }}
        >
          {token.slice(1, -1)}
        </code>
      )
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <em key={match.index} style={{ fontStyle: 'italic', color: '#cbd5e1' }}>
          {token.slice(1, -1)}
        </em>
      )
    }
    lastIndex = match.index + token.length
  }

  if (lastIndex < str.length) {
    parts.push(str.substring(lastIndex))
  }

  return parts
}

function renderFormattedContent(text: string): React.ReactNode {
  if (!text) return null
  const paragraphs = text.split(/\n\n+/)
  return paragraphs.map((para, pIdx) => {
    if (para.startsWith('> ')) {
      return (
        <blockquote
          key={pIdx}
          style={{
            borderLeft: '3px solid #c5b358',
            paddingLeft: '12px',
            margin: '8px 0',
            color: '#e2d49e',
            fontStyle: 'italic',
          }}
        >
          {parseInlineFormatting(para.slice(2))}
        </blockquote>
      )
    }

    if (para.split('\n').every((line) => line.trim().startsWith('- ') || line.trim().startsWith('* '))) {
      return (
        <ul key={pIdx} style={{ margin: '6px 0', paddingLeft: '20px' }}>
          {para.split('\n').map((line, lIdx) => (
            <li key={lIdx} style={{ margin: '4px 0' }}>
              {parseInlineFormatting(line.replace(/^[-*]\s+/, ''))}
            </li>
          ))}
        </ul>
      )
    }

    return (
      <p key={pIdx} style={{ margin: pIdx > 0 ? '8px 0 0' : 0 }}>
        {para.split('\n').map((line, lIdx, arr) => (
          <React.Fragment key={lIdx}>
            {parseInlineFormatting(line)}
            {lIdx < arr.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    )
  })
}

export const SwarmRoom: React.FC = () => {
  useDocumentMeta({
    title: 'Agora | Autonomous Philosophical Debate Forum',
    description:
      'The convergence of classical wisdom and autonomous multi-agent intelligence. Propose any inquiry and watch the council of philosophers debate in real time.',
    image: '/images/agents/chamber_agora_1767720684747.png',
  })

  const [allAgents, setAllAgents] = useState<SwarmAgent[]>([])
  const [selectedAgentIds, setSelectedAgentIds] = useState<string[]>(DEFAULT_PHILOSOPHER_IDS)
  const [messages, setMessages] = useState<Message[]>([
    {
      agent: NEXUS_NAME,
      content:
        'The Agora Chamber is assembled. Classical philosophers stand ready in council. Propose a thesis, ethical dilemma, or existential query to open debate.',
      role: 'nexus',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeSpeaker, setActiveSpeaker] = useState<string | null>(null)
  const [isConfigOpen, setIsConfigOpen] = useState(true)
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null)
  const [tokenUsage, setTokenUsage] = useState({ prompt: 0, candidates: 0, total: 0 })
  const [authModalOpen, setAuthModalOpen] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Load roster of 25 philosophers from public data
  useEffect(() => {
    fetch('/data/swarm_philosophers.json')
      .then((res) => (res.ok ? res.json() : []))
      .then((data: SwarmAgent[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setAllAgents(data)
        }
      })
      .catch((err) => console.error('Failed to load swarm philosophers:', err))
  }, [])

  const activeAgents = allAgents.filter((a) => selectedAgentIds.includes(a.id))

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, loading])

  const toggleAgent = (id: string) => {
    setSelectedAgentIds((prev) => {
      if (prev.includes(id)) {
        if (prev.length <= 1) return prev // Keep at least one agent
        return prev.filter((aid) => aid !== id)
      }
      if (prev.length >= 8) return prev // Max 8 simultaneous agents
      return [...prev, id]
    })
  }

  // Orchestrator fallback via sequential / direct chat endpoint if dedicated orchestrator route is not mounted
  const callChatDirectOrchestrator = async (
    userMsg: string,
    agents: SwarmAgent[],
    history: Message[]
  ): Promise<OrchestratorResponse> => {
    const personasDescription = agents
      .map(
        (a) =>
          `Agent: ${a.title || a.name}\nDescription: ${
            a.excerpt || a.description || ''
          }\nPersona Guidelines: Write only the character's direct philosophical dialogue in character.`
      )
      .join('\n\n')

    const historyContext = history
      .map((m) => `${m.agent}: ${m.content}`)
      .join('\n')

    const systemPrompt = `
You are the Nexus Orchestrator (The Oracle), managing the Agora collaborative AI philosophical swarm.
The user has selected the following specialized philosopher personas to debate their inquiry:

${personasDescription}

CONVERSATION HISTORY:
${historyContext || 'No prior context.'}

USER INQUIRY: "${userMsg}"

GOAL: Generate a coherent, collaborative multi-agent discussion where philosophers respond to the user AND challenge or support each other's classical arguments.
INTERACTION PROTOCOL:
1. Generate between 2 to 5 distinct turns where active philosophers engage in intellectual dialogue, addressing each other by name where relevant.
2. Maintain authentic historical philosophical perspective (e.g. Camus on absurdism, Kant on duty, Diogenes on cynical virtue, Nietzsche on will to power).
3. Keep messages concise (1-3 sentences per turn) for high momentum and readability.
4. Detect the language used by the user and conduct the ENTIRE discussion and summary in that language.

OUTPUT FORMAT:
You MUST respond strictly with a valid JSON object matching this schema:
{
  "detected_language": "Detected language name",
  "nexus_analysis": "Brief initial framing from The Oracle",
  "swarm_turns": [
    { "agent": "PhilosopherName", "content": "Their dialogue in character" }
  ],
  "nexus_summary": "Synthesizing closing thought from The Oracle"
}
`

    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        messages: [
          { role: 'system', content: 'You are a structured multi-agent orchestrator. Return only JSON.' },
          { role: 'user', content: systemPrompt },
        ],
        options: { temperature: 0.75 },
        stream: false,
        format: 'json',
      }),
    })

    if (!response.ok) {
      throw new Error(`Inference engine returned HTTP ${response.status}`)
    }

    const data = await response.json()
    const content = data.message?.content || data.response || ''

    // Clean JSON markdown if wrapped in ```json
    const cleaned = content.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim()
    return JSON.parse(cleaned) as OrchestratorResponse
  }

  const handleSend = async () => {
    if (!input.trim() || activeAgents.length === 0) return
    if (tokenUsage.total >= MAX_SESSION_TOKENS) {
      alert('Token limit reached for this session. Reset the council to proceed.')
      return
    }

    const userMsg = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { agent: 'You', content: userMsg, role: 'user' }])
    setLoading(true)

    try {
      const history = messages.slice(-12)
      let data: OrchestratorResponse

      // Attempt 1: Call dedicated backend orchestrator endpoint
      try {
        const res = await fetch(`${API_BASE_URL}/api/swarm_orchestrator`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-anonymous-id': localStorage.getItem('hub_anonymous_id') || 'anon_visitor',
          },
          body: JSON.stringify({
            message: userMsg,
            selectedAgents: activeAgents,
            history,
          }),
        })

        if (res.ok) {
          data = await res.json()
        } else {
          // Fall back to direct chat inference
          data = await callChatDirectOrchestrator(userMsg, activeAgents, history)
        }
      } catch {
        // Fall back to direct chat inference
        data = await callChatDirectOrchestrator(userMsg, activeAgents, history)
      }

      if (data.detected_language) {
        setDetectedLanguage(data.detected_language)
      }

      if (data.usageMetadata) {
        setTokenUsage((prev) => ({
          prompt: prev.prompt + (data.usageMetadata?.promptTokenCount || 400),
          candidates: prev.candidates + (data.usageMetadata?.candidatesTokenCount || 250),
          total: prev.total + (data.usageMetadata?.totalTokenCount || 650),
        }))
      } else {
        setTokenUsage((prev) => ({
          prompt: prev.prompt + 450,
          candidates: prev.candidates + 300,
          total: prev.total + 750,
        }))
      }

      // 1. Oracle framing
      if (data.nexus_analysis) {
        setActiveSpeaker(NEXUS_NAME)
        await new Promise((r) => setTimeout(r, 600))
        setMessages((prev) => [
          ...prev,
          {
            agent: NEXUS_NAME,
            content: data.nexus_analysis || 'Framing dialectic flux...',
            role: 'nexus',
          },
        ])
        await new Promise((r) => setTimeout(r, 1400))
      }

      // 2. Sequential philosopher responses, one by one with active speaker highlighting
      if (Array.isArray(data.swarm_turns) && data.swarm_turns.length > 0) {
        for (const turn of data.swarm_turns) {
          const matchedAgent = activeAgents.find(
            (a) =>
              a.title.toLowerCase().includes(turn.agent.toLowerCase()) ||
              turn.agent.toLowerCase().includes(a.title.split(',')[0].toLowerCase())
          )
          const speakerName = turn.agent
          setActiveSpeaker(speakerName)
          // Brief pacing pause simulating the philosopher considering their thesis
          await new Promise((r) => setTimeout(r, 800))
          setMessages((prev) => [
            ...prev,
            {
              agent: speakerName,
              content: turn.content,
              role: 'swarm',
              avatar: matchedAgent?.image,
            },
          ])
          // Dialogue pause so the user can read before next philosopher counters or responds
          await new Promise((r) => setTimeout(r, 1600))
        }
      }

      // 3. Oracle synthesis
      if (data.nexus_summary) {
        setActiveSpeaker(NEXUS_NAME)
        await new Promise((r) => setTimeout(r, 800))
        setMessages((prev) => [
          ...prev,
          {
            agent: NEXUS_NAME,
            content: data.nexus_summary || 'Consensus reached in the forum.',
            role: 'nexus',
          },
        ])
        await new Promise((r) => setTimeout(r, 500))
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Swarm failed to coordinate dialogue.'
      setMessages((prev) => [
        ...prev,
        {
          agent: NEXUS_NAME,
          content: `Forum disruption: ${msg}. Please check the backend connection or try again.`,
          role: 'nexus',
        },
      ])
    } finally {
      setActiveSpeaker(null)
      setLoading(false)
    }
  }

  return (
    <main className="main" style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 20px 80px' }}>
      {/* Breadcrumb Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--secondary)', marginBottom: '20px' }}>
        <Link to="/" style={{ color: 'var(--secondary)', textDecoration: 'none' }}>Home</Link>
        <span>/</span>
        <Link to="/agents/" style={{ color: 'var(--secondary)', textDecoration: 'none' }}>Agents</Link>
        <span>/</span>
        <span style={{ color: '#c5b358', fontWeight: 600 }}>Agora</span>
      </div>

      {/* Hero Forum Banner */}
      <header
        style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%)',
          border: '1px solid rgba(197, 179, 88, 0.3)',
          borderRadius: '24px',
          padding: '32px',
          marginBottom: '28px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #c5b358, #556b2f)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(197, 179, 88, 0.4)',
                border: '2px solid rgba(255,255,255,0.2)',
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', fontStyle: 'italic' }}>
                {NEXUS_ICON}
              </span>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>Agora</h1>
                <span
                  style={{
                    background: 'rgba(197, 179, 88, 0.15)',
                    border: '1px solid rgba(197, 179, 88, 0.4)',
                    color: '#c5b358',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Swarm Chamber
                </span>
              </div>
              <p style={{ margin: 0, color: 'var(--secondary)', fontSize: '0.95rem', maxWidth: '640px', lineHeight: 1.5 }}>
                Autonomous multi-agent philosophical debate coordinated by the Oracle. Classical thinkers challenge,
                synthesize, and converse on any inquiry in real time.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setIsConfigOpen((v) => !v)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                border: isConfigOpen ? '1px solid #c5b358' : '1px solid rgba(255,255,255,0.15)',
                background: isConfigOpen ? 'rgba(197, 179, 88, 0.2)' : 'rgba(255,255,255,0.06)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Users size={16} />
              <span>Assemble Council ({activeAgents.length})</span>
            </button>

            <button
              onClick={() => {
                setMessages([
                  {
                    agent: NEXUS_NAME,
                    content: 'Forum memory reset. The council awaits a new directive.',
                    role: 'nexus',
                  },
                ])
                setTokenUsage({ prompt: 0, candidates: 0, total: 0 })
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                borderRadius: '12px',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                background: 'rgba(239, 68, 68, 0.08)',
                color: '#f87171',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              title="Clear forum memory"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* Council Selection Tray */}
        {isConfigOpen && (
          <div
            style={{
              marginTop: '24px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#c5b358', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Select Active Philosophers (Max 8)
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--secondary)' }}>
                {selectedAgentIds.length} of {allAgents.length} active
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: '12px',
                maxHeight: '280px',
                overflowY: 'auto',
                paddingRight: '6px',
              }}
            >
              {allAgents.map((agent) => {
                const isSelected = selectedAgentIds.includes(agent.id)
                const isSpeaking = Boolean(
                  activeSpeaker &&
                    (agent.title.toLowerCase().includes(activeSpeaker.toLowerCase()) ||
                      activeSpeaker.toLowerCase().includes(agent.title.toLowerCase()) ||
                      agent.name.toLowerCase().includes(activeSpeaker.toLowerCase()) ||
                      activeSpeaker.toLowerCase().includes(agent.name.toLowerCase()))
                )
                return (
                  <button
                    key={agent.id}
                    onClick={() => toggleAgent(agent.id)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 8px',
                      borderRadius: '14px',
                      border: isSpeaking
                        ? '2px solid #fbbf24'
                        : isSelected
                        ? '2px solid #c5b358'
                        : '1px solid rgba(255,255,255,0.08)',
                      background: isSpeaking
                        ? 'rgba(251, 191, 36, 0.25)'
                        : isSelected
                        ? 'rgba(197, 179, 88, 0.15)'
                        : 'rgba(0,0,0,0.25)',
                      boxShadow: isSpeaking ? '0 0 16px rgba(251, 191, 36, 0.4)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      textAlign: 'center',
                    }}
                  >
                    <img
                      src={agent.image}
                      alt={agent.title}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: isSelected ? 700 : 500,
                        color: isSelected ? '#ffffff' : 'var(--secondary)',
                        lineHeight: 1.2,
                      }}
                    >
                      {agent.title.split(',')[0]}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Debate Stage */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
        <div
          style={{
            background: 'var(--entry, rgba(30, 41, 59, 0.6))',
            border: '1px solid var(--border, rgba(255, 255, 255, 0.08))',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '520px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
            overflow: 'hidden',
          }}
        >
          {/* Active Agents Badge Strip */}
          <div
            style={{
              padding: '12px 24px',
              borderBottom: '1px solid var(--border, rgba(255,255,255,0.06))',
              background: 'rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              overflowX: 'auto',
            }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Forum Chamber:
            </span>
            {activeAgents.map((a) => {
              const isSpeaking = Boolean(
                activeSpeaker &&
                  (a.title.toLowerCase().includes(activeSpeaker.toLowerCase()) ||
                    activeSpeaker.toLowerCase().includes(a.title.toLowerCase()) ||
                    a.name.toLowerCase().includes(activeSpeaker.toLowerCase()) ||
                    activeSpeaker.toLowerCase().includes(a.name.toLowerCase()))
              )
              return (
                <span
                  key={a.id}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: isSpeaking ? 'rgba(197, 179, 88, 0.35)' : 'rgba(197, 179, 88, 0.12)',
                    border: isSpeaking ? '1px solid #fbbf24' : '1px solid rgba(197, 179, 88, 0.25)',
                    boxShadow: isSpeaking ? '0 0 12px rgba(251, 191, 36, 0.5)' : 'none',
                    fontSize: '0.75rem',
                    fontWeight: isSpeaking ? 700 : 600,
                    color: isSpeaking ? '#ffffff' : '#e2d49e',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: isSpeaking ? '#fbbf24' : '#10b981',
                      boxShadow: isSpeaking ? '0 0 8px #fbbf24' : 'none',
                    }}
                  />
                  {a.title.split(',')[0]}
                </span>
              )
            })}
            {detectedLanguage && (
              <span
                style={{
                  marginLeft: 'auto',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  fontSize: '0.7rem',
                  color: '#818cf8',
                  fontWeight: 600,
                }}
              >
                Lang: {detectedLanguage}
              </span>
            )}
          </div>

          {/* Transcript / Dialogue Feed */}
          <div
            style={{
              flex: 1,
              padding: '24px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            {messages.map((msg, idx) => {
              const isUser = msg.role === 'user'
              const isNexus = msg.role === 'nexus'

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: isUser ? 'row-reverse' : 'row',
                    gap: '14px',
                    alignItems: 'flex-start',
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      flexShrink: 0,
                      background: isUser
                        ? '#3b82f6'
                        : isNexus
                        ? 'linear-gradient(135deg, #c5b358, #556b2f)'
                        : 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}
                  >
                    {isUser ? (
                      <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.75rem' }}>YOU</span>
                    ) : isNexus ? (
                      <span style={{ color: '#ffffff', fontWeight: 900, fontSize: '1.2rem', fontStyle: 'italic' }}>
                        {NEXUS_ICON}
                      </span>
                    ) : msg.avatar ? (
                      <img src={msg.avatar} alt={msg.agent} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <span style={{ color: '#ffffff', fontWeight: 700 }}>{msg.agent[0]}</span>
                    )}
                  </div>

                  {/* Bubble Content */}
                  <div
                    style={{
                      maxWidth: '78%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: isUser ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: isUser ? '#60a5fa' : isNexus ? '#c5b358' : '#e2e8f0',
                        marginBottom: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {msg.agent}
                    </div>

                    <div
                      style={{
                        padding: '12px 18px',
                        borderRadius: '16px',
                        borderTopRightRadius: isUser ? '2px' : '16px',
                        borderTopLeftRadius: !isUser ? '2px' : '16px',
                        background: isUser
                          ? '#2563eb'
                          : isNexus
                          ? 'rgba(197, 179, 88, 0.12)'
                          : 'rgba(255,255,255,0.06)',
                        border: isNexus
                          ? '1px solid rgba(197, 179, 88, 0.25)'
                          : '1px solid rgba(255,255,255,0.08)',
                        color: isUser ? '#ffffff' : 'var(--primary, #f8fafc)',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      }}
                    >
                      {isUser ? msg.content : renderFormattedContent(msg.content)}
                    </div>
                  </div>
                </div>
              )
            })}

            {loading && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#c5b358',
                  fontSize: '0.88rem',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  background: 'rgba(197, 179, 88, 0.08)',
                  border: '1px solid rgba(197, 179, 88, 0.2)',
                  width: 'fit-content',
                }}
              >
                <span className="loading-spinner" />
                <span>
                  {activeSpeaker
                    ? `${activeSpeaker} is addressing the council...`
                    : 'The Oracle is orchestrating council discourse...'}
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Philosophical Inquiry Starters */}
          <div
            style={{
              padding: '10px 24px 0',
              background: 'rgba(0,0,0,0.18)',
              borderTop: '1px solid var(--border, rgba(255,255,255,0.06))',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#c5b358',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                flexShrink: 0,
              }}
            >
              <Sparkles size={13} />
              Inquiry Starters:
            </span>
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
              {QUICK_TOPICS.map((topic, tIdx) => (
                <button
                  key={tIdx}
                  type="button"
                  disabled={loading}
                  onClick={() => setInput(topic)}
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '5px 13px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#cbd5e1',
                    fontSize: '0.78rem',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.background = 'rgba(197, 179, 88, 0.2)'
                      e.currentTarget.style.borderColor = 'rgba(197, 179, 88, 0.45)'
                      e.currentTarget.style.color = '#ffffff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                    e.currentTarget.style.color = '#cbd5e1'
                  }}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Input Console */}
          <div
            style={{
              padding: '16px 24px 18px',
              borderTop: '1px solid var(--border, rgba(255,255,255,0.06))',
              background: 'rgba(0,0,0,0.25)',
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Propose a thesis, ethical dilemma, or question to the Agora council..."
                disabled={loading}
                style={{
                  flex: 1,
                  padding: '14px 20px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(0,0,0,0.3)',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={loading || !input.trim() || activeAgents.length === 0}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #c5b358, #4f46e5)',
                  border: 'none',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                  opacity: loading || !input.trim() ? 0.4 : 1,
                  boxShadow: '0 4px 15px rgba(79, 70, 229, 0.4)',
                  flexShrink: 0,
                }}
              >
                <ArrowUp size={22} strokeWidth={2.5} />
              </button>
            </form>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                color: 'var(--secondary)',
                marginTop: '8px',
                padding: '0 4px',
              }}
            >
              <span>Press Enter to transmit inquiry to active philosophers.</span>
              <span>Tokens: {tokenUsage.total.toLocaleString()} / {MAX_SESSION_TOKENS.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        agentName="Agora"
      />
    </main>
  )
}

export default SwarmRoom
