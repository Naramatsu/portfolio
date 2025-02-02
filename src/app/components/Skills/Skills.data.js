import JsLogo from "../../assets/logos/jsLogo.png";
import ReactLogo from "../../assets/logos/reactLogo.png";
import Typescriptlogo from "../../assets/logos/Typescriptlogo.png";
import NodeLogo from "../../assets/logos/nodeLogo.png";
import Html5Logo from "../../assets/logos/htmlLogo.png";
import CssLogo from "../../assets/logos/css3Logo.png";
import SassLogo from "../../assets/logos/sassLogo.png";
import FigmaLogo from "../../assets/logos/figmaLogo.png";
import { ENGLISH, SPANISH } from "@/utils/constants";

export const skillsTitle = {
  [ENGLISH]: "My Skills",
  [SPANISH]: "Mis Habilidades",
};

export const skillsDescription = {
  [ENGLISH]:
    "I have a strong background in software development using fresh and modern languages, which demonstrates my skills and knowledge in building modern and scalable web applications.",
  [SPANISH]:
    "Tengo una sólida experiencia en desarrollo de software utilizando lenguajes novedosos y modernos que demuestran mis habilidades y conocimientos en la creación de aplicaciones web modernas y escalables.",
};

export const skillsList = [
  {
    img: JsLogo,
    name: "JavaScript",
  },
  {
    img: ReactLogo,
    name: "React Js",
  },
  {
    img: Typescriptlogo,
    name: "TypeScript",
  },
  {
    img: NodeLogo,
    name: "Node Js",
  },
  {
    img: Html5Logo,
    name: "HTML5",
  },
  {
    img: CssLogo,
    name: "CSS3",
  },
  {
    img: SassLogo,
    name: "Sass",
  },
  {
    img: FigmaLogo,
    name: "Figma",
  },
];
