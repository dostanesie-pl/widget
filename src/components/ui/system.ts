import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const varRoot = ":host";

const config = defineConfig({
  cssVarsRoot: varRoot,
  conditions: {
    light: `${varRoot} &, .light &`,
  },
  preflight: { scope: varRoot },
  globalCss: {
    [varRoot]: defaultConfig.globalCss?.html ?? {},
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: '"Montserrat", sans-serif' },
        body: { value: '"Montserrat", sans-serif' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
