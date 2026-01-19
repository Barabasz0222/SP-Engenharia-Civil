// src/components/Body/FirstPage/index.jsx
// USE ESTE ARQUIVO SE O .tsx ESTIVER DANDO ERRO
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

export default function FirstPage() {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundPattern} />
      <div className={styles.gradientOverlay} />
      
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src="/imgfirstpage.png"
            width={500}
            height={285}
            alt="SP Engenharia Civil"
            priority
          />
        </div>
        
        <h1 className={styles.title}>
          Construindo o futuro com
          <span className={styles.highlight}> inovação e qualidade</span>
        </h1>
        
        <p className={styles.subtitle}>
          Excelência em engenharia civil, compromisso com resultados excepcionais
        </p>
        
        <a 
          href="https://wa.me/5544999543562?text=Olá,%20gostaria%20de%20mais%20informações!" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactButton}
        >
          <span className={styles.buttonText}>Entre em Contato</span>
          <span className={styles.buttonIcon}>→</span>
        </a>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </div>
    </section>
  );
}