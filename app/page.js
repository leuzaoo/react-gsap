"use client";

import Hero from "./components/Hero";
import Loader from "./components/Loader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.test}>
      <Hero />
      <Loader />
    </div>
  );
}
