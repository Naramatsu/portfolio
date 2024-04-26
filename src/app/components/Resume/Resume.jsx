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
import { DARK } from "@/utils/constants";
import Link from "next/link";

const Resume = ({ theme, languaje }) => {
  const [showModal, setShowModal] = useState(false);
  const [experienceSelected, setExperienceSelected] = useState(null);
  const resumeClassName = theme === DARK ? styles.resumeDark : styles.resume;

  const handlerShowModal = (info) => {
    if (showModal) return setShowModal(false);
    setExperienceSelected(info);
    setShowModal(true);
  };

  return (
    <main id="experience" className={resumeClassName}>
      <section className={styles.resumeContainer}>
        <section className={styles.resumeOverview}>
          <h2>{resumeExperienceTitle[languaje]}</h2>
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
          <h2>{resumeEducationTitle[languaje]}</h2>
          <section className={styles.resumeItemList}>
            {educationList.map(({ period, title, company }, index) => (
              <section key={index} className={styles.resumeItem}>
                <label>{period}</label>
                <h3>{title[languaje]}</h3>
                <p>{company}</p>
              </section>
            ))}
          </section>
          <h2 style={{ marginTop: "50px" }}>
            {resumeCertificationsTitle[languaje]}
          </h2>
          <section className={styles.resumeCertificationList}>
            {certificationList.map(({ title, link }, index) => (
              <section key={index} className={styles.certificationItems}>
                <Link href={link} target="_blank" rel="noreferrer">
                  {title}
                </Link>
              </section>
            ))}
          </section>
        </section>
      </section>
      <ModalExperience
        isVisible={showModal}
        info={experienceSelected}
        languaje={languaje}
        onClose={() => setShowModal(false)}
        theme={theme}
      />
    </main>
  );
};

export default Resume;
