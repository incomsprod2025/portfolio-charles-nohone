import { Service, InfographyProject, VideoProject, Partner, Experience } from "./types";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";

export const servicesData: Service[] = [
  {
    id: "infography",
    title: "Infographie / Design Graphique",
    subtitle: "Identité visuelle impactante & supports de communication",
    description: "Création de visuels percutants pour vos réseaux sociaux, identités de marque, et supports imprimables (flyers, brochures, bannières publicitaires) captant l'essence de votre message.",
    iconName: "Palette",
    skills: ["Bannières réseaux sociaux", "Flyers & Brochures", "Identité Visuelle", "Tunnels de Vente", "Affiches Événementielles"],
    features: [
      "Processus de design collaboratif",
      "Déclinaisons aux formats web et print",
      "Cohérence et charte graphique préservée",
      "Livraison en haute résolution (+ fichiers sources)"
    ],
    priceRange: "À partir de 15 000 FCFA"
  },
  {
    id: "video",
    title: "Montage Vidéo Professionnel",
    subtitle: "Contenus dynamiques, immersifs & engageants",
    description: "Édition de vidéos destinées aux réseaux sociaux (Reels, TikToks, Shorts) ou à un usage corporate. Gestion du rythme, titrages animés, synchronisation sonore et étalonnage des couleurs.",
    iconName: "Video",
    skills: ["Reels & TikToks verticaux", "Vidéos Promotionnelles", "Montage Corporate", "Effets visuels (VFX)", "Sound Design"],
    features: [
      "Cuts dynamiques adaptés aux algorithmes Tiktok/Reels",
      "Sous-titres animés de haute qualité style créateurs",
      "Effets de transition fluides et modernes",
      "Correction et étalonnage colorimétrique"
    ],
    priceRange: "À partir de 25 000 FCFA"
  },
  {
    id: "webdev",
    title: "Création de Sites & Applications Web",
    subtitle: "Expériences web fluides, réactives & professionnelles",
    description: "Conception et développement de sites internet modernes, de pages de capture (landing pages) ultra-rapides et d'applications interactives adaptées à tous les écrans, optimisées pour la conversion.",
    iconName: "Globe",
    skills: ["Développement React / Tailwind", "No-code expert (FlutterFlow)", "SEO & Performance", "Intégration d'outils marketing", "Sites Vitrines"],
    features: [
      "Design 100% responsive et adapté aux mobiles",
      "Temps de chargement optimisé pour l'expérience utilisateur",
      "Formulaires d'appel à l'action directement intégrés",
      "Formation pour mettre à jour votre site de manière autonome"
    ],
    priceRange: "Sur devis personnalisé"
  }
];

export const infographyProjects: InfographyProject[] = [
  {
    id: "graph-1",
    title: "Affiche Promotionnelle - Cabinet CELAF",
    category: "Flyer / Brochure",
    client: "Cabinet de formation CELAF",
    description: "Flyer promotionnel moderne intégrant la charte corporate du cabinet pour annoncer de nouvelles sessions de formation professionnelle accélérée.",
    date: "Mars 2025",
    colorTheme: "#D45D34",
    visualType: "flyer-celaf",
    imageUrl: img1
  },
  {
    id: "graph-2",
    title: "Affiche Uber Courses - Charles Drepeba",
    category: "Social Media",
    client: "Uber Promotionnelle",
    description: "Conception graphique d'un visuel publicitaire haut de gamme pour promouvoir la commande de courses de taxi avec mise en page moderne, portrait et numéros de contact.",
    date: "Novembre 2024",
    colorTheme: "#000000",
    visualType: "uber-card",
    imageUrl: img2
  },
  {
    id: "graph-3",
    title: "Lancement Campagne - Forum G3",
    category: "Social Media",
    client: "Forum G3 Entreprenariat",
    description: "Série de posts carrés optimisés pour Instagram et Facebook promouvant un événement d'incubation de startups à Cocody.",
    date: "Juillet 2022",
    colorTheme: "#347474",
    visualType: "social-post",
    imageUrl: img3
  },
  {
    id: "graph-4",
    title: "Guide de Marque - Group ADA",
    category: "Identité Visuelle",
    client: "Group ADA",
    description: "Conception de l'architecture de marque, logotype moderne et palette de couleurs épurée destinée au Cocody Club House.",
    date: "Mai 2018",
    colorTheme: "#232323",
    visualType: "corporate-logo",
    imageUrl: img4
  },
  {
    id: "graph-5",
    title: "Conception Affiche - Masterclass AI",
    category: "Flyer / Brochure",
    client: "Cabinet de formation CELAF",
    description: "Design d'une affiche d'événement à fort impact visuel combinant un portrait stylisé et des repères géométriques modernes sous un ton orange brique.",
    date: "Janvier 2025",
    colorTheme: "#D45D34",
    visualType: "flyer-celaf",
    imageUrl: img5
  },
  {
    id: "graph-6",
    title: "Pack Social Media - AngeFélicienne",
    category: "Social Media",
    client: "AngeFélicienne Assistance",
    description: "Série de bannières haut de gamme destinées aux campagnes sponsorisées LinkedIn et Facebook, augmentant le taux de clics de 45%.",
    date: "Novembre 2024",
    colorTheme: "#2A5C91",
    visualType: "social-post",
    imageUrl: img6
  }
];

export const videoProjects: VideoProject[] = [
  {
    id: "video-1",
    title: "Reel Promo - Certifications CELAF",
    category: "Reels / Shorts",
    client: "Cabinet de formation CELAF",
    duration: "0:30",
    description: "Vidéo dynamique au format vertical 9:16 avec des transitions rythmées et des sous-titres captivants, conçue pour convertir l'audience sur Instagram et TikTok.",
    date: "Février 2025",
    aspectRatio: "9:16",
    colorTheme: "#E25B12",
    scenes: [
      { id: 1, title: "Accroche forte", description: "Titre d'impact avec effet Shake et sous-titre orange brique", thumbnailColor: "bg-orange-800", hasFilter: true },
      { id: 2, title: "Présentation de la formation", description: "B-roll des salles de cours avec zooms progressifs (Speed Ramping)", thumbnailColor: "bg-orange-600", hasFilter: false },
      { id: 3, title: "Appel à l'action final", description: "Animation d'un bouton d'inscription avec flèche directionnelle", thumbnailColor: "bg-stone-900", hasFilter: true }
    ]
  },
  {
    id: "video-2",
    title: "Vidéo Explicative - Speedex Delivery",
    category: "Pub Vidéo",
    client: "Speedex Delivery",
    duration: "1:00",
    description: "Publicité explicative au format horizontal 16:9 montrant le fonctionnement de l'application mobile de livraison avec animation d'écran et voix-off.",
    date: "Septembre 2024",
    aspectRatio: "16:9",
    colorTheme: "#D45D34",
    scenes: [
      { id: 1, title: "Le problème", description: "Plan serré de quelqu'un attendant désespérément un colis", thumbnailColor: "bg-amber-900", hasFilter: false },
      { id: 2, title: "La solution Speedex", description: "Mockup d'appli avec livraison en 1 clic se lançant à l'écran", thumbnailColor: "bg-amber-600", hasFilter: true },
      { id: 3, title: "Livraison réussie", description: "Livreur souriant tendant le colis au client", thumbnailColor: "bg-stone-800", hasFilter: false }
    ]
  },
  {
    id: "video-3",
    title: "Sizzle Reel - Forum G3 Cocody",
    category: "Événementiel",
    client: "Forum G3 Entreprenariat",
    duration: "0:45",
    description: "Aftermovie rythmé du forum de l'entrepreneuriat à Abidjan. Ambiance de networking, conférences inspirantes et pitchs capturés sous forme de cuts rapides synchronisés sur la musique.",
    date: "Juin 2022",
    aspectRatio: "9:16",
    colorTheme: "#1F4E5B",
    scenes: [
      { id: 1, title: "Ambiance générale", description: "Plan large de la salle de conférence blindée d'entrepreneurs", thumbnailColor: "bg-cyan-900", hasFilter: true },
      { id: 2, title: "Interventions clés", description: "Série de gros plans énergiques de conférenciers en action", thumbnailColor: "bg-teal-700", hasFilter: false },
      { id: 3, title: "Moments d'échange", description: "Rires et poignées de main avec des filtres chaleureux", thumbnailColor: "bg-stone-900", hasFilter: true }
    ]
  }
];

export const partnersData: Partner[] = [
  {
    id: "p1",
    name: "Cabinet CELAF",
    role: "Cabinet de formation - Port Bouët",
    comment: "Charles a transformé notre communication visuelle. Nos campagnes d'inscription par e-mail et nos bannières ont obtenu un taux de clics record grâce à ses visuels professionnels.",
    email: "info@celaf-business.com"
  },
  {
    id: "p2",
    name: "Speedex Delivery",
    role: "Entreprise de Logistique - Marcory",
    comment: "Une collaboration fructueuse ! Charles a non seulement conçu l'intégralité de nos supports de réseaux sociaux mais a fourni des vidéos de promotion d'application mobile d'une super fluidité.",
    email: "contact@speedexdelievery.com",
    website: "www.speedexdelievery.com"
  },
  {
    id: "p3",
    name: "Forum G3 Entreprenariat",
    role: "Incubateur & Réseau d'Affaires - Cocody",
    comment: "Charles a géré nos réseaux à la perfection pour l'édition de notre forum. Ses visuels créatifs et ses montages vidéo captivants ont attiré des centaines de participants.",
    email: "contact@forumg3.ci"
  },
  {
    id: "p4",
    name: "AngeFélicienne Assistance",
    role: "Partenaire & Référence d'Affaires",
    comment: "Charles est rigoureux, réactif et doté d'une véritable culture esthétique. Sa double compétence design et intégration Web/No-code est un atout inestimable pour tout projet d'envergure.",
    email: "info@angefelicienneassistance.com",
    website: "angefelicienneassistance.com"
  }
];

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    role: "Responsable Communication",
    company: "Cabinet de formation CELAF",
    location: "Port Bouët, Abidjan",
    duration: "2024 - Juin 2025",
    description: [
      "Création des supports de communication complets (flyers marketing originaux, brochures d'inscription, identité visuelle d'envergure).",
      "Gestion et animation des canaux de communication sur les réseaux sociaux principaux (Instagram, Facebook, LinkedIn).",
      "Planification et exécution de campagnes publicitaires numériques performantes.",
      "Mise en place de campagnes de marketing par e-mail automatisées au sein d'un tunnel de vente optimisé pour la capture de prospects."
    ]
  },
  {
    id: "exp-2",
    role: "Webmaster - Webmarketer",
    company: "Speedex Delivery",
    location: "Marcory Zone 4, Abidjan",
    duration: "Juin 2024 - Décembre 2024",
    description: [
      "Création visuelle quotidienne de supports de communication spécifiques aux réseaux sociaux de l'entreprise.",
      "Conception technique et graphique globale du site internet de l'entreprise de livraison de colis et de déménagement.",
      "Développement de maquettes interactives et d'optimisations visuelles pour l'application mobile."
    ]
  },
  {
    id: "exp-3",
    role: "Webmaster - Community manager",
    company: "Forum G3 Entreprenariat",
    location: "Cocody Centre, Abidjan",
    duration: "2021 - Juillet 2022",
    description: [
      "Création et animation de la stratégie d'engagement communautaire digitale sur toutes les plateformes du forum.",
      "Conception graphique des bannières Web et production de montages vidéo captivants.",
      "Gestion logistique et événementielle des événements physiques organisés par la structure, coordination du personnel et des modules de formation."
    ]
  },
  {
    id: "exp-4",
    role: "Webmaster",
    company: "Group ADA",
    location: "Cocody Club House, Abidjan",
    duration: "2017 - 2018",
    description: [
      "Supervision technique de l'hébergement et conception de sites internet pour les divers clients d'un cabinet de développement web.",
      "Intégration d'anciennes architectures web vers des frameworks modernes et performants.",
      "Audit régulier de sécurité, tests de performance UX et reporting hebdomadaire des indicateurs clés."
    ]
  }
];
