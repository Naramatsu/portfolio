import { GrLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";

export const contactTitle = "Let’s work together!";

export const contactDescription =
  "I design and code beautifully simple things and i love what i do. Just simple like that!";

export const emailFields = [
  {
    type: "text",
    name: "firtname",
    label: "First name",
  },
  {
    type: "text",
    name: "lastname",
    label: "Last name",
  },
  {
    type: "email",
    name: "emailaddress",
    label: "Email address",
  },
  {
    type: "text",
    name: "phonenumber",
    label: "Phone number",
  },
];

export const messageField = {
  name: "message",
  label: "Message",
};

export const btnSendMeLabel = "Send Message";

export const contactInfoList = [
  {
    icon: <SlPhone />,
    type: "Phone",
    label: ["+57 317 8559 796"],
  },
  {
    icon: <MdOutlineMail />,
    type: "Email",
    label: ["joncyy_19@hotmail.com", "jonxthxn1911@gmail.com"],
  },
  {
    icon: <GrLocation />,
    type: "Address",
    label: ["Colombia. Cartagena - Bolivar"],
  },
];
