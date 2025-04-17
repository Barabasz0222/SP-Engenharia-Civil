import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASEURL || "http://localhost:3000"; // Fallback caso a variável não seja lida

if (!baseURL) {
  console.error("NEXT_PUBLIC_BASEURL não está definido no .env.local");
}

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json", // Boa prática: definir explicitamente
  },
});

export default api;