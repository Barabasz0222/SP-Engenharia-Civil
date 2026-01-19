// src/components/Body/SobreNos/index.jsx
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Image from "next/image";

const slides = [
  {
    image: "/Carrossel1.jpg",
    text: "Transformamos sonhos em realidade através da excelência em engenharia civil",
  },
  {
    image: "/Carrossel2.jpg",
    text: "Inovação e qualidade em cada projeto que desenvolvemos",
  },
  {
    image: "/Carrossel3.jpg",
    text: "Ética, confiança e transparência são nossos pilares fundamentais",
  },
  {
    image: "/Carrossel4.jpg",
    text: "Compromisso com prazos, qualidade e satisfação do cliente",
  },
];

export default function SobreNos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 5000;

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, intervalTime);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section id="sobreNos" className={styles.container}>
      <div className={styles.backgroundGradient} />
      
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span className={styles.badge}>Conheça-nos</span>
          <h2 className={styles.title}>Sobre Nós</h2>
          <div className={styles.titleUnderline} />
        </div>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src={slides[currentIndex].image}
                alt={`Slide ${currentIndex + 1}`}
                className={styles.image}
                width={600}
                height={400}
                priority={currentIndex === 0}
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>

          <div className={styles.textSection}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.text}>{slides[currentIndex].text}</p>
            
            <div className={styles.dots}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}