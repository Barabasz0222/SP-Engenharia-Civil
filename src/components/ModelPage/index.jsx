// src/components/ModelPage/index.jsx
import React from "react";
import styles from "./style.module.css";

export default function ModelPage({ nomePagina, content }) {
  return (
    <main className={styles.main}>
      {nomePagina && (
        <div className={styles.containerButtonReturn}>
          <h1 className={styles.pageTitle}>{nomePagina}</h1>
        </div>
      )}
      <div className={styles.content}>{content}</div>
    </main>
  );
}