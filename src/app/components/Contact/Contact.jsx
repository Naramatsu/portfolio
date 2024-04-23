import React from "react";
import styles from "./Contact.module.scss";

import {
  btnSendMeLabel,
  contactDescription,
  contactInfoList,
  contactTitle,
  emailFields,
  messageField,
} from "./Contact.data";
import { DARK } from "@/utils/constants";

const Contact = ({ theme }) => {
  return (
    <section style={{ "--isDark": theme === DARK }} className={styles.contact}>
      <section className={styles.contactContainer}>
        <section className={styles.contactEmailSection}>
          <h2>{contactTitle}</h2>
          <p>{contactDescription}</p>
          <section className={styles.fieldContainer}>
            {emailFields.map(({ type, name, label }, index) => (
              <section key={index} className={styles.fieldcontrol}>
                <p>{label}</p>
                <input type={type} name={name} placeholder={label} />
              </section>
            ))}
            <section className={styles.textAreaFieldcontrol}>
              <p>{messageField.label}</p>
              <textarea
                placeholder={messageField.label}
                name={messageField.name}
              ></textarea>
            </section>
            <button className={styles.btnSendMessage}>{btnSendMeLabel}</button>
          </section>
        </section>
        <section className={styles.contactInfoSection}>
          <section>
            {contactInfoList.map(({ icon, type, label }, index) => (
              <section key={index} className={styles.contactInfoField}>
                {icon}
                <section>
                  <p>{type}</p>
                  {label.map((info, index2) => (
                    <h3 key={index2}>{info}</h3>
                  ))}
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Contact;
