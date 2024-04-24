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

const Contact = ({ theme, languaje }) => {
  const contactClassName = theme === DARK ? styles.contactDark : styles.contact;

  return (
    <section className={contactClassName}>
      <section className={styles.contactContainer}>
        <section className={styles.contactEmailSection}>
          <h2>{contactTitle[languaje]}</h2>
          <p>{contactDescription[languaje]}</p>
          <section className={styles.fieldContainer}>
            {emailFields.map(({ type, name, label }, index) => (
              <section key={index} className={styles.fieldcontrol}>
                <p>{label[languaje]}</p>
                <input type={type} name={name} placeholder={label[languaje]} />
              </section>
            ))}
            <section className={styles.textAreaFieldcontrol}>
              <p>{messageField.label[languaje]}</p>
              <textarea
                placeholder={messageField.label[languaje]}
                name={messageField.name}
              ></textarea>
            </section>
            <button className={styles.btnSendMessage}>
              {btnSendMeLabel[languaje]}
            </button>
          </section>
        </section>
        <section className={styles.contactInfoSection}>
          <section>
            {contactInfoList.map(({ icon, type, label }, index) => (
              <section key={index} className={styles.contactInfoField}>
                {icon}
                <section>
                  <p>{type[[languaje]]}</p>
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
