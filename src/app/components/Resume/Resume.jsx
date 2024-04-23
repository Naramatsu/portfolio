"use client";
import React, { useState } from "react";

import styles from "./Resume.module.scss";
import {
  certificationList,
  educationList,
  experienceList,
  resumeCertificationsTitle,
  resumeEducationTitle,
  resumeExperienceTitle,
} from "./Resume.data";
import ModalExperience from "../ModalExperience";

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
  const [experienceSelected, setExperienceSelected] = useState(null);

  const handlerShowModal = (info) => {
    if (showModal) return setShowModal(false);
    setExperienceSelected(info);
    setShowModal(true);
  };

  return (
    <section className={styles.resume}>
      <section className={styles.resumeContainer}>
        <section className={styles.resumeOverview}>
          <h2>{resumeExperienceTitle}</h2>
          <section className={styles.resumeItemList}>
            {experienceList.map(({ period, title, company, info }, index) => (
              <section
                key={index}
                className={styles.resumeItem}
                onClick={() =>
                  handlerShowModal({ ...info, period, title, company })
                }
              >
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
          <h2 style={{ marginTop: "50px" }}>{resumeCertificationsTitle}</h2>
          <section className={styles.resumeCertificationList}>
            {certificationList.map(({ title, link }, index) => (
              <section key={index} className={styles.certificationItems}>
                <a href={link} target="__blank" rel="noreferrer">
                  {title}
                </a>
              </section>
            ))}
          </section>
        </section>
      </section>
      <ModalExperience
        isVisible={showModal}
        info={experienceSelected}
        onClose={() => setShowModal(false)}
      />
    </section>
  );
};

export default Resume;
