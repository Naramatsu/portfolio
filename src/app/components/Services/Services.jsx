import React from "react";
import styles from "./Services.module.scss";
import {
  servicesDescription,
  servicesList,
  servicesTitleLabel,
} from "./Services.data";

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>{servicesTitleLabel}</h2>
      <p>{servicesDescription}</p>
      <section className={styles.servicesContainer}>
        {servicesList.map(({ title, description }, index) => (
          <section key={index} className={styles.serviceTab}>
            <label>0{index + 1}</label>
            <h3>{title}</h3>
            <p>{description}</p>
          </section>
        ))}
        <section className={styles.selector} />
      </section>
    </section>
  );
};

export default Services;
