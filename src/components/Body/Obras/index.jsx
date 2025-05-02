import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const slides = [
  {
    image: "/Lavanderia.jpg",
    text: "Construção de Lavanderia e cozinha, condomínio águas do porto rico - Porto Rico",
  },
  {
    image: "/CalçadaUm.jpg",
    text: "Construção de calçada - Fazenda Loanda, Loanda",
  },
  {
    image: "/CalçadaDois.jpg",
    text: "Construção de calçada - Fazenda Loanda, Loanda",
  },
  {	
    image: "/BarracaoUm.jpg",
    text: "Construção de barracão - Fazenda Chapadão, Loanda",
  },
  {	
    image: "/BarracaoDois.jpg",
    text: "Construção de barracão - Fazenda Chapadão, Loanda",
  },
];

export default function Obras() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 8000; // 5 seconds

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  return (
    <div id="obras" className={styles.carouselContainer} onClick={nextSlide} style={{cursor: "pointer"}} title="Clique para avançar">
      <div className={styles.carouselContent}>
        <div className={styles.imageWrapper}>
          <button className={styles.arrowButton} onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className={styles.carouselImage}
          />
          <button className={styles.arrowButton} onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <div className={styles.carouselText}>
          <p>{slides[currentIndex].text}</p>
        </div>
      </div>

    </div>
  );
}