import { ENGLISH, SPANISH } from "@/utils/constants";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";

export const contactTitle = {
  [ENGLISH]: "Let’s work together!",
  [SPANISH]: "¡Trabajemos juntos!",
};

export const contactDescription = {
  [ENGLISH]:
    "I code and design beautiful simple things and i love what i do. Just simple like that!",
  [SPANISH]:
    "Codifico y diseño cosas hermosas y simples y amo lo que hago. ¡Así de simple!",
};

export const emailFields = [
  {
    type: "text",
    name: "firtname",
    label: { [ENGLISH]: "First name", [SPANISH]: "Nombre" },
  },
  {
    type: "text",
    name: "lastname",
    label: { [ENGLISH]: "Last name", [SPANISH]: "Apellidos" },
  },
  {
    type: "email",
    name: "emailaddress",
    label: { [ENGLISH]: "Email address", [SPANISH]: "Correo Electronico" },
  },
  {
    type: "text",
    name: "phonenumber",
    label: { [ENGLISH]: "Phone number", [SPANISH]: "Número de telefono" },
  },
];

export const messageField = {
  name: "message",
  label: { [ENGLISH]: "Message", [SPANISH]: "Mensaje" },
};

export const btnSendMeLabel = {
  [ENGLISH]: "Send Message",
  [SPANISH]: "Enviar Mensaje",
};

export const contactInfoList = [
  {
    icon: <SlPhone />,
    type: {
      [ENGLISH]: "Phone",
      [SPANISH]: "Telefono",
    },
    label: ["+57 317 8559 796"],
  },
  {
    icon: <MdOutlineMail />,
    type: {
      [ENGLISH]: "Email",
      [SPANISH]: "Correo",
    },
    label: ["joncyy_19@hotmail.com", "jonxthxn1911@gmail.com"],
  },
  {
    icon: <GrLocation />,
    type: {
      [ENGLISH]: "Address",
      [SPANISH]: "Dirección",
    },
    label: ["Colombia. Cartagena - Bolivar"],
  },
];
