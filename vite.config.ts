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

/**
 * Lib config is designed to create small files for prod usage
 * */
const libConfig: UserConfig = {
  ...sharedConfig,
  build: {
    minify: true,
    sourcemap: true,
    cssCodeSplit: true, // inject css into js file
    lib: {
      entry: "src/main.tsx",
      name: "DostanesiePlWidget",
      fileName: () => `dostanesie-pl-widget.js`,
      formats: ["iife"],
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
};

/**
 * Static lib build creates single file with js, css and fonts included
 * */
const staticLibConfig: UserConfig = {
  ...libConfig,
  build: {
    ...libConfig.build,
  },
};

/**
 * WordPress build creates files of js and css separately
 * */
const wordpressConfig: UserConfig = {
  ...libConfig,
  build: {
    ...libConfig.build,
    outDir: "./wordpress/src/static/",
  },
};

/**
 * Single page config is used for local development and demo page.
 * It creates multiple files for dynamic imports.
 * */
const singlePageConfig: UserConfig = {
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
      return staticLibConfig;
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
