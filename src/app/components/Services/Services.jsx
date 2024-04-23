import React from "react";
import styles from "./Services.module.scss";
import {
  servicesDescription,
  servicesList,
  servicesTitleLabel,
} from "./Services.data";
import { DARK } from "@/utils/constants";

const Services = ({ theme, languaje }) => {
  return (
    <section
      style={{ "--isdark": theme === DARK ? 1 : 0 }}
      className={styles.services}
    >
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
    </section>
  );
};

export default Services;
