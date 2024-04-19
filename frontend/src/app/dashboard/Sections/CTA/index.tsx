import styles from "./styles.module.css";

import { Button } from "@/app/Components/Button";
import { HeaderSection } from "@/app/Components/HeaderSection";

export function CTA() {
  return (
    <div className={styles.container}>
      <HeaderSection
        title="Start your free trial today!"
        subtitle="This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe."
        content={<Button label="Start a Free Trail" />}
      />
    </div>
  );
}
