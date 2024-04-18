"use client";
import { Bell, MagnifyingGlass } from "@phosphor-icons/react";
import { Logo } from "../Icons/Logo";
import styles from "./styles.module.css";

export function NavigationBar() {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.navigator}>
        <a href="#">Home</a>
        <a href="#">Movies & Shows</a>
        <a href="#">Support</a>
        <a href="#">Subscriptions</a>
      </div>
      <div className={styles.actions}>
        <Bell size={26} weight="bold" color="#ffffff" />
        <MagnifyingGlass size={26} weight="bold" color="#ffffff" />
      </div>
    </div>
  );
}
