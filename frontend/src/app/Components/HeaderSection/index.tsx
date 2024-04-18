"use client";
import { ElementType, ReactNode } from "react";
import styles from "./styles.module.css";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

type HeaderSectionProps = {
  title: string;
  subtitle: string;
  content?: ElementType;
};

export function HeaderSection({
  title,
  subtitle,
  content: Content,
}: HeaderSectionProps) {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {Content && <Content />}
    </div>
  );
}
