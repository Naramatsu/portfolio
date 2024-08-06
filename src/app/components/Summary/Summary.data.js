import { ENGLISH, SPANISH, whatsAppLink } from "@/utils/constants";
import {
  // FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export const introduction = {
  [ENGLISH]: (
    <>
      <h3>I am Jonathan</h3>
      <h1>
        Software Engineer
        <br />
        Frontend Developer
      </h1>
      <p>
        Able to create, modify, fix and test frontend functions, integrating
        APIs and ensuring high performance and a good user experience.
      </p>
    </>
  ),
  [SPANISH]: (
    <>
      <h3>Hola, soy Jonathan</h3>
      <h1>
        Software Engineer
        <br />
        Frontend Developer
      </h1>
      <p>
        Capaz de crear, modificar, arreglar y probar funciones frontend,
        integrando API y garantizando un alto rendimiento y una buena
        experiencia de usuario.
      </p>
    </>
  ),
};

export const downloadCvLabel = {
  [ENGLISH]: "Download CV",
  [SPANISH]: "Descargar HV",
};

export const mediaLinks = [
  // {
  //   link: "https://www.facebook.com/jcnm19/",
  //   icon: <FaFacebookF />,
  // },
  {
    link: "https://www.linkedin.com/in/jonathan-narv%C3%A1ez-mart%C3%ADnez-338102233/",
    icon: <FaLinkedinIn />,
  },
  {
    link: "https://github.com/Naramatsu",
    icon: <FaGithub />,
  },
  {
    link: whatsAppLink,
    icon: <FaWhatsapp />,
  },
];

export const quikDataInfo = [
  {
    mount: 5,
    label: {
      [ENGLISH]: "Years of Experience",
      [SPANISH]: "Años de Experiencia",
    },
  },
  {
    mount: 6,
    label: {
      [ENGLISH]: "Personal Projects (Code)",
      [SPANISH]: "Proyectos Personales (Code)",
    },
  },
  {
    mount: "+17",
    label: {
      [ENGLISH]: "Technologies Learned",
      [SPANISH]: "Tecnologías Aprendidas",
    },
  },
  {
    mount: 2,
    label: {
      [ENGLISH]: "Personal Projects (UI/UX)",
      [SPANISH]: "Proyectos personales (UI/UX)",
    },
  },
];
