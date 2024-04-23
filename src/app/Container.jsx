"use client";
import React, { useContext } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import FloatButton from "./components/FloatButton";
import Footer from "./components/Footer";
import RecentWorks from "./components/RecentWorks";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import styles from "./page.module.scss";
import { AppContext } from "./store";

const Container = () => {
  const { languaje, theme } = useContext(AppContext);

  return (
    <main className={styles.main}>
      <Header languaje={languaje} theme={theme} />
      <Summary languaje={languaje} theme={theme} />
      <Services languaje={languaje} theme={theme} />
      <RecentWorks languaje={languaje} theme={theme} />
      <Resume languaje={languaje} theme={theme} />
      <Skills languaje={languaje} theme={theme} />
      <Contact languaje={languaje} theme={theme} />
      <FloatButton />
      <Footer languaje={languaje} theme={theme} />
    </main>
  );
};

export default Container;
