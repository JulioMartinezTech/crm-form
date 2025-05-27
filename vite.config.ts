import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  // base: "/crm",
  server: {
    host: true,
    // proxy: {
    //   "/api": {
    //     target: "https://app.monicahq.com",
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
  plugins: [react()],
});
