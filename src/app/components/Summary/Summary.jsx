"use client";
import React from "react";
import styles from "./Summary.module.scss";
import Image from "next/image";
import Hi from "../../HI.svg";
import Profile from "../../profile.jpg";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import {
  downloadCvLabel,
  introduction,
  mediaLinks,
  quikDataInfo,
} from "./Summary.data";
import { DARK } from "@/utils/constants";

const curriculum = new URL(
  "../../../../public/documents/curriculum.pdf",
  import.meta.url
);

const Summary = ({ theme, languaje }) => {
  return (
    <main
      style={{ "--isdark": theme === DARK ? "true" : "false" }}
      className={styles.summary}
    >
      <Image className={styles.imgPulse} src={Hi} alt="Hi" />
      <section className={styles.summaryContainer}>
        <section className={styles.sectionSummary}>
          {introduction[languaje]}
          <section className={styles.sectionButtons}>
            <Link
              className={styles.btnDownloadCV}
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
              download="JonathanCamiloNarvaezMartinez[CV].pdf"
              href={curriculum}
            >
              {downloadCvLabel[languaje]} <AiOutlineDownload />
            </Link>
            <ul>
              {mediaLinks.map(({ link, icon }, index) => (
                <li key={index}>
                  <Link href={link} target="_blank">
                    {icon}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </section>
        <section className={styles.sectionImage}>
          <Image src={Profile} alt="profile" />
        </section>
      </section>
      <section className={styles.quickDataSection}>
        {quikDataInfo.map(({ mount, label }, index) => (
          <section key={index}>
            <h4>{mount}</h4>
            <label>{label[languaje]}</label>
          </section>
        ))}
      </section>
    </main>
  );
};

export default Summary;
