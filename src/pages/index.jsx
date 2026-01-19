// src/pages/index.jsx
import ModelPage from "@/components/ModelPage";
import InicialMenuComponent from "@/components/InicialMenuComponent";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      title: "SP Engenharia Civil - Serviços de Engenharia",
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>SP Engenharia Civil - Excelência em Construção</title>
        <meta
          name="description"
          content="SP Engenharia Civil oferece serviços de engenharia e construção em Mandaguari, PR. Qualidade, inovação e compromisso para seus projetos."
        />
        <meta
          name="keywords"
          content="engenharia civil, construção, Mandaguari, PR, SP Engenharia, obras, projetos, construção civil"
        />
        <meta name="author" content="SP Engenharia Civil" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00BC70" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sp-engenharia-civil.vercel.app/" />
        <meta property="og:title" content="SP Engenharia Civil - Excelência em Construção" />
        <meta
          property="og:description"
          content="Transformando projetos em realidade com qualidade e inovação"
        />
        <meta property="og:image" content="/imgfirstpage.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sp-engenharia-civil.vercel.app/" />
        <meta property="twitter:title" content="SP Engenharia Civil - Excelência em Construção" />
        <meta
          property="twitter:description"
          content="Transformando projetos em realidade com qualidade e inovação"
        />
        <meta property="twitter:image" content="/imgfirstpage.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <div>
        <ModelPage nomePagina="" content={<InicialMenuComponent />} />
      </div>
    </>
  );
}