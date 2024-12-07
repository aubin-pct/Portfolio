export const studies = [
  {
    title: "Técnico en desarrollo de software",
    corporation: "SENA - Montería (Córdoba) ",
    date: "02/2019 – 12/2019",
  },
  {
    title: "Desarrollador Front-end React Js",
    corporation: "Alura Latam - Remoto",
    date: "04/2023 – 09/2023",
  },
  {
    title: "Curso profesional de React Js",
    corporation: "Código facilito - Remoto",
    date: "04/2023 – 04/2023",
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
  mysql: "mysql"
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
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Flutter",
    icon: IconKeys.flutter,
  },
  {
    title: "PHP",
    icon: IconKeys.php,
  },
  {
    title: "Java",
    icon: IconKeys.java,
  },
  {
    title: "GitLab",
    icon: IconKeys.gitlab,
  },
  {
    title: "Python",
    icon: IconKeys.python,
  },
  {
    title: "C",
    icon: IconKeys.c,
  },
  {
    title: "MySQL",
    icon: IconKeys.mysql,
  }
];

export const projects = [
  {
    img: "../../../img/tasks-manager.webp",
    title: "Tasks Manager",
    link: "https://task-manager-ecru-chi.vercel.app/dashboard",
    description: `Administrador de tareas con drag and drop autenticación con Clerk , shadcn.  "En Desarrollo "`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.zustand,
      },
      {
        icon: IconKeys.shadcn,
      },
    ],
  },
];
