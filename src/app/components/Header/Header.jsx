"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../jcnm_logo.png";
import LogoWhite from "../../jcnm_logo_white.png";
import styles from "./Header.module.scss";
import { email, hireMeLabel, routes } from "./Header.data";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { DARK, whatsAppLink } from "@/utils/constants";

const linksListBuilder = (onClick, className, languaje) => (
  <ul>
    {routes.map(({ link, label }, index) => (
      <li key={index}>
        <Link
          href={link}
          onClick={() => onClick(label[languaje])}
          className={className(label[languaje])}
        >
          {label[languaje]}
        </Link>
      </li>
    ))}
  </ul>
);

const Header = ({ theme, languaje }) => {
  const [activeTab, setActiveTab] = useState("");
  const [activeNav, setActiveNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const LogoTheme = theme === DARK ? LogoWhite : Logo;

  useEffect(() => {
    const handlerScroll = addEventListener("scroll", () => {
      setScrollY(window.scrollY || 0);
    });
    return () => {
      removeEventListener("scroll", handlerScroll);
    };
  }, [scrollY]);

  const headerClassName = () => {
    if (theme === DARK) {
      return scrollY > 100 ? styles.headerFixedDark : styles.headerTopDark;
    }
    return scrollY > 100 ? styles.headerFixed : styles.headerTop;
  };

  const isActiveTab = (tab) =>
    activeTab === tab ? styles.linkActive : styles.linkInactive;

  const navStyles = () => (activeNav ? styles.navOpen : styles.navClose);

  const handlerActiveTab = (tab) => setActiveTab(tab);

  const isHamburguerMenuOpen = (isOpen) =>
    isOpen ? styles.hamburgerMenuOpen : styles.hamburgerMenuClose;

  return (
    <header className={headerClassName()}>
      <section className={styles.headerContainer}>
        <section className={styles.logo}>
          <Link href="#summary" onClick={() => handlerActiveTab("")}>
            <Image src={LogoTheme} alt="logo" width={60} height={80} />
          </Link>
        </section>
        <nav className={styles.nav}>
          {linksListBuilder(handlerActiveTab, isActiveTab, languaje)}
        </nav>
        <section className={styles.buttonContainer}>
          <Link
            href={whatsAppLink}
            target="_blank"
            className={styles.btnHireMe}
          >
            {hireMeLabel[languaje]}
          </Link>
          <section className={styles.hamburgerMenu}>
            <section>
              <RiMenu3Fill
                className={isHamburguerMenuOpen(!activeNav)}
                onClick={() => setActiveNav(true)}
              />
              <MdOutlineClose
                className={isHamburguerMenuOpen(activeNav)}
                onClick={() => setActiveNav(false)}
              />
            </section>
            <nav className={navStyles()}>
              {linksListBuilder(navStyles, navStyles, languaje)}
            </nav>
          </section>
        </section>
      </section>
    </header>
  );
};

export default Header;
