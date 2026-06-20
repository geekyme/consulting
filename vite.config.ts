import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set base to "/consulting/" for GitHub Pages (geekyme.github.io/consulting/).
// Change to "/" if using a custom domain.
export default defineConfig({
  plugins: [react()],
  base: "/consulting/",
});
