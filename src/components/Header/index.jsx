// src/components/Header/index.jsx
// USE ESTE ARQUIVO SE O .tsx ESTIVER DANDO ERRO
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", window.location.pathname);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", window.location.pathname);
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.logoSection}>
          <div className={styles.logoBox}>
            <Image 
              className={styles.logo} 
              src="/logoheadersimples.png" 
              width={50} 
              height={50} 
              alt="SP Engenharia" 
            />
          </div>
          <div className={styles.logoText}>
            <span className={styles.companyName}>SP Engenharia Civil</span>
            <span className={styles.tagline}>Excelência em Construção</span>
          </div>
        </div>

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <a
            className={styles.mobileLink}
            href="#sobreNos"
            onClick={(e) => handleScroll(e, "sobreNos")}
          >
            Sobre Nós
          </a>
          <a
            className={styles.mobileLink}
            href="#obras"
            onClick={(e) => handleScroll(e, "obras")}
          >
            Obras
          </a>
          <a
            className={styles.mobileLink}
            href="#contato"
            onClick={(e) => handleScroll(e, "contato")}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}