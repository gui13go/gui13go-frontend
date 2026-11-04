import json
import re

def slugify(text):
    text = text.lower()
    text = re.sub(r'[àáâãäå]', 'a', text)
    text = re.sub(r'[èéêë]', 'e', text)
    text = re.sub(r'[ìíîï]', 'i', text)
    text = re.sub(r'[òóôõö]', 'o', text)
    text = re.sub(r'[ùúûü]', 'u', text)
    text = re.sub(r'[ç]', 'c', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

new_personalities = [
    {
        "name": "Pero Vaz de Caminha",
        "dates": "c. 1450–1500",
        "birthYear": 1450,
        "summary": "Portuguese knight and royal secretary who accompanied Pedro Álvares Cabral's fleet in 1500; author of the celebrated 'Carta de Pero Vaz de Caminha', regarded as the official 'birth certificate' of Brazil, providing the first detailed European descriptions of the land, indigenous inhabitants, and natural landscape.",
        "image": "/images/personalities/pero_vaz_de_caminha_portrait.jpg",
        "zoomSrc": "/images/personalities/pero_vaz_de_caminha_portrait.jpg",
        "zoomTitle": "Pero Vaz de Caminha",
        "zoomCaption": "c. 1450–1500 • Portuguese royal secretary who wrote the foundational letter documenting the arrival of Cabral's fleet in Brazil in 1500.",
        "quote": {
            "text": "“Tanto que até agora não podemos saber se há ouro, ou prata, nem nenhuma coisa de metal ou ferro... porém a terra em si é de muito bons ares... em tal maneira é graciosa que, querendo-a aproveitar, dar-se-á nela tudo.”",
            "cite": "— Carta a El-Rei Dom Manuel sobre o Achamento do Brasil (1500)"
        },
        "keyWorks": [
            "Carta a El-Rei Dom Manuel sobre o Achamento do Brasil (1500)",
            "Epistolary chronicling of Cabral's voyage to the New World"
        ],
        "tags": [
            "Age of Discovery",
            "Brazilian History",
            "Portuguese Empire",
            "Literature",
            "Chronicler"
        ],
        "quotes": [
            {
                "text": "“Águas são muitas; infindas. E em tal maneira é graciosa que, querendo-a aproveitar, dar-se-á nela tudo, por bem das águas que tem.”",
                "cite": "— Carta de Pero Vaz de Caminha"
            }
        ]
    },
    {
        "name": "King Manuel I of Portugal",
        "dates": "1469–1521",
        "birthYear": 1469,
        "summary": "Monarch known as 'The Fortunate' (O Venturoso) whose reign ushered in the zenith of the Portuguese Golden Age, financing the historic expeditions of Vasco da Gama to India and Pedro Álvares Cabral to Brazil, establishing Portuguese maritime dominance across the Atlantic and Indian Oceans, and commissioning the ornate Manueline architectural style.",
        "image": "/images/personalities/king_manuel_i_of_portugal_portrait.jpg",
        "zoomSrc": "/images/personalities/king_manuel_i_of_portugal_portrait.jpg",
        "zoomTitle": "King Manuel I of Portugal",
        "zoomCaption": "1469–1521 • King of Portugal during the peak of maritime expansion, sponsor of Cabral's discovery of Brazil and Da Gama's sea route to India.",
        "quote": {
            "text": "“Conhecereis as terras novas que agora se acharam e fareis com que a nossa santa fé católica seja nelas exaltada e conhecida.”",
            "cite": "— Instruções Régias de Dom Manuel I"
        },
        "keyWorks": [
            "Patronage of Cabral's 1500 expedition to Brazil and Da Gama's route to India",
            "Commissioning of the Jerónimos Monastery and the Manueline architectural heritage",
            "Codification of the Ordenações Manuelinas (1514)"
        ],
        "tags": [
            "Monarchy",
            "Age of Discovery",
            "Portuguese Empire",
            "Manueline Architecture",
            "Renaissance"
        ],
        "quotes": [
            {
                "text": "“Por graça de Deus, Rei de Portugal e dos Algarves, d'Aquém e d'Além-Mar em África, Senhor da Guiné e da Conquista, Navegação e Comércio da Etiópia, Arábia, Pérsia e da Índia.”",
                "cite": "— Royal Title of King Manuel I"
            }
        ]
    },
    {
        "name": "Governor Tomé de Sousa",
        "dates": "1503–1579",
        "birthYear": 1503,
        "summary": "Portuguese nobleman and military commander who served as the first Governor-General of Brazil (1549–1553); founded São Salvador da Bahia de Todos os Santos as Brazil's first capital, centralized the colonial administration, initiated royal fortifications, and oversaw the arrival of the first Jesuit mission led by Manuel da Nóbrega.",
        "image": "/images/personalities/tome_de_sousa_portrait.jpg",
        "zoomSrc": "/images/personalities/tome_de_sousa_portrait.jpg",
        "zoomTitle": "Governor Tomé de Sousa",
        "zoomCaption": "1503–1579 • First Governor-General of Brazil who founded Salvador in 1549 and established unified royal governance.",
        "quote": {
            "text": "“Hei por bem e vos mando que vádes às ditas terras do Brasil e ordeneis a povoação e fortaleza na Baía de Todos os Santos para segurança da terra e remédio dos moradores dela.”",
            "cite": "— Regimento de Tomé de Sousa (1548)"
        },
        "keyWorks": [
            "Foundation and urban layout of Salvador da Bahia (1549)",
            "Implementation of the Regimento de 1548 consolidating colonial rule",
            "Establishment of the first municipal council (Câmara Municipal) in Salvador"
        ],
        "tags": [
            "Colonial Brazil",
            "Statesman",
            "Salvador",
            "Governor-General",
            "Portuguese Empire"
        ],
        "quotes": [
            {
                "text": "“E assim fareis edificar a dita cidade com suas muralhas, baluartes e praças, para que fique forte e segura.”",
                "cite": "— Regimento Régio de D. João III"
            }
        ]
    },
    {
        "name": "Manuel da Nóbrega",
        "dates": "1517–1570",
        "birthYear": 1517,
        "summary": "Portuguese Jesuit priest and missionary who led the first Society of Jesus contingent to Brazil in 1549 alongside Governor-General Tomé de Sousa; co-founded the city of Salvador and later the Jesuit College at Piratininga that birthed the city of São Paulo (1554), serving as Provincial Superior and establishing the educational and evangelizing foundation of colonial Brazil.",
        "image": "/images/personalities/manuel_da_nobrega_portrait.jpg",
        "zoomSrc": "/images/personalities/manuel_da_nobrega_portrait.jpg",
        "zoomTitle": "Manuel da Nóbrega",
        "zoomCaption": "1517–1570 • Leader of the first Jesuit mission to Brazil, co-founder of São Paulo and visionary educator.",
        "quote": {
            "text": "“Esta terra é nossa empresa; nela havemos de gastar a vida em pregar a fé de Cristo e ensinar estes gentios a viver como homens de razão.”",
            "cite": "— Cartas do Brasil (1550)"
        },
        "keyWorks": [
            "Co-founding of the Jesuit College of Piratininga (founding of São Paulo, 1554)",
            "Cartas do Brasil (Epistolary chronicling of indigenous customs and early missions)",
            "Diálogo sobre a Conversão do Gentio (1557)",
            "Negotiation of the Peace of Iperoig with the Tamoio Confederation (1563)"
        ],
        "tags": [
            "Jesuit",
            "Colonial Brazil",
            "Missionary",
            "São Paulo",
            "Education",
            "Religion"
        ],
        "quotes": [
            {
                "text": "“Quem quer que venha a esta terra sem espírito de humildade e amor aos naturais nada fará duradouro diante de Deus.”",
                "cite": "— Escritos Jesuíticos de Manuel da Nóbrega"
            }
        ]
    },
    {
        "name": "Nicolas Durand de Villegaignon",
        "dates": "1510–1571",
        "birthYear": 1510,
        "summary": "French naval officer, Knight of Malta, and explorer who founded France Antarctique in Guanabara Bay (present-day Rio de Janeiro) in 1555; constructed Fort Coligny on Ilha de Villegagnon as a haven for Huguenots and Catholics, provoking fierce theological schisms and Portuguese military campaigns that culminated in French expulsion.",
        "image": "/images/personalities/nicolas_durand_de_villegaignon_portrait.jpg",
        "zoomSrc": "/images/personalities/nicolas_durand_de_villegaignon_portrait.jpg",
        "zoomTitle": "Nicolas Durand de Villegaignon",
        "zoomCaption": "1510–1571 • French commander who established the France Antarctique colony in Rio de Janeiro's Guanabara Bay in 1555.",
        "quote": {
            "text": "“We came across immense oceans to plant an asylum where men could worship Almighty God and expand the glory of the realm into the austral continent.”",
            "cite": "— Dispatch from Fort Coligny (1556)"
        },
        "keyWorks": [
            "Establishment of the France Antarctique settlement in Guanabara Bay (1555)",
            "Construction of Fort Coligny",
            "Theological treatise Response aux Remonstrances faites au Roy (1561)"
        ],
        "tags": [
            "Exploration",
            "French History",
            "Colonial Brazil",
            "Reformation",
            "Military"
        ],
        "quotes": [
            {
                "text": "“To erect a citadel in wilderness demands stronger faith than steel.”",
                "cite": "— Memoirs of the Antarctic Expedition"
            }
        ]
    },
    {
        "name": "Father José de Anchieta",
        "dates": "1534–1597",
        "birthYear": 1534,
        "summary": "Canary Islands-born Jesuit missionary, linguist, poet, and canonized saint known as the 'Apostle of Brazil'; co-founded the city of São Paulo (1554) and Rio de Janeiro (1565), codified the first comprehensive grammar of the indigenous Old Tupi language, authored religious plays, and composed sacred Latin poetry in the sands of Ubatuba during peace negotiations.",
        "image": "/images/personalities/jose_de_anchieta_portrait.jpg",
        "zoomSrc": "/images/personalities/jose_de_anchieta_portrait.jpg",
        "zoomTitle": "Father José de Anchieta",
        "zoomCaption": "1534–1597 • 'Apostle of Brazil', co-founder of São Paulo and Rio de Janeiro, pioneer of Old Tupi linguistics and theatre.",
        "quote": {
            "text": "“Não basta amar a Deus em silêncio; é preciso fazê-Lo ressoar nas línguas da terra e acolher os povos com infinita caridade.”",
            "cite": "— Escritos Missionários de São José de Anchieta"
        },
        "keyWorks": [
            "Arte de Gramática da Língua mais Usada na Costa do Brasil (First Tupi Grammar, 1595)",
            "Poema da Bem-Aventurada Virgem Maria Mãe de Deus (De Beata Virgine)",
            "Auto de São Lourenço and early missionary theatrical works",
            "Co-founding of São Paulo (1554) and pacification of the Tamoios at Iperoig (1563)"
        ],
        "tags": [
            "Jesuit",
            "Saints",
            "Linguistics",
            "Colonial Brazil",
            "Literature",
            "São Paulo",
            "Religion"
        ],
        "quotes": [
            {
                "text": "“Nas areias da praia escrevi os versos à Mãe de Deus, enquanto esperava a paz entre os homens.”",
                "cite": "— Memórias do Cativeiro em Ubatuba"
            }
        ]
    },
    {
        "name": "Estácio de Sá",
        "dates": "1520–1567",
        "birthYear": 1520,
        "summary": "Portuguese military commander and nephew of Governor-General Mem de Sá; tasked with reclaiming Guanabara Bay from French forces under Villegaignon, he founded the fortified settlement of São Sebastião do Rio de Janeiro on March 1, 1565, and led the campaign to expel the French until he was fatally wounded by an arrow in battle.",
        "image": "/images/personalities/estacio_de_sa_portrait.jpg",
        "zoomSrc": "/images/personalities/estacio_de_sa_portrait.jpg",
        "zoomTitle": "Estácio de Sá",
        "zoomCaption": "1520–1567 • Portuguese soldier and founder of Rio de Janeiro in 1565, defending Guanabara Bay against French incursions.",
        "quote": {
            "text": "“Aqui firmamos esta cidade em nome de Deus e de el-Rei Dom Sebastião, para que jamais terra de Portugal caia em mãos alheias.”",
            "cite": "— Atos de Fundação da Cidade de São Sebastião do Rio de Janeiro (1565)"
        },
        "keyWorks": [
            "Foundation of São Sebastião do Rio de Janeiro (March 1, 1565)",
            "Command of the military expulsion of French forces from Guanabara Bay",
            "Construction of the initial fortifications at Morro Cara de Cão"
        ],
        "tags": [
            "Military",
            "Rio de Janeiro",
            "Colonial Brazil",
            "Portuguese Empire",
            "City Founder"
        ],
        "quotes": [
            {
                "text": "“Com o peito aberto e a espada erguida se ganha esta terra bendita.”",
                "cite": "— Crônicas da Conquista do Rio de Janeiro"
            }
        ]
    },
    {
        "name": "Count John Maurice of Nassau-Siegen",
        "dates": "1604–1679",
        "birthYear": 1604,
        "summary": "Dutch-German prince and Governor-General of Dutch Brazil (New Holland) from 1637 to 1644; transformed Recife into the cosmopolis Mauritsstad, introduced groundbreaking religious tolerance for Jews and Catholics, established urban infrastructure, and sponsored top scientists, astronomers (Georg Marcgrave), and painters (Albert Eckhout, Frans Post) to comprehensively document South American natural history.",
        "image": "/images/personalities/john_maurice_of_nassau_portrait.jpg",
        "zoomSrc": "/images/personalities/john_maurice_of_nassau_portrait.jpg",
        "zoomTitle": "Count John Maurice of Nassau-Siegen",
        "zoomCaption": "1604–1679 • Governor-General of Dutch Brazil, visionary modernizer of Recife, champion of religious tolerance and scientific patron.",
        "quote": {
            "text": "“Our governance must be founded upon equity, freedom of conscience, and the flourishing of arts and sciences in this New World.”",
            "cite": "— Address to the High Council of Mauritsstad (1638)"
        },
        "keyWorks": [
            "Urban planning and development of Mauritsstad (Recife)",
            "Patronage of Historia Naturalis Brasiliae (1648)",
            "First astronomical observatory and botanical garden in the Americas",
            "Implementation of multi-faith tolerance protecting Jewish and Catholic worship"
        ],
        "tags": [
            "Dutch Brazil",
            "Pernambuco",
            "Enlightened Ruler",
            "Urban Planning",
            "Science Patron",
            "Recife"
        ],
        "quotes": [
            {
                "text": "“Tolerance and commerce are twin pillars of peace in any great commonwealth.”",
                "cite": "— Letters of Count John Maurice of Nassau"
            }
        ]
    },
    {
        "name": "Domingos Jorge Velho",
        "dates": "1641–1705",
        "birthYear": 1641,
        "summary": "Notorious Paulista bandeirante and sertanista warlord contracted by the colonial government of Pernambuco to crush the Quilombo dos Palmares; led the brutal 1694 siege of the Serra da Barriga mountain fortress of Macaco that destroyed the largest escaped slave community in the Americas and killed Zumbi dos Palmares.",
        "image": "/images/personalities/domingos_jorge_velho_portrait.jpg",
        "zoomSrc": "/images/personalities/domingos_jorge_velho_portrait.jpg",
        "zoomTitle": "Domingos Jorge Velho",
        "zoomCaption": "1641–1705 • Paulista bandeirante contracted by the Crown to wage the military campaign that destroyed the Quilombo dos Palmares in 1694.",
        "quote": {
            "text": "“Nenhum mato nos é tão espesso nem serra tão alcantilada que nossas armas não possam devassar.”",
            "cite": "— Correspondência da Guerra dos Palmares"
        },
        "keyWorks": [
            "Command of the military siege of Quilombo dos Palmares (1692–1694)",
            "Expeditions through the sertões of Piauí, Ceará, and Pernambuco",
            "Conquest and subjugation of indigenous nations in the Guerra dos Bárbaros"
        ],
        "tags": [
            "Bandeirante",
            "Colonial Brazil",
            "Quilombo dos Palmares",
            "Military",
            "Sertanista"
        ],
        "quotes": [
            {
                "text": "“Entramos pelas brenhas onde homem algum jamais pisou para submeter os rebeldes e abrir os sertões.”",
                "cite": "— Relato das Bandeiras Paulistas"
            }
        ]
    },
    {
        "name": "Antônio Francisco Lisboa ('Aleijadinho')",
        "dates": "1738–1814",
        "birthYear": 1738,
        "summary": "Master sculptor, architect, and towering genius of the Brazilian colonial Baroque and Rococo; overcoming a severe degenerative illness that crippled his hands, he carved transcendent soapstone and cedar statues across Minas Gerais, notably the monumental 'Twelve Prophets' and the Stations of the Cross at the Sanctuary of Bom Jesus de Matosinhos in Congonhas.",
        "image": "/images/personalities/aleijadinho_portrait.jpg",
        "zoomSrc": "/images/personalities/aleijadinho_portrait.jpg",
        "zoomTitle": "Antônio Francisco Lisboa ('Aleijadinho')",
        "zoomCaption": "1738–1814 • Supreme master of Brazilian Baroque sculpture and architecture, creator of the Twelve Prophets in Congonhas.",
        "quote": {
            "text": "“A pedra-sabão cede à mão devota, e na matéria bruta o cinzel descobre o sopro do divino.”",
            "cite": "— Tradição Oral das Oficinas de Ouro Preto"
        },
        "keyWorks": [
            "Statues of the Twelve Prophets at Sanctuary of Bom Jesus de Matosinhos (Congonhas)",
            "Polychrome cedar carvings of the Stations of the Cross (Passos da Paixão)",
            "Architectural design and façade carving of Church of São Francisco de Assis in Ouro Preto",
            "Façade and high altar of Church of Nossa Senhora do Carmo in Ouro Preto"
        ],
        "tags": [
            "Baroque",
            "Sculpture",
            "Architecture",
            "Minas Gerais",
            "Brazilian Art",
            "Rococo"
        ],
        "quotes": [
            {
                "text": "“Na imperfeição do corpo humano o espírito alcança a mais sublime forma.”",
                "cite": "— Homenagens ao Mestre Aleijadinho"
            }
        ]
    },
    {
        "name": "King John VI of Portugal (Dom João VI)",
        "dates": "1767–1826",
        "birthYear": 1767,
        "summary": "Prince Regent and later King of Portugal and the United Kingdom of Portugal, Brazil and the Algarves; in 1807–1808, facing Napoleon's invasion, he made the epochal decision to transfer the Portuguese royal court to Rio de Janeiro, opening Brazilian ports to international trade, founding the Bank of Brazil, the National Library, the Royal Botanical Garden, and paving the way for Brazilian independence under his son Pedro I.",
        "image": "/images/personalities/king_john_vi_portrait.jpg",
        "zoomSrc": "/images/personalities/king_john_vi_portrait.jpg",
        "zoomTitle": "King John VI of Portugal (Dom João VI)",
        "zoomCaption": "1767–1826 • King who transferred the Portuguese royal court to Rio de Janeiro in 1808, opening Brazilian ports and elevating Brazil to kingdom status.",
        "quote": {
            "text": "“Pedro, se o Brasil se separar, antes seja para ti, que me hás de respeitar, do que para algum desses aventureiros.”",
            "cite": "— Carta de despedida ao Príncipe Dom Pedro (1821)"
        },
        "keyWorks": [
            "Decreto de Abertura dos Portos às Nações Amigas (1808)",
            "Elevation of Brazil to the United Kingdom of Portugal, Brazil and the Algarves (1815)",
            "Founding of Banco do Brasil, Jardim Botânico do Rio de Janeiro, and the National Library",
            "Establishment of the Royal Press (Imprensa Régia) and the Royal Academy of Fine Arts"
        ],
        "tags": [
            "Monarchy",
            "Brazilian History",
            "Portuguese Empire",
            "Napoleonic Wars",
            "Statesman",
            "Rio de Janeiro"
        ],
        "quotes": [
            {
                "text": "“Fica o comércio do Brasil franqueado a todas as nações que com a minha coroa conservem paz e amizade.”",
                "cite": "— Carta Régia de Abertura dos Portos (1808)"
            }
        ]
    },
    {
        "name": "Eusébio de Queirós",
        "dates": "1812–1868",
        "birthYear": 1812,
        "summary": "Brazilian magistrate and Minister of Justice who authored and successfully enforced the landmark Lei Eusébio de Queirós (Law 581 of September 4, 1850); by decisively outlawing and criminalizing the transatlantic slave trade to Brazil, he dealt a mortal blow to the slave trade and redirected capital into domestic infrastructure, banking, and industrialization.",
        "image": "/images/personalities/eusebio_de_queiros_portrait.jpg",
        "zoomSrc": "/images/personalities/eusebio_de_queiros_portrait.jpg",
        "zoomTitle": "Eusébio de Queirós",
        "zoomCaption": "1812–1868 • Minister of Justice whose 1850 law decisively terminated the transatlantic slave trade to the Empire of Brazil.",
        "quote": {
            "text": "“O tráfico de africanos é uma mancha na honra nacional e um delito contra a humanidade que o governo imperial está firmemente decidido a extinguir para sempre.”",
            "cite": "— Discurso perante a Câmara dos Deputados (1850)"
        },
        "keyWorks": [
            "Lei Eusébio de Queirós (Lei nº 581, September 4, 1850) ending the transatlantic slave trade",
            "Reorganization of the Brazilian imperial police and judicial apparatus",
            "Minister of Justice under the Marquis of Monte Alegre ministry"
        ],
        "tags": [
            "Empire of Brazil",
            "Law",
            "Abolitionism",
            "Justice",
            "Statesman"
        ],
        "quotes": [
            {
                "text": "“A eficácia da lei não está na dureza das palavras, mas na inquebrantável vontade do Estado em executá-la.”",
                "cite": "— Relatório Ministerial da Justiça (1851)"
            }
        ]
    },
    {
        "name": "Barão de Mauá (Irineu Evangelista de Sousa)",
        "dates": "1813–1889",
        "birthYear": 1813,
        "summary": "Pioneering Brazilian industrialist, financier, and entrepreneur considered the father of Brazilian modern industry; constructed Brazil's first railway (Estrada de Ferro Mauá), introduced gas street lighting in Rio de Janeiro, built shipyards, laid the transatlantic telegraph cable connecting Brazil to Europe, and founded Banco Mauá, spearheading South American modernization.",
        "image": "/images/personalities/barao_de_maua_portrait.jpg",
        "zoomSrc": "/images/personalities/barao_de_maua_portrait.jpg",
        "zoomTitle": "Barão de Mauá (Irineu Evangelista de Sousa)",
        "zoomCaption": "1813–1889 • Trailblazing Brazilian industrial titan and financier who constructed the nation's first railway and telegraph cables.",
        "quote": {
            "text": "“O melhor programa econômico de um governo é não embaraçar os que produzem.”",
            "cite": "— Autobiografia: Exposição aos Credores e ao Público (1878)"
        },
        "keyWorks": [
            "Construction of Brazil's first railway, Estrada de Ferro Mauá (1854)",
            "Installation of gas lighting in Rio de Janeiro and Amazon steam navigation",
            "Laying the submarine telegraph cable linking South America to Europe",
            "Founding of Ponta da Areia shipyard and Banco Mauá, MacGregor & Cia"
        ],
        "tags": [
            "Industrialization",
            "Railways",
            "Finance",
            "Empire of Brazil",
            "Entrepreneurship",
            "Innovation"
        ],
        "quotes": [
            {
                "text": "“O capital e o trabalho honrado transformam deserto em cidade e nação em potência.”",
                "cite": "— Discursos e Memórias do Barão de Mauá"
            }
        ]
    },
    {
        "name": "Marquês de Olinda (Pedro de Araújo Lima)",
        "dates": "1793–1870",
        "birthYear": 1793,
        "summary": "Prominent Brazilian statesman, Regent of the Empire during the regency period (1837–1840), and four-time President of the Council of Ministers (Prime Minister) during the Second Reign; a foundational leader of the Conservative Party, he restored central imperial authority, founded the Pedro II School (Colégio Pedro II), and stabilized the young nation.",
        "image": "/images/personalities/marques_de_olinda_portrait.jpg",
        "zoomSrc": "/images/personalities/marques_de_olinda_portrait.jpg",
        "zoomTitle": "Marquês de Olinda (Pedro de Araújo Lima)",
        "zoomCaption": "1793–1870 • Regent of Brazil and four-time Prime Minister who stabilized the Empire and founded Colégio Pedro II.",
        "quote": {
            "text": "“A conservação da ordem pública e da autoridade das leis é o primeiro dever do governo e a garantia suprema de todas as liberdades.”",
            "cite": "— Fala do Trono na Regência Una (1838)"
        },
        "keyWorks": [
            "Regency of the Empire of Brazil (Regência Una de Araújo Lima, 1837–1840)",
            "Founding of the Colégio Pedro II in Rio de Janeiro (1837)",
            "Four administrations as President of the Council of Ministers (1848, 1857, 1862, 1865)",
            "Consolidation of the Regresso Conservador restoring imperial institutional order"
        ],
        "tags": [
            "Empire of Brazil",
            "Statesman",
            "Regency",
            "Conservative Party",
            "Colégio Pedro II"
        ],
        "quotes": [
            {
                "text": "“A moderação no poder é a verdadeira força dos Estados duradouros.”",
                "cite": "— Discursos Parlamentares no Senado Imperial"
            }
        ]
    },
    {
        "name": "José Maria da Silva Paranhos (Viscount of Rio Branco)",
        "dates": "1819–1880",
        "birthYear": 1819,
        "summary": "Brazilian statesman, diplomat, educator, and Prime Minister who led the longest-serving cabinet in the history of the Empire of Brazil (1871–1875); authored and secured the passage of the landmark Lei do Ventre Livre (Free Womb Law of September 28, 1871), declaring all children born to enslaved mothers free, while negotiating pivotal peace settlements across the Río de la Plata.",
        "image": "/images/personalities/visconde_do_rio_branco_portrait.jpg",
        "zoomSrc": "/images/personalities/visconde_do_rio_branco_portrait.jpg",
        "zoomTitle": "José Maria da Silva Paranhos (Viscount of Rio Branco)",
        "zoomCaption": "1819–1880 • Imperial Prime Minister who authored and championed the Lei do Ventre Livre in 1871.",
        "quote": {
            "text": "“Não podemos consentir que o berço de uma criança seja a sua sepultura moral na escravidão. A liberdade é um direito concedido pela Providência que a lei humana deve consagrar.”",
            "cite": "— Discurso em defesa da Lei do Ventre Livre no Senado Imperial (1871)"
        },
        "keyWorks": [
            "Lei do Ventre Livre (Lei nº 2.040, September 28, 1871)",
            "Presidency of the Council of Ministers (Gabinete Rio Branco, 1871–1875)",
            "Treaties of Asunción and post-war diplomatic pacification in the Río de la Plata",
            "Introduction of metric system and postal reform throughout Brazil"
        ],
        "tags": [
            "Empire of Brazil",
            "Prime Minister",
            "Diplomacy",
            "Abolitionism",
            "Lei do Ventre Livre",
            "Statesman"
        ],
        "quotes": [
            {
                "text": "“A prudência recomenda caminhar com firmeza para que as grandes reformas se façam sem abalo da paz social.”",
                "cite": "— Relatórios do Gabinete Imperial"
            }
        ]
    },
    {
        "name": "Luiz Gama",
        "dates": "1830–1882",
        "birthYear": 1830,
        "summary": "Afro-Brazilian lawyer, journalist, orator, poet, and passionate abolitionist who, having been illegally sold into slavery by his own father at age ten, taught himself to read, purchased his freedom, and utilized judicial advocacy to personally liberate over 500 enslaved individuals in Brazilian courts, becoming a revered pioneer of Brazilian civil rights.",
        "image": "/images/personalities/luiz_gama_portrait.jpg",
        "zoomSrc": "/images/personalities/luiz_gama_portrait.jpg",
        "zoomTitle": "Luiz Gama",
        "zoomCaption": "1830–1882 • Afro-Brazilian patron of abolition and legal genius who liberated hundreds of enslaved Brazilians through judicial warfare.",
        "quote": {
            "text": "“O escravo que mata o senhor, seja em que circunstância for, mata sempre em legítima defesa.”",
            "cite": "— Tese Jurídica perante o Tribunal do Júri"
        },
        "keyWorks": [
            "Primeiras Trovas Burlescas de Getulino (Satirical and abolitionist poetry, 1859)",
            "Legal defense resulting in the judicial emancipation of over 500 enslaved people",
            "Abolitionist journalism in Radical Paulistano and Gazeta da Tarde",
            "Co-founding of the Clube Radical Paulistano and republican mobilization"
        ],
        "tags": [
            "Abolitionism",
            "Civil Rights",
            "Lawyer",
            "Black History",
            "Literature",
            "Brazilian History"
        ],
        "quotes": [
            {
                "text": "“Em nós, até a cor é um defeito, um vício imperdoável de origem... mas ante a lei da humanidade todos os homens nascem livres.”",
                "cite": "— Artigos Abolicionistas de Luiz Gama"
            }
        ]
    },
    {
        "name": "André Rebouças",
        "dates": "1838–1898",
        "birthYear": 1838,
        "summary": "Brilliant Afro-Brazilian military engineer, intellectual, and abolitionist leader; engineered iconic public works including the strategic Curitiba-Paranaguá mountain railway and Rio de Janeiro's potable water supply system, and co-founded the Brazilian Anti-Slavery Society alongside Joaquim Nabuco, advocating visionary agrarian reform to provide land and dignity to freed slaves.",
        "image": "/images/personalities/andre_reboucas_portrait.jpg",
        "zoomSrc": "/images/personalities/andre_reboucas_portrait.jpg",
        "zoomTitle": "André Rebouças",
        "zoomCaption": "1838–1898 • Renowned Afro-Brazilian engineer and abolitionist champion who fought for agrarian reform alongside emancipation.",
        "quote": {
            "text": "“A abolição não é somente libertar os escravos; é transformar o escravo em proprietário, em cidadão, em homem digno e instruído na terra que cultivou.”",
            "cite": "— Abolição Imediata e sem Indenização (1883)"
        },
        "keyWorks": [
            "Engineering and construction of the Estrada de Ferro Curitiba-Paranaguá",
            "Modernization of Rio de Janeiro's public water supply system",
            "Founding of the Sociedade Brasileira Contra a Escravidão and Abolicionismo Agrário",
            "Diário e Ensaios Econômicos sobre o Trabalho Rural Livre"
        ],
        "tags": [
            "Engineering",
            "Abolitionism",
            "Railways",
            "Black History",
            "Empire of Brazil",
            "Social Reform"
        ],
        "quotes": [
            {
                "text": "“Sem a posse da terra e a escola para os libertos, a emancipação jurídica será apenas uma ilusão dourada.”",
                "cite": "— Manifesto Abolicionista Rural"
            }
        ]
    },
    {
        "name": "José do Patrocínio",
        "dates": "1853–1905",
        "birthYear": 1853,
        "summary": "Afro-Brazilian pharmacist, novelist, brilliant orator, and fiery journalist hailed as 'O Tigre da Abolição' (The Tiger of Abolition); as publisher of Gazeta da Tarde and later Cidade do Rio, he mobilized mass public protests and popular sentiment that forced the imperial parliament and Princess Isabel to sign the Lei Áurea in 1888.",
        "image": "/images/personalities/jose_do_patrocinio_portrait.jpg",
        "zoomSrc": "/images/personalities/jose_do_patrocinio_portrait.jpg",
        "zoomTitle": "José do Patrocínio",
        "zoomCaption": "1853–1905 • 'The Tiger of Abolition', intrepid journalist, orator, and novelist who galvanized mass public opposition to slavery.",
        "quote": {
            "text": "“A liberdade não se mendiga, conquista-se pela força das ideias e pela comunhão sagrada de um povo que despertou.”",
            "cite": "— Editorial na Gazeta da Tarde (1884)"
        },
        "keyWorks": [
            "Abolitionist crusade in Gazeta da Tarde and Cidade do Rio",
            "Novels Mota Coqueiro ou a Pena de Morte (1877) and Os Retirantes (1879)",
            "Co-founding of the Confederação Abolicionista (1883)",
            "Pioneering aeronautical experiments with dirigibles in Brazil ('Santa Cruz')"
        ],
        "tags": [
            "Abolitionism",
            "Journalism",
            "Literature",
            "Black History",
            "Oratory",
            "Brazilian History"
        ],
        "quotes": [
            {
                "text": "“O dia 13 de Maio não pertence aos gabinetes nem aos partidos: é o triunfo da consciência humana.”",
                "cite": "— Cidade do Rio (14 de Maio de 1888)"
            }
        ]
    },
    {
        "name": "Marshal Deodoro da Fonseca",
        "dates": "1827–1892",
        "birthYear": 1827,
        "summary": "Brazilian military commander and decorated veteran of the Paraguayan War who led the military coup of November 15, 1889, overthrowing Emperor Pedro II and the Empire of Brazil; served as the first President of the Republic of Brazil (1889–1891), enacting the First Republican Constitution before resigning following a political showdown with Congress.",
        "image": "/images/personalities/deodoro_da_fonseca_portrait.jpg",
        "zoomSrc": "/images/personalities/deodoro_da_fonseca_portrait.jpg",
        "zoomTitle": "Marshal Deodoro da Fonseca",
        "zoomCaption": "1827–1892 • Marshal who proclaimed the Republic of Brazil on November 15, 1889, serving as its first president.",
        "quote": {
            "text": "“Diga ao povo que a República está feita. Viva a República brasileira!”",
            "cite": "— Proclamação da República no Campo de Santana (15 de Novembro de 1889)"
        },
        "keyWorks": [
            "Proclamation of the Brazilian Republic (November 15, 1889)",
            "Leadership of the Provisional Government and promulgation of the 1891 Constitution",
            "Creation of the federal republic, civil marriage, and separation of church and state",
            "Decorated service as battalion commander in the Paraguayan War"
        ],
        "tags": [
            "Proclamation of the Republic",
            "Military",
            "Presidents of Brazil",
            "First Brazilian Republic",
            "Statesman"
        ],
        "quotes": [
            {
                "text": "“O Exército não fez outra coisa senão cumprir seu dever cívico de salvar a honra e o futuro da Pátria.”",
                "cite": "— Manifesto do Governo Provisório (1889)"
            }
        ]
    },
    {
        "name": "Mayor Francisco Pereira Passos",
        "dates": "1836–1913",
        "birthYear": 1836,
        "summary": "Brazilian civil engineer and reformist Mayor of the Federal District (Rio de Janeiro) from 1902 to 1906 under President Rodrigues Alves; modeled after Haussmann's Paris, his ambitious 'Bota-Abaixo' urban overhaul cut grand boulevards like Avenida Central (now Rio Branco), modernized ports, and installed modern sanitation, transforming colonial Rio into the glamorous 'Cidade Maravilhosa'.",
        "image": "/images/personalities/pereira_passos_portrait.jpg",
        "zoomSrc": "/images/personalities/pereira_passos_portrait.jpg",
        "zoomTitle": "Mayor Francisco Pereira Passos",
        "zoomCaption": "1836–1913 • Visionary engineer and Mayor of Rio de Janeiro who spearheaded the Haussmann-style modernization of the capital.",
        "quote": {
            "text": "“O Rio de Janeiro civiliza-se. É indispensável abrir à luz, ao ar e ao progresso os velhos labirintos coloniais de nossa capital.”",
            "cite": "— Relatório do Prefeito do Distrito Federal (1904)"
        },
        "keyWorks": [
            "Urban transformation and opening of Avenida Central (Avenida Rio Branco)",
            "Construction of the Theatro Municipal do Rio de Janeiro and waterfront boulevards",
            "Sanitary modernization of Rio de Janeiro in partnership with Dr. Oswaldo Cruz",
            "Construction of the Corcovado Cog Railway and Estrada de Ferro do Paraná"
        ],
        "tags": [
            "Urban Planning",
            "Rio de Janeiro",
            "Architecture",
            "Engineering",
            "Modernization"
        ],
        "quotes": [
            {
                "text": "“Uma grande cidade requer grandes avenidas, salubridade e beleza dignas de sua vocação continental.”",
                "cite": "— Discursos sobre a Reforma Urbana do Rio"
            }
        ]
    },
    {
        "name": "Anita Malfatti",
        "dates": "1889–1964",
        "birthYear": 1889,
        "summary": "Pioneering Brazilian expressionist painter whose controversial 1917 solo exhibition in São Paulo shocked conservative critics (notably Monteiro Lobato) and ignited the spark that coalesced Brazil's avant-garde artists into the revolutionary Modern Art Week of 1922 (Semana de Arte Moderna), permanently reshaping Latin American modernism.",
        "image": "/images/personalities/anita_malfatti_portrait.jpg",
        "zoomSrc": "/images/personalities/anita_malfatti_portrait.jpg",
        "zoomTitle": "Anita Malfatti",
        "zoomCaption": "1889–1964 • Groundbreaking Brazilian modernist painter whose 1917 exhibition catalyzed the Modern Art Week of 1922.",
        "quote": {
            "text": "“Pintei o que sentia com cores puras e gestos livres, sem pedir licença às academias empoeiradas do passado.”",
            "cite": "— Memórias da Semana de 22"
        },
        "keyWorks": [
            "A Boba (1915–1916)",
            "O Homem Amarelo (1915–1916)",
            "A Estudante Russa (1915)",
            "Exposição de Pintura Moderna (São Paulo, December 1917)"
        ],
        "tags": [
            "Modern Art Week",
            "Expressionism",
            "Brazilian Art",
            "Painting",
            "Modernism",
            "São Paulo"
        ],
        "quotes": [
            {
                "text": "“A arte autêntica nasce do tumulto interior e da busca desassombrada de novas linguagens visuais.”",
                "cite": "— Cartas e Entrevistas de Anita Malfatti"
            }
        ]
    },
    {
        "name": "Emiliano Di Cavalcanti",
        "dates": "1897–1976",
        "birthYear": 1897,
        "summary": "Iconic Brazilian modernist painter, muralist, and caricaturist who was a principal instigator and catalog designer of the 1922 Modern Art Week; celebrated for depicting the vibrant soul of urban Brazil, carnival, favelas, bohemian life, and sensual Afro-Brazilian women in rich, lyrical chromatic harmonies.",
        "image": "/images/personalities/emiliano_di_cavalcanti_portrait.jpg",
        "zoomSrc": "/images/personalities/emiliano_di_cavalcanti_portrait.jpg",
        "zoomTitle": "Emiliano Di Cavalcanti",
        "zoomCaption": "1897–1976 • Master Brazilian modernist painter and muralist who immortalized carnival, sambistas, and Brazilian popular life.",
        "quote": {
            "text": "“Minha pintura é o próprio Brasil: quente, sensual, trágico e festivo, nascido das ruas, dos morros e da mestiçagem que nos faz únicos no mundo.”",
            "cite": "— Viagem da Minha Vida (Memórias, 1955)"
        },
        "keyWorks": [
            "Samba (1925)",
            "Mulheres com Bandolim (1927)",
            "Cinco Moças de Guaratinguetá (1930)",
            "Organization and catalog illustration of the 1922 Modern Art Week"
        ],
        "tags": [
            "Modern Art Week",
            "Brazilian Art",
            "Painting",
            "Samba",
            "Bohemian Life",
            "Modernism"
        ],
        "quotes": [
            {
                "text": "“Não se compreende a arte brasileira sem o ritmo do samba e o sol generoso de nossa terra mestiça.”",
                "cite": "— Ensaios Sobre a Cor e o Povo"
            }
        ]
    },
    {
        "name": "Oswald de Andrade",
        "dates": "1890–1954",
        "birthYear": 1890,
        "summary": "Visionary Brazilian modernist poet, novelist, playwright, and polemical theorist who co-led the 1922 Modern Art Week; author of the incendiary 'Manifesto Pau-Brasil' (1924) and 'Manifesto Antropófago' (1928), declaring that Brazilian culture should cannibalize European influences, digesting and converting them into a radically original, authentic national identity.",
        "image": "/images/personalities/oswald_de_andrade_portrait.jpg",
        "zoomSrc": "/images/personalities/oswald_de_andrade_portrait.jpg",
        "zoomTitle": "Oswald de Andrade",
        "zoomCaption": "1890–1954 • Avant-garde literary rebel, author of the Cannibalist Manifesto (1928) and intellectual powerhouse of Brazilian modernism.",
        "quote": {
            "text": "“Tupi, or not tupi that is the question. Só a Antropofagia nos une. Socialmente. Economicamente. Filosoficamente.”",
            "cite": "— Manifesto Antropófago (Revista de Antropofagia, 1928)"
        },
        "keyWorks": [
            "Manifesto da Poesia Pau-Brasil (1924)",
            "Manifesto Antropófago (1928)",
            "Memórias Sentimentais de João Miramar (1924)",
            "Serafim Ponte Grande (1933)",
            "O Rei da Vela (1937)"
        ],
        "tags": [
            "Modern Art Week",
            "Literature",
            "Antropofagia",
            "Poetry",
            "Modernism",
            "Avant-Garde"
        ],
        "quotes": [
            {
                "text": "“A poesia para os poetas. A alegria é a prova dos nove.”",
                "cite": "— Manifesto Antropófago"
            }
        ]
    },
    {
        "name": "Floriano Peixoto",
        "dates": "1839–1895",
        "birthYear": 1839,
        "summary": "Brazilian marshal and the second President of the Republic of Brazil (1891–1894), remembered as the 'Iron Marshal' (Marechal de Ferro); assuming power after Deodoro's resignation, he ruthlessly suppressed the Navy Revolt (Revolta da Armada) and the Federalist Revolution in the south, consolidating the fledgling republican regime.",
        "image": "/images/personalities/floriano_peixoto_portrait.jpg",
        "zoomSrc": "/images/personalities/floriano_peixoto_portrait.jpg",
        "zoomTitle": "Floriano Peixoto",
        "zoomCaption": "1839–1895 • 'The Iron Marshal', second President of Brazil who forcefully consolidated the young Republic.",
        "quote": {
            "text": "“A República não recua. Se for preciso empunharei eu mesmo a espada para que a Constituição e a soberania do povo não sejam pisoteadas por rebeldes.”",
            "cite": "— Proclamação Presidencial durante a Revolta da Armada (1893)"
        },
        "keyWorks": [
            "Consolidation and stabilization of the young First Brazilian Republic",
            "Suppression of the Revolta da Armada and the Revolução Federalista",
            "Economic reforms supporting national industry and urban rents",
            "Designation of Desterro as Florianópolis in his honor"
        ],
        "tags": [
            "Presidents of Brazil",
            "Military",
            "First Brazilian Republic",
            "Marechal de Ferro",
            "Florianismo"
        ],
        "quotes": [
            {
                "text": "“Firmeza e retidão são as armas que sustentam a lei contra as tempestades da insurreição.”",
                "cite": "— Mensagem ao Congresso Nacional (1894)"
            }
        ]
    },
    {
        "name": "Campos Sales (Manuel Ferraz de Campos Sales)",
        "dates": "1841–1913",
        "birthYear": 1841,
        "summary": "Fourth President of Brazil (1898–1902), lawyer, and architect of the 'Política dos Governadores' (Policy of the Governors); engineered financial recovery following the Encilhamento crisis through the strict Funding Loan renegotiation with British financiers and established the oligarchic political equilibrium that ruled the First Republic for three decades.",
        "image": "/images/personalities/campos_sales_portrait.jpg",
        "zoomSrc": "/images/personalities/campos_sales_portrait.jpg",
        "zoomTitle": "Campos Sales (Manuel Ferraz de Campos Sales)",
        "zoomCaption": "1841–1913 • Fourth President of Brazil, architect of the Política dos Governadores and fiscal reformer of the First Republic.",
        "quote": {
            "text": "“Neste regime, o verdadeiro poder está nos governadores dos Estados; é do seu mútuo apoio com o governo federal que decorre a estabilidade da República.”",
            "cite": "— Da Propaganda à Presidência (Memórias Políticas, 1908)"
        },
        "keyWorks": [
            "Institutionalization of the Política dos Governadores",
            "Renegotiation of Brazil's external debt through the Funding Loan (1898)",
            "Fiscal stabilization and currency sanitation with Joaquim Murtinho",
            "Settlement of territorial border disputes with French Guiana (Contestado Amapaense)"
        ],
        "tags": [
            "Presidents of Brazil",
            "First Brazilian Republic",
            "Política dos Governadores",
            "Economy",
            "Statesman"
        ],
        "quotes": [
            {
                "text": "“Sem crédito saneado e moeda respeitada, não há soberania política duradoura.”",
                "cite": "— Mensagens Presidenciais de Campos Sales"
            }
        ]
    },
    {
        "name": "Afonso Pena",
        "dates": "1847–1909",
        "birthYear": 1847,
        "summary": "Sixth President of Brazil (1906–1909), jurist, and statesman from Minas Gerais; spearheaded railway expansion across the hinterlands, backed the Taubaté Agreement to valorize Brazilian coffee exports, established the Caixa de Conversão to stabilize currency, and supported pioneering communications expeditions across the Amazon under Cândido Rondon.",
        "image": "/images/personalities/afonso_pena_portrait.jpg",
        "zoomSrc": "/images/personalities/afonso_pena_portrait.jpg",
        "zoomTitle": "Afonso Pena",
        "zoomCaption": "1847–1909 • Sixth President of Brazil who expanded interior railways, backed coffee valorization, and promoted Amazon expeditions.",
        "quote": {
            "text": "“Governar é povoar; mas é também abrir estradas de ferro para ligar o litoral fecundo aos imensos sertões do interior.”",
            "cite": "— Discurso de Posse Presidencial (1906)"
        },
        "keyWorks": [
            "Expansion of interior rail lines (Estrada de Ferro Noroeste do Brasil)",
            "Implementation of the Convênio de Taubaté coffee price support policy",
            "Creation of the Caixa de Conversão to guarantee gold-backed stability",
            "Commissioning of the Rondon Telegraph Commission across the Amazon"
        ],
        "tags": [
            "Presidents of Brazil",
            "First Brazilian Republic",
            "Railways",
            "Coffee Economy",
            "Minas Gerais"
        ],
        "quotes": [
            {
                "text": "“A ferrovia é a veia por onde corre a civilização em direção ao coração da Pátria.”",
                "cite": "— Mensagens ao Congresso Nacional"
            }
        ]
    },
    {
        "name": "Nilo Peçanha",
        "dates": "1867–1924",
        "birthYear": 1867,
        "summary": "Seventh President of Brazil (1909–1910), jurist, and social progressive; assumed the presidency upon the death of Afonso Pena, founding the nationwide network of federal technical schools (Escolas de Aprendizes Artífices, forerunner of CEFET and IFs) and establishing the Indian Protection Service (SPI) headed by Cândido Rondon.",
        "image": "/images/personalities/nilo_pecanha_portrait.jpg",
        "zoomSrc": "/images/personalities/nilo_pecanha_portrait.jpg",
        "zoomTitle": "Nilo Peçanha",
        "zoomCaption": "1867–1924 • Seventh President of Brazil, father of technical vocational education and creator of the Indian Protection Service.",
        "quote": {
            "text": "“Arrancar o homem simples da miséria pelo trabalho técnico e profissional é o dever mais nobre que a República pode prestar aos seus filhos.”",
            "cite": "— Decreto nº 7.566 criando as Escolas de Aprendizes Artífices (1909)"
        },
        "keyWorks": [
            "Decreto nº 7.566 establishing the federal technical and vocational education network (1909)",
            "Creation of the Serviço de Proteção aos Índios (SPI) under Marechal Rondon (1910)",
            "Leadership of the Reação Republicana presidential campaign (1921–1922)",
            "Governor of Rio de Janeiro and diplomat"
        ],
        "tags": [
            "Presidents of Brazil",
            "Education",
            "First Brazilian Republic",
            "Vocational Training",
            "Indigenous Rights"
        ],
        "quotes": [
            {
                "text": "“Educar a mocidade trabalhadora é criar as oficinas da grandeza nacional.”",
                "cite": "— Discursos de Nilo Peçanha"
            }
        ]
    },
    {
        "name": "Venceslau Brás",
        "dates": "1868–1966",
        "birthYear": 1868,
        "summary": "Ninth President of Brazil (1914–1918), leading the nation with calm prudence through the upheaval of World War I; declared Brazil's entry into the war alongside the Allied Powers after German submarine attacks on Brazilian merchant ships, enacted Brazil's foundational Civil Code of 1916 (Código Civil Beviláqua), and ended the Contestado War.",
        "image": "/images/personalities/venceslau_bras_portrait.jpg",
        "zoomSrc": "/images/personalities/venceslau_bras_portrait.jpg",
        "zoomTitle": "Venceslau Brás",
        "zoomCaption": "1868–1966 • Ninth President of Brazil who led the country during World War I and promulgated the 1916 Civil Code.",
        "quote": {
            "text": "“O Brasil não buscou a guerra, mas não hesitará em defender nas águas do oceano e no concerto das nações a inviolabilidade de sua bandeira e a dignidade de seu povo.”",
            "cite": "— Mensagem de Declaração de Beligerância contra a Alemanha (1917)"
        },
        "keyWorks": [
            "Declaration of war against the German Empire and participation in World War I (1917)",
            "Promulgation of the landmark Brazilian Civil Code of 1916 (Código Civil Beviláqua)",
            "Resolution and military conclusion of the Guerra do Contestado (1916)",
            "Establishment of the Naval War Operations Division (DNOG)"
        ],
        "tags": [
            "Presidents of Brazil",
            "World War I",
            "First Brazilian Republic",
            "Civil Code",
            "Minas Gerais"
        ],
        "quotes": [
            {
                "text": "“Na tempestade internacional soubemos guardar a honra de nossa gente e a solidez da ordem civil.”",
                "cite": "— Relatórios da Presidência"
            }
        ]
    },
    {
        "name": "Epitácio Pessoa",
        "dates": "1865–1942",
        "birthYear": 1865,
        "summary": "Eleventh President of Brazil (1919–1922), eminent jurist, and the only Brazilian elected president while representing the nation abroad at the Paris Peace Conference (Treaty of Versailles); built extensive dams and public works to alleviate droughts in the Northeast, staged the 1922 Centennial International Exposition, and later served on the Permanent Court of International Justice at The Hague.",
        "image": "/images/personalities/epitacio_pessoa_portrait.jpg",
        "zoomSrc": "/images/personalities/epitacio_pessoa_portrait.jpg",
        "zoomTitle": "Epitácio Pessoa",
        "zoomCaption": "1865–1942 • Eleventh President of Brazil, Versailles delegate, Hague jurist, and pioneer of Northeast drought mitigation infrastructure.",
        "quote": {
            "text": "“É no sertão ressequido que a República deve demonstrar seu compromisso de redenção, erguendo açudes e abrindo estradas contra a tirania da seca.”",
            "cite": "— Mensagem Presidencial sobre as Obras do Nordeste (1920)"
        },
        "keyWorks": [
            "Head of the Brazilian delegation to the Versailles Peace Conference (1919)",
            "Extensive hydraulic anti-drought infrastructure across the Brazilian Northeast (DNOCS)",
            "Organization of the 1922 Independence Centennial International Exposition",
            "Judge at the Permanent Court of International Justice at The Hague (1923–1930)"
        ],
        "tags": [
            "Presidents of Brazil",
            "Jurist",
            "Versailles",
            "The Hague",
            "First Brazilian Republic",
            "Northeast Brazil"
        ],
        "quotes": [
            {
                "text": "“A justiça internacional entre os povos é a única garantia de uma paz duradoura.”",
                "cite": "— Pareceres na Corte de Haia"
            }
        ]
    },
    {
        "name": "Artur Bernardes",
        "dates": "1875–1955",
        "birthYear": 1875,
        "summary": "Twelfth President of Brazil (1922–1926), statesman, and nationalist; ruled almost his entire presidential term under state of siege while facing armed tenente rebellions (Revolta Paulista de 1924, Prestes Column), instituted income tax in Brazil, reformed the 1891 Constitution, and later became an ardent champion of national energy sovereignty in the 'O Petróleo É Nosso' movement.",
        "image": "/images/personalities/artur_bernardes_portrait.jpg",
        "zoomSrc": "/images/personalities/artur_bernardes_portrait.jpg",
        "zoomTitle": "Artur Bernardes",
        "zoomCaption": "1875–1955 • Twelfth President of Brazil who governed through the Tenentista uprisings and championed state energy sovereignty.",
        "quote": {
            "text": "“A autoridade legal do Estado não transige com o motim. As instituições que a soberania do voto criou hão de prevalecer contra qualquer sedição armada.”",
            "cite": "— Mensagem ao Congresso Nacional (1924)"
        },
        "keyWorks": [
            "Constitutional Reform of 1926 reinforcing federal authority",
            "Introduction of modern Brazilian federal income tax (Imposto de Renda)",
            "Creation of the Banco do Brasil currency emission monopoly",
            "Leadership of the post-presidential nationalistic campaign 'O Petróleo É Nosso'"
        ],
        "tags": [
            "Presidents of Brazil",
            "Tenentismo",
            "First Brazilian Republic",
            "Petrobras Campaign",
            "Nationalism"
        ],
        "quotes": [
            {
                "text": "“Defender as riquezas do nosso subsolo é assegurar a própria independência econômica do Brasil.”",
                "cite": "— Discursos em defesa do Monopólio Estatal do Petróleo"
            }
        ]
    },
    {
        "name": "Washington Luís",
        "dates": "1869–1957",
        "birthYear": 1869,
        "summary": "Thirteenth and final President of the First Brazilian Republic (1926–1930), famously coining the motto 'Governar é abrir estradas'; constructed Brazil's first paved highways (Rio-São Paulo, Rio-Petrópolis) and stabilized finances until the 1929 Wall Street Crash shattered the coffee economy, culminating in his overthrow by the Revolution of 1930.",
        "image": "/images/personalities/washington_luis_portrait.jpg",
        "zoomSrc": "/images/personalities/washington_luis_portrait.jpg",
        "zoomTitle": "Washington Luís",
        "zoomCaption": "1869–1957 • Final President of the First Republic who championed modern highways ('Governar é abrir estradas') prior to the 1930 Revolution.",
        "quote": {
            "text": "“Governar é abrir estradas; porque abrir estradas é povoar, é produzir, é civilizar e enriquecer a Pátria.”",
            "cite": "— Lema Presidencial e Discurso na Abertura da Rodovia Rio-São Paulo (1928)"
        },
        "keyWorks": [
            "Construction of the modern Rio–São Paulo and Rio–Petrópolis highways",
            "Financial and monetary stabilization program prior to the 1929 Great Crash",
            "Creation of the Federal Highway Police (Polícia Rodoviária Federal, 1928)",
            "Promulgation of the Lei Celerada (1927)"
        ],
        "tags": [
            "Presidents of Brazil",
            "First Brazilian Republic",
            "Highways",
            "Infrastructure",
            "Revolution of 1930"
        ],
        "quotes": [
            {
                "text": "“As estradas unem os corações dos homens e as forças da economia num só feixe de progresso.”",
                "cite": "— Mensagem Presidencial de 1928"
            }
        ]
    },
    {
        "name": "Júlio Prestes",
        "dates": "1882–1946",
        "birthYear": 1882,
        "summary": "Brazilian lawyer, governor of São Paulo, and the officially elected President of Brazil in the March 1930 election; his contested victory over Getúlio Vargas fractured the traditional 'café com leite' political alliance, triggering the armed Revolution of 1930 that deposed Washington Luís and prevented Prestes from ever taking office.",
        "image": "/images/personalities/julio_prestes_portrait.jpg",
        "zoomSrc": "/images/personalities/julio_prestes_portrait.jpg",
        "zoomTitle": "Júlio Prestes",
        "zoomCaption": "1882–1946 • Governor of São Paulo and President-elect of Brazil whose 1930 victory sparked the Revolution of 1930.",
        "quote": {
            "text": "“São Paulo sabe trabalhar e produzir; pelo sufrágio das urnas honraremos a herança republicana de paz e respeito à Constituição.”",
            "cite": "— Discurso de Campanha Presidencial (1930)"
        },
        "keyWorks": [
            "Modernization of the Sorocabana railway and Santos port expansions as Governor of São Paulo",
            "Founding of the Instituto Biológico de São Paulo (1927)",
            "Official winner of the 1930 Brazilian presidential election",
            "Exile and subsequent participation in the Constitutionalist Revolution of 1932"
        ],
        "tags": [
            "First Brazilian Republic",
            "Revolution of 1930",
            "Presidents of Brazil",
            "São Paulo",
            "Lawyer"
        ],
        "quotes": [
            {
                "text": "“O voto popular é o juiz inapelável das democracias representativas.”",
                "cite": "— Manifestos da Campanha Eleitoral de 1930"
            }
        ]
    },
    {
        "name": "José Linhares",
        "dates": "1886–1957",
        "birthYear": 1886,
        "summary": "Distinguished Brazilian jurist and President of the Federal Supreme Court (STF) who served as interim President of Brazil (1945–1946) following the military ouster of Getúlio Vargas; presided over the peaceful return to constitutional democracy, organized free general elections, and oversaw the transition to the 1946 democratic republic.",
        "image": "/images/personalities/jose_linhares_portrait.jpg",
        "zoomSrc": "/images/personalities/jose_linhares_portrait.jpg",
        "zoomTitle": "José Linhares",
        "zoomCaption": "1886–1957 • Chief Justice of the Supreme Court who led the 1945–1946 transition from the Estado Novo to democracy.",
        "quote": {
            "text": "“A Suprema Corte cumpre o seu dever de zelar pela pacificação dos espíritos e pela mais rigorosa lisura nas eleições que devolverão o poder ao povo.”",
            "cite": "— Discurso de Posse no Palácio do Catete (Outubro de 1945)"
        },
        "keyWorks": [
            "Organization and execution of the landmark free general elections of December 2, 1945",
            "Transition government dismantling Estado Novo authoritarian institutions",
            "Re-establishment of autonomous municipal governance across Brazil",
            "Longstanding service as Chief Justice of the Supremo Tribunal Federal (1945–1949)"
        ],
        "tags": [
            "Presidents of Brazil",
            "Supreme Court",
            "Democratization",
            "Law",
            "Estado Novo"
        ],
        "quotes": [
            {
                "text": "“A magistratura no governo é a garantia viva da neutralidade e do primado da lei.”",
                "cite": "— Alocuções de José Linhares"
            }
        ]
    },
    {
        "name": "Eurico Gaspar Dutra",
        "dates": "1883–1974",
        "birthYear": 1883,
        "summary": "Brazilian marshal, Minister of War during World War II, and sixteenth President of Brazil (1946–1951); oversaw the promulgation of the democratic 1946 Constitution, aligned Brazil staunchly with the United States in the early Cold War, inaugurated the landmark Presidente Dutra Highway (BR-116), and drafted the pioneereing SALTE economic development plan.",
        "image": "/images/personalities/eurico_gaspar_dutra_portrait.jpg",
        "zoomSrc": "/images/personalities/eurico_gaspar_dutra_portrait.jpg",
        "zoomTitle": "Eurico Gaspar Dutra",
        "zoomCaption": "1883–1974 • Marshal and sixteenth President of Brazil who promulgated the 1946 Constitution and built the Rio-São Paulo highway.",
        "quote": {
            "text": "“A nova Constituição de 1946 restabelece para sempre a liberdade, o estado de direito e a soberania do Congresso Nacional.”",
            "cite": "— Alocução na Promulgação da Constituição de 1946"
        },
        "keyWorks": [
            "Promulgation of the democratic 1946 Brazilian Constitution",
            "Construction of the Rodovia Presidente Dutra connecting Rio de Janeiro and São Paulo (1951)",
            "Creation of the SALTE Plan (Saúde, Alimentação, Transporte e Energia)",
            "Organization of the Brazilian Expeditionary Force (FEB) as Minister of War (1942–1945)"
        ],
        "tags": [
            "Presidents of Brazil",
            "Military",
            "Constitution of 1946",
            "Highways",
            "Cold War",
            "FEB"
        ],
        "quotes": [
            {
                "text": "“A ordem e a disciplina social são as sólidas fundações em que a verdadeira democracia se assenta.”",
                "cite": "— Mensagens Presidenciais de Eurico Gaspar Dutra"
            }
        ]
    },
    {
        "name": "Café Filho (João Café Filho)",
        "dates": "1899–1970",
        "birthYear": 1899,
        "summary": "Eighteenth President of Brazil (1954–1955), journalist, and lawyer from Rio Grande do Norte; ascended to the presidency upon the tragic suicide of Getúlio Vargas, forming a conservative orthodox cabinet under Eugenio Gudin to curb inflation and successfully steering the country through intense political turbulence toward scheduled general elections.",
        "image": "/images/personalities/cafe_filho_portrait.jpg",
        "zoomSrc": "/images/personalities/cafe_filho_portrait.jpg",
        "zoomTitle": "Café Filho (João Café Filho)",
        "zoomCaption": "1899–1970 • Eighteenth President of Brazil who assumed office following Vargas's suicide in 1954, stabilizing the nation.",
        "quote": {
            "text": "“Assumo este governo em hora de dor e comoção para assegurar que a lei, a ordem constitucional e o voto do povo soberano sejam rigorosamente mantidos.”",
            "cite": "— Discurso de Posse Presidencial (24 de Agosto de 1954)"
        },
        "keyWorks": [
            "Stabilization of the executive branch following the August 1954 political crisis",
            "Implementation of economic stabilization policies through Minister Eugênio Gudin (Instrução 113 da Sumoc)",
            "Supervision of the peaceful October 1955 presidential elections",
            "Memoirs Do Sindicato ao Catete (1966)"
        ],
        "tags": [
            "Presidents of Brazil",
            "Rio Grande do Norte",
            "Journalism",
            "Political Transition",
            "1950s Brazil"
        ],
        "quotes": [
            {
                "text": "“O dever supremo de um homem público na crise é não perder a calma e manter abertos os canais do diálogo.”",
                "cite": "— Do Sindicato ao Catete"
            }
        ]
    },
    {
        "name": "Carlos Luz",
        "dates": "1894–1961",
        "birthYear": 1894,
        "summary": "Brazilian lawyer and President of the Chamber of Deputies who holds the distinction of having the shortest presidential tenure in Brazilian history (November 8–11, 1955, roughly 48 hours); deposed by General Henrique Teixeira Lott's 'preventive counter-coup' to guarantee the constitutionally mandated inauguration of President-elect Juscelino Kubitschek.",
        "image": "/images/personalities/carlos_luz_portrait.jpg",
        "zoomSrc": "/images/personalities/carlos_luz_portrait.jpg",
        "zoomTitle": "Carlos Luz",
        "zoomCaption": "1894–1961 • President of the Chamber who served as President of Brazil for 48 hours during the November 1955 crisis.",
        "quote": {
            "text": "“Como presidente da Câmara, assumo o Catete estritamente segundo a ordem de sucessão da Carta Magna de 1946.”",
            "cite": "— Declaração na Posse Interina (Novembro de 1955)"
        },
        "keyWorks": [
            "Presidency of the Chamber of Deputies (1955)",
            "Interim presidency of Brazil during the constitutional crisis of November 1955",
            "Minister of Justice and Internal Affairs under Eurico Gaspar Dutra"
        ],
        "tags": [
            "Presidents of Brazil",
            "Minas Gerais",
            "Chamber of Deputies",
            "1950s Brazil",
            "Constitutional Crisis"
        ],
        "quotes": [
            {
                "text": "“A lealdade à Constituição deve estar acima de conveniências de facções políticas.”",
                "cite": "— Pronunciamentos no Parlamento"
            }
        ]
    },
    {
        "name": "Nereu Ramos",
        "dates": "1888–1958",
        "birthYear": 1888,
        "summary": "Twentieth President of Brazil (1955–1956), prominent jurist, and Vice President of the Federal Senate from Santa Catarina; governed under a congressionally sanctioned state of siege following the November 11 movement, successfully pacifying political tensions and guaranteeing the historic transfer of power to Juscelino Kubitschek and João Goulart in January 1956.",
        "image": "/images/personalities/nereu_ramos_portrait.jpg",
        "zoomSrc": "/images/personalities/nereu_ramos_portrait.jpg",
        "zoomTitle": "Nereu Ramos",
        "zoomCaption": "1888–1958 • Twentieth President of Brazil who safeguarded constitutional order to ensure the inauguration of Juscelino Kubitschek in 1956.",
        "quote": {
            "text": "“Recebi a chefia da Nação para cumprir uma missão intransferível: entregar o poder, nos prazos e termos exatos da Constituição, aos eleitos pelo povo.”",
            "cite": "— Mensagem de Transmissão de Cargo a Juscelino Kubitschek (31 de Janeiro de 1956)"
        },
        "keyWorks": [
            "Pacification of the armed forces and executive branch under Estado de Sítio (1955–1956)",
            "Guaranteed inauguration of President Juscelino Kubitschek and Vice President João Goulart",
            "Interventor and Governor of Santa Catarina (1935–1945)",
            "Vice-President of the Federal Senate"
        ],
        "tags": [
            "Presidents of Brazil",
            "Santa Catarina",
            "Federal Senate",
            "Democracy",
            "Juscelino Kubitschek"
        ],
        "quotes": [
            {
                "text": "“A reconciliação política sob o teto da legalidade é a maior vitória da República.”",
                "cite": "— Discursos Parlamentares de Nereu Ramos"
            }
        ]
    },
    {
        "name": "Ranieri Mazzilli",
        "dates": "1910–1975",
        "birthYear": 1910,
        "summary": "Brazilian lawyer, journalist, and long-serving President of the Chamber of Deputies who twice served as interim President of Brazil during dramatic turning points in national history: first for two weeks after Jânio Quadros's unexpected resignation in 1961, and second following the military overthrow of João Goulart on April 2, 1964.",
        "image": "/images/personalities/ranieri_mazzilli_portrait.jpg",
        "zoomSrc": "/images/personalities/ranieri_mazzilli_portrait.jpg",
        "zoomTitle": "Ranieri Mazzilli",
        "zoomCaption": "1910–1975 • President of the Chamber of Deputies who served as interim President of Brazil during the crises of 1961 and 1964.",
        "quote": {
            "text": "“Assumo interinamente a Presidência nos estritos termos constitucionais para evitar o vácuo de poder e assegurar a paz da família brasileira.”",
            "cite": "— Discurso no Congresso Nacional (2 de Abril de 1964)"
        },
        "keyWorks": [
            "Interim presidency during the August–September 1961 resignation crisis and parliamentary amendment",
            "Interim presidency following the April 1964 military coup prior to Castelo Branco",
            "Presidency of the Chamber of Deputies for over seven consecutive terms (1958–1965)"
        ],
        "tags": [
            "Presidents of Brazil",
            "Chamber of Deputies",
            "1964 Crisis",
            "Interim President",
            "Lawyer"
        ],
        "quotes": [
            {
                "text": "“Ao Parlamento cabe ser a âncora serena em meio às tempestades institucionais.”",
                "cite": "— Discursos no Plenário da Câmara"
            }
        ]
    },
    {
        "name": "José Sarney",
        "dates": "1930–Present",
        "birthYear": 1930,
        "summary": "Thirty-first President of Brazil (1985–1990), author, and member of the Brazilian Academy of Letters; upon the tragic illness and death of President-elect Tancredo Neves, Sarney became the first civilian president after twenty-one years of military dictatorship, steering the democratic transition, convening the National Constituent Assembly, and promulgating the landmark 'Citizen Constitution' of 1988.",
        "image": "/images/personalities/jose_sarney_portrait.jpg",
        "zoomSrc": "/images/personalities/jose_sarney_portrait.jpg",
        "zoomTitle": "José Sarney",
        "zoomCaption": "1930–Present • First civilian President of the New Republic (1985–1990) who oversaw the promulgation of the 1988 Citizen Constitution.",
        "quote": {
            "text": "“Brasileiros e brasileiras: a transição democrática está concluída. Esta Constituição pertence ao povo e será a bússola de um país livre, justo e soberano.”",
            "cite": "— Pronunciamento na Promulgação da Constituição Cidadã (5 de Outubro de 1988)"
        },
        "keyWorks": [
            "Leadership of the New Republic and democratic consolidation (1985–1990)",
            "Convening and promulgation of the landmark 1988 Federal Constitution (Constituição Cidadã)",
            "Creation of the Plano Cruzado economic reform (1986)",
            "Foundational negotiations with Argentina that established Mercosur (Declaração de Foz do Iguaçu, 1985)",
            "Literary works including Brejal dos Guajas and Marimbondos de Fogo; Member of the Academia Brasileira de Letras"
        ],
        "tags": [
            "Presidents of Brazil",
            "New Republic",
            "Constitution of 1988",
            "Democratization",
            "Mercosur",
            "Literature",
            "Maranhão"
        ],
        "quotes": [
            {
                "text": "“A democracia não é apenas um regime de leis; é um compromisso diário com a convivência fraterna e a liberdade de pensamento.”",
                "cite": "— Discurso de Despedida no Palácio do Planalto (1990)"
            }
        ]
    },
    {
        "name": "Fernando Collor (Fernando Collor de Mello)",
        "dates": "1949–Present",
        "birthYear": 1949,
        "summary": "Thirty-second President of Brazil (1990–1992), celebrated as the first directly elected president by universal suffrage in nearly three decades; launched bold market deregulation, opened Brazilian industries to foreign competition, enacted the drastic Plano Collor asset freeze to tackle hyperinflation, and became the first president in Latin America to be impeached on corruption charges, resigning in December 1992.",
        "image": "/images/personalities/fernando_collor_portrait.jpg",
        "zoomSrc": "/images/personalities/fernando_collor_portrait.jpg",
        "zoomTitle": "Fernando Collor (Fernando Collor de Mello)",
        "zoomCaption": "1949–Present • First directly elected president after the dictatorship, who initiated market opening before resigning during a 1992 impeachment.",
        "quote": {
            "text": "“Nós temos apenas uma bala na agulha para liquidar a hiperinflação, e não podemos errar o alvo.”",
            "cite": "— Entrevista Coletiva no Lançamento do Plano Collor (Março de 1990)"
        },
        "keyWorks": [
            "Plano Collor economic shock therapy and temporary liquidity freeze (1990)",
            "Tariff reductions and commercial opening to foreign manufactured goods",
            "Signing of the Treaty of Asunción formally establishing Mercosur (1991)",
            "Hosting of the landmark Rio-92 Earth Summit (ECO-92) in Rio de Janeiro"
        ],
        "tags": [
            "Presidents of Brazil",
            "New Republic",
            "Economic Liberalization",
            "Mercosur",
            "ECO-92",
            "Alagoas"
        ],
        "quotes": [
            {
                "text": "“O Brasil não pode continuar isolado do mundo moderno por barreiras anacrônicas e corporativistas.”",
                "cite": "— Discursos de Abertura Econômica"
            }
        ]
    },
    {
        "name": "Dilma Rousseff",
        "dates": "1947–Present",
        "birthYear": 1947,
        "summary": "Thirty-sixth President of Brazil (2011–2016), economist, and former Marxist guerrilla who made history as the first woman elected to the Brazilian presidency; prioritized massive social housing (Minha Casa Minha Vida), expanded the Bolsa Família program, established the National Truth Commission to investigate human rights abuses during the dictatorship, and later served as President of the New Development Bank (BRICS Bank).",
        "image": "/images/personalities/dilma_rousseff_portrait.jpg",
        "zoomSrc": "/images/personalities/dilma_rousseff_portrait.jpg",
        "zoomTitle": "Dilma Rousseff",
        "zoomCaption": "1947–Present • First woman President of Brazil (2011–2016), champion of social inclusion, and President of the BRICS New Development Bank.",
        "quote": {
            "text": "“Venho para abrir portas para que muitas outras mulheres possam também ser presidentas e para que nenhuma menina neste país duvide de sua capacidade de sonhar e liderar.”",
            "cite": "— Discurso de Posse no Congresso Nacional (1º de Janeiro de 2011)"
        },
        "keyWorks": [
            "First female President of the Federative Republic of Brazil (2011–2016)",
            "Creation and leadership of the National Truth Commission (Comissão Nacional da Verdade)",
            "Expansion of Minha Casa Minha Vida, Pronatec, and the Bolsa Família programs",
            "Sanctioning of the Marco Civil da Internet (Internet Bill of Rights, 2014)",
            "Presidency of the New Development Bank (NDB / BRICS Bank, 2023–Present)"
        ],
        "tags": [
            "Presidents of Brazil",
            "Women in Politics",
            "New Republic",
            "Social Programs",
            "BRICS",
            "Human Rights"
        ],
        "quotes": [
            {
                "text": "“A história nos ensina que a democracia é uma conquista que exige permanente vigilância e coragem contra o arbítrio.”",
                "cite": "— Discurso perante o Senado Federal (2016)"
            }
        ]
    },
    {
        "name": "Michel Temer",
        "dates": "1940–Present",
        "birthYear": 1940,
        "summary": "Thirty-seventh President of Brazil (2016–2018), constitutional law scholar, and long-standing political leader; ascended from the vice presidency following the 2016 impeachment of Dilma Rousseff, enacting consequential economic and legislative reforms including the constitutional public spending ceiling (Emenda do Teto de Gastos) and comprehensive labor reform (Reforma Trabalhista).",
        "image": "/images/personalities/michel_temer_portrait.jpg",
        "zoomSrc": "/images/personalities/michel_temer_portrait.jpg",
        "zoomTitle": "Michel Temer",
        "zoomCaption": "1940–Present • Constitutional scholar and thirty-seventh President of Brazil who enacted the spending ceiling and labor modernization.",
        "quote": {
            "text": "“Não fale em crise, trabalhe. O Brasil precisa de harmonia entre os Poderes e de reformas estruturais corajosas para recuperar o crescimento econômico.”",
            "cite": "— Pronunciamento à Nação no Palácio do Planalto (2016)"
        },
        "keyWorks": [
            "Emenda Constitucional nº 95 (Novo Regime Fiscal / Teto de Gastos Públicos)",
            "Comprehensive Modernization of Brazilian Labor Law (Reforma Trabalhista - Lei nº 13.467/2017)",
            "Reforma do Ensino Médio (High school educational reform)",
            "Prominent treatise Elementos de Direito Constitucional and multiple terms as President of the Chamber of Deputies"
        ],
        "tags": [
            "Presidents of Brazil",
            "Constitutional Law",
            "Labor Reform",
            "New Republic",
            "Statesman",
            "São Paulo"
        ],
        "quotes": [
            {
                "text": "“A Constituição não é um texto frio; é o pacto solene de equilíbrio institucional entre as forças da República.”",
                "cite": "— Elementos de Direito Constitucional"
            }
        ]
    },
    {
        "name": "Jair Bolsonaro",
        "dates": "1955–Present",
        "birthYear": 1955,
        "summary": "Thirty-eighth President of Brazil (2019–2022), former army captain, and seven-term federal deputy; led a nationalist-conservative political movement that reshaped contemporary Brazilian politics, passing landmark pension reform (Reforma da Previdência), creating the Auxílio Brasil welfare program, signing the Economic Freedom Law, and accelerating rapid digital banking integration (Pix).",
        "image": "/images/personalities/jair_bolsonaro_portrait.jpg",
        "zoomSrc": "/images/personalities/jair_bolsonaro_portrait.jpg",
        "zoomTitle": "Jair Bolsonaro",
        "zoomCaption": "1955–Present • Thirty-eighth President of Brazil who passed pension reform, the Economic Freedom Law, and led a conservative political wave.",
        "quote": {
            "text": "“Brasil acima de tudo, Deus acima de todos. Vamos desregulamentar a economia e devolver ao cidadão a liberdade para produzir e empreender.”",
            "cite": "— Discurso de Posse no Palácio do Planalto (1º de Janeiro de 2019)"
        },
        "keyWorks": [
            "Reforma da Previdência (Emenda Constitucional nº 103/2019)",
            "Lei da Liberdade Econômica (Law 13.874/2019) cutting bureaucracy for businesses",
            "Creation of the Auxílio Brasil and Auxílio Emergencial income transfer programs",
            "Privatization of Eletrobras and Marco Legal do Saneamento Básico (2020)"
        ],
        "tags": [
            "Presidents of Brazil",
            "Conservatism",
            "Pension Reform",
            "New Republic",
            "Military",
            "Economic Liberalism"
        ],
        "quotes": [
            {
                "text": "“A liberdade de um povo não tem preço e deve ser defendida todos os dias por cada cidadão patriota.”",
                "cite": "— Discursos Presidenciais de Jair Bolsonaro"
            }
        ]
    }
]

# Ensure slugs and keywords are computed
for p in new_personalities:
    if 'slug' not in p:
        p['slug'] = slugify(p['name'])
    # keywords
    kw = p.get('keywords', '')
    if not kw:
        parts = [p['name'].lower()] + [t.lower() for t in p.get('tags', [])] + [kw_item.lower() for kw_item in p.get('keyWorks', [])]
        p['keywords'] = ' '.join(parts)

print(f"Prepared {len(new_personalities)} personalities to add.")
