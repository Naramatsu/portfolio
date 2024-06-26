import React from "react";
import styles from "./Services.module.scss";
import {
  servicesDescription,
  servicesList,
  servicesTitleLabel,
} from "./Services.data";
import { DARK } from "@/utils/constants";

const Services = ({ theme, languaje }) => {
  const servicesClassName =
    theme === DARK ? styles.servicesDark : styles.services;

  return (
    <main id="services" className={servicesClassName}>
      <h2>{servicesTitleLabel[languaje]}</h2>
      <p>{servicesDescription[languaje]}</p>
      <section className={styles.servicesContainer}>
        {servicesList.map(({ title, description }, index) => (
          <section key={index} className={styles.serviceTab}>
            <label>0{index + 1}</label>
            <h3>{title[languaje]}</h3>
            <p>{description[languaje]}</p>
          </section>
        ))}
        <section className={styles.selector} />
      </section>
    </main>
  );
};

export default Services;
