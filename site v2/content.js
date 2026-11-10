// ─────────────────────────────────────────────────────────────
// Contenu éditable : crédits photo, rencontres, partenaires, vidéos, distinctions.
// Aucune clé d'API ici : uniquement des textes et des noms de fichiers.
// ─────────────────────────────────────────────────────────────

// Crédit affiché sur chaque image (clé = nom du fichier sans extension).
// null = crédit pas encore renseigné → le badge est simplement masqué (aucun texte affiché).
// Le crédit s'affichera automatiquement dès qu'on remplira la valeur (ex. OWN ou « © … »).
const OWN = '© Tatiana Sagbohan Consulting';
const CREDITS = {
  // photos du site
  'diplomees': '© Brasil-RelationsInternationales · Palácio Itamaraty',
  'tatiana-assise': '© Legendart 2024',
  'drapeaux': '© Tatiana Sagbohan Consulting × Backtotheroots 2025',
  'salvador': OWN,
  'benin-slot': OWN,
  'presse-fraternite': 'Quotidien Fraternité n°6344 · 07/04/2025',
  'musee-salvador': null,
  'danse-bahia': null,
  'conference-table': null,
  'oidp-rio-scene': null,
  'finab-scene': null,
  // FinAB (crédit confirmé par la cliente)
  'panel-fauteuils': '© FinAB',
  'finab-panel3': '© FinAB',
  // passages télé (crédit confirmé par la cliente)
  'tv-rtb-journal': 'Capture — journal télévisé de 20h · SRTB · 01/2025',
  'tv-rtb-matins': 'Capture — émission 5/7 matin · SRTB · 01/2025',
  // affiches : crédit lu sur l'affiche
  'affiche-conf-diplomatie': '© FinAB',
  'affiche-conf-arts': '© FinAB',
  'affiche-finab-partenaire': '© FinAB',
  'affiche-diasporama': '© Institut français du Bénin',
  // image d'illustration (Pexels)
  'ocean': 'Photo : Eric Seddon · Pexels',
  // Porto Alegre — photo de terrain (novembre 2026)
  'porto-musee-negro': OWN,
  // novembre 2026
  'prince-custodio-famille': '© Tatiana Sagbohan · Porto Alegre, juin 2026',
  'opera-vodun': 'Visuel du projet Opéra Vodun · Tatiana Sagbohan Consulting',
  'sepromi-audience': null,
  'audience-sepromi': 'TatianaSagbohanConsulting 11.2024',
  'future-affairs-tatiana': null,
  'future-affairs-musee': null,
  // distinction institutionnelle (document officiel remis par la Préfecture)
  'certificado-niteroi': '© Prefeitura de Niterói'
};

// Rencontres récentes (informations lues sur les affiches).
// img = fichier dans assets/img/ ; d = date/heure ; t = titre ; p = lieu ; x = texte  → [fr, pt, en]
const EVENTS = [
  {
    img: 'g/affiche-conf-arts',
    d: ['26 février · 14h', '26 de fevereiro · 14h', '26 February · 2 pm'],
    t: ['FinAB (édition 4) — Conférence « Les arts au service de la paix »', 'FinAB (edição 4) — Conferência « As artes a serviço da paz »', 'FinAB (4th edition) — Conference “The arts serving peace”'],
    p: ['Institut français de Cotonou', 'Instituto Francês de Cotonou', 'Institut français de Cotonou'],
    x: ['Éveiller les consciences dès le plus jeune âge. Tatiana Sagbohan y intervient en tant que modératrice.', 'Despertar as consciências desde a mais tenra idade. Tatiana Sagbohan participa como moderadora.', 'Awakening consciences from the earliest age. Tatiana Sagbohan takes part as moderator.']
  },
  {
    img: 'g/affiche-diasporama',
    d: ['21 janvier 2026 · 18h30', '21 de janeiro de 2026 · 18h30', '21 January 2026 · 6:30 pm'],
    t: ['Diasporama — « Quel rôle pour la diaspora béninoise ? »', 'Diasporama — « Qual o papel da diáspora beninense? »', 'Diasporama — “What role for the Beninese diaspora?”'],
    p: ['Institut français du Bénin (Paillotte)', 'Instituto Francês do Benim (Paillotte)', 'Institut français du Bénin (Paillotte)'],
    x: ['Débat avec Mina Agossi, Romain Da Costa et Tatiana Sagbohan. Entrée libre et gratuite.', 'Debate com Mina Agossi, Romain Da Costa e Tatiana Sagbohan. Entrada livre e gratuita.', 'Debate with Mina Agossi, Romain Da Costa and Tatiana Sagbohan. Free admission.']
  },
  {
    img: 'g/affiche-conf-diplomatie',
    d: ['25 février · 10h', '25 de fevereiro · 10h', '25 February · 10 am'],
    t: ['FinAB (édition 3) — Conférence-débat « Diplomatie culturelle »', 'FinAB (edição 3) — Conferência-debate « Diplomacia cultural »', 'FinAB (3rd edition) — Panel “Cultural diplomacy”'],
    p: ['Palais des Congrès (Salle bleue)', 'Palácio dos Congressos (Sala azul)', 'Palais des Congrès (Blue room)'],
    x: ['Bénin, carrefour des Afrodescendants : une diplomatie culturelle stratégique pour le développement des industries créatives.', 'Benim, encruzilhada dos afrodescendentes: uma diplomacia cultural estratégica para o desenvolvimento das indústrias criativas.', 'Benin, crossroads of Afro-descendants: a strategic cultural diplomacy for the development of creative industries.']
  }
];

// Partenaires confirmés. Ajouter { name, sub:[fr,pt,en], logo:'assets/img/partners/xxx.png', url:'https://…' }.
const PARTNERS = [
  { name: 'FinAB', sub: ['La grande fête des arts africains — édition 4', 'A grande festa das artes africanas — edição 4', 'The great African arts festival — 4th edition'], img: 'g/affiche-finab-partenaire' }
];
const PARTNER_PLACEHOLDERS = 5; // nombre de cases « logo à compléter »

// Vidéos : laisser vide tant qu'il n'y en a pas (une case « à compléter » s'affiche).
// { type:'youtube', id:'XXXXXXXXXXX', title:['fr','pt','en'] }
// { type:'vimeo',   id:'123456789',   title:[…] }
// { type:'mp4',     src:'assets/video/mon-film.mp4', poster:'assets/img/xxx.jpg', title:[…] }
const VIDEOS = [];

// Distinctions & reconnaissances : laisser vide tant que les images ne sont pas reçues.
// { img:'assets/img/distinctions/xxx.jpg', credit:'xxx' (clé de CREDITS, facultatif),
//   t:[titre fr, pt, en], x:[texte explicatif fr, pt, en], d:'année / date' }
// Le texte français est la traduction explicative de la distinction (traduction portugaise fournie par la cliente).
const AWARDS = [
  {
    wide: true,
    img: 'assets/img/distinctions/certificado-niteroi.jpg',
    credit: 'certificado-niteroi',
    d: ['3ᵉ anniversaire du Baobá', '3.º aniversário do Baobá', '3rd anniversary of Baobá'],
    t: [
      'Distinction institutionnelle — Préfecture de Niterói (Rio de Janeiro), Brésil',
      'Distinção institucional — Prefeitura de Niterói (Rio de Janeiro), Brasil',
      'Institutional distinction — City of Niterói (Rio de Janeiro), Brazil'
    ],
    x: [
      'Oluwafemi Tatiana Marizella Gbossa Sagbohan a reçu une reconnaissance officielle de la Préfecture de Niterói (Rio de Janeiro), par l’intermédiaire de son Secrétariat municipal aux Droits humains et à la Citoyenneté, en partenariat avec la SUPIR et le Baobá, pour sa contribution à la préservation des mémoires afrodescendantes et à la promotion de l’égalité raciale. Cette distinction s’inscrit dans un parcours académique et professionnel construit à Niterói, terre de formation et d’engagement, et consacré aux relations internationales, à la diplomatie culturelle, à l’économie culturelle et à l’architecture de dispositifs culturels et diplomatiques dédiés aux mondes afrodescendants, avec une attention particulière au rapprochement stratégique entre le Brésil et le Bénin.',
      'Oluwafemi Tatiana Marizella Gbossa Sagbohan recebeu um reconhecimento oficial da Prefeitura de Niterói (Rio de Janeiro), por meio da sua Secretaria Municipal de Direitos Humanos e Cidadania, em parceria com a SUPIR e o Baobá, pela sua contribuição à preservação das memórias afrodescendentes e à promoção da igualdade racial. Esta distinção inscreve-se num percurso académico e profissional construído em Niterói, terra de formação e de compromisso, dedicado às relações internacionais, à diplomacia cultural, à economia cultural e à arquitetura de dispositivos culturais e diplomáticos dedicados aos mundos afrodescendentes, com particular atenção à aproximação estratégica entre o Brasil e o Benim.',
      'Oluwafemi Tatiana Marizella Gbossa Sagbohan received an official recognition from the City of Niterói (Rio de Janeiro), through its Municipal Secretariat for Human Rights and Citizenship, in partnership with SUPIR and Baobá, for her contribution to preserving Afro-descendant memories and promoting racial equality. This distinction is part of an academic and professional path built in Niterói, a land of training and commitment, devoted to international relations, cultural diplomacy, cultural economy and the architecture of cultural and diplomatic mechanisms serving Afro-descendant worlds, with particular attention to the strategic rapprochement between Brazil and Benin.'
    ]
  }
];

// Notes de presse / articles : l'image s'affiche en entier, le texte est dessous (ou à côté).
// { img, d: date, t: [titre fr,pt,en], k: [rubrique fr,pt,en], x: [[paragraphes fr], [pt], [en]] }
// Pour un long article : ajouter simplement des paragraphes dans x.
const NOTES = [
  {
    place: 'about', // affichée sous la photo de « À propos » ; sans place → section Notes de presse
    img: 'g/audience-sepromi',
    d: '11.2024',
    k: ['Diplomatie culturelle', 'Diplomacia cultural', 'Cultural diplomacy'],
    t: ['Audience avec Ângela Guimarães – Secrétaire d’État de la SEPROMI, État de Bahia, Brésil', 'Audiência com Ângela Guimarães – Secretária da SEPROMI, Estado da Bahia, Brasil', 'Audience with Ângela Guimarães – Secretary of SEPROMI, State of Bahia, Brazil'],
    x: [
      [
        'Dans le cadre de mes démarches de diplomatie culturelle et de coopération internationale entre le Bénin et le Brésil, j’ai eu le privilège d’être reçue en audience par Madame Ângela Guimarães, Secrétaire d’État à la Promotion de l’Égalité Raciale (SEPROMI) de l’État de Bahia, au Brésil.',
        'Cette rencontre institutionnelle s’inscrit dans une réflexion autour des enjeux de reconnaissance des héritages afrodescendants, de valorisation des mémoires historiques et de renforcement des passerelles culturelles entre les deux rives de l’Atlantique.',
        'Elle témoigne de l’importance du dialogue institutionnel et de la diplomatie culturelle dans la construction de nouvelles perspectives de rapprochement entre le Bénin et le Brésil.'
      ],
      [
        'No âmbito das minhas iniciativas de diplomacia cultural e de cooperação internacional entre o Benim e o Brasil, tive o privilégio de ser recebida em audiência pela Senhora Ângela Guimarães, Secretária de Estado da Promoção da Igualdade Racial (SEPROMI) do Estado da Bahia, no Brasil.',
        'Este encontro institucional insere-se numa reflexão sobre os desafios do reconhecimento das heranças afrodescendentes, da valorização das memórias históricas e do reforço das pontes culturais entre as duas margens do Atlântico.',
        'Testemunha a importância do diálogo institucional e da diplomacia cultural na construção de novas perspectivas de aproximação entre o Benim e o Brasil.'
      ],
      [
        'As part of my cultural diplomacy work and international cooperation between Benin and Brazil, I had the privilege of being received in audience by Ms Ângela Guimarães, Secretary of State for the Promotion of Racial Equality (SEPROMI) of the State of Bahia, Brazil.',
        'This institutional meeting is part of a broader reflection on the recognition of Afro-descendant heritage, the enhancement of historical memory and the strengthening of cultural bridges between the two shores of the Atlantic.',
        'It reflects the importance of institutional dialogue and cultural diplomacy in building new prospects for closer ties between Benin and Brazil.'
      ]
    ]
  }
];
