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
  label?: string;
  icon?: ElementType;
  type?: "default" | "big";
};

export function Button({ label, icon: Icon, type = "default" }: ButtonProps) {
  return (
    <button
      className={`
        ${styles.button} 
        ${roboto.className}
        ${type == "big" && styles.bigPadding}
      `}
    >
      {Icon && <Icon size={24} weight="fill" color="#ffffff" />}
      {label && label}
    </button>
  );
}
