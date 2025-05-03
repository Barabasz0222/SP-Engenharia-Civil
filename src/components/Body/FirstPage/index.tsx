import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

export default function FirstPage() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Image className={styles.logo} src="/imgfirstpage.png" alt="Logo" />
        <button className={styles.contactButton}>Entre em contato</button>
      </div>
    </section>
  );
}