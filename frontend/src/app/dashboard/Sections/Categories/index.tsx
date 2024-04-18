"use client";
import { ArrowRight } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { HeaderSection } from "@/app/Components/HeaderSection";
import { Indicator } from "../../Components/Indicator";

export function Categories() {
  return (
    <div className={styles.container}>
      <HeaderSection
        title="Explore our wide variety of categories"
        subtitle="Whether you re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        content={Indicator}
      />
      <div className={styles.list}>
        {new Array(5).fill({ id: 1 }).map((e, index) => (
          <div className={styles.card} key={index}>
            <img src="/images/movies.png" />
            <div>
              <p>Actions</p>
              <ArrowRight size={26} color="#ffffff" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
