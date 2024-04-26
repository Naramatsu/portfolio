"use client";
import React, { useState, useEffect } from "react";
import { FaCheck, FaExclamation } from "react-icons/fa";

import styles from "./Toast.module.scss";
import { SUCCESS } from "@/utils/constants";

const Toast = ({ message, visible, type }) => {
  const [isVisible, setVisible] = useState(visible);
  const toastClassName = isVisible ? styles.toastOpen : styles.toastClose;
  const toastTypeClassName = type === SUCCESS ? styles.success : styles.error;
  const toastIcon = type === SUCCESS ? <FaCheck /> : <FaExclamation />;

  useEffect(() => {
    if (visible)
      setTimeout(() => {
        setVisible(false);
      }, 5000);
  }, [visible]);

  return (
    <main role="alert" className={toastClassName}>
      <h3 className={toastTypeClassName}>
        {toastIcon}
        {message}
      </h3>
    </main>
  );
};

export default Toast;
