import { NavigationBar } from "../Components/NavigationBar";
import styles from "./styles.module.css";
import { Manrope } from "next/font/google";
import { HeroSection } from "./Sections/HeroSection";
import { Categories } from "./Sections/Categories";
import { Devices } from "./Sections/Devices";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <NavigationBar />
        <HeroSection />
      </div>
      <div className={styles.sections}>
        <Categories />
        <Devices />
      </div>
    </div>
  );
}
