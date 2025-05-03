import React, { useEffect } from "react";
import styles from "./style.module.css";
import Image from "next/image";

export default function Headers() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  // Rola para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Remove o # da URL, se houver
    window.history.pushState(null, "", window.location.pathname);
  }, []);

  return (
    <header className={styles.container}>
      <div className={styles.logoWrapper}>
        <Image className={styles.logo} src="/logoheadersimples.png" width={60} height={60} alt="Logo" />
      </div>
      <nav className={styles.menu}>
        <a
          className={styles.tagA}
          href="#sobreNos"
          onClick={(e) => handleScroll(e, "sobreNos")}
        >
          Sobre Nós
        </a>
        <a
          className={styles.tagA}
          href="#obras"
          onClick={(e) => handleScroll(e, "obras")}
        >
          Obras
        </a>
        <a
          className={styles.tagA}
          href="#contato"
          onClick={(e) => handleScroll(e, "contato")}
        >
          Contato
        </a>
      </nav>
    </header>
  );
}