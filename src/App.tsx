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

const App = (config: IWidgetConfig) => {
  useEffect(() => {
    console.info(
      "Załadowano widget dostanesie.pl. Konfiguracja:",
      JSON.stringify(config),
    );
  }, []);

  const [visiblePage, setVisiblePage] = useState<number>(0);
  const [gradientDegrees, setGradientDegrees] = useState<number>(170);

  const form = useForm<FormValues>({
    defaultValues: defaultFormValues,
    mode: "onChange",
  });

  const calculatorBodyRef = useRef<HTMLDivElement>(null);
  const resultsBodyRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Function to animate the gradient angle
  const animateGradient = (startDeg: number, targetDeg: number) => {
    const startTime = Date.now();
    const duration = 500; // Animation duration in ms

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smoother animation
      const easeProgress = 1 - Math.pow(1 - progress, 2);

      const currentDeg = startDeg + (targetDeg - startDeg) * easeProgress;
      setGradientDegrees(currentDeg);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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
          backgroundClip="padding-box, border-box"
          backgroundImage={`
            linear-gradient(to bottom, white, white),
            conic-gradient(
              from ${gradientDegrees}deg at 45% 60%,
                transparent 1deg,
                rgb(238, 66, 123) 3deg,
                rgb(238, 66, 123) 50deg,
                rgb(238, 66, 123) 118deg,
                transparent 120deg
            )
          `}
          rounded="xl"
          flexDir="column"
          gap={6}
          transition="background-image 0.3s ease"
        >
          <Flex px={4} justifyContent="space-between" alignItems="center">
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
                animateGradient(170, 70);

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
                animateGradient(70, 170);

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
