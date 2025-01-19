import { defineConfig, UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import svgLoader from "vite-svg-loader";
import react from '@vitejs/plugin-react'

// Shared configuration
const sharedConfig: UserConfig = {
  plugins: [
    tsconfigPaths(),
    // preact(),
    react(),
    svgLoader({
      defaultImport: "url",
    }),
  ],
  define: {
    // need to override NODE_ENV,
    // otherwise react-is throws reference error in prod build
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
};

// Library build configuration
const libConfig: UserConfig = {
  ...sharedConfig,
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
