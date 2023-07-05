import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(() => {
  let config = {
    plugins: [vue()],
    server: {
      port: 8080,
    },
  };

  return config;
});
