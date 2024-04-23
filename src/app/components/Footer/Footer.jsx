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
  return (
    <section
      style={{ "--isdark": theme === DARK ? 1 : 0 }}
      className={styles.footer}
    >
      <Link href="#">
        <Image src={LogoTheme} alt="logo" width={60} height={80} />
      </Link>
      <ul>
        {routes.map(({ link, label }, index) => (
          <li key={index}>
            <Link href={link}>{label[languaje]}</Link>
          </li>
        ))}
      </ul>
      <p>© 2024 All rights reserved</p>
    </section>
  );
};

export default Footer;
