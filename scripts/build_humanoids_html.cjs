const fs = require('fs');
const path = require('path');

const humanoids = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../public/data/humanoids.json'), 'utf8')
);

function generateHtml() {
  const cardsHtml = humanoids.map(h => {
    const featureItems = h.features.map(f => {
      const parts = f.split(': ');
      if (parts.length > 1) {
        return `<li><strong>${parts[0]}:</strong> ${parts.slice(1).join(': ')}</li>`;
      }
      return `<li>${f}</li>`;
    }).join('\n');

    const useCaseItems = h.useCases.map(u => `<li>${u}</li>`).join('\n');

    const tagPills = h.tags.map(t => `
      <button class="humanoid-tag-pill" data-tag="${t}" title="Filter by #${t}" type="button">
        <span class="tag-hash">#</span>${t}
      </button>
    `).join('\n');

    return `
    <article class="humanoid-card" id="${h.id}"
      data-name="${h.name.toLowerCase()}"
      data-developer="${h.developer.toLowerCase()}"
      data-year="${h.year}"
      data-category="${h.category}"
      data-status="${h.status.toLowerCase()}"
      data-height="${h.height}"
      data-weight="${h.weight}"
      data-dof="${h.dof.toLowerCase()}"
      data-compute="${h.compute.toLowerCase()}"
      data-actuation="${h.actuation.toLowerCase()}"
      data-vision="${h.vision.toLowerCase()}"
      data-description="${h.description.toLowerCase()}"
      data-keywords="${h.tags.join(' ')}">

      <div class="humanoid-media-col">
        <div class="humanoid-img-wrapper gallery-zoomable"
          data-zoom-src="${h.image}"
          data-zoom-title="${h.title}"
          data-zoom-meta="Developed by ${h.developer} • Unveiled: ${h.year} • Category: ${h.category.toUpperCase()}"
          data-zoom-caption="${h.description.replace(/"/g, '&quot;')}"
          title="Click to view humanoid technical blueprint">
          <img alt="${h.title} Blueprint" loading="lazy" src="${h.image}" />
          <div class="humanoid-type-badge">${h.category.toUpperCase()}</div>
          <div class="humanoid-img-overlay">
            <svg class="zoom-indicator-icon" fill="none" height="24" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="24">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" x2="16.65" y1="21" x2="16.65"></line>
              <line x1="11" x2="11" y1="8" y2="14"></line>
              <line x1="8" x2="14" y1="11" y2="11"></line>
            </svg>
          </div>
        </div>

        <div class="humanoid-tags-row">
          ${tagPills}
        </div>
      </div>

      <div class="humanoid-info-col">
        <div class="humanoid-card-header">
          <div class="humanoid-title-group">
            <h2 class="humanoid-name">${h.title}</h2>
            <div class="humanoid-meta">
              Developed by <span class="humanoid-dev-name">${h.developer}</span>
              <span class="humanoid-meta-sep">•</span>
              Unveiled <span class="humanoid-year-badge">${h.year}</span>
            </div>
          </div>
          <div class="humanoid-status-badge ${h.category === 'commercial' ? 'status-commercial' : h.category === 'industrial' ? 'status-industrial' : 'status-research'}">
            ${h.status}
          </div>
        </div>

        <p class="humanoid-desc">${h.description}</p>

        <div class="humanoid-features-box">
          <div class="humanoid-box-title">
            <svg fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" viewBox="0 0 24 24" width="16">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Core Innovations & Capabilities</span>
          </div>
          <ul class="humanoid-features-list">
            ${featureItems}
          </ul>
        </div>

        <div class="humanoid-specs-grid">
          <div class="humanoid-spec-item">
            <span class="spec-label">Degrees of Freedom (DoF):</span>
            <span class="spec-value highlight-value">${h.dof}</span>
          </div>
          <div class="humanoid-spec-item">
            <span class="spec-label">Physical Dimensions:</span>
            <span class="spec-value">${h.height} • ${h.weight}</span>
          </div>
          <div class="humanoid-spec-item">
            <span class="spec-label">Payload & Speed:</span>
            <span class="spec-value">${h.payload} • ${h.speed}</span>
          </div>
          <div class="humanoid-spec-item">
            <span class="spec-label">Onboard Brain / AI Stack:</span>
            <span class="spec-value code-value">${h.compute}</span>
          </div>
          <div class="humanoid-spec-item full-width">
            <span class="spec-label">Actuation Architecture:</span>
            <span class="spec-value">${h.actuation}</span>
          </div>
          <div class="humanoid-spec-item full-width">
            <span class="spec-label">Perception & Sensory Suite:</span>
            <span class="spec-value">${h.vision}</span>
          </div>
        </div>

        <div class="humanoid-usecases-box">
          <span class="usecases-label">Primary Target Applications:</span>
          <ul class="humanoid-usecases-list">
            ${useCaseItems}
          </ul>
        </div>
      </div>
    </article>
    `;
  }).join('\n');

  const html = `<main class="main"><div class="gallery-page-container humanoids-page-container"><header class="gallery-header"><div class="gallery-breadcrumbs"><a href="https://gui13go.github.io/">Home</a> <span>/</span> <a href="/gallery/">Gallery</a> <span>/</span> <span>Humanoids</span></div><h1 class="gallery-title">Humanoid Robots</h1><p class="gallery-subtitle">An architectural catalogue of the leading bipedal humanoid robots, embodied AI systems, dexterous manipulators, and autonomous kinetic agents shaping the physical AI revolution.</p><nav aria-label="Gallery Sections" class="gallery-nav-pills">
<a class="gallery-pill" href="/gallery/personalities/">Personalities</a>
<a class="gallery-pill" href="/gallery/quotes/">Quotes</a>
<a class="gallery-pill" href="/gallery/arts/">Arts</a>
<a class="gallery-pill" href="/gallery/books/">Books</a>
<a class="gallery-pill" href="/gallery/computer-languages/">Languages</a>
<a class="gallery-pill" href="/gallery/operating-systems/">Operating Systems</a>
<a class="gallery-pill" href="/gallery/network-protocols/">Protocols</a>
<a class="gallery-pill" href="/gallery/databases/">Databases</a>
<a class="gallery-pill" href="/gallery/data-formats/">Data Formats</a>
<a class="gallery-pill active" href="/gallery/humanoids/">Humanoids</a>
<a class="gallery-pill" href="/gallery/facts/">Facts</a>
<a class="gallery-pill" href="/gallery/laws/">Laws</a>
<a class="gallery-pill" href="/gallery/jokes/">Jokes</a>
<a class="gallery-pill" href="/gallery/versus/">Versus</a>
<a class="gallery-pill" href="/gallery/dictionary/">Dictionary</a>
<a class="gallery-pill" href="/gallery/gadgets/">Gadgets</a>
<a class="gallery-pill" href="/gallery/timelines/">Timelines</a>
<a class="gallery-pill" href="/gallery/nobel-prizes/">Nobel Prizes</a>
</nav></header>

<div aria-label="Filter humanoids by category" class="humanoids-category-bar">
  <div class="humanoids-chips-scroll">
    <button class="humanoid-chip active" data-category="ALL" type="button">All Humanoids</button>
    <button class="humanoid-chip" data-category="commercial" type="button">Commercial</button>
    <button class="humanoid-chip" data-category="industrial" type="button">Industrial & Logistics</button>
    <button class="humanoid-chip" data-category="domestic" type="button">Domestic & Home</button>
    <button class="humanoid-chip" data-category="research" type="button">Research & Agile</button>
    <button class="humanoid-chip" data-category="social" type="button">Social & Expressive</button>
  </div>
</div>

<div class="active-tag-banner" id="activeTagFilterBanner" style="display:none">
  <span>Filtering by tag: <strong id="activeFilterName"></strong></span>
  <button aria-label="Clear tag filter" class="clear-tag-btn" id="clearActiveFilterBtn" type="button">✕ Clear</button>
</div>

<div class="gallery-toolbar humanoids-toolbar">
  <div class="gallery-search-box humanoids-search-box">
    <svg class="search-icon" fill="none" height="18" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="18">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" x2="16.65" y1="21" x2="16.65"></line>
    </svg>
    <input autocomplete="off" id="humanoidSearch" placeholder="Search humanoids by name, developer, vision, compute, or actuators... (Press / to focus)" type="text"/>
    <button aria-label="Clear search" class="clear-search-btn" id="clearHumanoidSearch" style="display:none" type="button">×</button>
  </div>

  <div class="humanoids-toolbar-controls">
    <div class="gallery-sort-box humanoids-sort-box">
      <label class="gallery-sort-label" for="humanoidSort">
        <svg fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="15">
          <line x1="12" x2="12" y1="5" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
        <span>Sort:</span>
      </label>
      <select aria-label="Sort humanoid robots" class="gallery-sort-select" id="humanoidSort">
        <option selected="" value="relevance">Relevance / Importance</option>
        <option value="year-desc">Newest to Oldest</option>
        <option value="year-asc">Oldest to Newest</option>
        <option value="name-asc">Name (A → Z)</option>
        <option value="name-desc">Name (Z → A)</option>
      </select>
    </div>

    <button class="humanoid-action-btn" id="randomHumanoidBtn" title="Jump to a random humanoid" type="button">
      <svg fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="15">
        <polyline points="16 3 21 3 21 8"></polyline>
        <line x1="4" x2="21" y1="20" y2="3"></line>
        <polyline points="21 16 21 21 16 21"></polyline>
        <line x1="15" x2="21" y1="15" y2="21"></line>
        <line x1="4" x2="9" y1="4" y2="9"></line>
      </svg>
      <span>Random</span>
    </button>

    <div class="gallery-count-badge humanoids-count-badge">Showing <span id="visibleCount">${humanoids.length}</span> of ${humanoids.length} robots</div>
  </div>
</div>

<div class="humanoids-grid" id="humanoidsGrid">
${cardsHtml}
</div>

<div class="humanoids-empty-state" id="noResultsMsg" style="display:none">
  <div class="empty-icon-wrap">
    <svg fill="none" height="36" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" width="36">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" x2="16.65" y1="21" x2="16.65"></line>
    </svg>
  </div>
  <h3>No Humanoid Robots Found</h3>
  <p>No robots matched your search term or category filters. Try searching for different actuators, perception systems, or clear your filters.</p>
  <button class="humanoid-reset-btn" id="resetFiltersBtn" type="button">Reset All Filters</button>
</div>

<!-- Lightbox Modal -->
<div aria-hidden="true" class="gallery-lightbox" id="galleryLightbox" role="dialog">
  <div class="lightbox-backdrop"></div>
  <div class="lightbox-dialog">
    <button aria-label="Close focused view" class="lightbox-close" type="button">×</button>
    <div class="lightbox-image-container">
      <img alt="" id="lightboxImg" src=""/>
    </div>
    <div class="lightbox-details">
      <h3 id="lightboxTitle"></h3>
      <div class="lightbox-meta" id="lightboxMeta"></div>
      <p id="lightboxCaption"></p>
    </div>
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("humanoidSearch");
  const clearBtn = document.getElementById("clearHumanoidSearch");
  const sortSelect = document.getElementById("humanoidSort");
  const categoryChips = document.querySelectorAll(".humanoid-chip");
  const tagPills = document.querySelectorAll(".humanoid-tag-pill");
  const gridContainer = document.getElementById("humanoidsGrid");
  const visibleCount = document.getElementById("visibleCount");
  const noResultsMsg = document.getElementById("noResultsMsg");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");
  const randomBtn = document.getElementById("randomHumanoidBtn");
  const activeTagBanner = document.getElementById("activeTagFilterBanner");
  const activeFilterName = document.getElementById("activeFilterName");
  const clearActiveFilterBtn = document.getElementById("clearActiveFilterBtn");

  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxMeta = document.getElementById("lightboxMeta");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.querySelector(".lightbox-close");
  const backdrop = document.querySelector(".lightbox-backdrop");

  let activeCategory = "ALL";
  let activeTag = "";

  function openLightbox(src, title, meta, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = title;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxMeta) lightboxMeta.innerHTML = meta || "";
    if (lightboxCaption) lightboxCaption.textContent = caption || "";
    lightbox.classList.add("active");
    document.body.classList.add("modal-open");
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove("active");
    document.body.classList.remove("modal-open");
    setTimeout(() => { lightboxImg.src = ""; }, 250);
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && lightbox && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });

  // Attach zoom to pre-rendered cards
  gridContainer.querySelectorAll(".gallery-zoomable").forEach(zoom => {
    zoom.addEventListener("click", function() {
      openLightbox(this.dataset.zoomSrc, this.dataset.zoomTitle, this.dataset.zoomMeta, this.dataset.zoomCaption);
    });
  });

  // Attach tag filtering
  document.querySelectorAll(".humanoid-tag-pill").forEach(pill => {
    pill.addEventListener("click", function(e) {
      e.stopPropagation();
      activeTag = this.dataset.tag || "";
      filterCards();
      gridContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  function filterCards() {
    const q = (searchInput ? searchInput.value.trim().toLowerCase() : "");
    if (clearBtn) clearBtn.style.display = q ? "block" : "none";

    if (activeTag) {
      if (activeTagBanner) activeTagBanner.style.display = "flex";
      if (activeFilterName) activeFilterName.textContent = "#" + activeTag;
    } else {
      if (activeTagBanner) activeTagBanner.style.display = "none";
    }

    const cards = Array.from(gridContainer.querySelectorAll(".humanoid-card"));
    let count = 0;

    cards.forEach(card => {
      const name = card.dataset.name || "";
      const dev = card.dataset.developer || "";
      const year = card.dataset.year || "";
      const cat = card.dataset.category || "";
      const status = card.dataset.status || "";
      const dof = card.dataset.dof || "";
      const compute = card.dataset.compute || "";
      const actuation = card.dataset.actuation || "";
      const vision = card.dataset.vision || "";
      const desc = card.dataset.description || "";
      const keywords = card.dataset.keywords || "";

      const textMatch = !q || name.includes(q) || dev.includes(q) || year.includes(q) ||
        status.includes(q) || dof.includes(q) || compute.includes(q) || actuation.includes(q) ||
        vision.includes(q) || desc.includes(q) || keywords.includes(q);

      const catMatch = (activeCategory === "ALL") || (cat === activeCategory);
      const tagMatch = !activeTag || keywords.includes(activeTag.toLowerCase());

      if (textMatch && catMatch && tagMatch) {
        card.style.display = "";
        count++;
      } else {
        card.style.display = "none";
      }
    });

    if (visibleCount) visibleCount.textContent = count;
    if (noResultsMsg) noResultsMsg.style.display = count === 0 ? "block" : "none";
  }

  function sortCards() {
    const mode = sortSelect ? sortSelect.value : "relevance";
    const cards = Array.from(gridContainer.querySelectorAll(".humanoid-card"));

    cards.sort((a, b) => {
      const yearA = parseInt(a.dataset.year) || 0;
      const yearB = parseInt(b.dataset.year) || 0;
      const nameA = (a.dataset.name || "");
      const nameB = (b.dataset.name || "");

      switch (mode) {
        case "year-desc":
          return yearB - yearA || nameA.localeCompare(nameB);
        case "year-asc":
          return yearA - yearB || nameA.localeCompare(nameB);
        case "name-asc":
          return nameA.localeCompare(nameB);
        case "name-desc":
          return nameB.localeCompare(nameA);
        case "relevance":
        default:
          return 0; // Natural pre-sorted order
      }
    });

    cards.forEach(c => gridContainer.appendChild(c));
  }

  if (searchInput) searchInput.addEventListener("input", filterCards);
  if (clearBtn) {
    clearBtn.addEventListener("click", function() {
      searchInput.value = "";
      filterCards();
      searchInput.focus();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", function() {
      sortCards();
      filterCards();
    });
  }

  categoryChips.forEach(chip => {
    chip.addEventListener("click", function() {
      categoryChips.forEach(c => c.classList.remove("active"));
      this.classList.add("active");
      activeCategory = this.dataset.category || "ALL";
      activeTag = "";
      filterCards();
    });
  });

  if (clearActiveFilterBtn) {
    clearActiveFilterBtn.addEventListener("click", function() {
      activeTag = "";
      filterCards();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", function() {
      if (searchInput) searchInput.value = "";
      activeCategory = "ALL";
      activeTag = "";
      categoryChips.forEach(c => c.classList.toggle("active", c.dataset.category === "ALL"));
      if (sortSelect) sortSelect.value = "relevance";
      sortCards();
      filterCards();
    });
  }

  if (randomBtn) {
    randomBtn.addEventListener("click", function() {
      const visible = Array.from(gridContainer.querySelectorAll(".humanoid-card")).filter(c => c.style.display !== "none");
      if (visible.length === 0) return;
      const target = visible[Math.floor(Math.random() * visible.length)];
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.classList.remove("gadget-highlight-pulse");
      void target.offsetWidth;
      target.classList.add("gadget-highlight-pulse");
      setTimeout(() => target.classList.remove("gadget-highlight-pulse"), 2500);
    });
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "/" && document.activeElement !== searchInput && !["input", "textarea"].includes((document.activeElement.tagName || "").toLowerCase())) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });
});
</script>
</main>`;

  fs.writeFileSync(
    path.join(__dirname, '../public/rendered_gallery/humanoids.html'),
    html
  );

  console.log('Successfully generated public/rendered_gallery/humanoids.html!');
}

generateHtml();

