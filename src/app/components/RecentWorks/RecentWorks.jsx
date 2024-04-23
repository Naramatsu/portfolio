"use client";
import React, { useState } from "react";
import styles from "./RecentWorks.module.scss";
import Image from "next/image";
import Link from "next/link";
import {
  filterOptions,
  projectList,
  recentWorksDescription,
  recentWorksTitle,
} from "./RecentWorks.data";
import { DARK } from "@/utils/constants";

const RecentWorks = ({ theme, languaje }) => {
  const [activeTab, setActiveTab] = useState(filterOptions.at(0));
  const [projectsFiltered, setProjectsFiltered] = useState(projectList);
  const [selectorLeft, setSelectorLeft] = useState(0);

  const isActiveTab = (tab) => (activeTab === tab ? styles.active : styles.p);

  const handlerFilter = (tab) => {
    setActiveTab(tab);
    setSelectorLeft(filterOptions.findIndex((option) => option === tab));
    setProjectsFiltered(
      tab === filterOptions.at(0)
        ? projectList
        : projectList.filter((projects) => projects.type === tab)
    );
  };

  return (
    <section
      style={{ "--isdark": theme === DARK ? 1 : 0 }}
      className={styles.recentWorks}
    >
      <h2>{recentWorksTitle[languaje]}</h2>
      <p>{recentWorksDescription[languaje]}</p>
      <section className={styles.filter}>
        {filterOptions.map((option, index) => (
          <p
            key={index}
            onClick={() => handlerFilter(option)}
            className={isActiveTab(option)}
          >
            {option}
          </p>
        ))}
        <p style={{ "--i": selectorLeft }} className={styles.selector} />
      </section>
      <section className={styles.projectsList}>
        {projectsFiltered.map((project, index) => (
          <section key={index} className={styles.projectContainer}>
            <Image src={project.img} alt={project.name} />
            <Link href={project.link} target="__blank">
              <h3>{project.name}</h3>
              <p>{project.description[languaje]}</p>
            </Link>
          </section>
        ))}
      </section>
    </section>
  );
};

export default RecentWorks;
