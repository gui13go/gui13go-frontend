const fs = require('fs');
const path = require('path');

// 1. Template generator for rendered_personalities
function createPersonalityHTML(p) {
  const cssTemplate = fs.readFileSync('public/rendered_personalities/john-bardeen.html', 'utf8');
  // Extract CSS from john-bardeen.html
  const cssMatch = cssTemplate.match(/<style>([\s\S]*?)<\/style>/);
  const cssContent = cssMatch ? cssMatch[1] : '';

  const avatarSrc = p.image || '/images/personalities_thumbs/placeholder-avatar.webp';
  const roleDates = p.dates || '';
  const agentId = `personality-${p.slug}`;
  const systemPrompt = `You are ${p.name} (${roleDates}), role-playing in an interactive dialogue.\nBackground & Context: ${p.summary}\nKey Works / Achievements: ${(p.keyWorks || []).join(', ')}\nFamous Philosophy / Quote: "${p.quote ? p.quote.text : ''}"\nFields of Expertise: ${(p.tags || []).join(', ')}\n\nInstructions:\n1. Speak in the first person ("I") with the authentic intellectual depth, temperament, historical perspective, and vocabulary characteristic of ${p.name}.\n2. Relate questions back to your lived experience, your historical era, and your writings, deeds, or discoveries.\n3. If asked about modern topics (AI, modern politics, space travel), analyze them through the lens of your unique worldview, values, and principles.\n4. Format your responses with clean, readable markdown (paragraphs, bold text, lists where appropriate). Do NOT emit raw HTML tags (e.g. no <span>, <div>, <p>).\n5. Maintain character consistently, with warmth, gravitas, and intellectual immersion.`;
  const greeting = `Greetings. "${p.quote ? p.quote.text : ''}" — I am ${p.name} (${roleDates}). What questions or inquiries bring you to speak with me today?`;
  const quickPrompts = [
    "What shaped your core philosophy or work?",
    "Can you explain your quote: \"" + (p.quote ? p.quote.text.slice(0, 50) + "..." : "your discoveries") + "\"?",
    "What advice would you give to modern society today?",
    "Reflect on your historical era and enduring legacy."
  ];

  const tagsHtml = (p.tags || []).slice(0, 5).map(t => `<span class="agent-tool-pill">${t}</span>`).join('\n            ');

  return `<main class="main agent-chat-main">
  <!-- Embedded Scoped Styling inside <main> so useRenderedContent preserves every rule -->
  <style>
${cssContent}
  </style>

  <div class="agent-chat-wrapper">
    <!-- Breadcrumb & Header -->
    <header class="agent-chat-header">
      <div class="agent-breadcrumbs">
        <a href="/">Home</a> <span>/</span> 
        <a href="/gallery/">Gallery</a> <span>/</span> 
        <a href="/gallery/personalities/">Personalities</a> <span>/</span> 
        <span>${p.name}</span>
      </div>

      <div class="agent-profile-banner">
        <div class="agent-avatar-container">
          <img 
            src="${avatarSrc}" 
            alt="${p.name}" 
            class="agent-avatar-img-locked"
            style="width: 80px; height: 80px; max-width: 80px; max-height: 80px; object-fit: cover; border-radius: 1.2rem; display: block;" 
            onerror="this.onerror=null;this.src='/images/personalities_thumbs/placeholder-avatar.webp';"
          />
          <span class="agent-profile-status-indicator pulse" title="Operational"></span>
        </div>
        
        <div class="agent-profile-info">
          <div class="agent-profile-title-row">
            <h1 class="agent-chat-name">${p.name}</h1>
            <span class="agent-status-badge">
              <span class="agent-status-dot"></span>
              <span id="agentConnectionStatus">Operational</span>
            </span>
          </div>
          <p class="agent-chat-bio">
            ${p.summary}
          </p>
          <div class="agent-profile-tags">
            ${tagsHtml}
            <span class="agent-tool-pill">Gemma4 Neural Gateway</span>
          </div>
        </div>

        <div class="agent-header-actions">
          <button type="button" class="agent-header-pill" id="chatClearBtn" title="Reset current conversation">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 109-9A9.75 9.75.0 005.26 5.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
            <span>Reset Session</span>
          </button>
          <a href="/gallery/personalities/" class="agent-header-pill" title="Back to Personalities Gallery">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>All Personalities</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Chat Interactive Workspace -->
    <section class="agent-chat-card" aria-label="Interactive Dialogue">
      <!-- Conversation History Viewport -->
      <div class="agent-messages-container" id="chatMessagesContainer" role="log" aria-live="polite">
        <!-- Messages dynamically rendered here -->
      </div>

      <!-- Quick Conversation Prompts -->
      <div class="agent-quick-prompts-wrapper">
        <div class="agent-quick-prompts-label">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          Tactical Starters:
        </div>
        <div class="agent-quick-prompts-container" id="chatQuickPrompts">
          <!-- Quick prompt chips dynamically injected here -->
        </div>
      </div>

      <!-- Input Controller Bar -->
      <div class="agent-input-container">
        <form id="chatInputForm" class="agent-input-form">
          <textarea 
            id="chatUserInput" 
            class="agent-textarea" 
            placeholder="Ask ${p.name} about their ideas, philosophy, or historical perspective..." 
            rows="1" 
            aria-label="Your message to ${p.name}"
          ></textarea>
          <button type="submit" id="chatSendBtn" class="agent-send-btn" aria-label="Send Message" title="Send (Enter)">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
        <div class="agent-input-footer">
          <span>Press <kbd>Enter</kbd> to send, <kbd>Shift + Enter</kbd> for new line.</span>
        </div>
      </div>
    </section>
  </div>

  <script src="/lib/agent-chat/agent-chat.js"></script>
  <script>
    (function() {
      function startPersonalitySession() {
        if (typeof window.initAgentChat !== 'function') {
          setTimeout(startPersonalitySession, 40);
          return;
        }

        window.initAgentChat({
          agentId: ${JSON.stringify(agentId)},
          agentName: ${JSON.stringify(p.name)},
          avatar: ${JSON.stringify(avatarSrc)},
          role: ${JSON.stringify(roleDates)},
          model: 'gemma4:latest',
          apiBaseUrl: 'https://ollama.guilhermeviegas.dev',
          systemPrompt: ${JSON.stringify(systemPrompt)},
          greetingMessage: ${JSON.stringify(greeting)},
          quickPrompts: ${JSON.stringify(quickPrompts)}
        });
      }

      startPersonalitySession();
    })();
  </script>
</main>
`;
}

// 6 Missing personalities
const missingPersonalities = [
  {
    name: "John J. Hopfield",
    slug: "john-hopfield",
    dates: "1933–Present",
    birthYear: 1933,
    summary: "American theoretical physicist and molecular biologist who pioneered associative neural networks using spin-glass physical dynamics (Hopfield Networks); co-recipient of the 2024 Nobel Prize in Physics.",
    image: "/images/personalities_thumbs/placeholder-avatar.webp",
    quote: {
      text: "I was trained as a theoretical physicist, so I think about the world in terms of emergent collective behaviors where simple microscopic interactions produce macroscopic memory.",
      cite: "Nobel Banquet Speech (2024)"
    },
    keyWorks: [
      "Hopfield Networks (Associative Memory via Energy Functions, 1982)",
      "Foundations of Physics-Based Machine Learning",
      "Bridging Statistical Mechanics and Cognitive Neuroscience"
    ],
    tags: ["Nobel Prize", "Physics", "Artificial Intelligence", "Neural Networks", "Biophysics", "Princeton"]
  },
  {
    name: "John M. Jumper",
    slug: "john-jumper",
    dates: "1985–Present",
    birthYear: 1985,
    summary: "American computational biophysicist and AI researcher at Google DeepMind who led the development of AlphaFold 2, predicting the 3D atomic structures of 200+ million proteins; awarded the 2024 Nobel Prize in Chemistry.",
    image: "/images/personalities_thumbs/placeholder-avatar.webp",
    quote: {
      text: "What we really did was build a network that understands biology and physics deeply enough to infer structure from evolutionary history.",
      cite: "CASP14 Presentation & Nobel Lecture (2024)"
    },
    keyWorks: [
      "AlphaFold 2 Architecture & Evoformer Module",
      "Atomic Resolution Protein Structure Prediction",
      "CASP14 Breakthrough (2020)"
    ],
    tags: ["Nobel Prize", "Chemistry", "AlphaFold", "DeepMind", "Computational Biology", "Artificial Intelligence"]
  },
  {
    name: "Linus Pauling",
    slug: "linus-pauling",
    dates: "1901–1994",
    birthYear: 1901,
    summary: "American chemist, biochemist, and peace activist who pioneered quantum chemistry and orbital hybridization; the only person in history to win two unshared Nobel Prizes (Chemistry 1954 and Peace 1962).",
    image: "/images/personalities_thumbs/placeholder-avatar.webp",
    quote: {
      text: "The best way to have a good idea is to have a lot of ideas, and throw away the bad ones.",
      cite: "Address to Students (1970)"
    },
    keyWorks: [
      "The Nature of the Chemical Bond (1939)",
      "Discovery of the Alpha-Helix Protein Structure",
      "11,000-Scientist Petition for the 1963 Nuclear Test Ban Treaty"
    ],
    tags: ["Nobel Prize", "Chemistry", "Peace", "Quantum Chemistry", "Double Laureate", "Disarmament"]
  },
  {
    name: "John B. Goodenough",
    slug: "john-goodenough",
    dates: "1922–2023",
    birthYear: 1922,
    summary: "American solid-state physicist and materials scientist who developed the lithium cobalt oxide cathode, enabling rechargeable lithium-ion batteries that power modern portable electronics and electric vehicles; awarded the 2019 Nobel Prize in Chemistry at age 97.",
    image: "/images/personalities_thumbs/placeholder-avatar.webp",
    quote: {
      text: "You can't be fearful of failure. You have to be willing to try something that may not work, and keep going.",
      cite: "University of Texas Interview (2019)"
    },
    keyWorks: [
      "Invention of LiCoO2 Cathode for Lithium-Ion Batteries (1980)",
      "Goodenough-Kanamori Rules of Superexchange Magnetism",
      "Solid-State Oxide Materials Research"
    ],
    tags: ["Nobel Prize", "Chemistry", "Lithium-Ion", "Energy Storage", "Materials Science", "Centenarian"]
  },
  {
    name: "António Egas Moniz",
    slug: "antonio-egas-moniz",
    dates: "1874–1955",
    birthYear: 1874,
    summary: "Portuguese neurologist and statesman who developed cerebral angiography to map brain blood vessels and introduced the prefrontal leukotomy (lobotomy) for severe mental illness, receiving the controversial 1949 Nobel Prize in Physiology or Medicine.",
    image: "/images/personalities_thumbs/placeholder-avatar.webp",
    quote: {
      text: "To cure psychoses that had resisted all other remedies, one had to intervene surgically upon the neuronal pathways of the frontal lobes.",
      cite: "Nobel Lecture (1949)"
    },
    keyWorks: [
      "Development of Cerebral Angiography (1927)",
      "Introduction of Prefrontal Leucotomy (1935)",
      "Controversial 1949 Nobel Prize in Medicine"
    ],
    tags: ["Nobel Prize", "Medicine", "Neurology", "Angiography", "Medical History", "Controversy"]
  },
  {
    name: "Fritz Haber",
    slug: "fritz-haber",
    dates: "1868–1934",
    birthYear: 1868,
    summary: "German physical chemist who invented the Haber-Bosch process to synthesize ammonia from atmospheric nitrogen, enabling synthetic fertilizers that feed half the world's population; simultaneously the father of chemical warfare in WWI, awarded the 1918 Nobel Prize in Chemistry.",
    image: "/images/personalities_thumbs/placeholder-avatar.webp",
    quote: {
      text: "During peace time a scientist belongs to the world, but during war time he belongs to his country.",
      cite: "Statement on Military Science (1915)"
    },
    keyWorks: [
      "Haber-Bosch Nitrogen Fixation Process",
      "Synthesis of Ammonia from Air",
      "Supervision of First Military Chlorine Gas Deployments (Ypres, 1915)"
    ],
    tags: ["Nobel Prize", "Chemistry", "Haber-Bosch", "Fertilizer", "Chemical Warfare", "Moral Paradox"]
  }
];

// Write rendered_personalities HTML
missingPersonalities.forEach(p => {
  const html = createPersonalityHTML(p);
  fs.writeFileSync(`public/rendered_personalities/${p.slug}.html`, html, 'utf8');
  console.log(`Generated public/rendered_personalities/${p.slug}.html`);
});

// Update public/data/personalities.json
const personalitiesData = JSON.parse(fs.readFileSync('public/data/personalities.json', 'utf8'));
const existingSlugs = new Set(personalitiesData.map(p => p.slug));

missingPersonalities.forEach(p => {
  if (!existingSlugs.has(p.slug)) {
    const entry = {
      name: p.name,
      dates: p.dates,
      birthYear: p.birthYear,
      summary: p.summary,
      image: p.image,
      zoomSrc: p.image,
      zoomTitle: p.name,
      zoomCaption: `${p.dates} • ${p.summary}`,
      quote: p.quote,
      keyWorks: p.keyWorks,
      tags: p.tags,
      keywords: `${p.name.toLowerCase()} ${p.tags.join(' ').toLowerCase()} ${p.keyWorks.join(' ').toLowerCase()}`,
      quotes: [p.quote],
      slug: p.slug
    };
    personalitiesData.push(entry);
    existingSlugs.add(p.slug);
    console.log(`Added ${p.name} to personalities.json`);
  }
});

fs.writeFileSync('public/data/personalities.json', JSON.stringify(personalitiesData, null, 2), 'utf8');
console.log(`Updated public/data/personalities.json (total: ${personalitiesData.length})`);
