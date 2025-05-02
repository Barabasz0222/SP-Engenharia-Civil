import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const slides = [
  {
    image: "/Carrossel1.jpg",
    text: "Na SP Engenharia Civil, acreditamos que cada obra é mais do que concreto — é a realização de sonhos e expectativas.",
  },
  {
    image: "/Carrossel2.jpg",
    text: "A SP Engenharia Civil não apenas constrói ambientes, mas participa ativamente da realização de conquistas.",
  },
  {
    image: "/Carrossel3.jpg",
    text: "A base das nossas obras vai além do concreto: ética, confiança e inovação são os pilares da SP Engenharia Civil.",
  },
  {	
    image: "/Carrossel4.jpg",
    text: "Na SP Engenharia Civil, cada etapa da construção é guiada por transparência, qualidade e respeito ao cliente.",
  }
];

export default function SobreNos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 5000; // 5 seconds

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Set up automatic sliding with useEffect
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, intervalTime);

    // Clean up the interval on component unmount or when currentIndex changes
    return () => clearInterval(autoSlide);
  }, [currentIndex]); // Re-run effect when currentIndex changes to reset interval

  return (
    <div id="sobreNos" className={styles.carouselContainer} onClick={nextSlide} style={{cursor: "pointer"}} title="Clique para avançar">
      <div className={styles.carouselContent}>
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.carouselImage}
        />
        <div className={styles.carouselText}>
          <p>{slides[currentIndex].text}</p>
        </div>
      </div>

      <div className={styles.carouselDots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}