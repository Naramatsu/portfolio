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
import { DARK } from "@/utils/constants";

const linksListBuilder = (onClick, className) => (
  <ul>
    {routes.map(({ link, label }, index) => (
      <li key={index}>
        <Link
          href={link}
          onClick={() => onClick(label)}
          className={className(label)}
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

const Header = ({ theme }) => {
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

  const headerClassName = () =>
    scrollY > 100 ? styles.headerFixed : styles.headerTop;

  const isActiveTab = (tab) =>
    activeTab === tab ? styles.linkActive : styles.linkInactive;

  const navStyles = () => (activeNav ? styles.navOpen : styles.navClose);

  const handlerActiveTab = (tab) => setActiveTab(tab);

  const isHamburguerMenuOpen = (isOpen) =>
    isOpen ? styles.hamburgerMenuOpen : styles.hamburgerMenuClose;

  return (
    <header
      style={{ "--isDark": theme === DARK }}
      className={headerClassName()}
    >
      <section className={styles.headerContainer}>
        <section className={styles.logo}>
          <Link href="#">
            <Image src={LogoTheme} alt="logo" width={60} height={80} />
            <p>{email}</p>
          </Link>
        </section>
        <nav className={styles.nav}>
          {linksListBuilder(handlerActiveTab, isActiveTab)}
        </nav>
        <section className={styles.buttonContainer}>
          <button className={styles.btnHireMe}>{hireMeLabel}</button>
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
              {linksListBuilder(navStyles, navStyles)}
            </nav>
          </section>
        </section>
      </section>
    </header>
  );
};

export default Header;
