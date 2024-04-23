import React from "react";
import Image from "next/image";
import Logo from "../../jcnm_logo.png";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { routes } from "../Header/Header.data";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Link href="#">
        <Image src={Logo} alt="logo" width={60} height={80} />
      </Link>
      <ul>
        {routes.map(({ link, label }, index) => (
          <li key={index}>
            <Link href={link}>{label}</Link>
          </li>
        ))}
      </ul>
      <p>© 2024 All rights reserved</p>
    </section>
  );
};

export default Footer;
