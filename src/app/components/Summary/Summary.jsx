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

const Summary = () => {
  return (
    <main className={styles.summary}>
      <Image className={styles.imgPulse} src={Hi} alt="Hi" />
      <section className={styles.summaryContainer}>
        <section className={styles.sectionSummary}>
          {introduction}
          <section className={styles.sectionButtons}>
            <a className={styles.btnDownloadCV} href="#">
              {downloadCvLabel} <AiOutlineDownload />
            </a>
            <ul>
              {mediaLinks.map(({ link, icon }, index) => (
                <li key={index}>
                  <Link href={link}>{icon}</Link>
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
            <label>{label}</label>
          </section>
        ))}
      </section>
    </main>
  );
};

export default Summary;
