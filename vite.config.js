import svgr from "@honkhonk/vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * @type {import('vite').UserConfig}
 */
// https://vitejs.dev/config/
export default defineConfig({
  base: "/kanri-ui/", // used to deploy to github page
  plugins: [react(), svgr()],
});
