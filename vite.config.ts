import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    dedupe: ["axios"],
  },
  plugins: [RubyPlugin(), react()],
});
