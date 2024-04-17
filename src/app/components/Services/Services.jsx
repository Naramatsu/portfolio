import React from "react";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>My Quality Services</h2>
      <p>
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </p>
      <section className={styles.servicesContainer}>
        <section className={styles.serviceTab}>
          <label>01</label>
          <h3>Web Development</h3>
          <p>
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
        </section>
        <section className={styles.serviceTab}>
          <label>02</label>
          <h3>Fullstack Service</h3>
          <p>
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
        </section>
        <section className={styles.selector} />
      </section>
    </section>
  );
};

export default Services;
