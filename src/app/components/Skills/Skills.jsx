import React from "react";
import styles from "./Skills.module.scss";
import Image from "next/image";

import { skillsDescription, skillsList, skillsTitle } from "./Skills.data";

const Skills = () => {
  return (
    <section className={styles.skills}>
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
  );
};

export default Skills;
