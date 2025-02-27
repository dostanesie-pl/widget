import { Provider as ChakraProvider } from "@/components/ui/provider";
import { CalculatorPage } from "@/features/8klasa/components/CalculatorPage";
import { ResultsPage } from "@/features/8klasa/components/ResultsPage";
import { defaultFormValues } from "@/features/8klasa/consts/defaultFormValues";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Box, Presence } from "@chakra-ui/react";
import "@fontsource-variable/montserrat/index.css";
import { useState } from "preact/hooks";
import { FormProvider, useForm } from "react-hook-form";

const ANIMATION_DURATION_MS = 200;

const App = () => {
  const [visiblePage, setVisiblePage] = useState<"calculator" | "results">(
    "calculator",
  );

  const form = useForm<FormValues>({
    defaultValues: defaultFormValues,
    mode: "onChange",
  });

  return (
    <ChakraProvider>
      <FormProvider {...form}>
        <Box position="relative">
          <Presence
            present={visiblePage === "calculator"}
            animationName={{ _open: "fade-in", _closed: "fade-out" }}
            animationDuration={`${ANIMATION_DURATION_MS}ms`}
            position="absolute"
            w="100%"
          >
            <CalculatorPage goToResults={() => setVisiblePage("results")} />
          </Presence>

          <Presence
            present={visiblePage === "results"}
            animationName={{ _open: "fade-in", _closed: "fade-out" }}
            animationDuration={`${ANIMATION_DURATION_MS}ms`}
            position="absolute"
            w="100%"
          >
            <ResultsPage goToCalculator={() => setVisiblePage("calculator")} />
          </Presence>
        </Box>
      </FormProvider>
    </ChakraProvider>
  );
};

export default App;
