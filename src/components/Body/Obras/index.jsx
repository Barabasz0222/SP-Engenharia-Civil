import React, { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";

const slides = [
  {
    image: "/AmpliacaoLavanderia1.jpg",
    text: "Ampliação de Lavanderia e cozinha, condomínio águas do porto rico - Porto Rico",
  },
  {
    image: "/AmpliacaoLavanderia2.jpeg",
    text: "Ampliação de Lavanderia e cozinha, condomínio águas do porto rico - Porto Rico",
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
    image: "/Barracao1020_1.jpeg",
    text: "Construção de um barracão de 1020m² - Porto Maringá - Paraná",
  },
  {
    image: "/Barracao1020_2.jpeg",
    text: "Construção de um barracão de 1020m² - Porto Maringá - Paraná",
  },
  {
    image: "/Barracao1020_3.jpeg",
    text: "Construção de um barracão de 1020m² - Porto Maringá - Paraná",
  },
  {
    image: "/Barracao1020_4.jpeg",
    text: "Construção de um barracão de 1020m² - Porto Maringá - Paraná",
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

  return (
    <div id="obras" className={styles.carouselContainer} onClick={nextSlide} style={{cursor: "pointer"}} title="Clique para avançar">
      <h2 className={styles.sectionTitle}>Obras</h2>
      <div className={styles.carouselContent}>
        <div className={styles.imageWrapper}>
          <button className={styles.arrowButton} onClick={(e) => { e.stopPropagation(); prevSlide(); }}>
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
          <Image
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className={styles.carouselImage}
            width={600}
            height={400}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <button className={styles.arrowButton} onClick={(e) => { e.stopPropagation(); nextSlide(); }}>
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