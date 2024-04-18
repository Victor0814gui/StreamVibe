"use client";
import styles from "./styles.module.css";

import { HeaderSection } from "@/app/Components/HeaderSection";
import { DeviceMobileCamera } from "@phosphor-icons/react";

export function Devices() {
  return (
    <div className={styles.container}>
      <HeaderSection
        title="We Provide you streaming experience across various devices."
        subtitle="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
      />
      <div className={styles.list}>
        {new Array(6).fill({ id: 1 }).map((e, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardHeader}>
              <button className={styles.button}>
                <DeviceMobileCamera color="#E50000" size={32} weight="fill" />
              </button>
              <h2>Tablet</h2>
            </div>
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
