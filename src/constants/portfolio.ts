import type {PersonalInfo, Experience, Project, Skill, ContactInfo, Highlight} from "@/types/portfolio";

// Informations personnelles
export const personalInfo: PersonalInfo = {
  name: "Victor ELY",
  title: "DevOps Engineer & Fullstack Developer",
  description: "Passionné par l'automatisation, l'infrastructure as code et le développement d'applications scalables. J'optimise les processus CI/CD et crée des solutions robustes.",
  backgroundImage: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
};

// Informations de contact
export const contactInfo: ContactInfo = {
  email: "victor.georges.ely@gmail.com",
  linkedin: "https://www.linkedin.com/in/victor-ely/",
  github: "https://github.com/VictorGeorgesEly",
  location: "Paris, France"
};

// Expériences professionnelles
export const experiences: Experience[] = [
  {
    title: "Senior DevOps Engineer",
    company: "Tech Company",
    period: "2022 - Présent",
    description: "Architecture et mise en place d'infrastructures cloud scalables, automatisation des déploiements et optimisation des pipelines CI/CD pour des applications critiques.",
    technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker", "Python"],
    companyImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Fullstack Developer & DevOps",
    company: "Startup Innovante",
    period: "2020 - 2022",
    description: "Développement d'applications web complètes et mise en place de l'infrastructure DevOps from scratch. Gestion de l'équipe technique et architecture système.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "GitLab CI"],
    companyImage: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Développeur Fullstack",
    company: "Agence Web",
    period: "2018 - 2020",
    description: "Développement d'applications web sur mesure pour divers clients. Spécialisation dans les architectures microservices et les API REST.",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Redis", "Nginx"],
    companyImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

// Projets
export const projects: Project[] = [
  {
    title: "Infrastructure Multi-Cloud",
    description: "Architecture et déploiement d'une infrastructure multi-cloud avec Terraform, incluant monitoring automatisé et disaster recovery.",
    technologies: ["Terraform", "AWS", "Azure", "Prometheus", "Grafana"],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    detailedDescription: "Conception et mise en œuvre d'une infrastructure hautement disponible sur AWS et Azure, permettant une redondance géographique et une résilience maximale. Le projet inclut l'automatisation complète du provisioning via Terraform et un système de monitoring avancé.",
    features: [
      "Infrastructure as Code avec Terraform",
      "Déploiement multi-cloud (AWS + Azure)",
      "Auto-scaling automatique",
      "Backup et disaster recovery",
      "Monitoring temps réel avec alertes",
      "Sécurité renforcée avec chiffrement"
    ],
    challenges: [
      "Gestion de la compatibilité entre clouds",
      "Optimisation des coûts cross-cloud",
      "Synchronisation des données entre régions",
      "Mise en place du disaster recovery"
    ],
    achievements: [
      "Réduction de 40% des coûts d'infrastructure",
      "99.99% d'uptime atteint",
      "Temps de récupération < 5 minutes",
      "Automatisation complète des déploiements"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Pipeline CI/CD Avancé",
    description: "Mise en place d'un pipeline CI/CD complet avec tests automatisés, déploiement blue-green et rollback automatique.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Helm"],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    detailedDescription: "Développement d'un pipeline CI/CD enterprise-grade utilisant Jenkins, Docker et Kubernetes. Le système inclut des tests automatisés, l'analyse de qualité de code, et des stratégies de déploiement avancées pour garantir zero-downtime.",
    features: [
      "Pipeline multi-stages automatisé",
      "Tests unitaires et d'intégration",
      "Analyse qualité de code (SonarQube)",
      "Déploiement blue-green",
      "Rollback automatique en cas d'erreur",
      "Notifications Slack intégrées"
    ],
    challenges: [
      "Gestion des dépendances complexes",
      "Optimisation des temps de build",
      "Coordination des déploiements multi-services",
      "Mise en place du rollback automatique"
    ],
    achievements: [
      "Réduction de 80% du temps de déploiement",
      "Zero-downtime deployments",
      "Détection automatique des régressions",
      "100% de couverture des tests critiques"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Application E-commerce",
    description: "Développement complet d'une plateforme e-commerce avec microservices, payment gateway et système de recommandation.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Stripe"],
    link: "https://example.com",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    detailedDescription: "Plateforme e-commerce moderne construite avec une architecture microservices. L'application gère un catalogue de produits, un système de commandes, des paiements sécurisés et un moteur de recommandation basé sur l'IA.",
    features: [
      "Architecture microservices",
      "Interface utilisateur responsive",
      "Système de paiement sécurisé",
      "Moteur de recommandation IA",
      "Gestion temps réel des stocks",
      "Dashboard administrateur"
    ],
    challenges: [
      "Gestion de la cohérence entre microservices",
      "Optimisation des performances",
      "Sécurisation des paiements",
      "Scalabilité du système de recommandation"
    ],
    achievements: [
      "500k+ utilisateurs actifs",
      "Temps de chargement < 2 secondes",
      "99.9% de disponibilité",
      "Augmentation de 35% des ventes grâce aux recommandations"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
    {
        title: "Application E-commerce",
        description: "Développement complet d'une plateforme e-commerce avec microservices, payment gateway et système de recommandation.",
        technologies: ["React", "Node.js", "MongoDB", "Redis", "Stripe"],
        link: "https://example.com",
        github: "https://github.com",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        detailedDescription: "Plateforme e-commerce moderne construite avec une architecture microservices. L'application gère un catalogue de produits, un système de commandes, des paiements sécurisés et un moteur de recommandation basé sur l'IA.",
        features: [
            "Architecture microservices",
            "Interface utilisateur responsive",
            "Système de paiement sécurisé",
            "Moteur de recommandation IA",
            "Gestion temps réel des stocks",
            "Dashboard administrateur"
        ],
        challenges: [
            "Gestion de la cohérence entre microservices",
            "Optimisation des performances",
            "Sécurisation des paiements",
            "Scalabilité du système de recommandation"
        ],
        achievements: [
            "500k+ utilisateurs actifs",
            "Temps de chargement < 2 secondes",
            "99.9% de disponibilité",
            "Augmentation de 35% des ventes grâce aux recommandations"
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    }
];

// Compétences techniques
export const skills: Skill[] = [
  {
    category: "DevOps & Cloud",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Ansible"]
  },
  {
    category: "CI/CD & Monitoring",
    items: ["Jenkins", "GitLab CI", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack"]
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Vue.js", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Outils & Méthodologies",
    items: ["Git", "Agile/Scrum", "Linux", "Nginx", "Load Balancing"]
  }
];

// Points forts
export const highlights: Highlight[] = [
    { label: "Années d'expérience", value: "5+" },
    { label: "Projets réalisés", value: "30+" },
    { label: "Technologies maîtrisées", value: "15+" },
    { label: "Certifications", value: "AWS, Docker" }
];
