const fs = require('fs');

const entries = [
  // 1. Albert Einstein
  {
    name: "Albert Einstein",
    category: "Physics",
    special: "personality",
    year: "1921",
    catBadges: [{ class: "nobel-cat-physics", text: "Physics" }],
    yearBadge: "1921",
    meta: "German-born Theoretical Physicist • Awarded in 1922 for 1921",
    img: "/images/personalities_thumbs/albert_einstein_portrait.webp",
    initials: "AE",
        img: '/images/personalities_thumbs/albert_einstein_portrait.webp',
    personaLink: { href: "/gallery/personalities/albert-einstein/", text: "Talk to Einstein &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery of the Law of the Photoelectric Effect:</strong> Proved that light propagates not merely as continuous waves, but as discrete quantized packets of energy (photons). When light strikes a metal surface, individual photons transfer their energy to electrons, knocking them free—which laid the experimental foundation for all quantum physics and modern solar cells.",
    triviaLabel: "Did You Know?",
    triviaText: "Einstein never won the Nobel Prize for his Theory of General Relativity! The conservative Nobel committee considered relativity too unproven and philosophically radical. In fact, due to committee deadlock, the 1921 Physics Prize was not awarded until 1922, specifically citing his 1905 paper on the photoelectric effect.",
    tags: ["Quantum Foundations", "Photons", "Solar Power Origin"],
    versusLink: { href: "/gallery/versus/bohr-x-einstein/", text: "Versus: Bohr x Einstein &rarr;" }
  },

  // 2. Marie Skłodowska-Curie
  {
    name: "Marie Skłodowska-Curie",
    category: "Physics Chemistry",
    special: "personality titan",
    year: "1903 1911",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics (1903)" },
      { class: "nobel-cat-chemistry", text: "Chemistry (1911)" },
      { class: "nobel-double-badge", text: "★ 2x Disciplines" }
    ],
    meta: "Polish-French Physicist & Chemist • First Female Laureate in History",
    img: "/images/personalities_thumbs/marie_curie_portrait.webp",
    initials: "MC",
        img: '/images/personalities_thumbs/marie_curie_portrait.webp',
    personaLink: { href: "/gallery/personalities/marie-curie/", text: "Talk to Curie &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Spontaneous Radioactivity & Discovery of Radium and Polonium:</strong> Coined the term 'radioactivity' and proved that radiation was an intrinsic property of the atom itself rather than a chemical reaction, isolating two previously unknown radioactive elements from tons of pitchblende ore.",
    triviaLabel: "Historic Milestone",
    triviaText: "Curie remains the <strong>only person in human history</strong> to win Nobel Prizes across two distinct scientific disciplines (Physics in 1903, Chemistry in 1911). Her daughter Irène Joliot-Curie also won Chemistry in 1935, making the Curies the most decorated scientific family with five total Nobel medals.",
    tags: ["Radioactivity", "Radium", "Women in STEM", "Pioneer"]
  },

  // 3. Richard P. Feynman
  {
    name: "Richard P. Feynman",
    category: "Physics",
    special: "personality",
    year: "1965",
    catBadges: [{ class: "nobel-cat-physics", text: "Physics" }],
    yearBadge: "1965",
    meta: "American Theoretical Physicist (Caltech) • Shared with Schwinger & Tomonaga",
    img: "/images/personalities_thumbs/richard_feynman_portrait.webp",
    initials: "RF",
        img: '/images/personalities_thumbs/richard_feynman_portrait.webp',
    personaLink: { href: "/gallery/personalities/richard-feynman/", text: "Talk to Feynman &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Quantum Electrodynamics (QED) & Feynman Diagrams:</strong> Reconciled quantum mechanics with special relativity to describe how light and matter interact. He introduced intuitive graphical spacetime diagrams to calculate complex particle collisions that had previously produced mathematically nonsensical infinities.",
    triviaLabel: "The Feynman Quirk",
    triviaText: "Feynman initially considered refusing the Nobel Prize because he despised the pomp, celebrity culture, and media circus. A reporter convinced him that declining the award would generate ten times more publicity than simply accepting it and quietly donating the money to buy a house in Altadena, California.",
    tags: ["QED", "Feynman Diagrams", "Quantum Field Theory"]
  },

  // 4. John J. Hopfield
  {
    name: "John J. Hopfield",
    category: "Physics",
    special: "personality ai modern",
    year: "2024",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "2024" },
      { class: "nobel-cat-badge", text: "Shared 1/2" }
    ],
    meta: "American Theoretical Physicist & Molecular Biologist • Princeton University",
    initials: "JH",
    img: "/images/personalities_thumbs/john_hopfield_portrait.webp",
    personaLink: { href: "/gallery/personalities/john-hopfield/", text: "Talk to Hopfield &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Hopfield Networks (Associative Memory via Spin Physics):</strong> In 1982, Hopfield adapted the physical mathematics of 'spin glasses' (magnetic atomic spins interacting in materials) to computer neural networks. His architecture uses an energy function so that incomplete or distorted inputs dynamically cascade down the energy landscape to recall full stored patterns.",
    triviaLabel: "Physics Foundations of AI",
    triviaText: "The Nobel committee awarded half of the 2024 Physics Prize to Hopfield and half to Geoffrey Hinton. Without Hopfield's energy-based physics formulation of neural memories, modern deep learning architectures and Boltzmann machines would never have been conceived.",
    tags: ["Associative Memory", "Spin Glasses", "Neural Physics"]
  },

  // 5. Geoffrey E. Hinton
  {
    name: "Geoffrey E. Hinton",
    category: "Physics",
    special: "personality ai modern",
    year: "2024",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "2024" },
      { class: "nobel-cat-badge", text: "Shared 1/2" }
    ],
    meta: "British-Canadian Computer Scientist & Cognitive Psychologist • The 'Godfather of AI'",
    img: "/images/personalities_thumbs/geoffrey_hinton_portrait.webp",
    initials: "GH",
        img: '/images/personalities_thumbs/geoffrey_hinton_portrait.webp',
    personaLink: { href: "/gallery/personalities/geoffrey-hinton/", text: "Talk to Hinton &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Boltzmann Machines & Deep Representation Learning:</strong> Expanded Hopfield's network using 19th-century statistical physics (Ludwig Boltzmann's distribution law) to create stochastic neural networks capable of discovering hidden representations in unstructured data, and co-popularized backpropagation in 1986.",
    triviaLabel: "Awakened in a Cheap Motel",
    triviaText: "Hinton resigned from Google in 2023 so he could warn the world about potential existential risks from superintelligent AI. When the Nobel committee phoned him with news of his win, he was staying in an inexpensive California hotel with poor Wi-Fi and thought it might be a spoof call.",
    tags: ["Deep Learning", "Boltzmann Machine", "Backpropagation", "AI Safety"]
  },

  // 6. Sir Demis Hassabis
  {
    name: "Sir Demis Hassabis",
    category: "Chemistry",
    special: "personality ai modern",
    year: "2024",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-year-badge", text: "2024" },
      { class: "nobel-cat-badge", text: "Shared 1/4" }
    ],
    meta: "British Neuroscientist, AI Visionary & Entrepreneur • CEO & Co-founder of Google DeepMind",
    img: "/images/personalities_thumbs/demis_hassabis_portrait.webp",
    initials: "DH",
        img: '/images/personalities_thumbs/demis_hassabis_portrait.webp',
    personaLink: { href: "/gallery/personalities/demis-hassabis/", text: "Talk to Hassabis &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Conquering the 50-Year Protein Folding Grand Challenge:</strong> Spearheaded the bold vision that transformer neural networks and evolutionary data could crack biology's greatest mystery, directing the AlphaFold team to accurately predict the 3D atomic structures of 200+ million proteins.",
    triviaLabel: "Explaining the Award Split",
    triviaText: "The 2024 Chemistry Prize was divided: 50% to David Baker (University of Washington) for *computational protein design* (generating new proteins from scratch), and 50% split jointly between Demis Hassabis and John Jumper (25% each) for *protein structure prediction*. Hassabis was knighted at Buckingham Palace in 2024.",
    tags: ["AlphaFold", "DeepMind", "Structural Biology", "Proteins"]
  },

  // 7. John M. Jumper
  {
    name: "John M. Jumper",
    category: "Chemistry",
    special: "personality ai modern",
    year: "2024",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-year-badge", text: "2024" },
      { class: "nobel-cat-badge", text: "Shared 1/4" }
    ],
    meta: "American Condensed Matter Physicist & AI Scientist • DeepMind AlphaFold Lead",
    initials: "JJ",
    img: "/images/personalities_thumbs/john_jumper_portrait.webp",
    personaLink: { href: "/gallery/personalities/john-jumper/", text: "Talk to Jumper &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Architect of the AlphaFold 2 Transformer Architecture:</strong> Formulated the revolutionary Evoformer module and 3D Structure Module that reason directly over spatial geometry and multiple sequence alignments, transforming protein prediction from crude heuristics to atomic-precision deep learning.",
    triviaLabel: "Youngest Chemistry Winner in 70+ Years",
    triviaText: "At age 39, Jumper became the youngest Chemistry laureate in over seven decades. Trained in theoretical chemistry at the University of Chicago, he previously worked on massive supercomputer physics simulations before realizing deep learning could leapfrog decades of brute-force molecular dynamics.",
    tags: ["Evoformer", "Structural AI", "Computational Chemistry"]
  },

  // 8. Niels Bohr
  {
    name: "Niels Bohr",
    category: "Physics",
    special: "personality",
    year: "1922",
    catBadges: [{ class: "nobel-cat-physics", text: "Physics" }],
    yearBadge: "1922",
    meta: "Danish Theoretical Physicist • University of Copenhagen • Copenhagen School",
    img: "/images/personalities_thumbs/niels_bohr_portrait.webp",
    initials: "NB",
        img: '/images/personalities_thumbs/niels_bohr_portrait.webp',
    personaLink: { href: "/gallery/personalities/niels-bohr/", text: "Talk to Bohr &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Quantum Planetary Model of the Atom & Complementarity:</strong> Proposed that electrons orbit the nucleus only in discrete quantized shells without radiating energy, emitting photons only when jumping between energy levels, and formulated the principle of wave-particle complementarity.",
    triviaLabel: "Escaped in a Bomb Bay",
    triviaText: "In 1943, Bohr fled Nazi-occupied Denmark in a tiny fishing vessel to Sweden, then was smuggled to Britain in the bomb bay of an unarmed Mosquito aircraft. Because of his unusually large head, his oxygen helmet didn't fit, and he passed out from oxygen starvation mid-flight, reviving just as the plane landed safely in Scotland.",
    tags: ["Bohr Atom", "Complementarity", "Quantum Mechanics"],
    versusLink: { href: "/gallery/versus/bohr-x-einstein/", text: "Versus: Bohr x Einstein &rarr;" }
  },

  // 9. Werner Heisenberg
  {
    name: "Werner Heisenberg",
    category: "Physics",
    special: "personality",
    year: "1932",
    catBadges: [{ class: "nobel-cat-physics", text: "Physics" }],
    yearBadge: "1932",
    meta: "German Theoretical Physicist • University of Leipzig • Quantum Pioneer",
    img: "/images/personalities_thumbs/werner_heisenberg_portrait.webp",
    initials: "WH",
        img: '/images/personalities_thumbs/werner_heisenberg_portrait.webp',
    personaLink: { href: "/gallery/personalities/werner-heisenberg/", text: "Talk to Heisenberg &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Uncertainty Principle & Creation of Quantum Mechanics:</strong> Formulated Matrix Mechanics (the first complete mathematical description of quantum behavior) and proved mathematically that the exact position and exact momentum of a subatomic particle cannot be simultaneously determined.",
    triviaLabel: "Helgoland Epiphany at Age 23",
    triviaText: "In June 1925, suffering from excruciating hay fever, 23-year-old Heisenberg fled to the treeless, pollen-free North Sea island of Helgoland. During a sleepless night of calculations, he saw the dawn of matrix mechanics emerge, feeling he was looking through the surface of atomic phenomena into a deeply beautiful interior.",
    tags: ["Uncertainty Principle", "Matrix Mechanics", "Quantum Matrix"]
  },

  // 10. Max Planck
  {
    name: "Max Planck",
    category: "Physics",
    special: "personality",
    year: "1918",
    catBadges: [{ class: "nobel-cat-physics", text: "Physics" }],
    yearBadge: "1918",
    meta: "German Theoretical Physicist • University of Berlin • Father of Quantum Theory",
    img: "/images/personalities_thumbs/max_planck_portrait.webp",
    initials: "MP",
        img: '/images/personalities_thumbs/max_planck_portrait.webp',
    personaLink: { href: "/gallery/personalities/max-planck/", text: "Talk to Planck &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery of Energy Quanta (E = hν) & Planck's Constant:</strong> Resolved the 'ultraviolet catastrophe' of thermal cavity radiation by postulating that radiant energy is emitted and absorbed only in discrete packets called quanta, establishing fundamental physical constant h = 6.626×10⁻³⁴ J·s.",
    triviaLabel: "The Reluctant Revolutionary",
    triviaText: "Planck viewed his quantum hypothesis as a desperate mathematical patch to fit experimental radiation curves, not believing that nature was truly quantized until Einstein proved light was composed of particles (photons). Planck also coined 'Planck's Principle': *Science advances one funeral at a time.*",
    tags: ["Planck Constant", "Energy Quanta", "Blackbody Radiation"]
  },

  // 11. John Bardeen
  {
    name: "John Bardeen",
    category: "Physics",
    special: "personality titan",
    year: "1956 1972",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics (1956)" },
      { class: "nobel-cat-physics", text: "Physics (1972)" },
      { class: "nobel-double-badge", text: "★ 2x Physics Winner" }
    ],
    meta: "American Electrical Engineer & Physicist • Bell Labs & UIUC",
    initials: "JB",
        img: '/images/personalities_thumbs/john_bardeen_portrait.webp',
    personaLink: { href: "/gallery/personalities/john-bardeen/", text: "Talk to Bardeen &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Point-Contact Transistor (1956) & BCS Superconductivity Theory (1972):</strong> Co-invented the semiconductor transistor that replaced fragile vacuum tubes and sparked the microprocessor revolution, then solved the quantum mechanism behind zero-resistance electron Cooper pairing in superconductivity.",
    triviaLabel: "King Gustav's Promise",
    triviaText: "When King Gustav VI Adolf of Sweden presented Bardeen his first medal in 1956, the King gently chided him for bringing only one of his three children to Stockholm. Bardeen promised: *'I will bring them all next time, Your Majesty.'* Sixteen years later, he returned with all three children to receive his second medal!",
    tags: ["Transistor", "Superconductivity", "BCS Theory", "Silicon Age"]
  },

  // 12. Alexander Fleming
  {
    name: "Alexander Fleming",
    category: "Medicine",
    special: "personality",
    year: "1945",
    catBadges: [{ class: "nobel-cat-medicine", text: "Medicine" }],
    yearBadge: "1945",
    meta: "Scottish Physician & Microbiologist • Shared with Howard Florey & Ernst Chain",
    img: "/images/personalities_thumbs/alexander_fleming_portrait.webp",
    initials: "AF",
        img: '/images/personalities_thumbs/alexander_fleming_portrait.webp',
    personaLink: { href: "/gallery/personalities/alexander-fleming/", text: "Talk to Fleming &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery of Penicillin:</strong> Discovered that a stray mold colony (<em>Penicillium notatum</em>) secreted a substance that lysed Staphylococci bacteria without harming white blood cells, ushering in the antibiotic era and saving an estimated 200+ million lives.",
    triviaLabel: "The Mold That Drifted In",
    triviaText: "Fleming's discovery was an astonishing accident: in August 1928, he left an unwashed stack of Petri dishes on his bench before leaving for holiday. A mold spore floated in through an open window and landed on a staph culture. When Fleming returned, he noticed a clear halo where all bacteria had died.",
    tags: ["Penicillin", "Antibiotics", "Serendipity"]
  },

  // 13. Linus Pauling
  {
    name: "Linus Pauling",
    category: "Chemistry Peace",
    special: "personality titan",
    year: "1954 1962",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry (1954)" },
      { class: "nobel-cat-peace", text: "Peace (1962)" },
      { class: "nobel-double-badge", text: "★ Sole Unshared Double" }
    ],
    meta: "American Chemist & Peace Activist • Only Person with 2 Unshared Medals",
    initials: "LP",
    img: "/images/personalities_thumbs/linus_pauling_portrait.webp",
    personaLink: { href: "/gallery/personalities/linus-pauling/", text: "Talk to Pauling &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Nature of the Chemical Bond & Nuclear Test Ban Treaty:</strong> Revolutionized chemistry by applying quantum orbital hybridization and resonance to molecular shapes, then led an 11,000-scientist petition campaign that compelled the US and USSR to sign the 1963 Partial Nuclear Test Ban Treaty.",
    triviaLabel: "Unrivaled Distinction",
    triviaText: "While Marie Curie, John Bardeen, and Frederick Sanger also won two Nobel Prizes, Pauling is the **only person in history whose two Nobel Prizes were both unshared** (receiving 100% of the award and prize money on both occasions).",
    tags: ["Chemical Bonding", "Nuclear Disarmament", "Orbital Hybridization"],
    versusLink: { href: "/gallery/versus/crick-watson-x-pauling/", text: "Versus: Crick/Watson x Pauling &rarr;" }
  },

  // 14. John B. Goodenough
  {
    name: "John B. Goodenough",
    category: "Chemistry",
    special: "personality oldest",
    year: "2019",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-year-badge", text: "2019" },
      { class: "nobel-double-badge", text: "★ Oldest Winner (97)" }
    ],
    meta: "American Solid-State Physicist & Materials Scientist • University of Texas at Austin",
    initials: "JG",
    img: "/images/personalities_thumbs/john_goodenough_portrait.webp",
    personaLink: { href: "/gallery/personalities/john-goodenough/", text: "Talk to Goodenough &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Lithium-Ion Battery Cathode Development:</strong> Discovered that lithium cobalt oxide (LiCoO₂) provided double the energy density and voltage of prior designs, making lightweight, rechargeable batteries feasible for laptops, smartphones, and electric transport worldwide.",
    triviaLabel: "Breakthrough at Age 57, Nobel at 97",
    triviaText: "Goodenough made his career-defining battery discovery at age 57 after Oxford University offered him a professorship, and waited four decades until the Nobel committee honored him at age 97. He lived to age 100, continuing to go to his lab and mentor students nearly every single day.",
    tags: ["Lithium-Ion", "Clean Energy", "Materials Science"]
  },

  // 15. Ernest Hemingway
  {
    name: "Ernest Hemingway",
    category: "Literature",
    special: "personality versus",
    year: "1954",
    catBadges: [{ class: "nobel-cat-literature", text: "Literature" }],
    yearBadge: "1954",
    meta: "American Novelist & Journalist • 'The Old Man and the Sea'",
    img: "/images/personalities_thumbs/ernest_hemingway_portrait.webp",
    initials: "EH",
        img: '/images/personalities_thumbs/ernest_hemingway_portrait.webp',
    personaLink: { href: "/gallery/personalities/ernest-hemingway/", text: "Talk to Hemingway &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The 'Iceberg Theory' of Modern Narrative Prose:</strong> Stripped prose of decorative adjectives and ornate grammar, demonstrating that seven-eighths of an emotional narrative should remain beneath the surface for the reader to feel intuitively.",
    triviaLabel: "The Faulkner Rivalry",
    triviaText: "His contemporary William Faulkner had won Literature five years earlier. Faulkner sniped that Hemingway *'has never been known to use a word that might send a reader to the dictionary.'* Hemingway fired back: *'Poor Faulkner. Does he really think big emotions come from big words?'*",
    tags: ["Iceberg Theory", "Lost Generation", "Modernism"],
    versusLink: { href: "/gallery/versus/hemingway-x-faulkner/", text: "Versus: Hemingway x Faulkner &rarr;" }
  },

  // 16. Albert Camus
  {
    name: "Albert Camus",
    category: "Literature",
    special: "personality versus",
    year: "1957",
    catBadges: [{ class: "nobel-cat-literature", text: "Literature" }],
    yearBadge: "1957",
    meta: "French-Algerian Author, Philosopher & Journalist • 'The Stranger' & 'The Myth of Sisyphus'",
    img: "/images/personalities_thumbs/albert_camus_portrait_1769618836639.webp",
    initials: "AC",
        img: '/images/personalities_thumbs/albert_camus_portrait_1769618836639.webp',
    personaLink: { href: "/gallery/personalities/albert-camus/", text: "Talk to Camus &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>For his important literary production, which with clear-sighted earnestness illuminates the problems of the human conscience in our times:</strong> Explored the concept of the Absurd—the tension between humanity's longing for meaning and the indifferent silence of the universe—arguing that one must imagine Sisyphus happy.",
    triviaLabel: "A Ticket in His Pocket",
    triviaText: "At 44, Camus was the second-youngest Literature laureate ever. He dedicated his Nobel lecture to his impoverished elementary school teacher, Louis Germain. Tragically, just three years after winning, Camus died instantly when the Facel Vega car driven by his publisher crashed into a plane tree; an unused train ticket was found in his coat pocket.",
    tags: ["Absurdism", "Existential Integrity", "Sisyphus"],
    versusLink: { href: "/gallery/versus/sartre-x-camus/", text: "Versus: Sartre x Camus &rarr;" }
  },

  // 17. Gabriel García Márquez
  {
    name: "Gabriel García Márquez",
    category: "Literature",
    special: "personality",
    year: "1982",
    catBadges: [{ class: "nobel-cat-literature", text: "Literature" }],
    yearBadge: "1982",
    meta: "Colombian Novelist & Journalist • 'One Hundred Years of Solitude' & 'Love in the Time of Cholera'",
    img: "/images/personalities_thumbs/gabriel_garcia_marquez_portrait_1769849809008.webp",
    initials: "GG",
        img: '/images/personalities_thumbs/gabriel_garcia_marquez_portrait_1769849809008.webp',
    personaLink: { href: "/gallery/personalities/gabriel-garcia-marquez/", text: "Talk to García Márquez &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>For his novels and short stories, in which the fantastic and the realistic are combined in a richly composed world of imagination, reflecting a continent's life and conflicts:</strong> Codified the genre of Magical Realism, capturing Latin America's epic history, myths, and political upheavals through the mythical town of Macondo.",
    triviaLabel: "The White Liquiliqui in Stockholm",
    triviaText: "García Márquez refused to wear the obligatory European black tailcoat to the ceremony, arriving instead in a crisp white Caribbean *liquiliqui*, honoring his grandfather and his Colombian roots. His Nobel address, *The Solitude of Latin America*, is universally hailed as one of the most lyrical political speeches ever given in Stockholm.",
    tags: ["Magical Realism", "Latin American Literature", "Macondo"]
  },

  // 18. Winston Churchill
  {
    name: "Winston Churchill",
    category: "Literature",
    special: "personality",
    year: "1953",
    catBadges: [{ class: "nobel-cat-literature", text: "Literature" }],
    yearBadge: "1953",
    meta: "British Statesman, Historian & Prime Minister • Literature, Not Peace!",
    img: "/images/personalities_thumbs/winston_churchill_portrait.webp",
    initials: "WC",
        img: '/images/personalities_thumbs/winston_churchill_portrait.webp',
    personaLink: { href: "/gallery/personalities/winston-churchill/", text: "Talk to Churchill &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>For his mastery of historical and biographical description as well as for brilliant oratory in defending exalted human values:</strong> Honored for his monumental historical writings, particularly his six-volume history <em>The Second World War</em>, and his wartime radio broadcasts that rallied the free world.",
    triviaLabel: "Coveted Peace, Got Literature",
    triviaText: "Most people assume Churchill won the Nobel Peace Prize. In fact, Churchill deeply wanted the Peace Prize, but the Norwegian committee awarded it to US General George Marshall for the Marshall Plan. The Swedish Academy gave Churchill Literature instead, observing that he had *'mobilized the English language and sent it into battle.'*",
    tags: ["Historical Writing", "Oratory", "WWI & WWII"]
  },

  // 19. Jean-Paul Sartre
  {
    name: "Jean-Paul Sartre",
    category: "Literature",
    special: "personality controversy snub",
    year: "1964",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1964" },
      { class: "nobel-refused-badge", text: "Declined Prize" }
    ],
    meta: "French Existentialist Philosopher & Playwright • 'Being and Nothingness' & 'Nausea'",
    img: "/images/personalities_thumbs/jean_paul_sartre_better_portrait_1770002302749.webp",
    initials: "JS",
        img: '/images/personalities_thumbs/jean_paul_sartre_better_portrait_1770002302749.webp',
    personaLink: { href: "/gallery/personalities/jean-paul-sartre/", text: "Talk to Sartre &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>For his work which, rich in ideas and filled with the spirit of freedom and the quest for truth, has exerted a far-reaching influence on our age:</strong> Grounded 20th-century existentialism in radical human freedom—'existence precedes essence'—arguing that human beings are condemned to be free and forge their own purpose.",
    triviaLabel: "Why He Refused the Prize",
    triviaText: "Sartre voluntarily rejected the Nobel Prize and its 273,000 Swedish kronor purse, declaring: *'A writer must refuse to allow himself to be transformed into an institution.'* He believed accepting official honors compromised an author's independent intellectual voice and committed engagement.",
    tags: ["Existentialism", "Refusal of Honors", "Radical Freedom"],
    versusLink: { href: "/gallery/versus/sartre-x-camus/", text: "Versus: Sartre x Camus &rarr;" }
  },

  // 20. Samuel Beckett
  {
    name: "Samuel Beckett",
    category: "Literature",
    special: "personality",
    year: "1969",
    catBadges: [{ class: "nobel-cat-literature", text: "Literature" }],
    yearBadge: "1969",
    meta: "Irish Avant-Garde Playwright & Novelist • 'Waiting for Godot' & 'Endgame'",
    img: "/images/personalities_thumbs/samuel_beckett_portrait_1769636852678.webp",
    initials: "SB",
        img: '/images/personalities_thumbs/samuel_beckett_portrait_1769636852678.webp',
    personaLink: { href: "/gallery/personalities/samuel-beckett/", text: "Talk to Beckett &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>For his writing which, in new forms for the novel and drama, in the destitution of modern man acquires its elevation:</strong> Revolutionized 20th-century theatre with minimalist, absurd dialogues that capture human vulnerability, loneliness, and persistent waiting for elusive meaning.",
    triviaLabel: "A 'Catastrophe' for a Recluse",
    triviaText: "When word arrived that Beckett had won, his wife Suzanne called it a *'catastrophe'* because it would end his quiet private life. Beckett refused to travel to Stockholm to receive the medal and gave away all of the cash prize to impoverished writers, young artists, and academic libraries.",
    tags: ["Theatre of the Absurd", "Minimalism", "Existential Drama"]
  },

  // 21. Pablo Neruda
  {
    name: "Pablo Neruda",
    category: "Literature",
    special: "personality",
    year: "1971",
    catBadges: [{ class: "nobel-cat-literature", text: "Literature" }],
    yearBadge: "1971",
    meta: "Chilean Poet, Diplomat & Senator • 'Canto General' & 'Twenty Love Poems'",
    img: "/images/personalities_thumbs/pablo_neruda_portrait_1770001488767.webp",
    initials: "PN",
        img: '/images/personalities_thumbs/pablo_neruda_portrait_1770001488767.webp',
    personaLink: { href: "/gallery/personalities/pablo-neruda/", text: "Talk to Neruda &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>For a poetry that with the action of an elemental force brings alive a continent's destiny and dreams:</strong> Celebrated for sensual romantic verses and sweeping historical epics chronicling the pre-Columbian roots, flora, fauna, and anti-imperialist struggles of South America.",
    triviaLabel: "Tribute to a Dying Titan",
    triviaText: "Gabriel García Márquez famously referred to Neruda as *'the greatest poet of the 20th century in any language.'* When he collected his medal in Stockholm, he was battling advanced cancer. He died in Santiago in September 1973, just twelve days after Augusto Pinochet's coup overthrew Salvador Allende.",
    tags: ["Poetry", "Latin America", "Social Justice"]
  },

  // 22. Martin Luther King Jr.
  {
    name: "Martin Luther King Jr.",
    category: "Peace",
    special: "personality",
    year: "1964",
    catBadges: [{ class: "nobel-cat-peace", text: "Peace" }],
    yearBadge: "1964",
    meta: "American Baptist Minister & Civil Rights Leader • Nonviolent Direct Action",
    img: "/images/personalities_thumbs/martin_luther_king_jr_portrait.webp",
    initials: "MLK",
        img: '/images/personalities_thumbs/martin_luther_king_jr_portrait.webp',
    personaLink: { href: "/gallery/personalities/martin-luther-king-jr/", text: "Talk to King &rarr;" },
    breakthroughLabel: "The Cause & Citation",
    breakthroughText: "<strong>For his non-violent campaign against racism in America:</strong> Championed peaceful resistance, the Montgomery Bus Boycott, Birmingham demonstrations, and the 1963 March on Washington, catalyzing the end of legal Jim Crow segregation and the landmark passage of the Civil Rights Act of 1964.",
    triviaLabel: "Youngest Male Peace Laureate",
    triviaText: "At age 35, King was the youngest male recipient of the Peace Prize. He donated every cent of the $54,123 prize money to the ongoing civil rights movement. In his Oslo speech, he declared: *'I believe that unarmed truth and unconditional love will have the final word in reality.'*",
    tags: ["Civil Rights", "Nonviolence", "Ahimsa", "Justice"]
  },

  // 23. Nelson Mandela
  {
    name: "Nelson Mandela",
    category: "Peace",
    special: "personality",
    year: "1993",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "1993" },
      { class: "nobel-cat-badge", text: "Shared with F.W. de Klerk" }
    ],
    meta: "Anti-Apartheid Revolutionary & First Democratic President of South Africa",
    img: "/images/personalities_thumbs/nelson_mandela_portrait_1770001411199.webp",
    initials: "NM",
        img: '/images/personalities_thumbs/nelson_mandela_portrait_1770001411199.webp',
    personaLink: { href: "/gallery/personalities/nelson-mandela/", text: "Talk to Mandela &rarr;" },
    breakthroughLabel: "The Cause & Citation",
    breakthroughText: "<strong>For their peaceful termination of the apartheid regime, and for laying the foundations for a new democratic South Africa:</strong> Endured 27 years of brutal imprisonment on Robben Island, emerging without malice to lead historic multi-party negotiations that prevented a catastrophic racial civil war.",
    triviaLabel: "Reconciliation with an Adversary",
    triviaText: "Mandela shared the award with South African President F.W. de Klerk, who had repealed apartheid laws and unbanned the ANC. When questioned about sharing the award with the regime's leader, Mandela answered: *'If you want to make peace with your enemy, you have to work with your enemy. Then he becomes your partner.'*",
    tags: ["Apartheid", "Reconciliation", "Democracy", "Leadership"]
  },

  // 24. Mikhail Gorbachev
  {
    name: "Mikhail Gorbachev",
    category: "Peace",
    special: "personality",
    year: "1990",
    catBadges: [{ class: "nobel-cat-peace", text: "Peace" }],
    yearBadge: "1990",
    meta: "General Secretary & Last President of the Soviet Union • Architect of Glasnost & Perestroika",
    img: "/images/personalities_thumbs/mikhail_gorbachev_portrait.webp",
    initials: "MG",
        img: '/images/personalities_thumbs/mikhail_gorbachev_portrait.webp',
    personaLink: { href: "/gallery/personalities/mikhail-gorbachev/", text: "Talk to Gorbachev &rarr;" },
    breakthroughLabel: "The Cause & Citation",
    breakthroughText: "<strong>For his leading role in the peace process which today characterizes important parts of the international community:</strong> Enacted democratic transparency (<em>glasnost</em>) and structural economic reforms (<em>perestroika</em>), negotiated landmark nuclear arms reduction treaties with Ronald Reagan, and refused to use Soviet military force when the Berlin Wall fell in 1989.",
    triviaLabel: "Averted a European Bloodbath",
    triviaText: "Unlike his predecessors who sent tanks to Hungary (1956) and Czechoslovakia (1968), Gorbachev explicitly renounced the Brezhnev Doctrine, allowing Eastern Europe to determine its own democratic destiny without war. He used his prize money to fund Russian rural hospital construction and independent media.",
    tags: ["Cold War End", "Glasnost", "Perestroika", "Disarmament"]
  },

  // 25. Malala Yousafzai
  {
    name: "Malala Yousafzai",
    category: "Peace",
    special: "personality youngest",
    year: "2014",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "2014" },
      { class: "nobel-double-badge", text: "★ Youngest Ever (17)" }
    ],
    meta: "Pakistani Education Activist • Shared with Kailash Satyarthi",
    img: "/images/personalities_thumbs/malala_yousafzai_portrait.webp",
    initials: "MY",
        img: '/images/personalities_thumbs/malala_yousafzai_portrait.webp',
    personaLink: { href: "/gallery/personalities/malala-yousafzai/", text: "Talk to Malala &rarr;" },
    breakthroughLabel: "The Cause & Citation",
    breakthroughText: "<strong>For their struggle against the suppression of children and for the right of all children to education:</strong> Defied Taliban bans on girls attending school in Pakistan's Swat Valley, survived a targeted assassination shooting at age 15, and ignited an international movement for universal education.",
    triviaLabel: "All-Time Record Holder",
    triviaText: "At 17 years old, Malala became the youngest Nobel laureate in history across all categories, surpassing William Lawrence Bragg (who was 25 when he won Physics in 1915). She heard the news while sitting in her chemistry class in Birmingham, England.",
    tags: ["Girls Education", "Human Rights", "Courage"]
  },

  // 26. Friedrich A. Hayek
  {
    name: "Friedrich A. Hayek",
    category: "Economics",
    special: "personality versus",
    year: "1974",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "1974" },
      { class: "nobel-cat-badge", text: "Shared with Gunnar Myrdal" }
    ],
    meta: "Austrian-British Economist • 'The Road to Serfdom' & 'The Use of Knowledge in Society'",
    img: "/images/personalities_thumbs/fa_hayek_portrait_1769434289623.webp",
    initials: "FH",
    personaLink: { href: "/gallery/personalities/friedrich-hayek/", text: "Talk to Hayek &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Price System as a Decentralized Communication Network:</strong> Proved that no central planning agency can possess the vast, localized, constantly changing knowledge needed to manage an economy; market prices act like global telegraph wires conveying supply and demand instantly.",
    triviaLabel: "The Committee's Mismatched Marriage",
    triviaText: "The Nobel committee deliberately paired Hayek with Swedish socialist economist Gunnar Myrdal—his complete ideological opposite! In his Nobel lecture (*The Pretence of Knowledge*), Hayek cautioned that creating a Nobel Prize in Economics was risky because it gave individual social scientists an aura of scientific infallibility they do not possess.",
    tags: ["Austrian Economics", "Price Mechanism", "Spontaneous Order"],
    versusLink: { href: "/gallery/versus/keynes-x-hayek/", text: "Versus: Keynes x Hayek &rarr;" }
  },

  // 27. Milton Friedman
  {
    name: "Milton Friedman",
    category: "Economics",
    special: "personality",
    year: "1976",
    catBadges: [{ class: "nobel-cat-economics", text: "Economics" }],
    yearBadge: "1976",
    meta: "American Economist • University of Chicago • Leader of the Chicago School",
    img: "/images/personalities_thumbs/milton_friedman_portrait_1769434276944.webp",
    initials: "MF",
        img: '/images/personalities_thumbs/milton_friedman_portrait_1769434276944.webp',
    personaLink: { href: "/gallery/personalities/milton-friedman/", text: "Talk to Friedman &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Monetarism, Consumption Analysis & Monetary History:</strong> Overturned post-war Keynesian orthodoxy by proving that *'inflation is always and everywhere a monetary phenomenon'* and demonstrating that Federal Reserve monetary contractions turned the 1929 stock market crash into the Great Depression.",
    triviaLabel: "Storm Over Stockholm",
    triviaText: "Friedman's award provoked intense international demonstrations outside the Stockholm Concert Hall due to his free-market economic consultations in Chile. During the award ceremony, a protester shouted slogans from the gallery before being led out. Friedman was famous for popularizing the phrase: *'There is no such thing as a free lunch.'*",
    tags: ["Monetarism", "Money Supply", "Chicago School", "Free Markets"]
  },

  // 28. Paul A. Samuelson
  {
    name: "Paul A. Samuelson",
    category: "Economics",
    special: "personality",
    year: "1970",
    catBadges: [{ class: "nobel-cat-economics", text: "Economics" }],
    yearBadge: "1970",
    meta: "American Economist • Massachusetts Institute of Technology (MIT) • Neoclassical Synthesis",
    img: "/images/personalities_thumbs/paul_samuelson_portrait_1769585284610.webp",
    initials: "PS",
        img: '/images/personalities_thumbs/paul_samuelson_portrait_1769585284610.webp',
    personaLink: { href: "/gallery/personalities/paul-samuelson/", text: "Talk to Samuelson &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Mathematical Foundations of Modern Economics:</strong> Rewrote economics from verbal descriptive philosophy into an exact, testable mathematical science, establishing constrained optimization theorems borrowed from thermodynamic equilibrium in his masterwork <em>Foundations of Economic Analysis</em>.",
    triviaLabel: "First American Economics Laureate",
    triviaText: "Samuelson was the very first American to win the Economics prize. His 1948 introductory textbook *Economics* became the best-selling economic textbook in world history, selling 4+ million copies in 40 languages. Samuelson famously joked: *'I don't care who writes a nation's laws if I can write its economics textbooks.'*",
    tags: ["Neoclassical Synthesis", "Mathematical Economics", "Optimization"]
  },

  // 29. António Egas Moniz
  {
    name: "António Egas Moniz",
    category: "Medicine",
    special: "personality controversy",
    year: "1949",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1949" },
      { class: "nobel-controversy-badge", text: "Aged Worst" }
    ],
    meta: "Portuguese Neurologist & Politician • Prefrontal Leukotomy (Lobotomy)",
    initials: "EM",
    img: "/images/personalities_thumbs/antonio_egas_moniz_portrait.webp",
    personaLink: { href: "/gallery/personalities/antonio-egas-moniz/", text: "Talk to Moniz &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>For his discovery of the therapeutic value of leucotomy in certain psychoses:</strong> Surgically severing nerve fibers connecting the frontal lobes to the rest of the brain to treat severe psychiatric conditions like schizophrenia, mania, and intractable depression.",
    triviaLabel: "Catastrophic Medical Retrospect",
    triviaText: "The Nobel stamp of approval ignited a global lobotomy frenzy in the 1940s and 50s. American physician Walter Freeman developed a crude transorbital 'ice pick' lobotomy, performing it on over 40,000 patients (including Rosemary Kennedy), leaving thousands permanently vegetative or brain-damaged. Families of victims have repeatedly petitioned the Nobel Foundation to revoke the medal.",
    tags: ["Medical Ethics", "Lobotomy", "Tragic Mistake", "Neurology"]
  },

  // 30. Fritz Haber
  {
    name: "Fritz Haber",
    category: "Chemistry",
    special: "personality controversy",
    year: "1918",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-year-badge", text: "1918" },
      { class: "nobel-controversy-badge", text: "Moral Paradox" }
    ],
    meta: "German Chemist • Director of the Kaiser Wilhelm Institute for Physical Chemistry",
    initials: "FH",
    img: "/images/personalities_thumbs/fritz_haber_portrait.webp",
    personaLink: { href: "/gallery/personalities/fritz-haber/", text: "Talk to Haber &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Synthesis of Ammonia from Atmospheric Nitrogen (Haber-Bosch Process):</strong> Succeeded in capturing inert nitrogen directly from the air under high heat and pressure, producing synthetic ammonia fertilizer that currently sustains agricultural food production for roughly half the world's population (~4 billion people).",
    triviaLabel: "The Father of Chemical Warfare",
    triviaText: "Haber was simultaneously the military architect of Germany's poison gas operations in WWI, personally directing the deployment of lethal chlorine gas at the Second Battle of Ypres in 1915. His wife Clara Immerwahr, also an accomplished chemist, shot herself in grief and protest. Awarding him Chemistry immediately after WWI sparked fierce boycotts by French and British scientists.",
    tags: ["Haber-Bosch", "Fertilizer", "Chemical Warfare", "Dual-Use"]
  },

  // 31. Mahatma Gandhi
  {
    name: "Mahatma Gandhi",
    category: "Peace",
    special: "personality snub",
    year: "1937–1948",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-snub-badge", text: "Never Awarded (5x Nominated)" }
    ],
    meta: "Architect of Nonviolent Resistance (Satyagraha) • Father of Modern India",
    img: "/images/personalities_thumbs/mahatma_gandhi_portrait.webp",
    initials: "MG",
        img: '/images/personalities_thumbs/mahatma_gandhi_portrait.webp',
    personaLink: { href: "/gallery/personalities/mahatma-gandhi/", text: "Talk to Gandhi &rarr;" },
    breakthroughLabel: "The Legacy",
    breakthroughText: "<strong>Pioneered Mass Non-Violent Civil Disobedience (Ahimsa & Satyagraha):</strong> Proved that an unarmed population could defeat the British Empire through moral authority, economic boycotts, and nonviolent defiance, directly inspiring Martin Luther King Jr., Nelson Mandela, and civil rights movements globally.",
    triviaLabel: "The Committee's Eternal Regret",
    triviaText: "Gandhi was nominated five times (1937, 1938, 1939, 1947, 1948). He was assassinated in January 1948 just days before the nomination deadline. The committee refused to award the Peace Prize that year, declaring *'there was no suitable living candidate.'* In 1989, when the Dalai Lama won, the committee chairman announced the award was *'in part a tribute to the memory of Mahatma Gandhi.'*",
    tags: ["Satyagraha", "Nonviolence", "Ahimsa", "Historic Omission"]
  },

  // 32. Rosalind Franklin
  {
    name: "Rosalind Franklin",
    category: "Medicine Chemistry",
    special: "personality snub",
    year: "1962",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine / Physiology" },
      { class: "nobel-snub-badge", text: "Omitted (Posthumous Rules)" }
    ],
    meta: "British Chemist & X-Ray Crystallographer • King's College London",
    initials: "RF",
        img: '/images/personalities_thumbs/rosalind_franklin_portrait.webp',
    personaLink: { href: "/gallery/personalities/rosalind-franklin/", text: "Talk to Franklin &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Photograph 51 (The Physical Proof of the Double Helix):</strong> Franklin captured the exquisitely clear X-ray diffraction image of B-form DNA that proved its helical nature, and deduced that the hydrophobic phosphate backbones must face outward, contrary to Watson and Crick's early inside-out models.",
    triviaLabel: "Shown Without Her Knowledge",
    triviaText: "Her colleague Maurice Wilkins showed Photograph 51 to James Watson without Franklin's knowledge or consent. Watson and Francis Crick recognized the diffraction pattern instantly, using her critical measurements to construct their winning model. Franklin died of ovarian cancer in 1958 at age 37, four years before Watson, Crick, and Wilkins shared the 1962 prize.",
    tags: ["Photo 51", "DNA Double Helix", "Crystallography", "Women in STEM"]
  },

  // 33. Lise Meitner
  {
    name: "Lise Meitner",
    category: "Physics Chemistry",
    special: "personality snub",
    year: "1944",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics / Chemistry" },
      { class: "nobel-snub-badge", text: "Excluded by Committee" }
    ],
    meta: "Austrian-Swedish Nuclear Physicist • 'The Mother of the Atomic Bomb'",
    img: "/images/personalities_thumbs/lise_meitner_portrait.webp",
    initials: "LM",
        img: '/images/personalities_thumbs/lise_meitner_portrait.webp',
    personaLink: { href: "/gallery/personalities/lise-meitner/", text: "Talk to Meitner &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Theoretical Discovery & Calculation of Nuclear Fission:</strong> While exiled in Sweden fleeing Nazi persecution, Meitner and her nephew Otto Frisch calculated that an atomic nucleus of uranium bombarded by neutrons splits in half, releasing unprecedented kinetic energy according to Einstein's E=mc².",
    triviaLabel: "Sole Credit Awarded to Otto Hahn",
    triviaText: "The 1944 Nobel Prize in Chemistry was awarded solely to her long-time laboratory collaborator Otto Hahn. When the Nobel archives were declassified after 50 years, historians confirmed that committee prejudice, academic rivalries, and Meitner's status as a wartime refugee led to her unjust omission.",
    tags: ["Nuclear Fission", "E=mc²", "Atomic Physics", "Historic Oversight"]
  },

  // 34. Nikola Tesla
  {
    name: "Nikola Tesla",
    category: "Physics",
    special: "personality snub",
    year: "1915",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-snub-badge", text: "The 1915 Mystery" }
    ],
    meta: "Serbian-American Inventor & Electrical Engineer • Pioneer of AC Power & Wireless Radio",
    img: "/images/personalities_thumbs/nikola_tesla_portrait_1769882531009.webp",
    initials: "NT",
        img: '/images/personalities_thumbs/nikola_tesla_portrait_1769882531009.webp',
    personaLink: { href: "/gallery/personalities/nikola-tesla/", text: "Talk to Tesla &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Alternating Current (AC) Polyphase Grid & Induction Motors:</strong> Invented polyphase AC electric generators, step-up/step-down transformers, and the brushless AC induction motor that made continental high-voltage electrical power transmission possible, illuminating the modern world.",
    triviaLabel: "The New York Times Front-Page Mystery",
    triviaText: "On November 6, 1915, front-page headlines in *The New York Times* reported that Nikola Tesla and Thomas Edison had been selected to share the 1915 Nobel Prize in Physics. Yet weeks later, the prize was unexpectedly given to William and Lawrence Bragg! Rumors claimed that Tesla refused to share an award with Edison after their vicious 'War of the Currents,' though archived records indicate neither secured enough committee votes.",
    tags: ["Alternating Current", "Induction Motor", "Wireless Power", "War of Currents"]
  },

  // 35. Stephen Hawking
  {
    name: "Stephen Hawking",
    category: "Physics",
    special: "personality snub",
    year: "1974",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-snub-badge", text: "The Observation Rule" }
    ],
    meta: "British Theoretical Physicist & Cosmologist • University of Cambridge • 'A Brief History of Time'",
    img: "/images/personalities_thumbs/stephen_hawking_portrait.webp",
    initials: "SH",
        img: '/images/personalities_thumbs/stephen_hawking_portrait.webp',
    personaLink: { href: "/gallery/personalities/stephen-hawking/", text: "Talk to Hawking &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Hawking Radiation & Black Hole Thermodynamics:</strong> Combined quantum field theory with general relativity to prove that black holes are not completely black, but emit thermal subatomic radiation at their event horizons, predicting they will slowly lose mass and evaporate.",
    triviaLabel: "Why He Never Won the Medal",
    triviaText: "Nobel statutes strictly require that theoretical physics discoveries be experimentally confirmed by physical observation before a prize can be conferred. Because Hawking radiation from stellar black holes has a temperature of fractions of a nanokelvin ($10^{-8}$ K)—far below the cosmic microwave background—it has never been directly detected. Hawking died in 2018, and posthumous awards are forbidden.",
    tags: ["Hawking Radiation", "Black Holes", "General Relativity", "Cosmology"]
  },

  // 36. Enrico Fermi
  {
    name: "Enrico Fermi",
    category: "Physics",
    special: "personality",
    year: "1938",
    catBadges: [{ class: "nobel-cat-physics", text: "Physics" }],
    yearBadge: "1938",
    meta: "Italian-American Theoretical & Experimental Physicist • Chicago Pile-1 Architect",
    img: "/images/personalities_thumbs/enrico_fermi_portrait.webp",
    initials: "EF",
        img: '/images/personalities_thumbs/enrico_fermi_portrait.webp',
    personaLink: { href: "/gallery/personalities/enrico-fermi/", text: "Talk to Fermi &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Induced Radioactivity by Slow Neutrons & Artificial Isotopes:</strong> Discovered that bombarding chemical elements with neutrons slowed down by paraffin or water dramatically increased their capture rate by atomic nuclei, creating artificial radioactive isotopes and unlocking controlled nuclear fission chain reactions.",
    triviaLabel: "The Flight from Fascism",
    triviaText: "Fermi used his trip to Stockholm to collect the 1938 Nobel Prize to escape Benito Mussolini's Fascist regime with his Jewish wife Laura and children, sailing straight from Sweden to New York. In December 1942, in a converted squash court under the University of Chicago stadium, Fermi built Chicago Pile-1—humanity's first self-sustaining artificial nuclear reactor.",
    tags: ["Nuclear Physics", "Slow Neutrons", "Chicago Pile-1", "Fermi Paradox"]
  },

  // 37. Erwin Schrödinger
  {
    name: "Erwin Schrödinger",
    category: "Physics",
    special: "personality",
    year: "1933",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "1933" },
      { class: "nobel-cat-badge", text: "Shared with Paul Dirac" }
    ],
    meta: "Austrian Theoretical Physicist • University of Zurich & Dublin Institute • Wave Mechanics",
    initials: "ES",
        img: '/images/personalities_thumbs/erwin_schrodinger_portrait.webp',
    personaLink: { href: "/gallery/personalities/erwin-schrodinger/", text: "Talk to Schrödinger &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Schrödinger Wave Equation (iℏ ∂ψ/∂t = Ĥψ):</strong> Formulated the master differential equation of non-relativistic quantum mechanics, demonstrating that subatomic matter can be described through wavefunctions (ψ) that evolve smoothly over time.",
    triviaLabel: "The Paradox He Meant as Satire",
    triviaText: "Schrödinger despised the probabilistic 'Copenhagen interpretation' of his own wave equation. He devised his famous thought experiment—in which a cat inside a closed box is simultaneously alive and dead until opened—not to endorse mystical quantum physics, but as a deliberate reductio ad absurdum to illustrate how ridiculous quantum indeterminacy sounded when applied to macroscopic reality!",
    tags: ["Wave Equation", "Quantum Mechanics", "Schrödinger's Cat"]
  },

  // 38. Paul Dirac
  {
    name: "Paul Dirac",
    category: "Physics",
    special: "personality",
    year: "1933",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "1933" },
      { class: "nobel-cat-badge", text: "Shared with Schrödinger" }
    ],
    meta: "British Theoretical Physicist • Cambridge Lucasian Professor • Prophet of Antimatter",
    initials: "PD",
    personaLink: { href: "/gallery/personalities/paul-dirac/", text: "Talk to Dirac &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Relativistic Dirac Equation & The Prediction of Antimatter:</strong> Reconciled quantum mechanics with Einstein's special relativity for electrons, proving mathematically that negative energy states must correspond to an anti-electron with identical mass but positive charge—predicting the positron before it was ever observed.",
    triviaLabel: "One 'Dirac' = One Word Per Hour",
    triviaText: "Dirac was notoriously silent; Cambridge colleagues joked that a 'dirac' was a unit of measurement equal to one word spoken per hour. When told he won the 1933 Nobel Prize at age 31, he wanted to decline to avoid publicity. Ernest Rutherford convinced him: *'A refusal will make you ten times more famous, and even more journalists will pursue you.'*",
    tags: ["Dirac Equation", "Antimatter", "Positron", "Quantum Electrodynamics"]
  },

  // 39. Wilhelm Conrad Röntgen
  {
    name: "Wilhelm Conrad Röntgen",
    category: "Physics",
    special: "personality",
    year: "1901",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "1901" },
      { class: "nobel-double-badge", text: "★ 1st Nobel Laureate" }
    ],
    meta: "German Mechanical Engineer & Physicist • University of Würzburg • Inaugural Physics Winner",
    initials: "WR",
    personaLink: { href: "/gallery/personalities/wilhelm-conrad-rontgen/", text: "Talk to Röntgen &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery of X-Rays (Röntgen Rays):</strong> In November 1895, while shielding a cathode-ray discharge tube, Röntgen discovered an invisible form of penetrating electromagnetic radiation that could pass through cardboard, paper, and flesh, capturing the first medical radiograph of his wife's hand.",
    triviaLabel: "Refused to Patent His Discovery",
    triviaText: "Röntgen was awarded the very first Nobel Prize in Physics in 1901. He believed that scientific breakthroughs belonged to humanity and adamantly refused to patent X-rays so that medical doctors worldwide could use them freely. He also donated the entire 150,000 Swedish kronor cash prize to the University of Würzburg.",
    tags: ["X-Rays", "Inaugural Nobel", "Medical Imaging", "Altruism"]
  },

  // 40. Guglielmo Marconi
  {
    name: "Guglielmo Marconi",
    category: "Physics",
    special: "personality",
    year: "1909",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "1909" },
      { class: "nobel-cat-badge", text: "Shared with Braun" }
    ],
    meta: "Italian Inventor & Electrical Engineer • Pioneer of Wireless Radio Communication",
    initials: "GM",
    personaLink: { href: "/gallery/personalities/guglielmo-marconi/", text: "Talk to Marconi &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Development of Long-Distance Wireless Telegraphy (Radio):</strong> Engineered practical antennas, spark transmitters, and coherer receivers that transformed Heinrich Hertz's laboratory electromagnetic waves into global transoceanic communications, transmitting the first transatlantic Morse radio signal in 1901.",
    triviaLabel: "The 700 Lives Saved on Titanic",
    triviaText: "Marconi's wireless equipment aboard the *RMS Titanic* in 1912 allowed the radio operators to broadcast distress CQD and SOS calls, alerting the *RMS Carpathia* which raced through ice fields to rescue 705 survivors. Britain's Postmaster General told Parliament: *'Those who have been saved have been saved through one man, Mr. Marconi.'*",
    tags: ["Wireless Radio", "Telecommunications", "Titanic Rescue"]
  },

  // 41. Dorothy Crowfoot Hodgkin
  {
    name: "Dorothy Crowfoot Hodgkin",
    category: "Chemistry",
    special: "personality",
    year: "1964",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-year-badge", text: "1964" },
      { class: "nobel-double-badge", text: "★ Sole Winner" }
    ],
    meta: "British Biochemist & Crystallographer • Oxford University • Structure of Insulin & Penicillin",
    initials: "DH",
    personaLink: { href: "/gallery/personalities/dorothy-hodgkin/", text: "Talk to Hodgkin &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Solving the 3D Atomic Structures of Penicillin, Vitamin B12 & Insulin:</strong> Revolutionized molecular biochemistry by using X-ray diffraction patterns and early computer mainframes to map the exact spatial coordinates of complex biological molecules that had defied synthetic chemists for decades.",
    triviaLabel: "Scientific Triumph Over Chronic Pain",
    triviaText: "Hodgkin accomplished her monumental discoveries while enduring severe, crippling rheumatoid arthritis that began when she was just 24, leaving her hands and feet permanently swollen and distorted. She remains the only British woman to have won a Nobel Prize in science, dedicating 35 years to unraveling the 800-atom structure of insulin.",
    tags: ["Crystallography", "Insulin", "Penicillin", "Vitamin B12", "Women in Science"]
  },

  // 42. Barbara McClintock
  {
    name: "Barbara McClintock",
    category: "Medicine",
    special: "personality",
    year: "1983",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1983" },
      { class: "nobel-double-badge", text: "★ Sole Unshared Female" }
    ],
    meta: "American Cytogeneticist • Cold Spring Harbor Laboratory • Discovery of Transposons",
    initials: "BM",
    personaLink: { href: "/gallery/personalities/barbara-mcclintock/", text: "Talk to McClintock &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery of Mobile Genetic Elements ('Jumping Genes' / Transposons):</strong> Overturned the dogma that chromosomes were static, immutable bead-strings by proving that genetic sequences in maize can physically detach, jump, and reinsert themselves into new chromosomal locations to turn neighboring genes on or off.",
    triviaLabel: "Ridiculed for 30 Years Before Vindication",
    triviaText: "When McClintock presented her transposition discovery at the 1951 Cold Spring Harbor Symposium, she was met with cold hostility and dismissed as an eccentric crank. She stopped publishing on the subject. Three decades later, molecular genetics confirmed that transposons make up nearly 50% of the human genome! At age 81, she received an unshared Nobel Prize.",
    tags: ["Transposons", "Jumping Genes", "Cytogenetics", "Genomics"]
  },

  // 43. Tu Youyou
  {
    name: "Tu Youyou",
    category: "Medicine",
    special: "personality",
    year: "2015",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "2015" }
    ],
    meta: "Chinese Pharmaceutical Chemist & Malariologist • China Academy of Chinese Medical Sciences",
    initials: "TY",
    personaLink: { href: "/gallery/personalities/tu-youyou/", text: "Talk to Tu Youyou &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery of Artemisinin (Qinghaosu) Against Deadly Malaria:</strong> Re-examined 2,000+ ancient traditional Chinese medical texts to find a 1,600-year-old recipe by Ge Hong (340 CE), extracting heat-sensitive artemisinin from sweet wormwood (*Artemisia annua*) using low-temperature ether extraction.",
    triviaLabel: "The 'Three-Noes' Scientist Who Tested on Herself",
    triviaText: "Tu held no doctorate, no medical degree, and had never worked abroad (known affectionately in China as the 'Three-Noes' researcher). To prove artemisinin was non-toxic for human clinical trials during the secret wartime Project 523, Tu volunteered to be Patient Zero, ingesting the extract herself. Her discovery has saved over 5 million lives worldwide.",
    tags: ["Artemisinin", "Malaria", "Herbal Medicine", "Global Health"]
  },

  // 44. Frederick Banting
  {
    name: "Frederick Banting",
    category: "Medicine",
    special: "personality",
    year: "1923",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1923" },
      { class: "nobel-double-badge", text: "★ Youngest at 32" }
    ],
    meta: "Canadian Physician & Medical Scientist • University of Toronto • Youngest Medicine Laureate",
    initials: "FB",
    personaLink: { href: "/gallery/personalities/frederick-banting/", text: "Talk to Banting &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery and Therapeutic Extraction of Insulin:</strong> Successfully ligated pancreatic ducts in dogs to isolate internal islet secretions (insulin), proving it could lower blood glucose and miraculously transforming Type 1 diabetes from a rapid death sentence into a manageable lifelong condition.",
    triviaLabel: "Sold the Patent for $1",
    triviaText: "At age 32, Banting became the youngest Nobel laureate in Medicine in history—a record that still stands over a century later. Furious that the Nobel committee awarded the prize to him and department chairman J.J.R. Macleod while omitting his student assistant Charles Best, Banting gave half of his prize money to Best. Banting sold his insulin patent to the university for $1, declaring: *'Insulin belongs to the world.'*",
    tags: ["Insulin", "Diabetes Cure", "Youngest Medicine Winner", "Altruism"]
  },

  // 45. Ivan Pavlov
  {
    name: "Ivan Pavlov",
    category: "Medicine",
    special: "personality",
    year: "1904",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1904" }
    ],
    meta: "Russian Physiologist • Military Medical Academy (St. Petersburg) • Classical Conditioning",
    img: "/images/personalities_thumbs/ivan_pavlov_portrait.webp",
    initials: "IP",
        img: '/images/personalities_thumbs/ivan_pavlov_portrait.webp',
    personaLink: { href: "/gallery/personalities/ivan-pavlov/", text: "Talk to Pavlov &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Physiology of Digestion & Conditioned Reflexes:</strong> Devised surgical fistula techniques to measure digestive secretions in living animals without anesthesia contamination, discovering classical conditioning where neutral stimuli paired with food trigger involuntary physiological reflexes.",
    triviaLabel: "He Never Actually Rang a Bell!",
    triviaText: "Despite universal popular mythology, Pavlov rarely if ever used a bell in his laboratory! His experiments utilized ticking metronomes, electric buzzers, harmoniums, and visual lights, as metronome frequencies could be calibrated precisely. Pavlov was also intensely defiant: despite openly denouncing Bolshevik tyranny, Vladimir Lenin and Stalin funded his laboratory because of his global prestige.",
    tags: ["Classical Conditioning", "Conditioned Reflex", "Neurophysiology", "Digestion"]
  },

  // 46. Bertrand Russell
  {
    name: "Bertrand Russell",
    category: "Literature",
    special: "personality",
    year: "1950",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1950" }
    ],
    meta: "British Philosopher, Logician & Public Intellectual • 'Principia Mathematica' & 'History of Western Philosophy'",
    img: "/images/personalities_thumbs/bertrand_russell_portrait_1769636799198.webp",
    initials: "BR",
        img: '/images/personalities_thumbs/bertrand_russell_portrait_1769636799198.webp',
    personaLink: { href: "/gallery/personalities/bertrand-russell/", text: "Talk to Russell &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>In recognition of his varied and significant writings in which he champions humanitarian ideals and freedom of thought:</strong> Honored for brilliant philosophical essays, lucid mathematical treatises, and fearless public intellectual defenses of rationality, individual liberty, and nuclear disarmament.",
    triviaLabel: "Jailed Twice: at Age 45 and Age 89",
    triviaText: "Russell was imprisoned twice for pacifism: first for six months in 1918 during WWI, and again at age 89 in 1961 for leading a massive nuclear disarmament sit-in in Whitehall! He famously declared: *'The fundamental cause of the trouble is that in the modern world the stupid are cocksure while the intelligent are full of doubt.'*",
    tags: ["Analytic Philosophy", "Mathematical Logic", "Pacifism", "Free Thought"]
  },

  // 47. William Butler Yeats
  {
    name: "William Butler Yeats",
    category: "Literature",
    special: "personality",
    year: "1923",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1923" }
    ],
    meta: "Irish Poet, Dramatist & Senator • Leader of the Celtic Revival • 'The Second Coming'",
    img: "/images/personalities_thumbs/william_butler_yeats_portrait.webp",
    initials: "WY",
        img: '/images/personalities_thumbs/william_butler_yeats_portrait.webp',
    personaLink: { href: "/gallery/personalities/william-butler-yeats/", text: "Talk to Yeats &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>For his always inspired poetry, which in a highly artistic form gives expression to the spirit of a whole nation:</strong> Wove ancient Gaelic mythology and modern political rebellion (*Easter, 1916*) into apocalyptic, modernist masterpieces (*The Second Coming*, *Sailing to Byzantium*).",
    triviaLabel: "First Irish Nobel Laureate",
    triviaText: "Yeats was the first Irish citizen awarded a Nobel Prize, arriving in Stockholm just one year after the violent founding of the Irish Free State. Yeats saw the medal not merely as personal recognition, but as global diplomatic recognition of Ireland's cultural independence: *'I consider that this honour has come to me less as an individual than as a representative of Irish literature.'*",
    tags: ["Celtic Revival", "Modernist Poetry", "Irish Independence"]
  },

  // 48. Hermann Hesse
  {
    name: "Hermann Hesse",
    category: "Literature",
    special: "personality",
    year: "1946",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1946" }
    ],
    meta: "German-Swiss Novelist & Poet • 'Siddhartha', 'Steppenwolf' & 'The Glass Bead Game'",
    img: "/images/personalities_thumbs/hermann_hesse_portrait_1769636838958.webp",
    initials: "HH",
        img: '/images/personalities_thumbs/hermann_hesse_portrait_1769636838958.webp',
    personaLink: { href: "/gallery/personalities/hermann-hesse/", text: "Talk to Hesse &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>For his inspired writings which while growing in boldness and penetration, exemplify the classical humanitarian ideals:</strong> Masterfully synthesized Buddhist and Hindu philosophy with Jungian psychological individuation, exploring spiritual seekers striving to transcend bourgeois conformity.",
    triviaLabel: "Banned by the Nazis, Honored in 1946",
    triviaText: "Hesse's books were banned and blacklisted in Nazi Germany for his pacifism and assistance to political refugees fleeing the Third Reich. Awarding Hesse the Literature prize in 1946 (the first postwar award) was a conscious gesture by the Swedish Academy to honor a German writer who had remained untainted by fascism.",
    tags: ["Siddhartha", "Steppenwolf", "Eastern Philosophy", "Postwar Renewal"]
  },

  // 49. Leo Tolstoy
  {
    name: "Leo Tolstoy",
    category: "Literature",
    special: "personality snub",
    year: "1901",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-snub-badge", text: "The Inaugural Snub" }
    ],
    meta: "Russian Literary Titan • 'War and Peace' & 'Anna Karenina' • The Most Famous Snub",
    img: "/images/personalities_thumbs/leo_tolstoy_portrait_1769636825857.webp",
    initials: "LT",
        img: '/images/personalities_thumbs/leo_tolstoy_portrait_1769636825857.webp',
    personaLink: { href: "/gallery/personalities/leo-tolstoy/", text: "Talk to Tolstoy &rarr;" },
    breakthroughLabel: "The Legacy",
    breakthroughText: "<strong>The Summit of Psychological Realism & Nonviolent Philosophy:</strong> Redefined world literature through panoramic psychological epics portraying the collision of personal destiny with historic inevitability (*War and Peace*), while his later essays on Christian anarchism and nonviolence directly shaped Mahatma Gandhi's Satyagraha.",
    triviaLabel: "The Scandal of 1901",
    triviaText: "When the inaugural Nobel Prize in Literature was conferred in 1901, the world expected Leo Tolstoy to win. Instead, the Swedish Academy picked French poet Sully Prudhomme, with conservative permanent secretary Carl af Wirsén attacking Tolstoy's radical religious and anti-state doctrines. Forty-two prominent Swedish authors apologized to Tolstoy, who replied that he was grateful not to receive money that was *'the source of all evil.'*",
    tags: ["War and Peace", "Anna Karenina", "Founding Snub", "Russian Literature"]
  },

  // 50. Norman Borlaug
  {
    name: "Norman Borlaug",
    category: "Peace",
    special: "personality",
    year: "1970",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "1970" }
    ],
    meta: "American Agronomist & Geneticist • 'Father of the Green Revolution' • Saved a Billion Lives",
    initials: "NB",
    personaLink: { href: "/gallery/personalities/norman-borlaug/", text: "Talk to Borlaug &rarr;" },
    breakthroughLabel: "The Cause & Citation",
    breakthroughText: "<strong>The Green Revolution (High-Yield Semi-Dwarf Wheat):</strong> Bred disease-resistant, photoperiod-insensitive, high-yield semi-dwarf wheat strains that did not collapse under the weight of their own grain heads, quadrupling cereal yields across Mexico, India, and Pakistan and preventing mass famine.",
    triviaLabel: "Saved More Lives Than Anyone in History",
    triviaText: "Borlaug is credited with saving more human lives than any other person in history—an estimated **one billion people** from starvation. When his wife drove to the Mexican research plots to tell him the Norwegian Nobel committee had awarded him the Peace Prize, Borlaug refused to stop working, insisting they had to finish harvesting experimental grain before sundown.",
    tags: ["Green Revolution", "Wheat Genetics", "Famine Prevention", "Humanitarian"]
  },

  // 51. 14th Dalai Lama
  {
    name: "14th Dalai Lama (Tenzin Gyatso)",
    category: "Peace",
    special: "personality",
    year: "1989",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "1989" }
    ],
    meta: "Spiritual Leader of Tibetan Buddhism • Nonviolent Resistance & Universal Compassion",
    img: "/images/personalities_thumbs/dalai_lama_14th_portrait.webp",
    initials: "DL",
        img: '/images/personalities_thumbs/dalai_lama_14th_portrait.webp',
    personaLink: { href: "/gallery/personalities/dalai-lama-14th/", text: "Talk to Dalai Lama &rarr;" },
    breakthroughLabel: "The Cause & Citation",
    breakthroughText: "<strong>For his consistent resistance to the use of violence in his people's struggle for liberty:</strong> Advocated peaceful, mutually respectful solutions to preserve the historical and cultural heritage of Tibet based on Buddhist universal compassion, dialogue, and ecological harmony.",
    triviaLabel: "A Tribute to Mahatma Gandhi",
    triviaText: "Awarded just months after the 1989 Tiananmen Square protests, Norwegian Nobel Committee Chairman Egil Aarvik declared that the award was *'in part a tribute to the memory of Mahatma Gandhi.'* The Dalai Lama accepted the award on behalf of oppressed people everywhere, saying: *'Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.'*",
    tags: ["Tibetan Autonomy", "Universal Compassion", "Nonviolence", "Buddhism"]
  },

  // 52. John F. Nash Jr.
  {
    name: "John F. Nash Jr.",
    category: "Economics",
    special: "personality",
    year: "1994",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "1994" },
      { class: "nobel-cat-badge", text: "Shared with Harsanyi & Selten" }
    ],
    meta: "American Mathematician • Princeton University • Non-Cooperative Game Theory & 'A Beautiful Mind'",
    img: "/images/personalities_thumbs/john_nash_portrait.webp",
    initials: "JN",
        img: '/images/personalities_thumbs/john_nash_portrait.webp',
    personaLink: { href: "/gallery/personalities/john-nash/", text: "Talk to Nash &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Nash Equilibrium in Non-Cooperative Games:</strong> In a landmark 28-page doctoral thesis at age 21, proved mathematically using Brouwer's fixed-point theorem that every finite non-cooperative game has at least one strategic equilibrium where no player can improve their outcome by unilaterally changing tactics.",
    triviaLabel: "A Thirty-Year Nightmare and Triumph",
    triviaText: "Nash's life inspired the Oscar-winning film *A Beautiful Mind*. After formulating game theory in his twenties, Nash was struck by severe paranoid schizophrenia that incapacitated him for three decades. In an extraordinary medical rarity, his symptoms receded in the late 1980s, allowing him to travel to Stockholm in 1994 to receive his Nobel medal.",
    tags: ["Game Theory", "Nash Equilibrium", "Strategic Interaction", "Mathematics"]
  },

  // 53. Elinor Ostrom
  {
    name: "Elinor Ostrom",
    category: "Economics",
    special: "personality",
    year: "2009",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "2009" },
      { class: "nobel-double-badge", text: "★ 1st Female Economics Laureate" }
    ],
    meta: "American Political Economist • Indiana University • 'Governing the Commons'",
    img: "/images/personalities_thumbs/elinor_ostrom_portrait_1769930956067.webp",
    initials: "EO",
        img: '/images/personalities_thumbs/elinor_ostrom_portrait_1769930956067.webp',
    personaLink: { href: "/gallery/personalities/elinor-ostrom/", text: "Talk to Ostrom &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Empirical Governance of Common-Pool Resources (CPR):</strong> Disproved Garrett Hardin's celebrated 'Tragedy of the Commons' dogma by documenting hundreds of real-world communities (fisheries, pastures, irrigation networks) that sustainably manage shared resources without government coercion or private ownership.",
    triviaLabel: "The Outsider Who Won Economics",
    triviaText: "Ostrom was the first woman to win the Nobel Prize in Economics, yet she had never taken a formal graduate degree in economics (she was a political scientist!). Many mathematical economists initially dismissed her work because she studied Turkish lobster fishermen, Nepalese foresters, and Swiss alpine villagers rather than building abstract regression formulas.",
    tags: ["Governing the Commons", "Collective Action", "Common Pool Resources", "First Woman"]
  },

  // 54. Daron Acemoglu
  {
    name: "Daron Acemoglu",
    category: "Economics",
    special: "personality",
    year: "2024",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "2024" },
      { class: "nobel-cat-badge", text: "Shared with Johnson & Robinson" }
    ],
    meta: "Turkish-American Economist • MIT Institute Professor • 'Why Nations Fail'",
    img: "/images/personalities_thumbs/daron_acemoglu_portrait.webp",
    initials: "DA",
        img: '/images/personalities_thumbs/daron_acemoglu_portrait.webp',
    personaLink: { href: "/gallery/personalities/daron-acemoglu/", text: "Talk to Acemoglu &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Inclusive vs. Extractive Institutions in Long-Run Prosperity:</strong> Utilized colonial natural experiments and settler mortality rates to prove that nations succeed or fail because of their political and economic institutions: inclusive systems foster innovation and growth, while extractive systems entrench narrow monopolies and decay.",
    triviaLabel: "One of the Most Cited Economists in History",
    triviaText: "Acemoglu shared the 2024 Economics Prize with Simon Johnson and James A. Robinson. Acemoglu is renowned for his staggering academic output, ranking as the second-most cited economist of the 21st century. Upon winning, he warned that rising democratic backsliding, autocratic surveillance, and corporate concentration in AI threaten to recreate extractive monopolies.",
    tags: ["Institutional Economics", "Why Nations Fail", "Democracy", "Economic Growth"]
  },

  // 55. Herbert A. Simon
  {
    name: "Herbert A. Simon",
    category: "Economics",
    special: "personality",
    year: "1978",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "1978" }
    ],
    meta: "American Polymath • Carnegie Mellon University • Father of Bounded Rationality & AI",
    img: "/images/personalities_thumbs/herbert_simon_portrait_1769931003629.webp",
    initials: "HS",
        img: '/images/personalities_thumbs/herbert_simon_portrait_1769931003629.webp',
    personaLink: { href: "/gallery/personalities/herbert-simon/", text: "Talk to Simon &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Bounded Rationality & 'Satisficing' in Economic Organizations:</strong> Demolished the neoclassical assumption of *Homo Economicus* (the perfectly rational, omniscient decision-maker), proving that real human beings and corporations have severe cognitive constraints and instead seek choices that are 'good enough' (satisficing).",
    triviaLabel: "Winner of Both Nobel & Turing Awards",
    triviaText: "Simon is one of the greatest polymaths in modern intellectual history: he won both the **Nobel Prize in Economics** (1978) and the **Turing Award in Computer Science** (1975). In 1956, with Allen Newell, he developed the *Logic Theorist*—widely hailed as the first true artificial intelligence computer program in history.",
    tags: ["Bounded Rationality", "Satisficing", "Turing & Nobel", "Artificial Intelligence"]
  },

  // 56. Wassily Leontief
  {
    name: "Wassily Leontief",
    category: "Economics",
    special: "personality",
    year: "1973",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "1973" }
    ],
    meta: "Russian-American Economist • Harvard & NYU • Father of Input-Output Analysis",
    img: "/images/personalities_thumbs/wassily_leontief_portrait_1769930991237.webp",
    initials: "WL",
        img: '/images/personalities_thumbs/wassily_leontief_portrait_1769930991237.webp',
    personaLink: { href: "/gallery/personalities/wassily-leontief/", text: "Talk to Leontief &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Input-Output Economics & Structural Matrix Modeling:</strong> Formulated the mathematical matrix system that tracks how changes in one industrial sector (e.g., steel, oil, agriculture) cascade through supply chains into all other interdependent industries and final consumer markets.",
    triviaLabel: "The Famous 'Leontief Paradox'",
    triviaText: "In 1953, Leontief tested the bedrock Heckscher-Ohlin trade model using US data and shocked the discipline: despite having more capital per worker than any nation, the United States was exporting labor-intensive goods and importing capital-intensive goods! This 'Leontief Paradox' forced economists to realize that skilled human capital matters more than raw physical machines.",
    tags: ["Input-Output", "Leontief Paradox", "Macroeconomics", "Linear Algebra"]
  },

  // 57. Robert Koch
  {
    name: "Robert Koch",
    category: "Medicine",
    special: "personality",
    year: "1905",
    catBadges: [{ class: "nobel-cat-medicine", text: "Medicine" }],
    yearBadge: "1905",
    meta: "German Physician & Microbiologist • Father of Medical Bacteriology",
    initials: "RK",
    personaLink: { href: "/gallery/personalities/robert-koch/", text: "Talk to Koch &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Isolation of Tuberculosis, Cholera & Anthrax Pathogens:</strong> Proved that specific infectious diseases are caused by specific pathogenic microorganisms. Formulated Koch's Postulates—the scientific standard for proving a causal relationship between a microbe and a clinical disease.",
    triviaLabel: "Conquering the White Plague",
    triviaText: "When Koch isolated *Mycobacterium tuberculosis* in 1882, tuberculosis was causing one out of every seven human deaths in Europe and America. His pure culture techniques using agar plates and aniline dyes laid the operational foundation for all modern clinical pathology and antibiotic pharmacology.",
    tags: ["Bacteriology", "Tuberculosis", "Koch's Postulates", "Microbiology"]
  },

  // 58. Bob Dylan
  {
    name: "Bob Dylan",
    category: "Literature",
    special: "personality controversy",
    year: "2016",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "2016" }
    ],
    meta: "American Singer-Songwriter & Poet • 'Blowin' in the Wind' & 'Like a Rolling Stone'",
    initials: "BD",
    personaLink: { href: "/gallery/personalities/bob-dylan/", text: "Talk to Dylan &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>For having created new poetic expressions within the great American song tradition:</strong> Elevated folk and popular song lyrics into enduring high literature, fusing Homeric storytelling, biblical imagery, and Beat poetry to capture the moral struggles of the 20th century.",
    triviaLabel: "Silent for Weeks After Winning",
    triviaText: "Dylan was the first musician ever to win the Nobel Prize in Literature. He famously did not acknowledge the award for weeks, leading a Swedish Academy member to call him 'impolite and arrogant.' Dylan skipped the December award banquet, sending Patti Smith to perform his song *A Hard Rain's A-Gonna Fall*, where she was so moved she briefly forgot the words.",
    tags: ["Poetic Songwriting", "American Folk", "First Musician Laureate", "Culture"]
  },

  // 59. Toni Morrison
  {
    name: "Toni Morrison",
    category: "Literature",
    special: "personality",
    year: "1993",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1993" },
      { class: "nobel-double-badge", text: "★ 1st Black Woman" }
    ],
    meta: "American Novelist & Essayist • Princeton University • 'Beloved' & 'Song of Solomon'",
    initials: "TM",
    personaLink: { href: "/gallery/personalities/toni-morrison/", text: "Talk to Morrison &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>Who in novels characterized by visionary force and poetic import, gives life to an essential aspect of American reality:</strong> Confronted the intergenerational trauma, folklore, and endurance of Black Americans, weaving haunting folklore with lyrical prose in masterpieces like <em>Beloved</em>.",
    triviaLabel: "Historic First",
    triviaText: "Morrison was the first African-American woman to receive the Nobel Prize in Literature. In her electrifying Nobel lecture about an old, blind, wise woman and a captive bird, Morrison warned that language can either be an instrument of death and state control or a living sanctuary: *'We die. That may be the meaning of life. But we do language. That may be the measure of our lives.'*",
    tags: ["Beloved", "African-American Literature", "Visionary Prose", "Civil Rights"]
  },

  // 60. Andrei Sakharov
  {
    name: "Andrei Sakharov",
    category: "Peace",
    special: "personality",
    year: "1975",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "1975" }
    ],
    meta: "Soviet Nuclear Physicist & Dissident • Father of the Soviet Hydrogen Bomb",
    initials: "AS",
    personaLink: { href: "/gallery/personalities/andrei-sakharov/", text: "Talk to Sakharov &rarr;" },
    breakthroughLabel: "The Cause & Citation",
    breakthroughText: "<strong>For his struggle for human rights, for disarmament, and for cooperation between all nations:</strong> The chief scientific designer of the Soviet thermonuclear bomb who risked his life, career, and freedom to speak out against nuclear proliferation, censorship, and political repression in the USSR.",
    triviaLabel: "Barred from Leaving the Soviet Union",
    triviaText: "The Kremlin forbade Sakharov from traveling to Norway to accept his Peace Prize, calling him a traitor. His wife Yelena Bonner delivered his Nobel lecture in Oslo on his behalf. In 1980, after publicly protesting the Soviet invasion of Afghanistan, Sakharov was arrested and exiled to the closed military city of Gorky for six years until freed by Mikhail Gorbachev.",
    tags: ["Human Rights", "Nuclear Disarmament", "Soviet Dissident", "Courage"]
  },

  // 61. Wangari Maathai
  {
    name: "Wangari Maathai",
    category: "Peace",
    special: "personality",
    year: "2004",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "2004" },
      { class: "nobel-double-badge", text: "★ 1st African Woman" }
    ],
    meta: "Kenyan Environmental & Political Activist • Founder of the Green Belt Movement",
    initials: "WM",
    personaLink: { href: "/gallery/personalities/wangari-maathai/", text: "Talk to Maathai &rarr;" },
    breakthroughLabel: "The Cause & Citation",
    breakthroughText: "<strong>For her contribution to sustainable development, democracy and peace:</strong> Founded the Green Belt Movement in 1977, mobilizing rural Kenyan women to plant over 50 million trees to combat deforestation, soil erosion, and water scarcity while promoting women's civic empowerment.",
    triviaLabel: "Bridging Ecology and Peace",
    triviaText: "Maathai was the first African woman to receive the Nobel Peace Prize and the first environmentalist honored by the committee. The Nobel committee expanded the definition of peace, recognizing that resource degradation and environmental injustice directly cause armed conflicts and tyrannical corruption.",
    tags: ["Green Belt Movement", "Reforestation", "Environmental Justice", "Women Empowerment"]
  },

  // 62. Lech Wałęsa
  {
    name: "Lech Wałęsa",
    category: "Peace",
    special: "personality",
    year: "1983",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "1983" }
    ],
    meta: "Polish Labor Leader & Statesman • Founder of Solidarność (Solidarity)",
    initials: "LW",
    personaLink: { href: "/gallery/personalities/lech-wa-esa/", text: "Talk to Wałęsa &rarr;" },
    breakthroughLabel: "The Cause & Citation",
    breakthroughText: "<strong>For his contribution to the right of workers to establish their own organizations:</strong> An electrician at the Gdańsk shipyards who founded Solidarity (<em>Solidarność</em>), the Soviet bloc's first independent trade union, using nonviolent strikes to peacefully dismantle Polish Communist totalitarianism.",
    triviaLabel: "His Wife Traveled to Oslo in Fear",
    triviaText: "Wałęsa could not attend the Oslo ceremony because he feared the Communist authorities would bar him from returning to Poland. His wife Danuta traveled to Norway with their 13-year-old son to accept the Nobel medal. Seven years later, in 1990, Wałęsa was elected President of a free democratic Poland.",
    tags: ["Solidarity", "Labor Rights", "Democracy", "Cold War"]
  },

  // 63. Aleksandr Solzhenitsyn
  {
    name: "Aleksandr Solzhenitsyn",
    category: "Literature",
    special: "personality",
    year: "1970",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1970" }
    ],
    meta: "Russian Novelist & Historian • 'The Gulag Archipelago' & 'One Day in the Life of Ivan Denisovich'",
    initials: "AS",
    personaLink: { href: "/gallery/personalities/aleksandr-solzhenitsyn/", text: "Talk to Solzhenitsyn &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>For the ethical force with which he has pursued the indispensable traditions of Russian literature:</strong> Survived eight years in Soviet labor camps, documenting the horrors of the secret police and the sprawling forced-labor prison camp system in <em>The Gulag Archipelago</em>.",
    triviaLabel: "Smuggled Manuscripts on Microfilm",
    triviaText: "Solzhenitsyn wrote *The Gulag Archipelago* in total secrecy, memorizing passages and hiding microfilms behind walls. When the book was published in the West in 1973, he was arrested by the KGB, stripped of Soviet citizenship, and deported into Western exile. He accepted his 1970 Nobel Prize in person in 1974 after his expulsion.",
    tags: ["Gulag Archipelago", "Totalitarianism", "Russian Literature", "Moral Courage"]
  },

  // 64. Rabindranath Tagore
  {
    name: "Rabindranath Tagore",
    category: "Literature",
    special: "personality",
    year: "1913",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1913" },
      { class: "nobel-double-badge", text: "★ 1st Non-European" }
    ],
    meta: "Bengali Polymath, Poet & Philosopher • 'Gitanjali' • Composer of Two National Anthems",
    initials: "RT",
    personaLink: { href: "/gallery/personalities/rabindranath-tagore/", text: "Talk to Tagore &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>Because of his profoundly sensitive, fresh and beautiful verse:</strong> Celebrated for his song-offerings in <em>Gitanjali</em>, translating Eastern devotional spirituality into universal lyrical modern literature, and composing the national anthems of both India and Bangladesh.",
    triviaLabel: "First Non-European Laureate in History",
    triviaText: "Tagore was the first non-European person ever to win a Nobel Prize in any category. In 1919, after British colonial troops massacred hundreds of unarmed Indian civilians in the Jallianwala Bagh (Amritsar) massacre, Tagore indignantly returned his British knighthood to the Viceroy in protest.",
    tags: ["Gitanjali", "Bengali Literature", "First Asian Laureate", "Philosophy"]
  },

  // 65. Thomas Mann
  {
    name: "Thomas Mann",
    category: "Literature",
    special: "personality",
    year: "1929",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1929" }
    ],
    meta: "German Novelist, Essayist & Social Critic • 'Buddenbrooks' & 'The Magic Mountain'",
    initials: "TM",
    personaLink: { href: "/gallery/personalities/thomas-mann/", text: "Talk to Mann &rarr;" },
    breakthroughLabel: "The Award Citation",
    breakthroughText: "<strong>Principally for his great novel Buddenbrooks, which has won steadily increased recognition as one of the classic works of contemporary literature:</strong> Portrayed the decline of a bourgeois merchant family while examining the tension between artistic sensitivity and bourgeois duty.",
    triviaLabel: "Voice of the German Emigration",
    triviaText: "When Adolf Hitler came to power in 1933, Mann was stripped of his German citizenship and his books were burned. Exiled to Switzerland and the United States, Mann recorded regular German-language radio addresses broadcast by the BBC into Nazi Germany, pleading with German citizens to resist totalitarian madness.",
    tags: ["Buddenbrooks", "Magic Mountain", "Anti-Fascism", "German Literature"]
  },

  // 66. Ronald Coase
  {
    name: "Ronald Coase",
    category: "Economics",
    special: "personality",
    year: "1991",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "1991" }
    ],
    meta: "British-American Economist • University of Chicago • 'The Nature of the Firm' & Coase Theorem",
    initials: "RC",
    personaLink: { href: "/gallery/personalities/ronald-coase/", text: "Talk to Coase &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Transaction Costs and Property Rights in Economic Organization:</strong> Explained why companies exist in the first place (because searching, contracting, and coordinating on open markets involves 'transaction costs'), and formulated the Coase Theorem: clear property rights allow private parties to negotiate efficient solutions to externalities.",
    triviaLabel: "Two Papers, One Nobel",
    triviaText: "Coase won the Nobel Prize based primarily on just two landmark papers written 23 years apart: *The Nature of the Firm* (1937, conceived when he was just 21) and *The Problem of Social Cost* (1960). Coase lived to the age of 102, publishing active research on China's economic reforms past his 100th birthday!",
    tags: ["Transaction Costs", "Coase Theorem", "Law and Economics", "Theory of the Firm"]
  },

  // 67. Kenneth Arrow
  {
    name: "Kenneth Arrow",
    category: "Economics",
    special: "personality",
    year: "1972",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "1972" },
      { class: "nobel-double-badge", text: "★ Youngest at 51" }
    ],
    meta: "American Mathematical Economist • Stanford & Harvard • Youngest Economics Laureate",
    initials: "KA",
    personaLink: { href: "/gallery/personalities/kenneth-arrow/", text: "Talk to Arrow &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>General Economic Equilibrium & Arrow's Impossibility Theorem:</strong> Mathematically proved with Gérard Debreu that competitive market prices clear all simultaneous markets, and demonstrated that no democratic voting system can perfectly convert individual ranked preferences into a rational collective choice without dictatorship.",
    triviaLabel: "Youngest Economics Winner",
    triviaText: "Arrow was awarded the Economics prize at age 51, remaining the youngest recipient in the discipline's history for nearly half a century. Five of his doctoral students (including John Harsanyi, Michael Spence, Eric Maskin, and Roger Myerson) went on to become Nobel laureates themselves!",
    tags: ["Arrow's Theorem", "General Equilibrium", "Social Choice", "Microeconomics"]
  },

  // 68. Willard Libby
  {
    name: "Willard Libby",
    category: "Chemistry",
    special: "personality",
    year: "1960",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-year-badge", text: "1960" }
    ],
    meta: "American Physical Chemist • University of Chicago & UCLA • Inventor of Radiocarbon Dating",
    initials: "WL",
    personaLink: { href: "/gallery/personalities/willard-libby/", text: "Talk to Libby &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Invention of Radiocarbon Dating (Carbon-14):</strong> Discovered that cosmic rays create radioactive carbon-14 in the upper atmosphere, which living organisms absorb until death; by measuring the remaining C-14 decay (half-life 5,730 years), scientists can calculate the precise age of organic archaeological artifacts up to 50,000 years old.",
    triviaLabel: "The Atomic Clock for Archaeology",
    triviaText: "Libby verified his radiocarbon clock by testing tree rings from giant sequoias and ancient Egyptian pharaoh burial wood of known historical dates. His invention demolished speculative archaeological timelines and revolutionized anthropology, paleontology, and Earth sciences overnight.",
    tags: ["Radiocarbon Dating", "Carbon-14", "Nuclear Chemistry", "Archaeology"]
  },

  // 69. Gertrude B. Elion
  {
    name: "Gertrude B. Elion",
    category: "Medicine",
    special: "personality",
    year: "1988",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1988" }
    ],
    meta: "American Pharmacologist & Biochemist • Burroughs Wellcome • Rational Drug Design",
    initials: "GE",
    personaLink: { href: "/gallery/personalities/gertrude-elion/", text: "Talk to Elion &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Rational Drug Design & Purine Antimetabolites:</strong> Rejected trial-and-error medicine screening, instead studying cellular metabolism differences between normal human cells and cancer cells/viruses to synthesize purine analogues (6-mercaptopurine, azathioprine, acyclovir) that block diseased DNA replication.",
    triviaLabel: "Revolutionized Leukemia, Transplants & Antivirals",
    triviaText: "Elion never completed a formal PhD because she had to work full-time to support herself during the Great Depression. Yet her synthetic compounds cured childhood leukemia (6-MP), enabled the first successful human kidney transplants by suppressing organ rejection (azathioprine), and created the first safe antiviral medication in history (acyclovir).",
    tags: ["Drug Discovery", "Acyclovir", "Leukemia Cure", "Women in STEM"]
  },

  // 70. Werner Forssmann
  {
    name: "Werner Forssmann",
    category: "Medicine",
    special: "personality",
    year: "1956",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1956" }
    ],
    meta: "German Surgical Resident • Eberswalde • Pioneer of Human Cardiac Catheterization",
    initials: "WF",
    personaLink: { href: "/gallery/personalities/werner-forssmann/", text: "Talk to Forssmann &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Invention of Cardiac Catheterization:</strong> Pioneered the technique of inserting a flexible tube through an antecubital vein directly into the right atrium of the human heart, founding modern invasive cardiology, angioplasty, and cardiac stenting.",
    triviaLabel: "Tested It on Himself in Secret!",
    triviaText: "In 1929, when his department chief forbade him from testing cardiac catheterization on patients, 25-year-old surgical resident Forssmann tied down a nurse who had the key to the sterile room, anesthetized his own arm with novocaine, pushed a 65-centimeter ureteral catheter into his elbow vein up into his heart, and walked down two flights of stairs to the X-ray department to take the historic confirming radiograph!",
    tags: ["Cardiac Catheterization", "Cardiology", "Self-Experimentation", "Courage"]
  },
  // 71. Ernest Rutherford
  {
    name: "Ernest Rutherford",
    category: "Chemistry",
    special: "personality",
    year: "1908",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-year-badge", text: "1908" }
    ],
    meta: "New Zealand-born British Nuclear Physicist • Father of Nuclear Physics",
    initials: "ER",
    personaLink: { href: "/gallery/personalities/ernest-rutherford/", text: "Talk to Rutherford &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Radioactive Decay & Transmutation of Elements:</strong> Proved that radioactivity is not a chemical reaction but the spontaneous disintegration and transmutation of heavy atomic elements into lighter ones, emitting alpha and beta radiation. He calculated the half-life of elements, establishing radioactive dating.",
    triviaLabel: "Gold Foil Discovery of the Nucleus!",
    triviaText: "In 1911, Rutherford famously directed alpha particles at gold foil. When a tiny fraction bounced backwards, he exclaimed: 'It was quite the most incredible event that has ever happened to me in my life. It was almost as incredible as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you!' This proved atoms are mostly empty space with a dense positive nucleus.",
    tags: ["Nuclear Physics", "Radioactivity", "Atomic Nucleus", "Alpha Particles"]
  },

  // 72. James D. Watson
  {
    name: "James D. Watson",
    category: "Medicine",
    special: "personality",
    year: "1962",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1962" }
    ],
    meta: "American Molecular Biologist • Cavendish Laboratory • Co-discoverer of DNA Double Helix",
    initials: "JW",
    personaLink: { href: "/gallery/personalities/james-d-watson/", text: "Talk to Watson &rarr;" },
    versusLink: { href: "/gallery/versus/crick-watson-x-pauling/", text: "Watson & Crick vs Pauling" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Double Helix Model of DNA:</strong> In 1953, working with Francis Crick and analyzing Rosalind Franklin's Photo 51 X-ray diffraction pattern, Watson solved the puzzle of genetic replication by discovering the complementary base pairing: Adenine binds with Thymine, and Guanine binds with Cytosine.",
    triviaLabel: "Young Prodigy!",
    triviaText: "Watson entered the University of Chicago at age 15 on an experimental gifted-student scholarship, and was only 24 years old when he and Crick cracked the structure of DNA!",
    tags: ["DNA Double Helix", "Genetics", "Molecular Biology", "Base Pairing"]
  },

  // 73. William Faulkner
  {
    name: "William Faulkner",
    category: "Literature",
    special: "personality",
    year: "1949",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1949" }
    ],
    meta: "American Novelist • Mississippi • Master of the Modern Stream-of-Consciousness",
    initials: "WF",
    personaLink: { href: "/gallery/personalities/william-faulkner/", text: "Talk to Faulkner &rarr;" },
    versusLink: { href: "/gallery/versus/hemingway-x-faulkner/", text: "Hemingway vs Faulkner" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Pioneering the Modern Polyphonic Novel:</strong> Created the mythical Yoknapatawpha County, exploring the tragedy, guilt, and resilience of the American South through fractured timelines, interior monologues, and complex psychological stream-of-consciousness in masterpieces like *The Sound and the Fury* and *As I Lay Dying*.",
    triviaLabel: "Historic Nobel Address!",
    triviaText: "His 1950 acceptance speech in Stockholm contains one of the most quoted lines in American literature: 'I decline to accept the end of man... I believe that man will not merely endure: he will prevail.'",
    tags: ["Modernism", "American South", "Stream of Consciousness", "The Sound and the Fury"]
  },

  // 74. John Steinbeck
  {
    name: "John Steinbeck",
    category: "Literature",
    special: "personality",
    year: "1962",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1962" }
    ],
    meta: "American Author • Salinas, California • Voice of the Working Class and Great Depression",
    initials: "JS",
    personaLink: { href: "/gallery/personalities/john-steinbeck/", text: "Talk to Steinbeck &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Realistic & Imaginative Epics of Human Dignity:</strong> Combined keen social realism with deep compassion in *The Grapes of Wrath* (chronicling the Dust Bowl migration of the Joad family) and *East of Eden*, giving voice to disenfranchised migrant laborers and confronting the moral struggles of ordinary people.",
    triviaLabel: "Undercover Laborer!",
    triviaText: "Steinbeck lived and traveled alongside destitute migrant workers in California labor camps in 1936 to write *The Harvest Gypsies*, gathering the firsthand suffering that forged *The Grapes of Wrath*.",
    tags: ["Social Realism", "The Grapes of Wrath", "East of Eden", "Working Class"]
  },

  // 75. Mother Teresa
  {
    name: "Mother Teresa",
    category: "Peace",
    special: "personality",
    year: "1979",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "1979" }
    ],
    meta: "Albanian-Indian Catholic Nun • Calcutta • Founder of the Missionaries of Charity",
    initials: "MT",
    personaLink: { href: "/gallery/personalities/mother-teresa/", text: "Talk to Mother Teresa &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Humanitarian Ministry to the Poorest of the Poor:</strong> Dedicated over four decades to serving the destitute, dying, orphaned, and leprosy sufferers in the slums of Calcutta, creating hospices, soup kitchens, and orphanages worldwide.",
    triviaLabel: "Refused the Royal Banquet!",
    triviaText: "When awarded the Nobel Peace Prize, Mother Teresa asked the Nobel Committee to cancel the traditional lavish banquet costing 92,000 and donate the entire sum to feed thousands of starving people in India.",
    tags: ["Peace", "Humanitarianism", "Calcutta", "Missionaries of Charity"]
  },

  // 76. Albert Schweitzer
  {
    name: "Albert Schweitzer",
    category: "Peace",
    special: "personality",
    year: "1952",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "1952" }
    ],
    meta: "Alsatian Theologian, Organist, Philosopher & Physician • Lambaréné, Gabon",
    initials: "AS",
    personaLink: { href: "/gallery/personalities/albert-schweitzer/", text: "Talk to Schweitzer &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Ethic of 'Reverence for Life' & Medical Mission:</strong> Formulated the universal ethical principle that good consists in maintaining and enhancing life, giving up a comfortable academic career in Europe to build and run a jungle hospital in Lambaréné, treating thousands of leprosy and sleeping sickness patients.",
    triviaLabel: "Bach Organ Virtuoso!",
    triviaText: "Schweitzer was considered one of the foremost Bach organ performers in the world and funded his medical school tuition and jungle clinic supplies through European pipe organ concerts!",
    tags: ["Reverence for Life", "Medical Ethics", "Lambaréné", "Humanitarianism"]
  },

  // 77. Jane Addams
  {
    name: "Jane Addams",
    category: "Peace",
    special: "personality",
    year: "1931",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "1931" }
    ],
    meta: "American Social Worker, Reformer & Activist • Chicago • Co-founder of Hull House",
    initials: "JA",
    personaLink: { href: "/gallery/personalities/jane-addams/", text: "Talk to Addams &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Pioneering Social Settlement & International Pacifism:</strong> Founded Hull House in Chicago in 1889 to provide education, daycare, and social services for impoverished immigrants, and led the Women's International League for Peace and Freedom against World War I militarism.",
    triviaLabel: "First American Woman Laureate!",
    triviaText: "Jane Addams was the very first American woman to be awarded the Nobel Peace Prize!",
    tags: ["Social Work", "Hull House", "Pacifism", "Women's Rights"]
  },

  // 78. Theodore Roosevelt
  {
    name: "Theodore Roosevelt",
    category: "Peace",
    special: "personality",
    year: "1906",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "1906" }
    ],
    meta: "26th President of the United States • Statesman, Conservationist & Diplomat",
    initials: "TR",
    personaLink: { href: "/gallery/personalities/theodore-roosevelt/", text: "Talk to Roosevelt &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Mediation of the Russo-Japanese War:</strong> Negotiated the 1905 Treaty of Portsmouth, successfully bringing an end to the bloody war between the Russian and Japanese Empires, and arbitrated the 1906 First Moroccan Crisis.",
    triviaLabel: "First US President to Win!",
    triviaText: "Roosevelt was the first American and first sitting head of state to win a Nobel Prize. He donated his entire prize money (0,000) to Congress to create an industrial peace fund.",
    tags: ["Treaty of Portsmouth", "Diplomacy", "Arbitration", "Statesmanship"]
  },

  // 79. Woodrow Wilson
  {
    name: "Woodrow Wilson",
    category: "Peace",
    special: "personality",
    year: "1919",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "1919" }
    ],
    meta: "28th President of the United States • Architect of the League of Nations & Fourteen Points",
    initials: "WW",
    personaLink: { href: "/gallery/personalities/woodrow-wilson/", text: "Talk to Wilson &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Founding the League of Nations:</strong> Championed collective security, self-determination of peoples, and international arbitration in his Fourteen Points at the 1919 Paris Peace Conference, creating the precursor to the United Nations.",
    triviaLabel: "Only PhD President!",
    triviaText: "Wilson remains the only United States president to hold a research doctorate (PhD in political science and history from Johns Hopkins University).",
    tags: ["League of Nations", "Fourteen Points", "Self-Determination", "International Law"]
  },

  // 80. Amartya Sen
  {
    name: "Amartya Sen",
    category: "Economics",
    special: "personality",
    year: "1998",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "1998" }
    ],
    meta: "Indian Economist & Philosopher • Harvard & Cambridge • Master of Welfare Economics",
    img: "/images/personalities_thumbs/amartya_sen_portrait_1769475996782.webp",
    initials: "AS",
        img: '/images/personalities_thumbs/amartya_sen_portrait_1769475996782.webp',
    personaLink: { href: "/gallery/personalities/amartya-sen/", text: "Talk to Sen &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Welfare Economics, Poverty Measurement & Capability Approach:</strong> Demonstrated that famines are caused not by lack of food, but by failure of distribution, entitlements, and democratic accountability. Created the Sen Poverty Index and pioneered the human capabilities approach.",
    triviaLabel: "Survived the 1943 Bengal Famine!",
    triviaText: "At age nine, Sen witnessed the devastating Bengal famine of 1943 that killed 3 million people, an indelible childhood experience that inspired his lifelong economic quest into famine mechanics.",
    tags: ["Welfare Economics", "Famine Mechanics", "Capability Approach", "Social Choice"]
  },

  // 81. Emil von Behring
  {
    name: "Emil von Behring",
    category: "Medicine",
    special: "personality",
    year: "1901",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1901" }
    ],
    meta: "German Physiologist • First Winner of the Nobel Prize in Physiology or Medicine",
    initials: "EB",
    personaLink: { href: "/gallery/personalities/emil-von-behring/", text: "Talk to Behring &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery of Diphtheria Antitoxin & Serum Therapy:</strong> Discovered that injecting animals with weakened diphtheria toxin created antitoxins in their blood serum. Transferring this blood serum to infected children cured diphtheria, saving hundreds of thousands of lives.",
    triviaLabel: "The 'Savior of Children'!",
    triviaText: "Before Behring's antitoxin, diphtheria was a terrifying killer of infants with a mortality rate exceeding 50%. In hospital wards where children choked to death, his serum reduced deaths by over 80%.",
    tags: ["First Medicine Nobel", "Serum Therapy", "Diphtheria Antitoxin", "Immunology"]
  },

  // 82. Paul Ehrlich
  {
    name: "Paul Ehrlich",
    category: "Medicine",
    special: "personality",
    year: "1908",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1908" }
    ],
    meta: "German Physician & Immunologist • Father of Chemotherapy & 'Magic Bullet' Concept",
    initials: "PE",
    personaLink: { href: "/gallery/personalities/paul-ehrlich/", text: "Talk to Ehrlich &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Side-Chain Receptor Theory & Salvarsan:</strong> Developed the side-chain theory of antibody-antigen interaction and synthesized Salvarsan (Compound 606), the first targeted chemical antibacterial drug that cured syphilis, founding modern pharmaceutical chemotherapy.",
    triviaLabel: "The 'Magic Bullet'!",
    triviaText: "Ehrlich coined the term *Magische Kugel* ('magic bullet')—the idea that a synthetic compound could be engineered to hunt down and kill specific microbial invaders without harming healthy human cells.",
    tags: ["Chemotherapy", "Magic Bullet", "Salvarsan", "Antibody Receptors"]
  },

  // 83. Thomas Hunt Morgan
  {
    name: "Thomas Hunt Morgan",
    category: "Medicine",
    special: "personality",
    year: "1933",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1933" }
    ],
    meta: "American Evolutionary Biologist & Geneticist • Columbia 'Fly Room' • Chromosome Theory",
    initials: "TM",
    personaLink: { href: "/gallery/personalities/thomas-hunt-morgan/", text: "Talk to Morgan &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Chromosome Theory of Heredity:</strong> Using millions of common fruit flies (*Drosophila melanogaster*) in his cramped Columbia University laboratory, Morgan proved that genes are physical entities located in linear sequences on specific chromosomes, discovering sex-linked inheritance and crossing-over.",
    triviaLabel: "The Famous 'Fly Room'!",
    triviaText: "Morgan's laboratory, Room 613 at Schermerhorn Hall, was a 16-by-23-foot room stuffed with thousands of milk bottles buzzing with fruit flies and smelling of fermenting bananas, where the modern science of genetics was born!",
    tags: ["Genetics", "Chromosomes", "Drosophila", "Gene Mapping"]
  },

  // 84. Godfrey Newbold Hounsfield
  {
    name: "Godfrey Newbold Hounsfield",
    category: "Medicine",
    special: "personality",
    year: "1979",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1979" }
    ],
    meta: "British Electrical Engineer • EMI Laboratories • Inventor of the CT Scanner",
    initials: "GH",
    personaLink: { href: "/gallery/personalities/godfrey-newbold-hounsfield/", text: "Talk to Hounsfield &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Invention of Computerized Axial Tomography (CAT/CT Scan):</strong> Conceived the idea of taking X-ray slices around the human head from multiple angles and using a computer algorithm to reconstruct cross-sectional 3D images of soft internal organs, revolutionizing medical diagnosis.",
    triviaLabel: "Funded by The Beatles!",
    triviaText: "Hounsfield worked as a research engineer at EMI (Electric and Musical Industries). The colossal worldwide royalties from the Beatles' music records in the 1960s provided EMI the windfall capital to fund Hounsfield's high-risk CT scanner research!",
    tags: ["CT Scanner", "Computed Tomography", "Medical Imaging", "Biomedical Engineering"]
  },

  // 85. Luigi Pirandello
  {
    name: "Luigi Pirandello",
    category: "Literature",
    special: "personality",
    year: "1934",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1934" }
    ],
    meta: "Italian Dramatist, Novelist & Poet • Agrigento, Sicily • Innovator of Modern Meta-Theatre",
    initials: "LP",
    personaLink: { href: "/gallery/personalities/luigi-pirandello/", text: "Talk to Pirandello &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Meta-Theatrical Revolution & Fractured Identity:</strong> Dismantled the theatrical fourth wall and explored the instability of human personality, mask versus reality, and the relativity of truth in groundbreaking plays like *Six Characters in Search of an Author*.",
    triviaLabel: "Audience Riot at the Premiere!",
    triviaText: "At the 1921 Rome premiere of *Six Characters*, audience members were so shocked by actors wandering into the auditorium and arguing with the director that they threw coins and shouted 'Manicomio!' ('Madhouse!'), forcing Pirandello to flee through a side exit!",
    tags: ["Meta-Theatre", "Absurdism", "Existentialism", "Six Characters in Search of an Author"]
  },

  // 86. J. Robert Oppenheimer
  {
    name: "J. Robert Oppenheimer",
    category: "Physics",
    special: "snub",
    year: "1946–1967",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-cat-snub", text: "Nobel Snub" },
      { class: "nobel-year-badge", text: "1946–1967" }
    ],
    meta: "American Theoretical Physicist • Director of Los Alamos • Father of the Atomic Bomb",
    img: "/images/personalities_thumbs/j_robert_oppenheimer_portrait_1769882746617.webp",
    initials: "RO",
        img: '/images/personalities_thumbs/j_robert_oppenheimer_portrait_1769882746617.webp',
    personaLink: { href: "/gallery/personalities/j-robert-oppenheimer/", text: "Talk to Oppenheimer &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Born-Oppenheimer Approximation & Neutron Star Collapse:</strong> Formulated the fundamental quantum approximation separating nuclear from electronic motion in molecules, and in 1939 with Hartland Snyder calculated the first relativistic gravitational collapse of a star into what we now call a black hole.",
    triviaLabel: "Nominated 3 Times, Blocked by Politics!",
    triviaText: "Oppenheimer was nominated for the Nobel Prize in Physics in 1946, 1951, and 1967. Historians agree that political controversy over the atomic bomb, his left-wing associations, and his 1954 security clearance revocation blocked the Swedish Academy from awarding him.",
    tags: ["Nobel Snub", "Quantum Mechanics", "Manhattan Project", "Black Hole Collapse"]
  },

  // 87. Jorge Luis Borges
  {
    name: "Jorge Luis Borges",
    category: "Literature",
    special: "snub",
    year: "1967",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-cat-snub", text: "Nobel Snub" },
      { class: "nobel-year-badge", text: "1967" }
    ],
    meta: "Argentine Writer, Essayist & Poet • Buenos Aires • Master of Labyrinths and Infinity",
    img: "/images/personalities_thumbs/jorge_luis_borges_portrait_1769807165998.webp",
    initials: "JB",
        img: '/images/personalities_thumbs/jorge_luis_borges_portrait_1769807165998.webp',
    personaLink: { href: "/gallery/personalities/jorge-luis-borges/", text: "Talk to Borges &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Philosophical Fiction & Infinite Labyrinths:</strong> Transformed 20th-century literature with philosophical mini-fictions like *Ficciones* and *The Aleph*, exploring paradoxes of time, recursive libraries, infinite books, and mirrors.",
    triviaLabel: "The Infamous Political Veto!",
    triviaText: "Borges was shortlisted for the Nobel Prize repeatedly in the 1960s and 1970s. When declassified Nobel archives opened, it was confirmed that his 1976 handshake and acceptance of a medal from Chilean dictator Augusto Pinochet permanently disqualified him in the eyes of the Academy.",
    tags: ["Nobel Snub", "Magical Realism", "Labyrinths", "Ficciones"]
  },

  // 88. Franz Kafka
  {
    name: "Franz Kafka",
    category: "Literature",
    special: "snub",
    year: "1883–1924",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-cat-snub", text: "Nobel Snub" },
      { class: "nobel-year-badge", text: "Snubbed" }
    ],
    meta: "Prague-born German-language Writer • Prophet of Modern Bureaucratic Alienation",
    img: "/images/personalities_thumbs/franz_kafka_portrait_1769618733170.webp",
    initials: "FK",
        img: '/images/personalities_thumbs/franz_kafka_portrait_1769618733170.webp',
    personaLink: { href: "/gallery/personalities/franz-kafka/", text: "Talk to Kafka &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Kafkaesque Parable:</strong> Created surreal, haunting visions of solitary individuals ensnared in inexplicable, nightmarish bureaucratic and judicial systems in *The Trial*, *The Castle*, and *The Metamorphosis*.",
    triviaLabel: "Ordered All Manuscripts Burned!",
    triviaText: "Kafka died in obscurity from tuberculosis at age 40 in 1924, leaving explicit instructions to his executor Max Brod to burn all his unpublished manuscripts. Brod defied him, publishing *The Trial* and *The Castle* to global acclaim.",
    tags: ["Nobel Snub", "Existentialism", "Kafkaesque", "The Trial"]
  },

  // 89. Virginia Woolf
  {
    name: "Virginia Woolf",
    category: "Literature",
    special: "snub",
    year: "1882–1941",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-cat-snub", text: "Nobel Snub" },
      { class: "nobel-year-badge", text: "Snubbed" }
    ],
    meta: "English Novelist & Essayist • Bloomsbury Group • Pioneer of Modernist Consciousness",
    img: "/images/personalities_thumbs/virginia_woolf_portrait_1769882649613.webp",
    initials: "VW",
        img: '/images/personalities_thumbs/virginia_woolf_portrait_1769882649613.webp',
    personaLink: { href: "/gallery/personalities/virginia-woolf/", text: "Talk to Woolf &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Stream of Consciousness & Feminist Poetics:</strong> Revolutionized the novel form by capturing the fluid, shimmering impressions of human thought in *Mrs. Dalloway* and *To the Lighthouse*, and laid the foundation for feminist literary criticism in *A Room of One's Own*.",
    triviaLabel: "Overlooked in Stockholm!",
    triviaText: "Despite being one of the central figures of European modernism alongside Joyce and Proust, Woolf was never even officially shortlisted by the Nobel Committee during her lifetime.",
    tags: ["Nobel Snub", "Modernism", "Stream of Consciousness", "A Room of One's Own"]
  },

  // 90. James Joyce
  {
    name: "James Joyce",
    category: "Literature",
    special: "snub",
    year: "1882–1941",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-cat-snub", text: "Nobel Snub" },
      { class: "nobel-year-badge", text: "Snubbed" }
    ],
    meta: "Irish Novelist & Poet • Dublin • Author of *Ulysses* and *Finnegans Wake*",
    img: "/images/personalities_thumbs/james_joyce_portrait_1770001471479.webp",
    initials: "JJ",
        img: '/images/personalities_thumbs/james_joyce_portrait_1770001471479.webp',
    personaLink: { href: "/gallery/personalities/james-joyce/", text: "Talk to Joyce &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Modernist Masterpiece *Ulysses*:</strong> Reimagined Homer's Odyssey in a single day (June 16, 1904) in Dublin through Leopold Bloom, pushing the English language, interior monologue, and linguistic experimentation to unprecedented peaks.",
    triviaLabel: "Deemed 'Too Vulgar' by the Committee!",
    triviaText: "The Nobel Committee rejected Joyce because conservative members of the Swedish Academy found *Ulysses* obscene, unreadable, and lacking in 'idealism'—echoing the same conservatism that denied Tolstoy and Chekhov.",
    tags: ["Nobel Snub", "Modernism", "Ulysses", "Stream of Consciousness"]
  },

  // 91. Frederick Sanger
  {
    name: "Frederick Sanger",
    category: "Chemistry",
    special: "double",
    year: "1958 1980",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-cat-double", text: "Double Laureate" },
      { class: "nobel-year-badge", text: "1958 & 1980" }
    ],
    meta: "British Biochemist • Cambridge • One of Only Five Double Nobel Laureates in History",
    initials: "FS",
    img: "/images/personalities_thumbs/frederick_sanger_portrait.webp",
    personaLink: { href: "/gallery/personalities/frederick-sanger/", text: "Talk to Sanger &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Sequencing Insulin (1958) & Dideoxy DNA Sequencing (1980):</strong> In 1958, proved for the first time that proteins have precise, defined chemical structures by mapping all 51 amino acids of insulin. In 1980, invented 'Sanger sequencing', the chain-termination method that unlocked the genetic code and read the human genome.",
    triviaLabel: "The Only Double Chemistry Laureate!",
    triviaText: "Sanger is the only scientist in history to win two Nobel Prizes in Chemistry, both unshared with any other field! Yet he described himself simply as 'just a chap who messed about in a lab'.",
    tags: ["Double Laureate", "Chemistry", "DNA Sequencing", "Insulin Sequence"]
  },

  // 92. Francis Crick
  {
    name: "Francis Crick",
    category: "Medicine",
    special: "personality",
    year: "1962",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1962" }
    ],
    meta: "British Molecular Biologist & Neuroscientist • Co-discoverer of the DNA Double Helix",
    initials: "FC",
    img: "/images/personalities_thumbs/francis_crick_portrait.webp",
    personaLink: { href: "/gallery/personalities/francis-crick/", text: "Talk to Crick &rarr;" },
    versusLink: { href: "/gallery/versus/crick-watson-x-pauling/", text: "Watson & Crick vs Pauling" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Architecture of DNA & The Central Dogma:</strong> Deciphered the antiparallel helical geometry of DNA in 1953 with Watson, and later formulated the Central Dogma of molecular biology: genetic information flows irreversibly from DNA to RNA to protein.",
    triviaLabel: "Loudest Laugh in Cambridge!",
    triviaText: "Crick was famous for his booming voice and infectious laugh that echoed throughout Cambridge's Cavendish Laboratory. Colleagues said you could track his progress through the building by his laughter alone!",
    tags: ["DNA Double Helix", "Central Dogma", "Molecular Biology", "Consciousness"]
  },

  // 93. Daniel Kahneman
  {
    name: "Daniel Kahneman",
    category: "Economics",
    special: "personality",
    year: "2002",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "2002" }
    ],
    meta: "Israeli-American Psychologist • Princeton University • Father of Behavioral Economics",
    initials: "DK",
    img: "/images/personalities_thumbs/daniel_kahneman_portrait.webp",
    personaLink: { href: "/gallery/personalities/daniel-kahneman/", text: "Talk to Kahneman &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Prospect Theory & Cognitive Heuristics:</strong> Disproved the classical assumption that humans are rational economic calculators (*homo economicus*). Demonstrated that people suffer from loss aversion (losses hurt twice as much as gains please) and rely on System 1 mental shortcuts that lead to predictable biases.",
    triviaLabel: "Won Economics Prize Without Ever Taking an Economics Class!",
    triviaText: "Kahneman was a psychologist by training who famously stated: 'The only economics I ever learned was from reading articles with Amos Tversky.' He shared the award posthumously in spirit with Tversky, who died in 1996.",
    tags: ["Behavioral Economics", "Prospect Theory", "Loss Aversion", "Thinking Fast & Slow"]
  },

  // 94. Roger Penrose
  {
    name: "Roger Penrose",
    category: "Physics",
    special: "personality",
    year: "2020",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "2020" }
    ],
    meta: "British Mathematical Physicist • Oxford • Proof of Black Hole Singularities",
    initials: "RP",
    img: "/images/personalities_thumbs/roger_penrose_portrait.webp",
    personaLink: { href: "/gallery/personalities/roger-penrose/", text: "Talk to Penrose &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Topological Proof of Black Hole Singularities:</strong> In 1965, invented the mathematical tool of 'trapped surfaces' to prove that gravitational collapse to an infinite density singularity is an inevitable consequence of Einstein's General Relativity, without requiring artificial spherical symmetry.",
    triviaLabel: "Father-Son Impossible Triangle!",
    triviaText: "Roger Penrose and his psychiatrist father Lionel Penrose invented the impossible 'Penrose triangle' and 'Penrose staircase', which directly inspired Dutch artist M.C. Escher's famous lithographs *Ascending and Descending* and *Waterfall*!",
    tags: ["General Relativity", "Black Holes", "Singularities", "Penrose Tiling"]
  },

  // 95. Peter Higgs
  {
    name: "Peter Higgs",
    category: "Physics",
    special: "personality",
    year: "2013",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "2013" }
    ],
    meta: "British Theoretical Physicist • Edinburgh • Prediction of the Higgs Boson",
    initials: "PH",
    img: "/images/personalities_thumbs/peter_higgs_portrait.webp",
    personaLink: { href: "/gallery/personalities/peter-higgs/", text: "Talk to Higgs &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Spontaneous Electroweak Symmetry Breaking & The Higgs Field:</strong> In 1964, proposed that the entire universe is permeated by a scalar field. Fundamental particles (electrons, quarks, W/Z bosons) acquire inertial mass through their friction-like drag with this field, accompanied by the signature Higgs boson.",
    triviaLabel: "Hid in a Seafood Bar to Avoid the Press!",
    triviaText: "On the morning the Nobel Prize was announced in October 2013, the 84-year-old Higgs left his home without a cell phone, walked around Edinburgh, and ate soup in a seafood bar. He only learned he had won when a former neighbor leaned out of a car window and congratulated him!",
    tags: ["Higgs Boson", "Standard Model", "Electroweak Symmetry", "CERN LHC"]
  },

  // 96. Santiago Ramón y Cajal
  {
    name: "Santiago Ramón y Cajal",
    category: "Medicine",
    special: "personality",
    year: "1906",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1906" }
    ],
    meta: "Spanish Histologist & Pathologist • Madrid • Father of Modern Neuroscience",
    initials: "SC",
    img: "/images/personalities_thumbs/santiago_ramon_y_cajal_portrait.webp",
    personaLink: { href: "/gallery/personalities/santiago-ramon-y-cajal/", text: "Talk to Cajal &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Neuron Doctrine & Synaptic Communication:</strong> Disproved the dominant theory that the brain is a continuous diffuse web (*reticulum*). By mastering silver staining, proved that brain tissue is made up of billions of discrete individual cells (neurons) that transmit electrical nerve impulses across tiny gaps.",
    triviaLabel: "The Nobel Banquet Duel!",
    triviaText: "At the 1906 Stockholm banquet, co-winner Camillo Golgi gave a speech stubbornly defending his outdated continuous-net theory. Cajal followed him to the podium and systematically tore Golgi's claims to shreds using overwhelming histological evidence!",
    tags: ["Neuron Doctrine", "Neuroscience", "Histology", "Brain Anatomy"]
  },
  // 97. Alfred Nobel
  {
    name: "Alfred Nobel",
    category: "Chemistry",
    special: "personality",
    year: "1895",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "Founder (1895)" }
    ],
    meta: "Swedish Chemist, Engineer & Industrialist • Inventor of Dynamite • Prize Founder",
    initials: "AN",
    personaLink: { href: "/gallery/personalities/alfred-nobel/", text: "Talk to Nobel &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Invention of Dynamite & Creation of the Nobel Prizes:</strong> Tamed volatile nitroglycerin by mixing it with porous kieselguhr diatomaceous earth to create safe, solid dynamite sticks. In his 1895 will, he bequeathed 94% of his immense wealth (31 million Swedish kronor) to establish annual prizes rewarding those who confer the greatest benefit to humankind.",
    triviaLabel: "The 'Merchant of Death' Obituary!",
    triviaText: "In 1888, when his brother Ludvig died in Cannes, a French newspaper erroneously published Alfred's obituary with the headline: 'The merchant of death is dead—Dr. Alfred Nobel, who became rich by finding ways to kill more people faster than ever before.' Horrified by this preview of his legacy, Nobel rewrote his will to establish the Nobel Prizes!",
    tags: ["Prize Founder", "Dynamite", "Nitroglycerin", "Will of 1895"]
  },

  // 98. Chien-Shiung Wu
  {
    name: "Chien-Shiung Wu",
    category: "Physics",
    special: "snub",
    year: "1957",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-cat-snub", text: "Nobel Snub" },
      { class: "nobel-year-badge", text: "1957 Snub" }
    ],
    meta: "Chinese-American Experimental Physicist • Columbia University • 'First Lady of Physics'",
    initials: "CW",
    personaLink: { href: "/gallery/personalities/chien-shiung-wu/", text: "Talk to Wu &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Wu Experiment & Parity Violation:</strong> Cooled radioactive cobalt-60 nuclei to near absolute zero in a magnetic field and proved that beta decay electrons preferentially shoot in one direction—definitively disproving the fundamental physics law of conservation of parity (mirror symmetry).",
    triviaLabel: "The Legendary Parity Snub!",
    triviaText: "While theorists Tsung-Dao Lee and Chen-Ning Yang received the 1957 Nobel Prize in Physics for proposing parity might be violated, Wu—who devised and executed the heroic, technically demanding experiment that proved it—was entirely excluded by the Nobel Committee!",
    tags: ["Nobel Snub", "Wu Experiment", "Parity Violation", "Cobalt-60", "Weak Nuclear Force"]
  },

  // 99. Jonas Salk
  {
    name: "Jonas Salk",
    category: "Medicine",
    special: "snub",
    year: "1955",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-cat-snub", text: "Nobel Snub" },
      { class: "nobel-year-badge", text: "1955 Snub" }
    ],
    meta: "American Virologist • University of Pittsburgh • Developer of the Inactivated Polio Vaccine",
    versusLink: { href: "/gallery/versus/salk-x-sabin/", text: "Salk vs Sabin" },
    initials: "JS",
    personaLink: { href: "/gallery/personalities/jonas-salk/", text: "Talk to Salk &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Development of the Inactivated Polio Vaccine (IPV):</strong> Killed poliovirus using formaldehyde while preserving its antigenic structure, proving that an inactivated virus can stimulate robust neutralizing antibodies without risk of triggering active paralytic polio infection.",
    triviaLabel: "'Could You Patent the Sun?'",
    triviaText: "When legendary journalist Edward R. Murrow asked Salk who owned the patent on the vaccine that freed the world from terrifying summer polio epidemics, Salk famously replied: 'Well, the people, I would say. There is no patent. Could you patent the sun?' His choice forfeited an estimated  billion in royalties.",
    tags: ["Nobel Snub", "Polio Vaccine", "Immunology", "Public Health", "Altruism"]
  },

  // 100. Frederick Gowland Hopkins
  {
    name: "Frederick Gowland Hopkins",
    category: "Medicine",
    special: "personality",
    year: "1929",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "1929" }
    ],
    meta: "English Biochemist • Cambridge • Discoverer of Essential Vitamins & Tryptophan",
    initials: "FH",
    personaLink: { href: "/gallery/personalities/frederick-hopkins/", text: "Talk to Hopkins &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery of Essential Accessory Food Factors (Vitamins):</strong> Proved that animals fed purified diets of pure proteins, fats, carbohydrates, and minerals still withered and died unless minute quantities of fresh milk were added, discovering the necessity of dietary vitamins.",
    triviaLabel: "Self-Taught Naturalist!",
    triviaText: "Hopkins began his scientific career as an insurance clerk who studied chemistry at night schools, published his first paper on the chemical defense mechanism of bombardier beetles, and went on to discover the essential amino acid tryptophan and the antioxidant glutathione!",
    tags: ["Vitamins", "Biochemistry", "Tryptophan", "Nutritional Science"]
  },

  // 101. Johannes Fibiger
  {
    name: "Johannes Fibiger",
    category: "Medicine",
    special: "controversy",
    year: "1926",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-cat-controversy", text: "Nobel Error" },
      { class: "nobel-year-badge", text: "1926 Error" }
    ],
    meta: "Danish Pathologist • University of Copenhagen • The Famous Parasite-Cancer Error",
    initials: "JF",
    personaLink: { href: "/gallery/personalities/johannes-fibiger/", text: "Talk to Fibiger &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Spiroptera Carcinoma Hypothesis:</strong> Claimed that a parasitic roundworm (*Gongylonema neoplasticum*, transmitted by cockroaches) directly caused stomach carcinomas in laboratory rats, hailed in 1926 as the first laboratory proof of an environmental cancer trigger.",
    triviaLabel: "The Nobel Committee's Most Famous Mistake!",
    triviaText: "Years later, independent researchers discovered Fibiger's rats had severe vitamin A deficiency, which causes non-malignant metaplasia and stomach lesions that closely mimicked cancer under the microscope! The Nobel Committee had awarded the prize for an honest scientific misinterpretation.",
    tags: ["Nobel Error", "Cancer Research", "Parasitology", "Scientific Method"]
  },

  // 102. Max Born
  {
    name: "Max Born",
    category: "Physics",
    special: "personality",
    year: "1954",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "1954" }
    ],
    meta: "German Theoretical Physicist • Göttingen • Architect of Quantum Probability Amplitudes",
    initials: "MB",
    img: "/images/personalities_thumbs/max_born_portrait.webp",
    personaLink: { href: "/gallery/personalities/max-born/", text: "Talk to Born &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Born Rule (Probability Interpretation of Quantum Waves):</strong> Proved that the square of Schrödinger's wave function (|ψ|²) does not measure physical matter distribution, but rather the exact probability density of finding a subatomic particle at that location, introducing fundamental probability into physics.",
    triviaLabel: "Einstein's Famous 'God Does Not Play Dice' Letter!",
    triviaText: "It was specifically in a December 1926 letter to Max Born reacting against Born's probability interpretation that Albert Einstein wrote his immortal objection: 'Quantum mechanics is certainly imposing... but an inner voice tells me that it is not yet the real thing. The theory says a lot, but does not really bring us any closer to the secret of the Old One. I, at any rate, am convinced that He does not throw dice.'",
    tags: ["Born Rule", "Quantum Mechanics", "Probability Density", "Wave Function"]
  },

  // 103. J.J. Thomson
  {
    name: "J.J. Thomson",
    category: "Physics",
    special: "personality",
    year: "1906",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "1906" }
    ],
    meta: "British Physicist • Cavendish Laboratory • Discoverer of the Electron",
    initials: "JT",
    img: "/images/personalities_thumbs/j_j_thomson_portrait.webp",
    personaLink: { href: "/gallery/personalities/j-j-thomson/", text: "Talk to Thomson &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery of the Electron:</strong> In 1897, using high-vacuum cathode ray tubes with crossed electric and magnetic fields, Thomson measured the charge-to-mass ratio of cathode ray 'corpuscles', discovering that they are negatively charged particles over 1,000 times lighter than a hydrogen atom—proving atoms have internal parts.",
    triviaLabel: "Mentor to Seven Nobel Laureates!",
    triviaText: "Thomson was one of history's greatest scientific mentors: seven of his laboratory research assistants (including Ernest Rutherford, Charles Barkla, Francis Aston, and C.T.R. Wilson) and his own son George Paget Thomson won Nobel Prizes! Interestingly, J.J. won the Nobel for proving the electron is a particle, and his son won for proving it is a wave!",
    tags: ["Discovery of the Electron", "Cathode Rays", "Plum Pudding Model", "Subatomic Particles"]
  },

  // 104. Pierre Curie
  {
    name: "Pierre Curie",
    category: "Physics",
    special: "personality",
    year: "1903",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "1903" }
    ],
    meta: "French Physicist • Discoverer of Piezoelectricity • Co-discoverer of Radium",
    initials: "PC",
    img: "/images/personalities_thumbs/pierre_curie_portrait.webp",
    personaLink: { href: "/gallery/personalities/pierre-curie/", text: "Talk to Pierre Curie &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Pioneering Radioactivity, Magnetism & Piezoelectricity:</strong> Discovered that mechanical pressure on asymmetric quartz crystals generates electric voltages (piezoelectricity), discovered the temperature above which ferromagnetic materials lose their magnetism (Curie Point), and co-discovered polonium and radium.",
    triviaLabel: "Refused the Nobel Prize Without Marie!",
    triviaText: "When the Swedish Academy originally intended to award the 1903 Nobel Prize in Physics solely to Henri Becquerel and Pierre Curie, Pierre wrote back indignantly, stating that he would refuse the prize unless Marie received equal credit for her independent discovery of radioactivity!",
    tags: ["Piezoelectricity", "Radioactivity", "Curie Point", "Radium"]
  },

  // 105. Henri Becquerel
  {
    name: "Henri Becquerel",
    category: "Physics",
    special: "personality",
    year: "1903",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-year-badge", text: "1903" }
    ],
    meta: "French Physicist • Muséum National d'Histoire Naturelle • Discoverer of Radioactivity",
    initials: "HB",
    img: "/images/personalities_thumbs/henri_becquerel_portrait.webp",
    personaLink: { href: "/gallery/personalities/henri-becquerel/", text: "Talk to Becquerel &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Accidental Discovery of Spontaneous Radioactivity:</strong> In 1896, while investigating whether uranium minerals emit X-rays upon sun exposure, overcast skies forced Becquerel to store wrapped uranium salts inside a dark drawer next to unexposed photographic plates. Developing them revealed sharp silhouettes, proving uranium emits penetrating rays spontaneously.",
    triviaLabel: "The Waistcoat Pocket Burn!",
    triviaText: "In 1901, Becquerel borrowed a tube of concentrated radium from the Curies and carried it in his waistcoat pocket for several hours. Two weeks later, a severe, painful skin ulcer developed on his chest—which led directly to the first medical idea of using radiation to burn and destroy cancerous tumors!",
    tags: ["Spontaneous Radioactivity", "Becquerel Rays", "Uranium", "Nuclear Physics"]
  },

  // 106. Svante Arrhenius
  {
    name: "Svante Arrhenius",
    category: "Chemistry",
    special: "personality",
    year: "1903",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-year-badge", text: "1903" }
    ],
    meta: "Swedish Physical Chemist • Stockholm • Electrolytic Dissociation & Climate Pioneer",
    initials: "SA",
    img: "/images/personalities_thumbs/svante_arrhenius_portrait.webp",
    personaLink: { href: "/gallery/personalities/svante-arrhenius/", text: "Talk to Arrhenius &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Electrolytic Dissociation & The Greenhouse Effect:</strong> Formulated the law that salts dissociate into independent positive and negative ions in solution (1903 Nobel). In 1896, was the first scientist to quantitatively model the greenhouse effect, predicting that industrial CO2 emissions would warm global climate.",
    triviaLabel: "Passed His PhD with the Lowest Grade!",
    triviaText: "When Arrhenius submitted his 150-page dissertation proposing that chemical salts split into ions in water, his conservative professors at Uppsala gave it a 'fourth class' mark—the lowest possible passing grade. Nineteen years later, that exact thesis won him the Nobel Prize in Chemistry!",
    tags: ["Greenhouse Effect", "Electrolytic Dissociation", "Arrhenius Equation", "Climate Science"]
  },

  // 107. Jennifer Doudna
  {
    name: "Jennifer Doudna",
    category: "Chemistry",
    special: "personality",
    year: "2020",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-year-badge", text: "2020" }
    ],
    meta: "American Biochemist • UC Berkeley • Co-inventor of CRISPR-Cas9 Gene Editing",
    initials: "JD",
    img: "/images/personalities_thumbs/jennifer_doudna_portrait.webp",
    personaLink: { href: "/gallery/personalities/jennifer-doudna/", text: "Talk to Doudna &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>CRISPR-Cas9 Programmable Genome Scissors:</strong> In 2012, working with Emmanuelle Charpentier, Doudna demonstrated that the bacterial adaptive immune system (Cas9 endonuclease guided by dual RNA) could be engineered into a simple, programmable tool to rewrite the DNA of any organism with surgical precision.",
    triviaLabel: "Woken Up by a Reporter!",
    triviaText: "When the Nobel Prize committee telephoned from Stockholm at 2:53 AM California time, Doudna was sound asleep and didn't answer. She only learned she had won when a Nature journalist called her home landline moments later asking for a reaction!",
    tags: ["CRISPR-Cas9", "Gene Editing", "Biochemistry", "Molecular Biology"]
  },

  // 108. Emmanuelle Charpentier
  {
    name: "Emmanuelle Charpentier",
    category: "Chemistry",
    special: "personality",
    year: "2020",
    catBadges: [
      { class: "nobel-cat-chemistry", text: "Chemistry" },
      { class: "nobel-year-badge", text: "2020" }
    ],
    meta: "French Microbiologist & Biochemist • Max Planck Institute • CRISPR Pioneer",
    initials: "EC",
    img: "/images/personalities_thumbs/emmanuelle_charpentier_portrait.webp",
    personaLink: { href: "/gallery/personalities/emmanuelle-charpentier/", text: "Talk to Charpentier &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery of tracrRNA in Bacterial Immunity:</strong> While studying the flesh-eating bacterium *Streptococcus pyogenes*, Charpentier discovered trans-activating crRNA (tracrRNA), the crucial molecular component that guides Cas9 to cut viral DNA, opening the pathway to synthetic single-guide RNA gene editing.",
    triviaLabel: "First All-Female Science Nobel!",
    triviaText: "The 2020 Nobel Prize in Chemistry marked the first time in history that a Nobel science prize was awarded exclusively to two women (Charpentier and Doudna) without any male co-laureate!",
    tags: ["CRISPR-Cas9", "Microbiology", "tracrRNA", "Bacterial Immunity"]
  },

  // 109. Katalin Karikó
  {
    name: "Katalin Karikó",
    category: "Medicine",
    special: "personality",
    year: "2023",
    catBadges: [
      { class: "nobel-cat-medicine", text: "Medicine" },
      { class: "nobel-year-badge", text: "2023" }
    ],
    meta: "Hungarian-American Biochemist • UPenn & BioNTech • Pioneer of mRNA Vaccines",
    initials: "KK",
    img: "/images/personalities_thumbs/katalin_kariko_portrait.webp",
    personaLink: { href: "/gallery/personalities/katalin-kariko/", text: "Talk to Karikó &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Base-Modified mRNA & Immune Suppression (Pseudouridine):</strong> In 2005 with Drew Weissman, solved the fatal roadblock of mRNA therapy by replacing uridine with pseudouridine. This prevented synthetic mRNA from triggering lethal immune inflammation while supercharging intracellular protein translation, enabling the COVID-19 vaccines.",
    triviaLabel: "Demoted and Rejected for Decades!",
    triviaText: "Throughout the 1990s, Karikó was repeatedly rejected for scientific grants, demoted by the University of Pennsylvania, and told her obsession with mRNA was a dead-end career suicide. She persisted with sheer grit, ultimately saving millions of human lives during the COVID-19 pandemic!",
    tags: ["mRNA Vaccine", "Pseudouridine", "COVID-19", "Immunology", "Resilience"]
  },

  // 110. George Bernard Shaw
  {
    name: "George Bernard Shaw",
    category: "Literature",
    special: "personality",
    year: "1925",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1925" }
    ],
    meta: "Irish Playwright, Critic & Polemicist • Dublin & London • Nobel & Oscar Winner",
    initials: "GS",
    img: "/images/personalities_thumbs/george_bernard_shaw_portrait.webp",
    personaLink: { href: "/gallery/personalities/george-bernard-shaw/", text: "Talk to Shaw &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Drama of Ideas & Intellectual Satire:</strong> Transformed modern theater from Victorian melodrama into biting philosophical debate in *Pygmalion*, *Major Barbara*, and *Saint Joan*, dissecting class pretensions, language, poverty, religion, and social hypocrisy.",
    triviaLabel: "The Only Nobel & Oscar Double Winner!",
    triviaText: "Shaw was the first person in history to win both a Nobel Prize (Literature, 1925) and an Academy Award (Best Adapted Screenplay for *Pygmalion*, 1938). Upon winning the Nobel, he quipped: 'I can forgive Alfred Nobel for having invented dynamite, but only a fiend in human form could have invented the Nobel Prize!'",
    tags: ["Drama of Ideas", "Pygmalion", "Satire", "Irish Literature", "Oscar Winner"]
  },

  // 111. T.S. Eliot
  {
    name: "T.S. Eliot",
    category: "Literature",
    special: "personality",
    year: "1948",
    catBadges: [
      { class: "nobel-cat-literature", text: "Literature" },
      { class: "nobel-year-badge", text: "1948" }
    ],
    meta: "American-born British Modernist Poet • London • Author of *The Waste Land*",
    initials: "TE",
    img: "/images/personalities_thumbs/t_s_eliot_portrait.webp",
    personaLink: { href: "/gallery/personalities/t-s-eliot/", text: "Talk to Eliot &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Modernist Poetics & Cultural Disillusionment:</strong> Captured the spiritual fragmentation and existential trauma of post-WWI Western civilization in *The Waste Land* (1922) using fractured polyphonic voices, mythic motifs, and linguistic collage, followed by the spiritual redemption of *Four Quartets*.",
    triviaLabel: "Bank Clerk by Day, Poet by Night!",
    triviaText: "When he wrote *The Waste Land*, Eliot was working full-time in the colonial and foreign department of Lloyds Bank in London, drafting stanzas during his commute and lunch breaks!",
    tags: ["The Waste Land", "Modernism", "Four Quartets", "Prufrock"]
  },

  // 112. Desmond Tutu
  {
    name: "Desmond Tutu",
    category: "Peace",
    special: "personality",
    year: "1984",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "1984" }
    ],
    meta: "South African Anglican Archbishop • Cape Town • Moral Conscience of the Anti-Apartheid Struggle",
    initials: "DT",
    img: "/images/personalities_thumbs/desmond_tutu_portrait.webp",
    personaLink: { href: "/gallery/personalities/desmond-tutu/", text: "Talk to Tutu &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Nonviolent Struggle Against Apartheid & Truth Commission:</strong> Mobilized international economic boycotts and domestic nonviolent civil disobedience against South Africa's racial apartheid regime, later presiding over the Truth and Reconciliation Commission guided by the African concept of *Ubuntu* ('I am because we are').",
    triviaLabel: "The 'Arch' and the Laugh!",
    triviaText: "Affectionately known as 'The Arch', Tutu was famous for disarming furious crowds, armed apartheid police, and hostile foreign leaders alike with an infectious high-pitched giggle and playful jokes before delivering uncompromising moral home-truths.",
    tags: ["Anti-Apartheid", "Ubuntu", "Truth and Reconciliation", "Human Rights"]
  },

  // 113. Kofi Annan
  {
    name: "Kofi Annan",
    category: "Peace",
    special: "personality",
    year: "2001",
    catBadges: [
      { class: "nobel-cat-peace", text: "Peace" },
      { class: "nobel-year-badge", text: "2001" }
    ],
    meta: "Ghanaian Diplomat • 7th Secretary-General of the United Nations • Global Peacebuilder",
    initials: "KA",
    img: "/images/personalities_thumbs/kofi_annan_portrait.webp",
    personaLink: { href: "/gallery/personalities/kofi-annan/", text: "Talk to Annan &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Revitalizing the UN & Championing Human Rights:</strong> Steered the United Nations through post-Cold War geopolitical challenges, spearheaded the Millennium Development Goals to cut global poverty, mobilized the Global Fund against HIV/AIDS, and codified the 'Responsibility to Protect' (R2P) doctrine.",
    triviaLabel: "Rising Through the Ranks!",
    triviaText: "Annan was the first Secretary-General to be elected from within the ranks of the UN civil service itself, having started his international career in 1962 as an administrative and budget officer for the World Health Organization!",
    tags: ["United Nations", "Diplomacy", "Millennium Development Goals", "R2P"]
  },

  // 114. Paul Krugman
  {
    name: "Paul Krugman",
    category: "Economics",
    special: "personality",
    year: "2008",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "2008" }
    ],
    meta: "American Economist • Princeton & CUNY • Creator of New Trade Theory",
    initials: "PK",
    img: "/images/personalities_thumbs/paul_krugman_portrait.webp",
    personaLink: { href: "/gallery/personalities/paul-krugman/", text: "Talk to Krugman &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>New Trade Theory & Economic Geography:</strong> Overturned classical trade models by showing that international commerce is driven by economies of scale and consumer demand for variety rather than differences in national resources. Explained why similar countries trade similar goods (e.g., German vs Japanese cars) and why industries geographically cluster.",
    triviaLabel: "Inspired by Asimov's Psychohistory!",
    triviaText: "Krugman famously confessed that he originally chose to become an economist after reading Isaac Asimov's *Foundation* science-fiction novels as a teenager, hoping that economics would be the real-world equivalent of Hari Seldon's mathematical 'psychohistory'!",
    tags: ["New Trade Theory", "Economic Geography", "Economies of Scale", "Global Trade"]
  },

  // 115. Joseph Stiglitz
  {
    name: "Joseph Stiglitz",
    category: "Economics",
    special: "personality",
    year: "2001",
    catBadges: [
      { class: "nobel-cat-economics", text: "Economics" },
      { class: "nobel-year-badge", text: "2001" }
    ],
    meta: "American Economist • Columbia University • Pioneer of Asymmetric Information",
    initials: "JS",
    img: "/images/personalities_thumbs/joseph_stiglitz_portrait.webp",
    personaLink: { href: "/gallery/personalities/joseph-stiglitz/", text: "Talk to Stiglitz &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>The Economics of Information & Market Failures:</strong> Proved that whenever information between buyers and sellers is imperfect or asymmetric (which is practically always in insurance, banking, labor, and healthcare), Adam Smith's 'invisible hand' fails, causing adverse selection, credit rationing, and systemic inequality.",
    triviaLabel: "The Invisible Hand That Isn't There!",
    triviaText: "Stiglitz famously summarized his Nobel-winning thesis in one witty aphorism: 'The reason that the invisible hand often seems invisible is that it is often not there.'",
    tags: ["Asymmetric Information", "Market Failures", "Screening Theory", "Inequality"]
  },

  // 116. Jocelyn Bell Burnell
  {
    name: "Jocelyn Bell Burnell",
    category: "Physics",
    special: "snub",
    year: "1974",
    catBadges: [
      { class: "nobel-cat-physics", text: "Physics" },
      { class: "nobel-cat-snub", text: "Nobel Snub" },
      { class: "nobel-year-badge", text: "1974 Snub" }
    ],
    meta: "Northern Irish Astrophysicist • Cambridge • Discoverer of Radio Pulsars",
    initials: "JB",
    img: "/images/personalities_thumbs/jocelyn_bell_burnell_portrait.webp",
    personaLink: { href: "/gallery/personalities/jocelyn-bell-burnell/", text: "Talk to Bell Burnell &rarr;" },
    breakthroughLabel: "The Breakthrough (In Plain English)",
    breakthroughText: "<strong>Discovery of Radio Pulsars (Spinning Neutron Stars):</strong> In 1967, while analyzing miles of paper chart records from a radio telescope array she helped build by hand, Bell discovered a repeating radio signal pulsing every 1.337 seconds. It proved to be a pulsar—a rapidly spinning, superdense neutron star created by a supernova collapse.",
    triviaLabel: "The Greatest Snub in Astronomy!",
    triviaText: "When the 1974 Nobel Prize in Physics was awarded for the discovery of pulsars, it was given solely to her thesis advisor Antony Hewish and Martin Ryle. Eminent astronomers like Fred Hoyle publicly condemned the committee for passing over the actual graduate student who noticed, tracked, and proved the signal!",
    tags: ["Nobel Snub", "Pulsars", "Neutron Stars", "Radio Astronomy", "Women in STEM"]
  }


];

function generateHTML() {
  let cardsHtml = '';
  entries.forEach((e, idx) => {
    let catBadges = e.catBadges.map(b => {
      let cls = b.class;
      if (cls.startsWith('nobel-cat-') && !cls.includes('nobel-cat-badge')) {
        cls = 'nobel-cat-badge ' + cls;
      }
      return `<span class="${cls}">${b.text}</span>`;
    }).join('\n            ');
    if (e.yearBadge) {
      catBadges += `\n            <span class="nobel-year-badge">${e.yearBadge}</span>`;
    }

    let avatarInner = '';
    if (e.img) {
      avatarInner = `<img alt="${e.name}" class="nobel-avatar" loading="lazy" src="${e.img}" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'nobel-avatar-placeholder\\'>${e.initials}</div>';"/>`;
    } else {
      avatarInner = `<div class="nobel-avatar-placeholder">${e.initials}</div>`;
    }

    let personaBtn = '';
    if (e.personaLink) {
      personaBtn = `
          <a href="${e.personaLink.href}" class="nobel-personality-link" title="Chat with ${e.name} in Personalities Roleplay AI">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            ${e.personaLink.text}
          </a>`;
    }

    let tagsHtml = e.tags.map(t => `<span class="nobel-tag">${t}</span>`).join('\n        ');
    let versusHtml = '';
    if (e.versusLink) {
      versusHtml = `\n        <a href="${e.versusLink.href}" class="nobel-versus-link">${e.versusLink.text}</a>`;
    }

    let cardClass = 'nobel-card';
    if (e.special.includes('snub')) cardClass += ' nobel-snub-card';
    if (e.special.includes('controversy')) cardClass += ' nobel-controversy-card';

    cardsHtml += `
    <!-- ${idx + 1}. ${e.name} -->
    <article class="${cardClass}" data-category="${e.category}" data-special="${e.special}" data-year="${e.year}">
      <div class="nobel-card-header">
        <div class="nobel-avatar-wrap">
          ${avatarInner}
        </div>
        <div class="nobel-header-info">
          <div class="nobel-badge-row">
            ${catBadges}
          </div>
          <h2 class="nobel-laureate-name">${e.name}</h2>
          <div class="nobel-field-meta">${e.meta}</div>${personaBtn}
        </div>
      </div>
      <div class="nobel-breakthrough-box">
        <div class="nobel-box-label">${e.breakthroughLabel}</div>
        <p class="nobel-breakthrough-text">${e.breakthroughText}</p>
      </div>
      <div class="nobel-trivia-box">
        <div class="nobel-trivia-label">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          ${e.triviaLabel}
        </div>
        <p class="nobel-trivia-text">${e.triviaText}</p>
      </div>
      <div class="nobel-footer-links">
        ${tagsHtml}${versusHtml}
      </div>
    </article>
`;
  });

  return `<main class="main"><div class="gallery-page-container nobel-page-container">
  <!-- Header with Breadcrumbs, Title, Subtitle, and Gallery Nav Pills -->
  <header class="gallery-header">
    <div class="gallery-breadcrumbs">
      <a href="https://gui13go.github.io/">Home</a> <span>/</span> <a href="/gallery/">Gallery</a> <span>/</span> <span>Nobel Prizes</span>
    </div>
    <div class="nobel-header-title-row">
      <div>
        <h1 class="gallery-title">Nobel Prizes</h1>
        <p class="gallery-subtitle">The breakthroughs that reshaped human knowledge, the eccentric minds who cracked nature's codes, the famous snubs, and the awards that history judged harshly.</p>
      </div>
    </div>

    <!-- Gallery Navigation Pills -->
    <nav aria-label="Gallery Sections" class="gallery-nav-pills">
      <a class="gallery-pill" href="/gallery/personalities/">Personalities</a>
      <a class="gallery-pill" href="/gallery/quotes/">Quotes</a>
      <a class="gallery-pill" href="/gallery/arts/">Arts</a>
      <a class="gallery-pill" href="/gallery/books/">Books</a>
      <a class="gallery-pill" href="/gallery/computer-languages/">Languages</a>
      <a class="gallery-pill" href="/gallery/operating-systems/">Operating Systems</a>
      <a class="gallery-pill" href="/gallery/network-protocols/">Protocols</a>
      <a class="gallery-pill" href="/gallery/databases/">Databases</a>
      <a class="gallery-pill" href="/gallery/data-formats/">Data Formats</a>
      <a class="gallery-pill" href="/gallery/facts/">Facts</a>
      <a class="gallery-pill" href="/gallery/laws/">Laws</a>
      <a class="gallery-pill" href="/gallery/jokes/">Jokes</a>
      <a class="gallery-pill" href="/gallery/versus/">Versus</a>
      <a class="gallery-pill" href="/gallery/dictionary/">Dictionary</a>
      <a class="gallery-pill" href="/gallery/gadgets/">Gadgets</a>
      <a class="gallery-pill" href="/gallery/timelines/">Timelines</a>
      <a class="gallery-pill active" href="/gallery/nobel-prizes/">Nobel Prizes</a>
    </nav>
  </header>

  <!-- Filter & Search Toolbar -->
  <div class="gallery-toolbar nobel-toolbar">
    <div class="gallery-search-box">
      <svg class="search-icon" fill="none" height="18" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="18">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
      </svg>
      <input autocomplete="off" id="nobelSearch" placeholder="Search by laureate, breakthrough, category, year, or controversy..." type="text"/>
      <button aria-label="Clear search" class="clear-search-btn" id="clearNobelSearch" style="display:none" type="button">×</button>
    </div>

    <!-- Category Filter Chips -->
    <div class="nobel-filter-chips" id="categoryChips">
      <button class="nobel-chip active" data-filter="all" type="button">All (<span id="allCount">${entries.length}</span>)</button>
      <button class="nobel-chip" data-filter="Physics" type="button">Physics</button>
      <button class="nobel-chip" data-filter="Chemistry" type="button">Chemistry</button>
      <button class="nobel-chip" data-filter="Medicine" type="button">Medicine / Physiology</button>
      <button class="nobel-chip" data-filter="Literature" type="button">Literature</button>
      <button class="nobel-chip" data-filter="Peace" type="button">Peace</button>
      <button class="nobel-chip" data-filter="Economics" type="button">Economics</button>
      <button class="nobel-chip nobel-chip-special" data-filter="snub" type="button">Snubs &amp; Omissions</button>
      <button class="nobel-chip nobel-chip-warning" data-filter="controversy" type="button">Controversies</button>
    </div>

    <div class="gallery-count-badge">Showing <span id="visibleCount">${entries.length}</span> of ${entries.length} entries</div>
  </div>

  <!-- Main Card Grid -->
  <div class="nobel-grid" id="nobelGrid">
${cardsHtml}
  </div>

  <div class="gallery-empty-state" id="noResultsMsg" style="display:none">
    <p>No Nobel laureates or entries matched your filter or search criteria.</p>
  </div>
</div>

<!-- Dynamic Filter and Interactive Logic -->
<script>
(function() {
  function initNobelGallery() {
    var searchInput = document.getElementById('nobelSearch');
    var clearBtn = document.getElementById('clearNobelSearch');
    var gridContainer = document.getElementById('nobelGrid');
    var allCount = document.getElementById('allCount');
    var visibleCount = document.getElementById('visibleCount');
    var noResultsMsg = document.getElementById('noResultsMsg');
    var chipBtns = Array.from(document.querySelectorAll('#categoryChips .nobel-chip'));

    if (!gridContainer || !searchInput) return;

    var cards = Array.from(gridContainer.querySelectorAll('.nobel-card'));
    var activeFilter = 'all';

    if (allCount) allCount.textContent = cards.length;

    function filterCards() {
      var query = searchInput.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = query.length > 0 ? 'inline-block' : 'none';
      var visible = 0;

      cards.forEach(function(card) {
        var cardCat = (card.getAttribute('data-category') || '');
        var cardSpecial = (card.getAttribute('data-special') || '');
        var cardYear = (card.getAttribute('data-year') || '');
        var text = (card.textContent || '').toLowerCase();

        // Check Category / Special Filter
        var matchesFilter = true;
        if (activeFilter === 'all') {
          matchesFilter = true;
        } else if (activeFilter === 'snub') {
          matchesFilter = cardSpecial.indexOf('snub') !== -1;
        } else if (activeFilter === 'controversy') {
          matchesFilter = cardSpecial.indexOf('controversy') !== -1;
        } else {
          matchesFilter = cardCat.toLowerCase().indexOf(activeFilter.toLowerCase()) !== -1;
        }

        // Check Search Query
        var matchesSearch = !query || text.indexOf(query) !== -1 || cardYear.indexOf(query) !== -1;

        if (matchesFilter && matchesSearch) {
          card.style.display = '';
          visible++;
        } else {
          card.style.display = 'none';
        }
      });

      if (visibleCount) visibleCount.textContent = visible;
      if (noResultsMsg) noResultsMsg.style.display = visible === 0 ? 'block' : 'none';
    }

    // Chip click handlers
    chipBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        chipBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeFilter = btn.getAttribute('data-filter') || 'all';
        filterCards();
      });
    });

    searchInput.addEventListener('input', filterCards);

    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        filterCards();
        searchInput.focus();
      });
    }
  }

  if (document.readyState !== 'loading') {
    initNobelGallery();
  } else {
    document.addEventListener('DOMContentLoaded', initNobelGallery);
  }
})();
</script>
</main>
`;
}

const html = generateHTML();
fs.writeFileSync('public/rendered_gallery/nobel-prizes.html', html, 'utf8');
console.log('Successfully generated public/rendered_gallery/nobel-prizes.html with ' + entries.length + ' entries!');
