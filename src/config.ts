import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://cristobalsalinas.github.io/", // replace this with your deployed domain
  author: "Cristóbal Salinas",
  desc: "Portafolio y blog de Cristóbal Salinas.",
  title: "Cristóbal Salinas",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
};

export const LOCALE = []; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/CristobalSalinas",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/cristobal-salinas-pe%C3%B1a-246b02180/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:contacto.csalinas@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@codigodemedianoche2868",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
];
