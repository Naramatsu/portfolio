import { ENGLISH, SPANISH } from "@/utils/constants";

const reactCertification = new URL(
  "../../../../public/documents/reactC.png",
  import.meta.url
);
const reactDesignPatternsCertification = new URL(
  "../../../../public/documents/designPatternC.png",
  import.meta.url
);
const reduxCertification = new URL(
  "../../../../public/documents/reduxC.png",
  import.meta.url
);
const typeScriptCertification = new URL(
  "../../../../public/documents/typeScriptC.png",
  import.meta.url
);
const reactNativeCertification = new URL(
  "../../../../public/documents/reactNativeC.png",
  import.meta.url
);
const graphQLCertification = new URL(
  "../../../../public/documents/graphQlC.png",
  import.meta.url
);
const uxCertification = new URL(
  "../../../../public/documents/uxC.png",
  import.meta.url
);
const figmaCertification = new URL(
  "../../../../public/documents/figmaC.png",
  import.meta.url
);

export const resumeExperienceTitle = {
  [ENGLISH]: "My Experience",
  [SPANISH]: "Mi Experiencia",
};

export const experienceList = [
  {
    period: "2021 - Cuerrent",
    title: "Frontend Developer",
    company: "Freelance",
    info: {
      description: {
        [ENGLISH]: (
          <p>
            Kromac-UI (Style framework) — is a 100% responsive style framework
            that seeks to facilitate the development and implementation of
            eye-catching components with modern styles in web applications.
          </p>
        ),
        [SPANISH]: (
          <p>
            Kromac-UI (Style framework) — es un framework de estilo 100%
            responsive que busca facilitar el desarrollo e implementación de
            componentes llamativos con estilos modernos a las aplicaciones web.
          </p>
        ),
      },
      techs: [
        "HTML5",
        "CSS3",
        "SASS",
        "JavaScript",
        "ReactJs",
        "React hooks",
        "ES6",
        "Git",
        "Github",
        "Webpack",
        "Figma",
        "Jest",
      ],
    },
  },
  {
    period: "2024 - 2025",
    title: "Frontend Developer",
    company: "Adecco/Akkodis - The Home Depot",
    info: {
      description: {
        [ENGLISH]: (
          <p>
            Data Analysis Application — Enhancement and validation of product
            functionality using ReactJS, React Context, and other internal
            company technologies on the frontend. Part of a team of seven
            frontend developers, each responsible for implementing features from
            the backlog based on the Product Owner&apos;s projections.
          </p>
        ),
        [SPANISH]: (
          <p>
            Aplicativo para análisis de datos — Incremento y validación de
            funcionamiento de producto usando ReactJS + React Context y demás
            tecnologías internas de la compañía del lado del frontend. Equipo
            conformado por un grupo de 7 desarrolladores frontend, cada uno se
            encargaba de las funcionalidades creadas en el backlog de acuerdo a
            las proyecciones del Product Owner.
          </p>
        ),
      },
      techs: [
        "HTML5",
        "CSS3",
        "Javascript",
        "ReactJs",
        "React hooks",
        "React Query",
        "React Context",
        "ES6",
        "Git",
        "Github",
        "Jira",
        "Jest",
        "Cypress",
        "Api REST",
        "Google Cloud Platform",
        "BigQuery",
        "Golang",
        "Mockups",
      ],
    },
  },
  {
    period: "2023 - 2024",
    title: "Frontend Developer",
    company: "Tech Mahindra - Scotiabank Colpatria",
    info: {
      description: {
        [ENGLISH]: (
          <p>
            Colpatria bank application — Creation of an application in ReactJS +
            Redux and others, conformed by a group of 2 QA testers, 2 business
            analysts, 1 agile facilitator, 4 backend developers and 4 frontend
            developers, each of whom was in charge of features created in the
            backlog according to the Product Owner projections.
          </p>
        ),
        [SPANISH]: (
          <p>
            Aplicativo para banco localizado en Colombia — Incremento y
            validación de funcionamiento de producto usando ReactJS + Redux y
            demás tecnologías internas de la compañía. Equipo conformado por un
            grupo de 2 QA testers, 2 business analysts, 1 agile facilitator, 4
            desarrolladores backend y 4 desarrolladores frontend, cada uno se
            encargaba de las funcionalidades creadas en el backlog de acuerdo a
            las proyecciones del Product Owner. Metodología de trabajo
            resolviendo tareas por duplas (por cada frontend trabaja con un
            backend developer).
          </p>
        ),
      },
      techs: [
        "HTML5",
        "CSS3",
        "Javascript",
        "ReactJs",
        "React hooks",
        "ES6",
        "Git",
        "Bitbucket",
        "Redux",
        "Redux-thunk",
        "styled-components",
        "Jira",
        "Jest",
        "Api REST",
        "Mockups",
      ],
    },
  },
  {
    period: "2020 - 2022",
    title: "Fullstack Developer",
    company: "Condor labs",
    info: {
      description: {
        [ENGLISH]: (
          <p>
            Education web application — Creation of an application in ReactJS +
            SASS + Redux + NojdeJS + Express + MongoDB + OracleDB + AWS stack,
            conformed by a group of 3 backend developers and 1 frontend
            developer, each one was in charge of features created in the backlog
            according to the Product Owner projections.
          </p>
        ),
        [SPANISH]: (
          <p>
            Education web application —Creación de la aplicación en ReactJS +
            SASS + Redux + NojdeJS + Express + MongoDB + OracleDB + AWS stack,
            equipo conformado por un grupo de 3 desarrolladores backend y 1
            desarrollador frontend, cada uno se encargaba de las funcionalidades
            creadas en el backlog de acuerdo a las proyecciones del Product
            Owner
          </p>
        ),
      },
      techs: [
        "HTML5",
        "CSS3",
        "Javascript",
        "ReactJs",
        "React hooks",
        "Bootstrap",
        "Emerald-UI",
        "SASS",
        "ES6",
        "Redux",
        "Redux-thunk",
        "NodeJs",
        "Express",
        "AWS",
        "MongoDB",
        "Oracle",
        "Redis",
        "Git",
        "Github",
        "Jest",
        "Api REST",
        "Mockups",
      ],
    },
  },
  {
    period: "2019 - 2020",
    title: "Fullstack Developer",
    company: "Zeus",
    info: {
      description: {
        [ENGLISH]: (
          <p>
            Restaurant Application — Maintaining an application in Foxpro,
            Visual Basic and migrating to ASP .Net, was formed by a group of 3
            full stack developers, each one was in charge of features created in
            the backlog according to the Product Owner projections.
          </p>
        ),
        [SPANISH]: (
          <p>
            Aplicativo para restaurantes— Mantenimiento de una aplicación en
            Foxpro, Visual Basic y migración a ASP .Net, equipo conformado por
            un grupo de 3 desarrolladores full stack, cada uno se encargaba de
            funcionalidades creadas en el backlog de acuerdo a las proyecciones
            del Product Owner
          </p>
        ),
      },
      techs: [
        "HTML5",
        "CSS3",
        "Javascript",
        "SQL Server",
        "C#",
        "ASP .NET",
        "Visual Basic",
        "Fox Pro",
      ],
    },
  },
];

export const resumeEducationTitle = {
  [ENGLISH]: "My Education",
  [SPANISH]: "Mi Educación",
};

export const educationList = [
  {
    period: "2014 - 2020",
    title: {
      [ENGLISH]: "Systems Engineering",
      [SPANISH]: "Ingenería de Sistemas",
    },
    company: "Fundacion Universitaria Tecnologico Comfenalco",
  },
  {
    period: "2013",
    title: { [ENGLISH]: "High school", [SPANISH]: "Secundaria" },
    company: "Institucion Educativa Docente de Turbaco",
  },
];

export const resumeCertificationsTitle = {
  [ENGLISH]: "LinkedIn Certifications",
  [SPANISH]: "Certificaciones LinkedIn",
};

export const certificationList = [
  {
    title: "React Js",
    link: reactCertification,
  },
  {
    title: "React: Design Patterns",
    link: reactDesignPatternsCertification,
  },
  {
    title: "Redux",
    link: reduxCertification,
  },
  {
    title: "TypeScript",
    link: typeScriptCertification,
  },
  {
    title: "React Native",
    link: reactNativeCertification,
  },
  {
    title: "GraphQL",
    link: graphQLCertification,
  },
  {
    title: "User Experience Design",
    link: uxCertification,
  },
  {
    title: "Figma",
    link: figmaCertification,
  },
];
