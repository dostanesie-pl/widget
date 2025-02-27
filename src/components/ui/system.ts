import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const varRoot = ":host";

const config = defineConfig({
  cssVarsRoot: varRoot,
  conditions: {
    light: `${varRoot} &, .light &`,
  },
  preflight: { scope: varRoot },
  globalCss: {
    [varRoot]: {
      ...defaultConfig.globalCss?.html,
      fontFamily: "Montserrat Variable",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Montserrat Variable" },
        body: { value: "Montserrat Variable" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
