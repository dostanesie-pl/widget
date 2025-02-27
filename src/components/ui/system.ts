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
      colors: {
        brand: {
          100: { value: "#DF2A66" },
        },
        yellowCustom: {
          ...defaultConfig.theme?.tokens?.colors?.yellow,
          100: { value: "#FFD90C" },
          700: { value: "#000000" },
        },
      },
    },
    semanticTokens: {
      colors: {
        yellowCustom: {
          solid: { value: "{colors.yellowCustom.500}" },
          contrast: { value: "{colors.yellowCustom.100}" },
          fg: { value: "{colors.yellowCustom.700}" },
          muted: { value: "{colors.yellowCustom.100}" },
          subtle: { value: "{colors.yellowCustom.200}" },
          emphasized: { value: "{colors.yellowCustom.300}" },
          focusRing: { value: "{colors.yellowCustom.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
