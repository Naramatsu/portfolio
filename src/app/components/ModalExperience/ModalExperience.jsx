import React from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./ModalExperience.module.scss";
import { techImplementsLabel } from "./ModalExperience.data";
import { DARK } from "@/utils/constants";

const ModalExperience = ({ isVisible, info, onClose, languaje, theme }) => {
  const modalClassName = () => {
    if (theme === DARK)
      return isVisible ? styles.modalOpenDark : styles.modalCloseDark;
    return isVisible ? styles.modalOpen : styles.modalClose;
  };

  return (
    <section className={modalClassName()}>
      <section className={styles.modalContainer}>
        <IoMdClose onClick={onClose} />
        <h3>{info?.title}</h3>
        <h4>{info?.company}</h4>
        <label>{info?.period}</label>
        {info?.description[languaje]}
        <h5>{techImplementsLabel[languaje]}:</h5>
        <ul>
          {info?.techs.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ModalExperience;
