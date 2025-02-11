import KromacUIApp from "../../assets/projects/kromac.png";
import TripCalculatorApp from "../../assets/projects/tripCalculatorApp.png";
import PokedexApp from "../../assets/projects/pokedexApp.png";
import CoachBootsApp from "../../assets/projects/coachboostApp.jpg";
import WordPuzzleApp from "../../assets/projects/wordpuzzleApp.jpg";
import JtytApp from "../../assets/projects/jtytApp.jpg";
import GladysPortfolioApp from "../../assets/projects/GladysPortfolioApp.png";
import Pomarosa from "../../assets/projects/Pomarosa.png";

import CoachBootsUIUX from "../../assets/projects/coachbootsUIUX.jpg";
import ShopAppUIUX from "../../assets/projects/shopUIUX.jpg";
import { ENGLISH, SPANISH } from "@/utils/constants";

export const recentWorksTitle = {
  [ENGLISH]: "Recent Works",
  [SPANISH]: "Trabajos recientes",
};

export const recentWorksDescription = {
  [ENGLISH]:
    "Personal and customer projects you can see and try. Watch some of my skills.",
  [SPANISH]:
    "Proyectos personales y de clientes que puedes ver y probar. Mira algunas de mis habilidades.",
};

export const filterOptions = ["All", "Apps", "UI/UX"];

export const projectList = [
  {
    img: KromacUIApp,
    name: "Kromac-UI",
    type: "Apps",
    link: "https://www.kromac-ui.com/",
    description: {
      [ENGLISH]:
        "100% responsive style framework that seeks to facilitate the development and implementation of components.",
      [SPANISH]:
        "Framework de estilo 100% responsive que busca facilitar el desarrollo e implementación de componentes.",
    },
  },
  {
    img: Pomarosa,
    name: "PomaRosa",
    type: "Apps",
    link: "https://www.pomarosa.com.co/",
    description: {
      [ENGLISH]:
        "Artisan bakery, pastry shop, cafeteria, gourmet bakery in Cartagena de Indias.",
      [SPANISH]:
        "Panadería artesanal, pastelería, cafetería, panadería gourmet en Cartagena de Indias.",
    },
  },
  {
    img: CoachBootsApp,
    name: "Coach Boots (in progress)",
    type: "Apps",
    link: "https://lolhugrock-deploy.vercel.app/",
    description: {
      [ENGLISH]:
        "League of Legends app for boosting or finding coaching by professionals.",
      [SPANISH]:
        "Aplicación League of Legends para impulsar o encontrar entrenamiento por parte de profesionales.",
    },
  },
  {
    img: GladysPortfolioApp,
    name: "Gladys Mendoza (Community Manager)",
    type: "Apps",
    link: "https://portfolio-gladys.vercel.app/",
    description: {
      [ENGLISH]: "Personal portfolio for a profesional community manager.",
      [SPANISH]: "Portafolio personal de una comunicadora social profesional.",
    },
  },
  {
    img: PokedexApp,
    name: "Pokedex",
    type: "Apps",
    link: "https://ciandt-tech-challenge-ten.vercel.app/",
    description: {
      [ENGLISH]: "Pokedex to search, add favorites and fight.",
      [SPANISH]: "Pokedex para buscar, añadir favoritos y luchar.",
    },
  },
  {
    img: TripCalculatorApp,
    name: "Trip Calculator",
    type: "Apps",
    link: "https://challenge-jonathan-narvaez.vercel.app/",
    description: {
      [ENGLISH]: "Simple App to calculate the distance between several points.",
      [SPANISH]: "App sencilla para calcular la distancia entre varios puntos.",
    },
  },
  {
    img: WordPuzzleApp,
    name: "Word Puzzle",
    type: "Apps",
    link: "https://peacku-challenge-jonathan-narvaez.vercel.app/",
    description: {
      [ENGLISH]: "Simple word puzzle to enjoy a little.",
      [SPANISH]: "Sencillo rompecabezas de palabras para disfrutar un poco.",
    },
  },
  {
    img: JtytApp,
    name: "Jowy Travels & Tours (in progress)",
    type: "Apps",
    link: "https://jowy-travel-tours-deploy.vercel.app/",
    description: {
      [ENGLISH]:
        "Touristic landing page for touristic agency in Cartagena Colombia.",
      [SPANISH]:
        "Landing page turístico para agencia de turismo en Cartagena Colombia.",
    },
  },
  {
    img: CoachBootsUIUX,
    name: "Coach Boots (in progress)",
    type: "UI/UX",
    link: "https://www.figma.com/file/NBjXfncA7SYVflILQt7KgJ/LolHugrock?type=design&node-id=0%3A1&mode=design&t=L7xgFt938k0pgjWJ-1",
    description: {
      [ENGLISH]:
        "Coach boots UI/UX design: League of Legends app for boosting or finding coaching by professionals.",
      [SPANISH]:
        "Coach boots UI/UX diseño: Aplicación League of Legends para impulsar o encontrar entrenamiento por parte de profesionales.",
    },
  },
  {
    img: ShopAppUIUX,
    name: "Shop App (In progress)",
    type: "UI/UX",
    link: "https://www.figma.com/file/2TKzvj2VWzVtMwrEpUfEJb/Untitled?type=design&node-id=0-1&mode=design&t=9xr19XqwJ0Ltg8Uw-0",
    description: {
      [ENGLISH]: "Shop App UI/UX design.",
      [SPANISH]: "Diseñp (UI/UX) Aplicación para tiendas.",
    },
  },
];
