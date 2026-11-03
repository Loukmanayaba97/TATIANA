// ─────────────────────────────────────────────────────────────
// Contenu éditable : crédits photo, rencontres, partenaires, vidéos, distinctions.
// Aucune clé d'API ici : uniquement des textes et des noms de fichiers.
// ─────────────────────────────────────────────────────────────

// Crédit affiché sur chaque image (clé = nom du fichier sans extension).
// null = crédit pas encore renseigné → affiché « Crédit à préciser » (repère à remplacer).
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
  'ocean': 'Photo : Eric Seddon · Pexels'
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
// Le texte français est la traduction explicative de la distinction (remise en portugais).
const AWARDS = [];
