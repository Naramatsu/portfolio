import React from "react";

import styles from "./Resume.module.scss";
import {
  educationList,
  experienceList,
  resumeEducationTitle,
  resumeExperienceTitle,
} from "./Resume.data";

const Resume = () => {
  return (
    <section className={styles.resume}>
      <section className={styles.resumeContainer}>
        <section className={styles.resumeOverview}>
          <h2>{resumeExperienceTitle}</h2>
          <section className={styles.resumeItemList}>
            {experienceList.map(({ period, title, company }, index) => (
              <section key={index} className={styles.resumeItem}>
                <label>{period}</label>
                <h3>{title}</h3>
                <p>{company}</p>
              </section>
            ))}
          </section>
        </section>
        <section className={styles.resumeOverview}>
          <h2>{resumeEducationTitle}</h2>
          <section className={styles.resumeItemList}>
            {educationList.map(({ period, title, company }, index) => (
              <section key={index} className={styles.resumeItem}>
                <label>{period}</label>
                <h3>{title}</h3>
                <p>{company}</p>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Resume;
