import { Provider as ChakraProvider } from "@/components/ui/provider";
import { defaultFormValues } from "@/features/8klasa/consts/defaultFormValues";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import "@fontsource-variable/montserrat/index.css";

import DostanesieLogoQuestionMark from "@/assets/dostanesieLogoQuestionMark.svg";
import { CalculatorPage } from "@/features/8klasa/components/CalculatorPage";
import { Footer } from "@/features/8klasa/components/Footer";
import { ResultsPage } from "@/features/8klasa/components/ResultsPage";
import { IWidgetConfig } from "@/features/config/types/IWidgetConfig";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./animationProperty.css";

const App = (config: IWidgetConfig) => {
  useEffect(() => {
    console.info(
      "Załadowano widget dostanesie.pl. Konfiguracja:",
      JSON.stringify(config),
    );
  }, []);

  const [visiblePage, setVisiblePage] = useState<number>(0);

  const form = useForm<FormValues>({
    defaultValues: defaultFormValues,
    mode: "onChange",
  });

  const calculatorBodyRef = useRef<HTMLDivElement>(null);
  const resultsBodyRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ChakraProvider>
      <FormProvider {...form}>
        <Box
          position="relative"
          maxW="675px"
          overflow="hidden"
          mx="auto"
          shadow="0px 4px 4px 0px #00000040"
          border="solid transparent"
          borderWidth="9px"
          backgroundOrigin="border-box"
          backgroundClip="padding-box, border-box, border-box"
          backgroundImage={`
            linear-gradient(to bottom, white, white),
            conic-gradient(
              from var(--border-pink-angle) at var(--border-center-x) 60%,
                transparent 1deg,
                rgb(238, 66, 123) 3deg,
                rgb(238, 66, 123) 118deg,
                transparent 120deg
            ),
            conic-gradient(
              from var(--border-orange-angle) at var(--border-center-x) 60%,
                transparent 1deg,
                #EEA305 3deg,
                #EEA305 50deg,
                transparent 52deg
            )
          `}
          rounded="xl"
          flexDir="column"
          gap={6}
          animationName={visiblePage === 0 ? "calcToResults" : "resultsToCalc"}
          animationDuration="400ms"
          animationTimingFunction="ease"
          animationFillMode="forwards"
        >
          <Flex
            px={4}
            py={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading fontSize="2xl">Kalkulator</Heading>

            <Image
              src={DostanesieLogoQuestionMark}
              alt="Logo dostanesie"
              w="32px"
              objectFit="contain"
              alignSelf="flex-start"
            />
          </Flex>

          <Flex
            transform={`translateX(-${visiblePage * 100}%)`}
            transition="transform 0.15s ease"
            ref={wrapperRef}
          >
            <CalculatorPage
              goToResults={() => {
                setVisiblePage(1);

                if (
                  wrapperRef.current &&
                  resultsBodyRef.current &&
                  calculatorBodyRef.current
                ) {
                  calculatorBodyRef.current.style.height = "0px";
                  resultsBodyRef.current.style.height = "auto";
                }
              }}
              calculatorBodyRef={calculatorBodyRef}
            />

            <ResultsPage
              goToCalculator={() => {
                setVisiblePage(0);

                if (
                  wrapperRef.current &&
                  calculatorBodyRef.current &&
                  resultsBodyRef.current
                ) {
                  calculatorBodyRef.current.style.height = "auto";
                  resultsBodyRef.current.style.height = "0px";
                }
              }}
              resultsBodyRef={resultsBodyRef}
            />
          </Flex>

          <Footer />
        </Box>
      </FormProvider>
    </ChakraProvider>
  );
};

export default App;
