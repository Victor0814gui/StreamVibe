import { HeaderSection } from "@/app/Components/HeaderSection";
import styles from "./styles.module.css";

export function Devices() {
  return (
    <div className={styles.container}>
      <HeaderSection
        title="We Provide you streaming experience across various devices."
        subtitle="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
      />
    </div>
  );
}
