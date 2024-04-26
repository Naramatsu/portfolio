"use client";
import React, { useEffect, useState } from "react";
import styles from "./Contact.module.scss";

import {
  btnSendMeLabel,
  contactDescription,
  contactInfoList,
  contactTitle,
  emailFields,
  messageField,
  toastMessageError,
  toastMessageSuccess,
} from "./Contact.data";
import { DARK, ERROR, SUCCESS } from "@/utils/constants";
import { useFormState } from "react-dom";
import { sendEmail } from "@/app/api/email";
import Toast from "../Toast";

const Contact = ({ theme, languaje }) => {
  const contactClassName = theme === DARK ? styles.contactDark : styles.contact;
  const [toastProps, setToastProps] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });

  useEffect(() => {
    if (sendEmailState.success)
      setToastProps({
        visible: true,
        message: toastMessageSuccess[languaje],
        type: SUCCESS,
      });

    if (sendEmailState.error)
      setToastProps({
        visible: true,
        message: toastMessageError[languaje],
        type: ERROR,
      });
  }, [sendEmailState, languaje]);

  return (
    <main id="contact" className={contactClassName}>
      <section className={styles.contactContainer}>
        <section className={styles.contactEmailSection}>
          <h2>{contactTitle[languaje]}</h2>
          <p>{contactDescription[languaje]}</p>
          <form action={sendEmailAction}>
            <section className={styles.fieldContainer}>
              {emailFields.map(({ type, name, label }, index) => (
                <section key={index} className={styles.fieldcontrol}>
                  <p>{label[languaje]}</p>
                  <input
                    type={type}
                    name={name}
                    placeholder={label[languaje]}
                  />
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
          </form>
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
      <Toast {...toastProps} />
    </main>
  );
};

export default Contact;
