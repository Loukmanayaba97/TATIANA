// Traductions [fr, pt, en]. Les listes sont séparées par « | ».
// Les textes marqués "todo_*" sont des repères à remplacer par le contenu réel.
const T = {
m_about:["À propos","Sobre","About"],
m_exp:["Expertise","Expertise","Expertise"],
m_vision:["Vision","Visão","Vision"],
m_bb:["Bénin × Brésil","Benim × Brasil","Benin × Brazil"],
m_afro:["Afro-descendants","Afrodescendentes","Afro-descendants"],
m_obs:["Observatoire","Observatório","Observatory"],
m_proj:["Projets","Projetos","Projects"],
m_part:["Partenariats","Parcerias","Partnerships"],
m_agenda:["Agenda","Agenda","Agenda"],
m_contact:["Collaborer","Colaborar","Collaborate"],

h_kick:["Relations internationales · Diplomatie culturelle","Relações internacionais · Diplomacia cultural","International relations · Cultural diplomacy"],
h_title:["De la réappropriation de nos récits à la construction de notre influence.","Da reapropriação das nossas narrativas à construção da nossa influência.","From reclaiming our narratives to building our influence."],
h_tags:["Relations Internationales • Diplomatie Culturelle • Économie Culturelle • Coopération Bénin–Brésil • Mondes afrodescendants et lusophones • Traduction • Interprétation","Relações Internacionais • Diplomacia Cultural • Economia Cultural • Cooperação Benim–Brasil • Mundos afrodescendentes e lusófonos • Tradução • Interpretação","International Relations • Cultural Diplomacy • Cultural Economy • Benin–Brazil Cooperation • Afro-descendant and Lusophone worlds • Translation • Interpretation"],
h_lead:["Une expertise dédiée à la construction de passerelles entre le Bénin, le Brésil, l’Afrique et les mondes afrodescendants.","Uma expertise dedicada à construção de pontes entre o Benim, o Brasil, a África e os mundos afrodescendentes.","An expertise dedicated to building bridges between Benin, Brazil, Africa and the Afro-descendant worlds."],
h_b1:["Découvrir mon expertise","Descobrir a minha expertise","Discover my expertise"],
h_b2:["Collaborer / Développer un partenariat","Colaborar / Desenvolver uma parceria","Collaborate / Build a partnership"],
h_worlds:["Bénin|Brésil|Afrique|Monde lusophone|Diasporas afrodescendantes","Benim|Brasil|África|Mundo lusófono|Diásporas afrodescendentes","Benin|Brazil|Africa|Lusophone world|Afro-descendant diasporas"],

a_t:["Expertise & positionnement","Expertise e posicionamento","Expertise & positioning"],
a_i:["Relier l’Afrique, le Brésil et les mondes afrodescendants par une grammaire d’influence à travers la culture, le patrimoine et la coopération économique.","Ligar a África, o Brasil e os mundos afrodescendentes por uma gramática de influência através da cultura, do património e da cooperação económica.","Connecting Africa, Brazil and the Afro-descendant worlds through a grammar of influence built on culture, heritage and economic cooperation."],
a_c1:["Mon identité professionnelle","A minha identidade profissional","My professional identity"],
a_l1:["Relations internationales|Diplomatie culturelle|Économie culturelle|Industries culturelles et créatives|Coopération Afrique–Brésil|Mondes afrodescendants|Patrimoine, mémoire et ancestralité","Relações internacionais|Diplomacia cultural|Economia cultural|Indústrias culturais e criativas|Cooperação África–Brasil|Mundos afrodescendentes|Património, memória e ancestralidade","International relations|Cultural diplomacy|Cultural economy|Cultural and creative industries|Africa–Brazil cooperation|Afro-descendant worlds|Heritage, memory and ancestry"],
a_c2:["Parcours académique","Percurso académico","Academic background"],
a_p2:["Diplômes et formations.","Diplomas e formação.","Degrees and training."],
a_c3:["Mon approche","A minha abordagem","My approach"],
a_p3:["Je conçois la culture non seulement comme un vecteur de rayonnement, un soft power, mais comme une infrastructure de coopération, d’investissement, de transmission et de développement économique.","Concebo a cultura não só como vetor de projeção, um soft power, mas como infraestrutura de cooperação, investimento, transmissão e desenvolvimento económico.","I see culture not only as a vector of influence, a soft power, but as an infrastructure for cooperation, investment, transmission and economic development."],

e_t:["Expertise","Expertise","Expertise"],
e_i:["Dix domaines d’intervention au service des institutions, des acteurs culturels et des investisseurs.","Dez áreas de intervenção ao serviço de instituições, atores culturais e investidores.","Ten areas of work serving institutions, cultural players and investors."],
e_l:["Diplomatie culturelle|Relations internationales|Économie culturelle|Industries culturelles et créatives|Coopération économique et culturelle Afrique–Brésil|Diplomatie patrimoniale et mémorielle|Politiques et initiatives en faveur des Afro-descendants|Monde lusophone|Internationalisation des acteurs culturels|Stratégies de partenariats institutionnels","Diplomacia cultural|Relações internacionais|Economia cultural|Indústrias culturais e criativas|Cooperação económica e cultural África–Brasil|Diplomacia patrimonial e memorial|Políticas e iniciativas a favor dos afrodescendentes|Mundo lusófono|Internacionalização dos atores culturais|Estratégias de parcerias institucionais","Cultural diplomacy|International relations|Cultural economy|Cultural and creative industries|Africa–Brazil economic and cultural cooperation|Heritage and memory diplomacy|Policies and initiatives for Afro-descendants|Lusophone world|Internationalisation of cultural players|Institutional partnership strategies"],

v_t:["Vision & doctrine","Visão e doutrina","Vision & doctrine"],
v_q:["La mémoire des violences historiques n’est pas effacée, mais transformée en levier de reconstruction, d’influence, de coopération et de création de valeur à partir des patrimoines et des héritages afrodescendants.","A memória das violências históricas não é apagada, mas transformada em alavanca de reconstrução, influência, cooperação e criação de valor a partir dos patrimónios e das heranças afrodescendentes.","The memory of historical violence is not erased, but transformed into a lever for reconstruction, influence, cooperation and value creation drawing on Afro-descendant heritage."],
v_p:["L’espace lusophone comme corridor de coopération.","O espaço lusófono como corredor de cooperação.","The Lusophone space as a cooperation corridor."],
v_l:["Diplomatie culturelle|Économie culturelle|Culture & développement|Mémoire & patrimoine","Diplomacia cultural|Economia cultural|Cultura e desenvolvimento|Memória e património","Cultural diplomacy|Cultural economy|Culture & development|Memory & heritage"],

b_t:["Bénin × Brésil","Benim × Brasil","Benin × Brazil"],
b_i:["Un territoire professionnel de référence : la traversée de l’Atlantique comme fil conducteur de la coopération.","Um território profissional de referência: a travessia do Atlântico como fio condutor da cooperação.","A core professional territory: the Atlantic crossing as the thread of cooperation."],
b_l:["Coopération culturelle|Diplomatie culturelle|Commerce culturel|Industries créatives|Patrimoine et mémoire|Mobilité des artistes|Résidences et coproductions|Échanges universitaires|Recherche historique|Tourisme culturel et mémoriel|Investissements culturels|Diaspora afro-brésilienne","Cooperação cultural|Diplomacia cultural|Comércio cultural|Indústrias criativas|Património e memória|Mobilidade de artistas|Residências e coproduções|Intercâmbios universitários|Pesquisa histórica|Turismo cultural e memorial|Investimentos culturais|Diáspora afro-brasileira","Cultural cooperation|Cultural diplomacy|Cultural trade|Creative industries|Heritage and memory|Artist mobility|Residencies and co-productions|University exchanges|Historical research|Cultural and memorial tourism|Cultural investment|Afro-Brazilian diaspora"],
b_c:["Expériences récentes :","Experiências recentes:","Recent experiences:"],
b_cities:["Rio de Janeiro|Niterói|São Paulo|Porto Alegre|Bahia","Rio de Janeiro|Niterói|São Paulo|Porto Alegre|Bahia","Rio de Janeiro|Niterói|São Paulo|Porto Alegre|Bahia"],

f_t:["Afro-descendants & monde lusophone","Afrodescendentes e mundo lusófono","Afro-descendants & the Lusophone world"],
f_i:["Une niche stratégique : des axes de coopération et des thèmes pour relier mémoire, origines et avenir.","Um nicho estratégico: eixos de cooperação e temas que ligam memória, origens e futuro.","A strategic niche: cooperation axes and themes linking memory, origins and the future."],
f_corr:["Afrique – Brésil|Brésil – Afrique|Bénin – Brésil|Brésil – Bénin|Afrique – Monde lusophone|Monde lusophone – Bénin","África – Brasil|Brasil – África|Benim – Brasil|Brasil – Benim|África – Mundo lusófono|Mundo lusófono – Benim","Africa – Brazil|Brazil – Africa|Benin – Brazil|Brazil – Benin|Africa – Lusophone world|Lusophone world – Benin"],
f_l:["Mémoire|Origines|Retour|Citoyenneté|Patrimoine|Culture|Investissement|Entrepreneuriat|Transmission|Événements|Recherche","Memória|Origens|Regresso|Cidadania|Património|Cultura|Investimento|Empreendedorismo|Transmissão|Eventos|Pesquisa","Memory|Origins|Return|Citizenship|Heritage|Culture|Investment|Entrepreneurship|Transmission|Events|Research"],

o_t:["Observatoire Afrique – Brésil – Afrodescendances","Observatório África – Brasil – Afrodescendências","Africa – Brazil – Afrodescendance Observatory"],
o_i:["Un espace d’intelligence culturelle, avec un accent particulier sur les études relatives aux Afro-descendants du monde lusophone.","Um espaço de inteligência cultural, com particular ênfase nos estudos sobre os afrodescendentes do mundo lusófono.","A cultural intelligence space, with a particular focus on studies of Afro-descendants in the Lusophone world."],
o_l:["Analyses|Études|Notes stratégiques|Cartographies|Chronologies|Rapports|Entretiens|Dossiers thématiques|Données sur les ICC|Études de marchés culturels|Opportunités de coopération|Analyse des politiques publiques|Ressources sur les diasporas afrodescendantes","Análises|Estudos|Notas estratégicas|Cartografias|Cronologias|Relatórios|Entrevistas|Dossiês temáticos|Dados sobre as ICC|Estudos de mercados culturais|Oportunidades de cooperação|Análise de políticas públicas|Recursos sobre as diásporas afrodescendentes","Analyses|Studies|Strategic notes|Mappings|Timelines|Reports|Interviews|Thematic files|CCI data|Cultural market studies|Cooperation opportunities|Public policy analysis|Resources on Afro-descendant diasporas"],

p_t:["Projets & initiatives","Projetos e iniciativas","Projects & initiatives"],
p_i:["Chaque projet est présenté sous la forme d’une fiche institutionnelle.","Cada projeto é apresentado em forma de ficha institucional.","Each project is presented as an institutional fact sheet."],
p_other:["Projets artistiques et patrimoniaux","Projetos artísticos e patrimoniais","Artistic and heritage projects"],
p_f:["Contexte|Problématique|Objectif|Partenaires|Territoires concernés|Résultats|Perspectives","Contexto|Problemática|Objetivo|Parceiros|Territórios envolvidos|Resultados|Perspetivas","Context|Issue|Objective|Partners|Territories involved|Results|Outlook"],

pa_t:["Partenariats & écosystème","Parcerias e ecossistema","Partnerships & ecosystem"],
pa_i:["Une lecture claire du réseau pour faciliter le travail des institutions.","Uma leitura clara da rede para facilitar o trabalho das instituições.","A clear view of the network to make institutions’ work easier."],
pa_l:["Institutions publiques::Présidence / institutions gouvernementales, ministères, agences publiques, collectivités territoriales|Institutions culturelles::Musées, fondations, instituts culturels, festivals|Institutions économiques::Agences d’investissement, chambres de commerce, organisations entrepreneuriales, incubateurs|Universités & recherche::Universités, centres de recherche, chercheurs|Réseaux internationaux::Afrique, Brésil, monde lusophone, diaspora afrodescendante","Instituições públicas::Presidência / instituições governamentais, ministérios, agências públicas, autarquias|Instituições culturais::Museus, fundações, institutos culturais, festivais|Instituições económicas::Agências de investimento, câmaras de comércio, organizações empresariais, incubadoras|Universidades e pesquisa::Universidades, centros de pesquisa, investigadores|Redes internacionais::África, Brasil, mundo lusófono, diáspora afrodescendente","Public institutions::Presidency / government institutions, ministries, public agencies, local authorities|Cultural institutions::Museums, foundations, cultural institutes, festivals|Economic institutions::Investment agencies, chambers of commerce, business organisations, incubators|Universities & research::Universities, research centres, researchers|International networks::Africa, Brazil, Lusophone world, Afro-descendant diaspora"],
eco_t:["Écosystème institutionnel","Ecossistema institucional","Institutional ecosystem"],
eco_i:["Expertise et missions de coopération mobilisées dans le cadre de relations avec des institutions publiques béninoises et internationales (selon les partenariats effectivement établis).","Expertise e missões de cooperação mobilizadas no âmbito de relações com instituições públicas beninenses e internacionais (conforme as parcerias efetivamente estabelecidas).","Expertise and cooperation missions carried out with Beninese and international public institutions (according to partnerships actually established)."],
eco_l:["Présidence de la République du Bénin|Ministère des Affaires étrangères|Ministère chargé de l’intégration des Afro-descendants|Ministère de la Justice|Ministère de la Culture, des Arts et du Patrimoine|Institutions chargées des investissements|Agences culturelles|Institutions brésiliennes partenaires|My Afro Origins","Presidência da República do Benim|Ministério dos Negócios Estrangeiros|Ministério encarregado da integração dos Afrodescendentes|Ministério da Justiça|Ministério da Cultura, das Artes e do Património|Instituições de investimento|Agências culturais|Instituições brasileiras parceiras|My Afro Origins","Presidency of the Republic of Benin|Ministry of Foreign Affairs|Ministry in charge of Afro-descendant integration|Ministry of Justice|Ministry of Culture, Arts and Heritage|Investment institutions|Cultural agencies|Partner Brazilian institutions|My Afro Origins"],

i_t:["Pour les institutions","Para as instituições","For institutions"],
i_l:["Conseil stratégique|Études|Missions de coopération|Ingénierie de projets culturels|Mise en relation institutionnelle|Prospection internationale|Diplomatie culturelle|Accompagnement de délégations|Conception d’événements|Programmes Afrique–Brésil|Programmes Afro-descendants|Internationalisation des ICC","Consultoria estratégica|Estudos|Missões de cooperação|Engenharia de projetos culturais|Articulação institucional|Prospeção internacional|Diplomacia cultural|Acompanhamento de delegações|Concepção de eventos|Programas África–Brasil|Programas Afrodescendentes|Internacionalização das ICC","Strategic advice|Studies|Cooperation missions|Cultural project engineering|Institutional networking|International prospecting|Cultural diplomacy|Delegation support|Event design|Africa–Brazil programmes|Afro-descendant programmes|CCI internationalisation"],

n_t:["Investir dans la culture","Investir na cultura","Invest in culture"],
n_l:["Mode|Design|Cinéma|Audiovisuel|Musique|Arts visuels|Patrimoine|Tourisme culturel|Édition|Création numérique|Événementiel","Moda|Design|Cinema|Audiovisual|Música|Artes visuais|Património|Turismo cultural|Edição|Criação digital|Eventos","Fashion|Design|Film|Audiovisual|Music|Visual arts|Heritage|Cultural tourism|Publishing|Digital creation|Events"],
n_s:["Identifier|Connecter|Structurer|Internationaliser|Investir","Identificar|Conectar|Estruturar|Internacionalizar|Investir","Identify|Connect|Structure|Internationalise|Invest"],

g_t:["Agenda — Atlantique culturel","Agenda — Atlântico cultural","Agenda — Cultural Atlantic"],
g_l:["Événements à venir|Missions|Conférences|Forums|Expositions|Rencontres institutionnelles|Programmes Afro-descendants|Événements Bénin–Brésil|Calendrier stratégique","Próximos eventos|Missões|Conferências|Fóruns|Exposições|Encontros institucionais|Programas Afrodescendentes|Eventos Benim–Brasil|Calendário estratégico","Upcoming events|Missions|Conferences|Forums|Exhibitions|Institutional meetings|Afro-descendant programmes|Benin–Brazil events|Strategic calendar"],

u_t:["Publications","Publicações","Publications"],
u_l:["Policy papers|Notes stratégiques|Études|Rapports de mission|Analyses|Articles|Entretiens|Interventions|Publications académiques","Policy papers|Notas estratégicas|Estudos|Relatórios de missão|Análises|Artigos|Entrevistas|Intervenções|Publicações académicas","Policy papers|Strategic notes|Studies|Mission reports|Analyses|Articles|Interviews|Talks|Academic publications"],
med_t:["Médias & presse","Média e imprensa","Media & press"],
med_l:["Interviews|Conférences|Articles de presse|Télévision|Radio|Podcasts|Photothèque|Vidéothèque|Dossiers de presse","Entrevistas|Conferências|Artigos de imprensa|Televisão|Rádio|Podcasts|Fototeca|Videoteca|Dossiês de imprensa","Interviews|Conferences|Press articles|Television|Radio|Podcasts|Photo library|Video library|Press kits"],
dis_t:["Distinctions & reconnaissances","Distinções e reconhecimentos","Awards & recognition"],

c_t:["Collaborer","Colaborar","Collaborate"],
c_i:["Plusieurs portes d’entrée selon votre besoin.","Várias portas de entrada conforme a sua necessidade.","Several entry points depending on your need."],
c_l:["Je représente une institution|Je souhaite développer un partenariat|Je souhaite proposer un projet|Je recherche une expertise|Je souhaite investir dans un projet culturel|Je souhaite travailler sur une initiative Afro-descendants|Je souhaite collaborer entre le Brésil et le Bénin|Traduction & interprétation Français–Portugais","Represento uma instituição|Desejo desenvolver uma parceria|Desejo propor um projeto|Procuro uma expertise|Desejo investir num projeto cultural|Desejo trabalhar numa iniciativa Afrodescendentes|Desejo colaborar entre o Brasil e o Benim|Tradução e interpretação Francês–Português","I represent an institution|I want to build a partnership|I want to propose a project|I am looking for expertise|I want to invest in a cultural project|I want to work on an Afro-descendant initiative|I want to collaborate between Brazil and Benin|Translation & interpretation French–Portuguese"],
c_name:["Nom","Nome","Name"],
c_mail:["E-mail","E-mail","E-mail"],
c_msg:["Votre message","A sua mensagem","Your message"],
c_send:["Envoyer","Enviar","Send"],

ft_tag:["Relier l’Afrique, le Brésil et les mondes afrodescendants par une grammaire d’influence.","Ligar a África, o Brasil e os mundos afrodescendentes por uma gramática de influência.","Connecting Africa, Brazil and the Afro-descendant worlds through a grammar of influence."],

todo_dip:["À compléter : diplômes et formations","A completar: diplomas e formação","To complete: degrees and training"],
todo_links:["À compléter : liens vers les sites officiels (gouv.bj, ministères, My Afro Origins…)","A completar: links para os sites oficiais","To complete: links to official sites"],
todo_agenda:["À compléter : événements et calendrier","A completar: eventos e calendário","To complete: events and calendar"],
todo_dis:["À compléter : distinctions","A completar: distinções","To complete: awards"],
todo_mail:["À compléter : adresse e-mail de contact","A completar: e-mail de contacto","To complete: contact e-mail"],
todo_fill:["à compléter","a completar","to complete"]
};

Object.assign(T, {
st1:["Mondes reliés","Mundos ligados","Worlds connected"],
st2:["Domaines d’expertise","Áreas de expertise","Areas of expertise"],
st3:["Langues : FR · PT · EN","Idiomas: FR · PT · EN","Languages: FR · PT · EN"],
st4:["Villes brésiliennes","Cidades brasileiras","Brazilian cities"],
a_badge:["Diplomatie culturelle","Diplomacia cultural","Cultural diplomacy"],
ph_credit:["Photos d’illustration :","Fotos ilustrativas:","Illustration photos:"]
});

Object.assign(T, {
press_cap:["Portrait de Tatiana Sagbohan, consultante en relations internationales et diplomatie culturelle entre le Brésil et le Bénin (Quotidien Fraternité n°6344, 7 avril 2025).","Retrato de Tatiana Sagbohan, consultora em relações internacionais e diplomacia cultural entre o Brasil e o Benim (jornal Fraternité nº 6344, 7 de abril de 2025).","Profile of Tatiana Sagbohan, consultant in international relations and cultural diplomacy between Brazil and Benin (Fraternité daily, no. 6344, 7 April 2025)."],
press_more:["Voir la page","Ver a página","View the page"]
});

Object.assign(T, {
m_gal:["Galerie","Galeria","Gallery"],
gal_t:["Galerie — moments & rencontres","Galeria — momentos & encontros","Gallery — moments & meetings"],
gal_i:["Quelques images de terrain : forums, médias, culture, mémoire. Chaque image porte la mention de son auteur.","Algumas imagens de campo: fóruns, mídia, cultura, memória. Cada imagem traz a menção do seu autor.","A few images from the field: forums, media, culture, memory. Each image carries its author’s credit."],
f_all:["Tout","Todos","All"],
f_media:["Médias","Mídia","Media"],
f_events:["Événements","Eventos","Events"],
f_brazil:["Brésil","Brasil","Brazil"],
f_benin:["Bénin","Benim","Benin"],
f_academic:["Académique","Acadêmico","Academic"],
f_posters:["Affiches","Cartazes","Posters"],
cr_todo:["Crédit à préciser","Crédito a especificar","Credit to be added"],
lb_close:["Fermer","Fechar","Close"],
vid_t:["Vidéos","Vídeos","Videos"],
vid_i:["Interventions, reportages et entretiens en vidéo.","Intervenções, reportagens e entrevistas em vídeo.","Talks, reports and interviews on video."],
vid_ph:["À compléter : vidéo (YouTube, Vimeo ou fichier MP4)","A completar: vídeo (YouTube, Vimeo ou arquivo MP4)","To complete: video (YouTube, Vimeo or MP4 file)"],
part_t:["Nos partenaires","Nossos parceiros","Our partners"],
part_i:["Institutions, festivals, universités et entreprises avec lesquels nous construisons des projets.","Instituições, festivais, universidades e empresas com quem construímos projetos.","Institutions, festivals, universities and companies we build projects with."],
part_feat:["Partenaire de la 4ᵉ édition","Parceira da 4ª edição","Partner of the 4th edition"],
part_ph:["Logo du partenaire — à compléter","Logo do parceiro — a completar","Partner logo — to complete"],
part_cta:["Devenir partenaire","Tornar-se parceiro","Become a partner"],
th_mono:["Noir & blanc","Preto e branco","Black & white"],
th_vert:["Vert & jaune","Verde e amarelo","Green & yellow"],
ph_credit:["Crédits photo : voir la mention sur chaque image · images d’illustration :","Créditos das fotos: veja a menção em cada imagem · imagens ilustrativas:","Photo credits: see the credit on each image · illustration images:"]
});

Object.assign(T, {
cap_about:["Backtotheroots 2025 — le drapeau du Brésil et celui du Bénin réunis sur scène","Backtotheroots 2025 — a bandeira do Brasil e a do Benim reunidas no palco","Backtotheroots 2025 — the flags of Brazil and Benin brought together on stage"],
cap_ben:["Patrimoine bâti du Bénin","Património construído do Benim","Benin’s built heritage"],
cap_bra:["Salvador de Bahia","Salvador da Bahia","Salvador de Bahia"],
cap_obs1:["Veille de terrain : tables rondes internationales","Observação de campo: mesas-redondas internacionais","Field watch: international round tables"],
cap_obs2:["Conférence internationale OIDP — Rio de Janeiro","Conferência internacional OIDP — Rio de Janeiro","OIDP international conference — Rio de Janeiro"],
img_poa:["Image de Porto Alegre — à compléter","Imagem de Porto Alegre — a completar","Porto Alegre image — to complete"],
cap_inv:["Patrimoines et créations : un capital culturel à valoriser","Patrimónios e criações: um capital cultural a valorizar","Heritage and creations: a cultural capital to be enhanced"],
inv_vt:["Notre vision de l’investissement culturel","A nossa visão do investimento cultural","Our vision of cultural investment"],
inv_vp:["Les patrimoines, les créations et les héritages afrodescendants ne sont pas seulement des témoignages du passé : ce sont aussi des actifs culturels et économiques. Nous aidons à identifier les opportunités, à connecter les acteurs, à structurer les projets et à les internationaliser, entre le Bénin, le Brésil et le monde lusophone.","Os patrimónios, as criações e as heranças afrodescendentes não são apenas testemunhos do passado: são também ativos culturais e económicos. Ajudamos a identificar oportunidades, conectar atores, estruturar projetos e internacionalizá-los, entre o Benim, o Brasil e o mundo lusófono.","Afro-descendant heritage, creations and legacies are not only testimonies of the past: they are also cultural and economic assets. We help identify opportunities, connect players, structure projects and take them international, between Benin, Brazil and the Lusophone world."],
cap_agenda:["FinAB — conférence-débat","FinAB — conferência-debate","FinAB — panel discussion"],
ev_t:["Rencontres récentes","Encontros recentes","Recent meetings"],
tv_t:["Passages télévisés","Passagens na televisão","TV appearances"],
tv1_t:["Journal télévisé de 20h","Telejornal das 20h","20H television news"],
tv1_d:["Tatiana Sagbohan, consultante en diplomatie culturelle entre le Brésil et le Bénin — SRTB, janvier 2025.","Tatiana Sagbohan, consultora em diplomacia cultural entre o Brasil e o Benim — SRTB, janeiro de 2025.","Tatiana Sagbohan, consultant in cultural diplomacy between Brazil and Benin — SRTB, January 2025."],
tv2_t:["Émission 5/7 du matin","Programa 5/7 da manhã","5/7 morning show"],
tv2_d:["« De Rio à Cotonou, un pont culturel entre le Brésil et le Bénin » — SRTB, janvier 2025.","« Do Rio a Cotonou, uma ponte cultural entre o Brasil e o Benim » — SRTB, janeiro de 2025.","“From Rio to Cotonou, a cultural bridge between Brazil and Benin” — SRTB, January 2025."],
aw_ph:["À compléter : distinctions — image(s) de la reconnaissance accompagnée(s) d’un texte explicatif traduit en français (la distinction est en portugais).","A completar: distinções — imagem(ns) do reconhecimento acompanhada(s) de texto explicativo traduzido para o francês (a distinção é em português).","To complete: awards — image(s) of the recognition with an explanatory text translated into French (the award is in Portuguese)."],
ph_credit:["Crédits photo : voir la mention sur chaque image · image d’illustration :","Créditos das fotos: veja a menção em cada imagem · imagem ilustrativa:","Photo credits: see the credit on each image · illustration image:"]
});
