import styles from "./styles.module.css";
import { Button } from "@/app/Components/Button";
import { Rounded } from "@/app/Components/Rounded";

import { HeaderSection } from "@/app/Components/HeaderSection";
import { Tabs } from "../../Components/Tabs";

export function Pricing() {
  return (
    <div className={styles.container}>
      <HeaderSection
        title="Choose the plan that's right for you"
        subtitle="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        content={<Tabs />}
      />
      <div className={styles.list}>
        {new Array(3).fill({ id: 0 }).map((e, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.info}>
              <h2>Basic Plan</h2>
              <p>
                Enjoy an extensive library of movies and shows, featuring a
                range of content, including recently released titles.
              </p>
            </div>
            <h1>
              $9.99<span>/month</span>
            </h1>
            <div className={styles.footer}>
              <Rounded type="big" label="Start Free Trial" />
              <Button type="big" label="Choose Plan" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
