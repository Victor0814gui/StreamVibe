import { Button } from "../Button";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.navigation}>
          <h3>Home</h3>
          <p>Categories</p>
          <p>Devices</p>
          <p>Pricing</p>
          <p>FAQ</p>
        </div>
        <div className={styles.navigation}>
          <h3>Movies</h3>
          <p>Gernes</p>
          <p>Trending</p>
          <p>New Release</p>
          <p>Popular</p>
        </div>
        <div className={styles.navigation}>
          <h3>Shows</h3>
          <p>Gernes</p>
          <p>Trending</p>
          <p>New Release</p>
          <p>Popular</p>
        </div>
        <div className={styles.navigation}>
          <h3>Support</h3>
          <p>Contact Us</p>
        </div>
        <div className={styles.navigation}>
          <h3>Subscription</h3>
          <p>Plans</p>
          <p>Features</p>
        </div>
        <div className={styles.navigation}>
          <h3>Connect With Us</h3>
        </div>
      </div>
    </div>
  );
}
