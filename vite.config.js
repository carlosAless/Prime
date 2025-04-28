import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"], // Adicione essa linha para incluir arquivos .glb como assets
  base: "https://primedesenvolvimento.com.br/",
});
