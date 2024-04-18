"use client";
import styles from "./styles.module.css";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export function Indicator() {
  return (
    <div className={styles.actions}>
      <button className={styles.button}>
        <ArrowLeft size={26} />
      </button>
      <div className={styles.indicator}>
        <div className={`${styles.line} ${styles.selected}`} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <button className={styles.button}>
        <ArrowRight size={26} />
      </button>
    </div>
  );
}
