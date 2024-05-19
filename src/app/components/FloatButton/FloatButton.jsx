"use client";
import React, { useState, useContext } from "react";
import styles from "./FloatButton.module.scss";
import { AppContext } from "@/app/store";
import { DARK, ENGLISH, LIGHT, SPANISH } from "@/utils/constants";
import { FaPlus } from "react-icons/fa6";
import { FaRegLightbulb, FaRegMoon } from "react-icons/fa";

const FloatButton = () => {
  const { theme, languaje, setTheme, setLanguaje } = useContext(AppContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const actualThemeIcon = theme === DARK ? <FaRegMoon /> : <FaRegLightbulb />;
  const actualLanguaje = languaje === ENGLISH ? "En" : "Es";
  const iconSettingClassName = isSettingsOpen
    ? styles.iconSettingOpen
    : styles.iconSetting;

  return (
    <section className={styles.floatButton}>
      <FaPlus
        className={iconSettingClassName}
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
      />
      <button
        className={styles.themeIcon}
        onClick={() => setTheme(theme === DARK ? LIGHT : DARK)}
      >
        {actualThemeIcon}
      </button>
      <button
        className={styles.languajeIcon}
        onClick={() => setLanguaje(languaje === ENGLISH ? SPANISH : ENGLISH)}
      >
        {actualLanguaje}
      </button>
    </section>
  );
};

export default FloatButton;
