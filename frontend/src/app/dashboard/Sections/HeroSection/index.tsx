"use client";

import styles from "./styles.module.css";
import { Play } from "@phosphor-icons/react";
import { Manrope } from "next/font/google";
import { AbstractLogo } from "@/app/Components/Icons/AbstractLogo";
import { Button } from "@/app/Components/Button";

const roboto = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export function HeroSection() {
  return (
    <div className={styles.content}>
      <AbstractLogo />
      <div className={styles.info}>
        <h1>The Best Streaming Experience</h1>
        <p>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <Button label="Start Watching Now" icon={Play} />
      </div>
    </div>
  );
}
