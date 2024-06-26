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
import { FaExternalLinkAlt } from "react-icons/fa";
import { DARK } from "@/utils/constants";

const RecentWorks = ({ theme, languaje }) => {
  const [activeTab, setActiveTab] = useState(filterOptions.at(0));
  const [projectsFiltered, setProjectsFiltered] = useState(projectList);
  const [selectorLeft, setSelectorLeft] = useState(0);

  const recentWorksClassName =
    theme === DARK ? styles.recentWorksDark : styles.recentWorks;

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
    <main id="works" className={recentWorksClassName}>
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
      <article className={styles.projectsList}>
        {projectsFiltered.map((project, index) => (
          <section key={index} className={styles.projectContainer}>
            <Image src={project.img} alt={project.name} />
            <Link href={project.link} target="_blank">
              <h3>{project.name}</h3>
              <FaExternalLinkAlt />
              <p>{project.description[languaje]}</p>
            </Link>
          </section>
        ))}
      </article>
    </main>
  );
};

export default RecentWorks;
