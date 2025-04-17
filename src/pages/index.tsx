import ModelPage from "@/components/ModelPage";
import InicialMenuComponent from "@/components/InicialMenuComponent";

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