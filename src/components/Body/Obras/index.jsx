// src/components/Body/Obras/index.jsx
import React, { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";

const slides = [
  {
    image: "/AmpliacaoLavanderia1.jpg",
    title: "Ampliação de Lavanderia e Cozinha",
    location: "Condomínio Águas do Porto Rico - Porto Rico, PR",
  },
  {
    image: "/AmpliacaoLavanderia2.jpeg",
    title: "Ampliação de Lavanderia e Cozinha",
    location: "Condomínio Águas do Porto Rico - Porto Rico, PR",
  },
  {
    image: "/CalçadaUm.jpg",
    title: "Construção de Calçada",
    location: "Fazenda Loanda - Loanda, PR",
  },
  {
    image: "/CalçadaDois.jpg",
    title: "Construção de Calçada",
    location: "Fazenda Loanda - Loanda, PR",
  },
  {
    image: "/Barracao1020_1.jpeg",
    title: "Barracão Industrial 1020m²",
    location: "Porto Maringá - Paraná",
  },
  {
    image: "/Barracao1020_2.jpeg",
    title: "Barracão Industrial 1020m²",
    location: "Porto Maringá - Paraná",
  },
  {
    image: "/Barracao1020_3.jpeg",
    title: "Barracão Industrial 1020m²",
    location: "Porto Maringá - Paraná",
  },
  {
    image: "/Barracao1020_4.jpeg",
    title: "Barracão Industrial 1020m²",
    location: "Porto Maringá - Paraná",
  },
  {
    image: "/BarracaoUm.jpg",
    title: "Construção de Barracão",
    location: "Fazenda Chapadão - Loanda, PR",
  },
  {
    image: "/BarracaoDois.jpg",
    title: "Construção de Barracão",
    location: "Fazenda Chapadão - Loanda, PR",
  },
];

export default function Obras() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="obras" className={styles.container}>
      <div className={styles.backgroundPattern} />
      
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span className={styles.badge}>Portfólio</span>
          <h2 className={styles.title}>Nossas Obras</h2>
          <div className={styles.titleUnderline} />
          <p className={styles.subtitle}>
            Projetos executados com excelência e compromisso
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            <button
              className={styles.navButton}
              onClick={prevSlide}
              aria-label="Obra anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  className={styles.image}
                  width={900}
                  height={600}
                  priority={currentIndex === 0}
                />
                <div className={styles.imageGradient} />
              </div>

              <div className={styles.infoOverlay}>
                <div className={styles.locationBadge}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {slides[currentIndex].location}
                </div>
                <h3 className={styles.projectTitle}>
                  {slides[currentIndex].title}
                </h3>
              </div>
            </div>

            <button
              className={styles.navButton}
              onClick={nextSlide}
              aria-label="Próxima obra"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className={styles.dots}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para obra ${index + 1}`}
              />
            ))}
          </div>

          <div className={styles.counter}>
            <span className={styles.currentNumber}>{currentIndex + 1}</span>
            <span className={styles.separator}>/</span>
            <span className={styles.totalNumber}>{slides.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}