import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, UserConfig } from "vite";
import svgLoader from "vite-svg-loader";
import tsconfigPaths from "vite-tsconfig-paths";

// Shared configuration
const sharedConfig: UserConfig = {
  plugins: [
    tsconfigPaths(),
    react(),
    svgLoader({
      defaultImport: "url",
    }),
  ],
};

// Library build configuration
const libConfig: UserConfig = {
  ...sharedConfig,
  build: {
    minify: true,
    sourcemap: true,
    lib: {
      entry: "src/main.tsx",
      name: "DostanesiePlWidget",
      fileName: () => `dostanesie-pl-widget.js`,
      formats: ["iife"],
    },
    cssCodeSplit: true,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
};

// Static page build configuration
const staticConfig: UserConfig = {
  ...sharedConfig,
  build: {
    minify: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        dev: resolve(__dirname, "src/utils/dev.html"),
      },
    },
  },
};

export default defineConfig(({ mode }) => {
  switch (mode) {
    case "lib":
      return libConfig;
    case "static":
      return staticConfig;
    case "development":
      return staticConfig;
    default:
      throw new Error(`Unsupported mode: ${mode}`);
  }
});
