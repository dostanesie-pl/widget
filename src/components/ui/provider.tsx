"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";
import root from "react-shadow/emotion";
import { system } from "./system";

import { EnvironmentProvider } from "@chakra-ui/react/env";
import { ChakraProvider } from "@chakra-ui/react/styled-system";
import { ReactNode, useEffect, useState } from "react";

export function Provider(
  // ComponentChildren required because we are in preact
  props: ThemeProviderProps & { children: ReactNode },
) {
  const [shadow, setShadow] = useState<HTMLElement | null>(null);
  const [cache, setCache] = useState<ReturnType<typeof createCache> | null>(
    null,
  );

  useEffect(() => {
    if (!shadow?.shadowRoot || cache) return;
    const emotionCache = createCache({
      key: "root",
      container: shadow.shadowRoot,
    });
    setCache(emotionCache);
  }, [shadow, cache]);

  return (
    <root.div ref={setShadow}>
      {shadow && cache && (
        <EnvironmentProvider value={() => shadow.shadowRoot ?? document}>
          <CacheProvider value={cache}>
            <ChakraProvider value={system}>
              <ThemeProvider {...props} />
            </ChakraProvider>
          </CacheProvider>
        </EnvironmentProvider>
      )}
    </root.div>
  );
}
