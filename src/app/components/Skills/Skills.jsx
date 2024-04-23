import React from "react";
import styles from "./Skills.module.scss";
import Image from "next/image";

import { skillsDescription, skillsList, skillsTitle } from "./Skills.data";
import { DARK } from "@/utils/constants";

const Skills = ({ theme, languaje }) => {
  return (
    <section
      style={{ "--isdark": theme === DARK ? 1 : 0 }}
      className={styles.skills}
    >
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
    </section>
  );
};

export default Skills;
