import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), preact()],

  // need to override NODE_ENV,
  // otherwise react-is throws reference error in prod build
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    minify: true,
    sourcemap: true,
    lib: {
      entry: "src/main.ts",
      name: "DostanesiePlWidget",
      fileName: (format) => `dostanesie-pl-widget.${format}.js`,
      formats: ["iife"],
    },
  },
});
