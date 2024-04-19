"use client";
import styles from "./styles.module.css";

import { Button } from "@/app/Components/Button";
import { Plus } from "@phosphor-icons/react";
import { HeaderSection } from "@/app/Components/HeaderSection";

export function FAQs() {
  return (
    <div className={styles.container}>
      <HeaderSection
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        content={<Button label="Ask a Question" />}
      />
      <div className={styles.content}>
        <div className={styles.list}>
          {new Array(8).fill({ id: 0 }).map((e, index) => (
            <div className={styles.question} key={index}>
              <div className={styles.topic}>
                <p className={styles.topicText}>{index + 1}</p>
              </div>
              <h3>How much does StreamVibe cost?</h3>
              <button className={styles.button}>
                <Plus size={24} weight="bold" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
