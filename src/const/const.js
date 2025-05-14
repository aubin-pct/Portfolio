export const studies = [
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
  tensorflow: "tensorflow"
  // here add more icon keys
};

export const skills = [
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
    title: "PHP",
    icon: IconKeys.php,
  },
  {
    title: "MySQL",
    icon: IconKeys.mysql,
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
    title: "GitLab",
    icon: IconKeys.gitlab,
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
    title: "Python",
    icon: IconKeys.python,
  },
  {
    title: "Tensorflow",
    icon: IconKeys.tensorflow,
  },
  {
    title: "Flutter",
    icon: IconKeys.flutter,
  },
];

export const projects = [
  {
    img: "./../../public/img/accueilSAE.png",
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
    img: "./../../public/img/accueilSAE.png",
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
];
