import React from "react";
import styles from "./style.module.css";

interface ModelPageProps {
  nomePagina: string;
  content: React.ReactNode;
}

export default function ModelPage({ nomePagina, content }: ModelPageProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerContent}>
        <div className={styles.containerButtonReturn}>
          <h1 className={styles.pageTitle}>{nomePagina}</h1>
        </div>

        <div className={styles.content}>{content}</div>
      </div>
    </main>
  );
}
