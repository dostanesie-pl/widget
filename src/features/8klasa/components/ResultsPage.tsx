import DostanesieLogo from "@/assets/dostanesieLogo.svg";
import { Button } from "@/components/ui/button";
import { CalculatorWrapper } from "@/features/8klasa/components/CalculatorWrapper";
import { FormValues } from "@/features/8klasa/types/calculator";
import { calculateResult } from "@/features/8klasa/utils/calculateResult";
import { Flex, Heading, Image, Span, Text } from "@chakra-ui/react";
import { useWatch } from "react-hook-form";
import { LuChevronLeft } from "react-icons/lu";

export const ResultsPage = ({
  goToCalculator,
}: {
  goToCalculator: () => void;
}) => {
  const state = useWatch<FormValues>();
  let result = calculateResult(state as FormValues);

  return (
    <CalculatorWrapper
      subtitle={
        <Flex mt={4}>
          <Button size="sm" variant="subtle" onClick={goToCalculator}>
            <LuChevronLeft /> Wróć
          </Button>
        </Flex>
      }
    >
      <Flex w="100%" justifyContent="center">
        <Flex flexDirection="column" gap={8} alignItems="center">
          <Heading
            textAlign="center"
            fontWeight={700}
            w="fit-content"
            borderBottom="1px solid"
            borderColor="yellowCustom.100"
            px={2}
          >
            Twój wynik
          </Heading>

          <Text textAlign="center">
            <Span color="brand.100" fontWeight={700} fontSize="6xl">
              {Math.round(result)}
            </Span>
            <Span fontWeight={600}> / 200 pkt</Span>
          </Text>

          <Flex
            maxW={["100%", "50%"]}
            border="1px solid"
            borderColor="yellowCustom.100"
            p={5}
            rounded="md"
            flexDir="column"
            gap={2}
          >
            <Text>
              Chcesz zobaczyć jak Twój wynik wypada na tle wyników innych
              uczniów?
            </Text>

            <Flex alignItems="flex-end" gap={1}>
              <Span lineHeight="normal">Odwiedź</Span>
              <Image src={DostanesieLogo} h={10} />
            </Flex>

            <Button fontWeight={700} size="xl" colorPalette="yellow" mt={6}>
              Porównaj swój wynik
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </CalculatorWrapper>
  );
};
