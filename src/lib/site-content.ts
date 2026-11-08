export const services = [
  {
    slug: 'pergola-sur-mesure',
    title: 'Pergola sur mesure',
    image: '/assets/rectangle57.jpg',
    short: 'Une structure métallique conçue selon votre espace et votre usage.',
    description: 'METCO réalise des pergolas métalliques sur mesure à Douala et accompagne les projets nécessitant une solution robuste, durable et adaptée aux espaces extérieurs.',
  },
  {
    slug: 'portails-motorises',
    title: 'Portails motorisés',
    image: '/assets/rectangle60.jpg',
    short: 'Des accès fiables et adaptés aux contraintes de votre propriété.',
    description: 'Nous concevons et réalisons des portails métalliques adaptés à vos dimensions, à votre environnement et à vos besoins d’accès.',
  },
  {
    slug: 'charpentes-structures-metalliques',
    title: 'Charpentes & structures métalliques',
    image: '/assets/rectangle61.jpg',
    short: 'Des ouvrages robustes, étudiés pour répondre aux contraintes du projet.',
    description: 'METCO accompagne la réalisation de charpentes et structures métalliques pour les bâtiments, équipements et ouvrages industriels.',
  },
  {
    slug: 'tuyauterie-industrielle',
    title: 'Tuyauterie industrielle',
    image: '/assets/rectangle59.jpg',
    short: 'Des installations pensées pour les exigences techniques et de sécurité.',
    description: 'Nous réalisons des solutions de tuyauterie industrielle adaptées aux installations techniques, à leur environnement et aux contraintes de sécurité.',
  },
  {
    slug: 'couverture-bardage',
    title: 'Couverture & bardage',
    image: '/assets/rectangle58.jpg',
    short: 'Des enveloppes métalliques durables pour vos bâtiments.',
    description: 'METCO réalise des solutions de couverture et de bardage métalliques conçues en fonction de votre bâtiment et de son usage.',
  },
  {
    slug: 'main-doeuvre-qualifiee',
    title: "Main-d’œuvre qualifiée",
    image: '/assets/rectangle62.jpg',
    short: 'Des équipes techniques mobilisées selon les besoins de votre chantier.',
    description: 'Nous mettons à disposition une main-d’œuvre qualifiée pour accompagner les travaux de construction métallique et les besoins des chantiers.',
  },
] as const

export const projects = [
  { slug: 'stainless-steel-welding', detailSlug: 'pergola-sur-mesure', title: 'Stainless steel welding', category: 'Pergolas', image: '/assets/rectangle57.jpg' },
  { slug: 'pergola-contemporaine', title: 'Pergola contemporaine', category: 'Structures métalliques', image: '/assets/rectangle58.jpg' },
  { slug: 'structure-metallique', title: 'Structure métallique', category: 'Construction', image: '/assets/rectangle61.jpg' },
  { slug: 'installation-industrielle', title: 'Installation industrielle', category: 'Tuyauterie', image: '/assets/rectangle59.jpg' },
  { slug: 'portail-sur-mesure', title: 'Portail sur mesure', category: 'Métallerie', image: '/assets/rectangle60.jpg' },
  { slug: 'chantier-metallique', title: 'Chantier métallique', category: 'Construction', image: '/assets/rectangle62.jpg' },
] as const

export const featuredProject = {
  slug: 'pergola-sur-mesure',
  title: 'Pergola sur mesure',
  category: 'Pergola',
  image: '/assets/rectangle57.jpg',
}

/** Shared so the home page can emit FAQPage structured data from the same source. */
export const faqs = [
  {
    question: 'Quels services propose METCO ?',
    answer: "METCO intervient notamment dans la construction et les structures métalliques, la tuyauterie industrielle, la chaudronnerie, la couverture et le bardage, ainsi que dans la mise à disposition de main-d'œuvre qualifiée.",
  },
  {
    question: 'Structures métalliques sur mesure ?',
    answer: 'Oui, METCO conçoit et réalise des structures métalliques entièrement sur mesure, adaptées à vos contraintes techniques et architecturales.',
  },
  {
    question: 'Tuyauterie industrielle ?',
    answer: "METCO dispose d'une expertise reconnue en tuyauterie industrielle, de la conception des plans à la pose et la mise en service.",
  },
  {
    question: "Types d'ouvrages réalisables",
    answer: 'Pergolas, portails motorisés, charpentes, hangars, structures industrielles, bardages, couvertures métalliques et bien plus encore.',
  },
  {
    question: 'Comment demander un devis à METCO ?',
    answer: 'Contactez-nous par téléphone au +237 699 632 236, par email à contact@metco237.com, ou via le formulaire de notre site. Nous vous répondons sous 24h.',
  },
]

export const articles = [
  { slug: 'chaudronnerie-industrielle', title: "Chaudronnerie industrielle : de la conception à la réalisation d'un ouvrage", image: '/assets/rectangle98.jpg', date: '20', month: 'SEPT', year: '2026', category: 'Chaudronnerie' },
  { slug: 'tuyauterie-industrielle', title: "Tuyauterie industrielle : les exigences essentielles d'une installation fiable", image: '/assets/rectangle99.jpg', date: '20', month: 'SEPT', year: '2026', category: 'Tuyauterie' },
  { slug: 'construction-metallique-au-cameroun', title: 'Construction métallique au Cameroun : quels avantages pour les projets modernes ?', image: '/assets/rectangle100.jpg', date: '20', month: 'SEPT', year: '2026', category: 'Construction' },
  { slug: 'soudure-inox', title: 'Soudure inox : les étapes d’un assemblage durable', image: '/assets/rectangle104.jpg', date: '18', month: 'SEPT', year: '2026', category: 'Soudure' },
  { slug: 'pergola-metallique', title: 'Comment choisir une pergola métallique adaptée à son espace ?', image: '/assets/rectangle105.jpg', date: '16', month: 'SEPT', year: '2026', category: 'Pergolas' },
  { slug: 'portails-motorises', title: 'Portails motorisés : associer sécurité et confort au quotidien', image: '/assets/rectangle106.jpg', date: '12', month: 'SEPT', year: '2026', category: 'Métallerie' },
] as const

export const galleryImages = [
  '/assets/rectangle104.jpg', '/assets/rectangle105.jpg', '/assets/rectangle106.jpg',
  '/assets/rectangle107.jpg', '/assets/rectangle108.jpg', '/assets/rectangle109.jpg',
  '/assets/rectangle110.jpg', '/assets/rectangle111.jpg', '/assets/rectangle112.jpg',
  '/assets/rectangle57.jpg', '/assets/rectangle58.jpg', '/assets/rectangle61.jpg',
] as const
