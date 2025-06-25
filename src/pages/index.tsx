import ModelPage from "@/components/ModelPage";
import InicialMenuComponent from "@/components/InicialMenuComponent";
export async function getStaticProps() {
  return {
    props: {
      title: "SP Engenharia Civil - Serviços de Engenharia",
    },
  };
}
export default function Home() {
  return (
    <div>
      <ModelPage
        nomePagina=""
        content={ <InicialMenuComponent /> }
      />

    </div>
  );
}