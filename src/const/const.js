export const studies = [
  {
    title: "Stage Développeur IA",
    corporation: "Datanovate",
    date: "Janv. 2025 - Mars 2025",
  },
  {
    title: "Etudiant BUT Informatique",
    corporation: "IUT Montpellier",
    date: "2023 – 2026",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  flutter: "flutter",
  php: "php",
  java: "java",
  gitlab: "gitlab",
  python: "python",
  c: "c",
  mysql: "mysql",
  tensorflow: "tensorflow", 
  postgresql: "postgresql",
  synphony: "synphony",
  // here add more icon keys
};

export const skills = [
  {
    title: "Symfony",
    icon: IconKeys.synphony,
  },
  {
    title: "PHP",
    icon: IconKeys.php,
  },
  {
    title: "MySQL",
    icon: IconKeys.mysql,
  },
  {
    title: "GitLab",
    icon: IconKeys.gitlab,
  },
  {
    title: "React Native",
    icon: IconKeys.react,
  },
  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
  },
  {
    title: "Python",
    icon: IconKeys.python,
  },
  {
    title: "Tensorflow",
    icon: IconKeys.tensorflow,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },
  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "Tailwind CSS",
    icon: IconKeys.tailwind,
  },
  {
    title: "PostgreSQL",
    icon: IconKeys.postgresql,
  },
  {
    title: "Java",
    icon: IconKeys.java,
  },
  {
    title: "C",
    icon: IconKeys.c,
  },
  {
    title: "Flutter",
    icon: IconKeys.flutter,
  },
];

export const projects = [
  {
    img: "/Portfolio/img/ocr_project.png",
    title: "Robustesse IA : Architecture Hybride CNN-RNN",
    link: "/Portfolio/descriptionProjet",
    description: "Prototype end-to-end de reconnaissance de chiffres manuscrits intégrant un modèle CNN (TensorFlow/Keras) et une interface web interactive.",
    technologies: [
      {
        icon: IconKeys.python,
      },
      {
        icon: IconKeys.tensorflow,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.html,
      },
    ],
    page: "OcrCnnProject",
  },
  {
    img: "/Portfolio/img/wavyMeteo.png",
    title: "Wavy Météo",
    link: "/Portfolio/descriptionProjet",
    description: "Une solution complète alliant plateforme web communautaire et application mobile native, synchronisée via une API REST sécurisée.",
    technologies: [
      {
        icon: IconKeys.synphony,
      },
      {
        icon: IconKeys.php,
      },
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.mysql,
      },
      {
        icon: IconKeys.git,
      },
    ],
    page: "WavyMeteo",
  },
  {
    img: "/Portfolio/img/accueilSAE.png",
    title: "Gestion Notes & Études",
    link: "/Portfolio/descriptionProjet",
    description: `Ce projet est une application web dédiée aux enseignants et aux étudiants, permettant de suivre les notes des semestres, d'analyser les progrès à l'aide de graphiques interactifs, et d'émettre des avis de poursuite d'études.`,
    technologies: [
      {
        icon: IconKeys.php,
      },
      {
        icon: IconKeys.html,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.mysql,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.git,
      },
    ],
    page:"SiteGestionNote",
  },
  {
    img: "/Portfolio/img/trains.jpg",
    title: "Trains",
    link: "/Portfolio/descriptionProjet",
    description: `Un jeu inspiré de la gestion ferroviaire, où les joueurs construisent des réseaux, optimisent les trajets et gèrent leurs ressources pour atteindre leurs objectifs. Ce projet met l'accent sur la stratégie et la réflexion.`,
    technologies: [
      {
        icon: IconKeys.java,
      },
    ],
    page:"AppTrain"
  },
  {
    img: "/Portfolio/img/verybadsplit_accueil.png",
    title: "VeryBadSplit",
    link: "/Portfolio/descriptionProjet",
    description: `Une application web de budgétisation événementielle, entièrement reconstruite pour gérer les dépenses partagées, corriger les failles de sécurité et offrir une interface moderne et réactive.`,
    technologies: [
      {
        icon: IconKeys.php,
      },
      {
        icon: IconKeys.html,
      },
      {
        icon: IconKeys.mysql,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.git,
      },
    ],
    page:"VeryBadSplit"
  },
];
