import styles from "./style.module.css";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
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
            "name": "SP Engenharia Civil",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Padre Antônio Lock, 850",
              "addressLocality": "Mandaguari",
              "addressRegion": "PR",
              "postalCode": "86975-000",
              "addressCountry": "BR",
            },
            "telephone": "+5544999543562",
            "email": "spengenharia25@outlook.com",
          })}
        </script>
        <title>SP Engenharia Civil - Contato</title>
        <meta name="description" content="Entre em contato com a SP Engenharia Civil em Mandaguari, PR, para serviços de engenharia e construção." />
        <meta name="keywords" content="engenharia civil, construção, Mandaguari, PR, SP Engenharia" />
        <meta name="author" content="SP Engenharia Civil" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <footer>
      <div id="contato" className={styles.container}>
        <h1 className={styles.title}>Contato</h1>
        <div className={styles.loc}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1909749317997!2d-51.67200422489209!3d-23.525632678824387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecbfee9ba0708f%3A0x2bccd3b258c36635!2sR.%20Padre%20Ant%C3%B4nio%20Lock%2C%20850%20-%20Jardim%20Bela%20Vista%2C%20Mandaguari%20-%20PR%2C%2086975-000!5e0!3m2!1sen!2sbr!4v1746222073859!5m2!1sen!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <h4 className={styles.titleInfoContato}>
              Informações para contato
            </h4>
            <p className={styles.infoContato}>
              Para qualquer informação, entre em contato pelo WhatsApp ou E-mail
              abaixo:
            </p>
            <div className={styles.emailFone}>
              <div className={styles.contactItem}>
                <IoIosMail />
                <p>spengenharia25@outlook.com</p>
              </div>
              <div className={styles.contactItem}>
                <FaPhoneAlt />
                <Link href="tel:+5544999543562" className={styles.phoneLink}>
                  (44) 99954-3562
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <h4 className={styles.titleInfoContato}>Endereço</h4>
            <p className={styles.infoEndereco}>
              Rua Padre Antônio Lock, 850 
              Jardim Bela Vista, Mandaguari, PR - CEP 86975-000
            </p>
          </div>
        </div>
        <div className={styles.icon}>
          <Link href="https://www.instagram.com/sp_engenhariacivil?igsh=M3AxNGVsdmxvOXJ1">
            <FaInstagram />
          </Link>
        </div>
        <p className={styles.copyright}>SP Engenharia Civil - 2025 © Todos os direitos reservados</p>
      </div>
    </footer>
    </>
  );
}