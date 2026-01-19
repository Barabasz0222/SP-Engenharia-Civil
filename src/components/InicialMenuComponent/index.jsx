// src/components/Home.tsx
import React from "react";
import Header from "../Header";
import FirstPage from "../Body/FirstPage";
import SobreNos from "../Body/SobreNos";
import Obras from "../Body/Obras";
import Footer from "../Footer";


const InicialMenuComponent = () => {
  return (
    <>
    <Header />
    <FirstPage />
    <SobreNos />
    <Obras />
    <Footer />
    </>
  );
};

export default InicialMenuComponent;
