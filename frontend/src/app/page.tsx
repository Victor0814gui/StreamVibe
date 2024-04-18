"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { NavigationBar } from "./Components/NavigationBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationBar />
      <h1>Hello world!</h1>
    </main>
  );
}
