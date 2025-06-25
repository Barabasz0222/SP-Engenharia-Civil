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
  <Head>
    <title>SP Engenharia Civil - Soluções em Construção</title>
    <meta
      name="description"
      content="SP Engenharia Civil oferece serviços de engenharia e construção em Mandaguari, PR. Qualidade e confiança para seus projetos."
    />
  </Head>;
  return (
    <div>
      <ModelPage nomePagina="" content={<InicialMenuComponent />} />
    </div>
  );
}
