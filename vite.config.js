import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Redcube/" : "/", // /Redcube/ in prod, / in dev
  plugins: [react()],
}));
