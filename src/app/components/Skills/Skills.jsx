import React from "react";
import styles from "./Skills.module.scss";
import Image from "next/image";

import { skillsDescription, skillsList, skillsTitle } from "./Skills.data";
import { DARK } from "@/utils/constants";

const Skills = ({ theme }) => {
  return (
    <section style={{ "--isDark": theme === DARK }} className={styles.skills}>
      <section className={styles.skillsContainer}>
        <h2>{skillsTitle}</h2>
        <h5>{skillsDescription}</h5>

        <section className={styles.skillList}>
          {skillsList.map(({ img, name }, index) => (
            <section key={index} className={styles.skillItem}>
              <Image src={img} alt={name} />
              <p>{name}</p>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Skills;
