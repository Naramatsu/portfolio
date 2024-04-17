import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export const introduction = (
  <>
    <h3>I am Jonathan</h3>
    <h1>
      Software Engineer
      <br />
      Frontend Developer
    </h1>
    <p>
      I am responsible for developing and testing frontend features, integrating
      APIs, and ensuring high performance and user experience.
    </p>
  </>
);

export const downloadCvLabel = "Download CV";

export const mediaLinks = [
  {
    link: "#",
    icon: <FaFacebookF />,
  },
  {
    link: "#",
    icon: <FaLinkedinIn />,
  },
  {
    link: "#",
    icon: <FaGithub />,
  },
  {
    link: "#",
    icon: <FaWhatsapp />,
  },
];

export const quikDataInfo = [
  {
    mount: 5,
    label: "Years of Experience",
  },
  {
    mount: 6,
    label: "Code Personal Projects",
  },
  {
    mount: "+17",
    label: "Technologies Learned",
  },
  {
    mount: 2,
    label: "UI/UX Personal Projects",
  },
];
