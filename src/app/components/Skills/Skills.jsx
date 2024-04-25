import React from "react";
import styles from "./Skills.module.scss";
import Image from "next/image";

import { skillsDescription, skillsList, skillsTitle } from "./Skills.data";
import { DARK } from "@/utils/constants";

const Skills = ({ theme, languaje }) => {
  const skillsClassName = theme === DARK ? styles.skillsDark : styles.skills;

  return (
    <main id="skills" className={skillsClassName}>
      <section className={styles.skillsContainer}>
        <h2>{skillsTitle[languaje]}</h2>
        <h5>{skillsDescription[languaje]}</h5>
        <section className={styles.skillList}>
          {skillsList.map(({ img, name }, index) => (
            <section key={index} className={styles.skillItem}>
              <Image src={img} alt={name} />
              <p>{name}</p>
            </section>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Skills;
