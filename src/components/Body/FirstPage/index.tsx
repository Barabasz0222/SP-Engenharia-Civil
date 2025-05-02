import React from "react";
import styles from "./style.module.css";

export default function FirstPage() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img className={styles.logo} src="/imgfirstpage.png" alt="Logo" />
        <button className={styles.contactButton}>Entre em contato</button>
      </div>
    </section>
  );
}