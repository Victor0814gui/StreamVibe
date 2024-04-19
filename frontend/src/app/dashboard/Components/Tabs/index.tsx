"use client";
import styles from "./styles.module.css";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export function Tabs() {
  return (
    <div className={styles.actions}>
      <button className={styles.button}>
        <ArrowLeft size={26} />
      </button>
      <button className={styles.button}>
        <ArrowRight size={26} />
      </button>
    </div>
  );
}
