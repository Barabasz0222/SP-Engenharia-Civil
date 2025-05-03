import styles from "./style.module.css";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
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
            loading="eager" // Alterado para eager
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
              <IoIosMail />
              <p>email@email.com</p>
              <FaPhoneAlt />
              <p>(44) 99999-9999</p>
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
          <Link href="https://www.instagram.com/">
            <FaInstagram />
          </Link>
        </div>
        <p className={styles.copyright}>SP Engenharia Civil - 2025 © Todos os direitos reservados</p>
      </div>
    </footer>
  );
}