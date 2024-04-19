import styles from "./styles.module.css";

import { NavigationBar } from "../Components/NavigationBar";

import { HeroSection } from "./Sections/HeroSection";
import { Categories } from "./Sections/Categories";
import { Devices } from "./Sections/Devices";
import { FAQs } from "./Sections/FAQs";
import { Pricing } from "./Sections/Pricing";
import { CTA } from "./Sections/CTA";

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
        <FAQs />
        <Pricing />
        <CTA />
      </div>
    </div>
  );
}
