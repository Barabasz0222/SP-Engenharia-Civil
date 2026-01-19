// src/components/Footer/index.tsx
import styles from "./style.module.css";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

export default function Footer() {
  return (
    <>
      <Head>
        <title>Contato - SP Engenharia Civil</title>
        <meta
          name="description"
          content="Entre em contato com a SP Engenharia Civil em Mandaguari, PR, para serviços de engenharia e construção."
        />
        <meta
          name="keywords"
          content="engenharia civil, construção, Mandaguari, PR"
        />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SP Engenharia Civil",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Padre Antônio Lock, 850",
              addressLocality: "Mandaguari",
              addressRegion: "PR",
              postalCode: "86975-000",
              addressCountry: "BR",
            },
            telephone: "+5544999543562",
            email: "spengenharia25@outlook.com",
          })}
        </script>
      </Head>

      <footer id="contato" className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span className={styles.badge}>Fale Conosco</span>
            <h2 className={styles.title}>Contato</h2>
            <div className={styles.titleUnderline} />
            <p className={styles.subtitle}>
              Estamos prontos para transformar seus projetos em realidade
            </p>
          </div>

          <div className={styles.content}>
            <div className={styles.infoSection}>
              <div className={styles.contactGroup}>
                <h3 className={styles.groupTitle}>Entre em Contato</h3>
                <p className={styles.groupDescription}>
                  Envie uma mensagem pelo WhatsApp ou E-mail
                </p>

                <div className={styles.contactItems}>
                  <a
                    href="mailto:spengenharia25@outlook.com"
                    className={styles.contactItem}
                  >
                    <div className={styles.iconWrapper}>
                      <IoIosMail />
                    </div>
                    <div className={styles.contactText}>
                      <span className={styles.label}>E-mail</span>
                      <span className={styles.value}>spengenharia25@outlook.com</span>
                    </div>
                  </a>

                  <a
                    href="tel:+5544999543562"
                    className={styles.contactItem}
                  >
                    <div className={styles.iconWrapper}>
                      <FaPhoneAlt />
                    </div>
                    <div className={styles.contactText}>
                      <span className={styles.label}>Telefone</span>
                      <span className={styles.value}>(44) 99954-3562</span>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/sp_engenhariacivil?igsh=M3AxNGVsdmxvOXJ1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactItem}
                  >
                    <div className={styles.iconWrapper}>
                      <FaInstagram />
                    </div>
                    <div className={styles.contactText}>
                      <span className={styles.label}>Instagram</span>
                      <span className={styles.value}>@sp_engenhariacivil</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className={styles.addressGroup}>
                <h3 className={styles.groupTitle}>Nosso Endereço</h3>
                <div className={styles.addressItem}>
                  <div className={styles.iconWrapper}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={styles.addressText}>
                    <p>Rua Padre Antônio Lock, 850</p>
                    <p>Jardim Bela Vista</p>
                    <p>Mandaguari, PR - CEP 86975-000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mapSection}>
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1909749317997!2d-51.67200422489209!3d-23.525632678824387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecbfee9ba0708f%3A0x2bccd3b258c36635!2sR.%20Padre%20Ant%C3%B4nio%20Lock%2C%20850%20-%20Jardim%20Bela%20Vista%2C%20Mandaguari%20-%20PR%2C%2086975-000!5e0!3m2!1sen!2sbr!4v1746222073859!5m2!1sen!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização SP Engenharia Civil"
                />
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.divider} />
            <p className={styles.copyright}>
              SP Engenharia Civil - {new Date().getFullYear()} © Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}