"use client";
import styles from "./styles.module.css";

import { Manrope } from "next/font/google";
import { ElementType } from "react";

const roboto = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type ButtonProps = {
  label: string;
  icon?: ElementType;
};

export function Button({ label, icon: Icon }: ButtonProps) {
  return (
    <button className={`${styles.button} ${roboto.className}`}>
      {Icon && <Icon size={24} weight="fill" color="#ffffff" />}
      {label}
    </button>
  );
}
