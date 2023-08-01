import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(() => {
  let config = {
    plugins: [vue()],
    server: {
      port: 8080,
    },
    build: {
      // Disables the preload.
      modulePreload: false,
    },
  };

  return config;
});
