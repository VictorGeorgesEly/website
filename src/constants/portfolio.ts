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
    category: "Cloud & Infrastructure",
    subcategories: [
      {
        name: "Kubernetes & Orchestration",
        items: [
          { name: "Kubernetes", level: 4 },
          { name: "Helm", level: 4 },
          { name: "ArgoCD", level: 4 },
          { name: "Harbor", level: 4 }
        ]
      },
      {
        name: "Infrastructure as Code (IaC)",
        items: [
          { name: "Terraform", level: 4 },
          { name: "Ansible", level: 4 }
        ]
      },
      {
        name: "Cloud hybride & multi-cloud",
        items: [
          { name: "AWS", level: 4 },
          { name: "OVH", level: 4 },
          { name: "Scaleway", level: 4 }
        ]
      },
      {
        name: "Serverless & Edge Computing",
        items: [
          { name: "AWS Lambda", level: 4 },
          { name: "Cloud Functions", level: 4 },
          { name: "Fastly CDN", level: 4 }
        ]
      },
      {
        name: "Souveraineté & Cloud européen",
        items: [
          { name: "OVH", level: 4 },
          { name: "Scaleway", level: 4 },
          { name: "OGO Security", level: 3 }
        ]
      },
      {
        name: "Observabilité",
        items: [
          { name: "Prometheus", level: 4 },
          { name: "Grafana", level: 4 },
          { name: "Loki", level: 4 },
          { name: "ElasticSearch", level: 3 },
          { name: "Graylog", level: 3 }
        ]
      },
      {
        name: "Optimisation des coûts (FinOps)",
        items: [
          { name: "FinOps", level: 3 }
        ]
      }
    ]
  },
  {
    category: "Conteneurisation & Orchestration avancée",
    subcategories: [
      {
        name: "Docker & Conteneurs",
        items: [
          { name: "Docker", level: 4 }
        ]
      },
      {
        name: "Registry & Sécurité des images",
        items: [
          { name: "Harbor", level: 4 },
          { name: "Notary", level: 3 }
        ]
      },
      {
        name: "Trafic réseau inter-conteneurs",
        items: [
          { name: "Nginx", level: 4 },
          { name: "Traefik", level: 4 },
          { name: "HAProxy", level: 4 },
          { name: "Apache", level: 3 }
        ]
      },
      {
        name: "Sécurité des conteneurs",
        items: [
          { name: "Trivy", level: 4 },
          { name: "Falco", level: 3 },
          { name: "OPA", level: 3 }
        ]
      }
    ]
  },
  {
    category: "Infrastructure Physique & Datacenters",
    subcategories: [
      {
        name: "Migration & Hébergement souverain",
        items: [
          { name: "Data4", level: 2 },
          { name: "Equinix", level: 2 }
        ]
      },
      {
        name: "Relations resellers & matériel",
        items: [
          { name: "Sourcing matériel", level: 3 }
        ]
      },
      {
        name: "Installation & maintenance",
        items: [
          { name: "Rack & câblage", level: 3 },
          { name: "Alimentation redondée", level: 3 },
          { name: "Supervision", level: 3 }
        ]
      },
      {
        name: "Cœur de réseau & équipements",
        items: [
          { name: "Fortigate", level: 3 },
          { name: "Cisco", level: 3 },
          { name: "OPNsense", level: 3 }
        ]
      },
      {
        name: "Hyperviseurs & virtualisation",
        items: [
          { name: "VMWare", level: 3 },
          { name: "Proxmox", level: 3 }
        ]
      }
    ]
  },
  {
    category: "Sécurité & Conformité",
    subcategories: [
      {
        name: "Zero Trust & IAM",
        items: [
          { name: "Zero Trust", level: 3 },
          { name: "Keycloak", level: 4 },
          { name: "RBAC", level: 4 },
          { name: "SSO", level: 4 }
        ]
      },
      {
        name: "Conformité RGPD & NIS2",
        items: [
          { name: "Logs & audits", level: 3 },
          { name: "Privacy by design", level: 3 }
        ]
      },
      {
        name: "Protection & WAF",
        items: [
          { name: "OGO Security", level: 3 },
          { name: "AWS Shield", level: 3 },
          { name: "ModSecurity", level: 3 },
          { name: "Cloudflare", level: 4 }
        ]
      },
      {
        name: "Sécurité Supply Chain & Mail",
        items: [
          { name: "Attestation CI/CD", level: 2 },
          { name: "DMARC", level: 3 },
          { name: "DKIM", level: 3 },
          { name: "SPF", level: 3 }
        ]
      }
    ]
  },
  {
    category: "DevOps & Automatisation",
    subcategories: [
      {
        name: "GitOps & CI/CD avancé",
        items: [
          { name: "GitLab CI", level: 4 },
          { name: "Jenkins", level: 4 },
          { name: "GitHub Actions", level: 4 },
          { name: "ArgoCD", level: 4 },
          { name: "n8n", level: 3 }
        ]
      },
      {
        name: "Automatisation & Scripting",
        items: [
          { name: "Python", level: 4 },
          { name: "Bash", level: 4 },
          { name: "Go", level: 3 },
          { name: "Terraform", level: 4 }
        ]
      },
      {
        name: "Self-healing infrastructure",
        items: [
          { name: "Auto-remédiation", level: 2 },
          { name: "Agents IA (N8N)", level: 2 }
        ]
      },
      {
        name: "Logs & traçabilité",
        items: [
          { name: "Grafana Loki", level: 4 }
        ]
      },
      {
        name: "Optimisation & scaling Kubernetes",
        items: [
          { name: "KEDA", level: 3 },
          { name: "Cluster Autoscaler", level: 3 }
        ]
      }
    ]
  },
  {
    category: "Bases de données & Stockage",
    subcategories: [
      {
        name: "SGBD",
        items: [
          { name: "PostgreSQL", level: 4 },
          { name: "MySQL", level: 4 },
          { name: "MariaDB", level: 3 },
          { name: "MongoDB", level: 4 },
          { name: "Redis", level: 4 },
          { name: "SQLite", level: 3 }
        ]
      },
      {
        name: "Stockage objet & distribué",
        items: [
          { name: "Ceph", level: 3 },
          { name: "MinIO", level: 3 },
          { name: "S3-compatible", level: 3 }
        ]
      },
      {
        name: "Optimisation des performances",
        items: [
          { name: "Caching", level: 3 },
          { name: "Sharding", level: 3 },
          { name: "Partitioning", level: 3 },
          { name: "Réplication", level: 3 }
        ]
      }
    ]
  },
  {
    category: "Networking & Edge Computing",
    subcategories: [
      {
        name: "Réseaux & connectivité",
        items: [
          { name: "OPNsense", level: 3 },
          { name: "VPN mesh", level: 3 },
          { name: "VLAN", level: 3 }
        ]
      },
      {
        name: "Edge & CDN",
        items: [
          { name: "Cloudflare", level: 4 },
          { name: "Fastly", level: 3 }
        ]
      },
      {
        name: "Service Mesh",
        items: [
          { name: "Calico", level: 3 },
          { name: "Cilium", level: 3 }
        ]
      }
    ]
  },
  {
    category: "Observabilité & Performance",
    subcategories: [
      {
        name: "SRE & Monitoring",
        items: [
          { name: "SLI/SLO/SLA", level: 3 },
          { name: "Dashboards", level: 3 }
        ]
      },
      {
        name: "Logging centralisé",
        items: [
          { name: "Elastic Stack", level: 3 },
          { name: "Loki", level: 4 }
        ]
      }
    ]
  }
];

// Points forts
export const highlights: Highlight[] = [
  { label: "Années d'expérience", value: "5+" },
  { label: "Projets réalisés", value: "30+" },
  { label: "Technologies maîtrisées", value: "15+" },
  { label: "Certifications", value: "AWS, Docker" }
];
