import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, mergeConfig, UserConfig } from "vite";
import cleanPlugin from "vite-plugin-clean";
import svgLoader from "vite-svg-loader";
import tsconfigPaths from "vite-tsconfig-paths";

// Shared configuration
const sharedConfig: UserConfig = {
  build: {
    outDir: "./dist",
  },
  plugins: [
    tsconfigPaths(),
    react(),
    svgLoader({
      defaultImport: "url",
    }),
    cleanPlugin(),
  ],
};

/**
 * Lib config is designed to create small files for prod usage
 * */
const libConfig = mergeConfig(sharedConfig, {
  build: {
    minify: true,
    sourcemap: true,
    cssCodeSplit: true, // inject css into js file
    lib: {
      entry: "src/entrypoints/standalone.tsx",
      name: "DostanesiePlWidget",
      fileName: () => `dostanesie-pl-widget.js`,
      formats: ["iife"],
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

/**
 * WordPress build creates files of js and css separately
 * */
const wordpressConfig = mergeConfig(libConfig, {
  build: {
    outDir: "./wordpress-plugin/calculator-dostanesie-pl/src/static/",
    lib: {
      entry: "src/entrypoints/wordpress.tsx",
    },
  },
});

/**
 * Single page config is used for local development and demo page.
 * It creates multiple files for dynamic imports.
 * */
const singlePageConfig = mergeConfig(sharedConfig, {
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
});

export default defineConfig(({ mode }) => {
  switch (mode) {
    case "lib":
      return libConfig;
    case "wordpress":
      return wordpressConfig;
    case "static":
      return singlePageConfig;
    case "development":
      return singlePageConfig;
    default:
      throw new Error(`Unsupported mode: ${mode}`);
  }
});
