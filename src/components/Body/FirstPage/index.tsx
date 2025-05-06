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
        <a href="https://wa.me/5544999543562?text=Olá,%20gostaria%20de%20mais%20informações!" target="_blank" className={styles.contactButton}>
          Entre em contato
        </a>
      </div>
    </section>
  );
}