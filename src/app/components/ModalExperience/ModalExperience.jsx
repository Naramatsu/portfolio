import React from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./ModalExperience.module.scss";

const ModalExperience = ({ isVisible, info, onClose }) => {
  const isModalOpenClassName = isVisible ? styles.modalOpen : styles.modalClose;

  return (
    <section className={isModalOpenClassName}>
      <section className={styles.modalContainer}>
        <IoMdClose onClick={onClose} />
        <h3>{info?.title}</h3>
        <h4>{info?.company}</h4>
        <label>{info?.period}</label>
        {info?.description}
        <h5>Techs implemented:</h5>
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
