// components/LoadingIndicator.tsx
import React from "react";
import { MoonLoader } from "react-spinners"; // ou qualquer outro componente de spinner

const LoadingIndicator = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <MoonLoader color="var(--green02)" size={150} />
  </div>
);

export default LoadingIndicator;