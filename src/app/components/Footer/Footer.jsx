import React from "react";
import Image from "next/image";
import Logo from "../../jcnm_logo.png";
import LogoWhite from "../../jcnm_logo_white.png";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { routes } from "../Header/Header.data";
import { DARK, ENGLISH, SPANISH } from "@/utils/constants";

const inspiredByLabel = {
  [SPANISH]: "Inspirado en esto.",
  [ENGLISH]: "Inspired by this.",
};

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
      <a
        href="https://themejunction.net/html/gerold/demo/index-light.html"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.inspired}
      >
        {inspiredByLabel[languaje]}
      </a>
    </section>
  );
};

export default Footer;
