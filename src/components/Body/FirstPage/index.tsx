import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

export default function FirstPage() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <Image
          className={styles.logo}
          src="/imgfirstpage.png"
          width={700}
          height={400} // Adicionado height (ajuste conforme dimensões reais)
          alt="Logo"
        />
        <button className={styles.contactButton}>Entre em contato</button>
      </div>
    </section>
  );
}