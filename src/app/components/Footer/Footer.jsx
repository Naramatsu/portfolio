import React from "react";
import Image from "next/image";
import Logo from "../../jcnm_logo.png";
import LogoWhite from "../../jcnm_logo_white.png";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { routes } from "../Header/Header.data";
import { DARK } from "@/utils/constants";

const Footer = ({ theme, languaje }) => {
  const LogoTheme = theme === DARK ? LogoWhite : Logo;
  const footerClassName = theme === DARK ? styles.footerDark : styles.footer;

  return (
    <section className={footerClassName}>
      <Link href="#summary">
        <Image src={LogoTheme} alt="logo" width={60} height={80} />
      </Link>
      <ul>
        {routes.map(({ link, label }, index) => (
          <li key={index}>
            <Link href={link}>{label[languaje]}</Link>
          </li>
        ))}
      </ul>
      <p>Jonathan Camilo Narvaez Martinez</p>
    </section>
  );
};

export default Footer;
