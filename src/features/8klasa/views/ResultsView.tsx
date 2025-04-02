import { Button } from "@/components/ui/button";
import { ResultsCompareWithOthers } from "@/features/8klasa/components/ResultsCompareWithOthers";
import { FormValues } from "@/features/8klasa/types/calculator";
import { calculateResult } from "@/features/8klasa/utils/calculateResult";
import { IWidgetConfig } from "@/features/config/types/IWidgetConfig";
import { Flex, Heading, Span, Text } from "@chakra-ui/react";
import { Ref } from "react";
import { useWatch } from "react-hook-form";
import { LuChevronLeft } from "react-icons/lu";

export const ResultsView = ({
  goToCalculator,
  resultsBodyRef,
  showCompareWithOthers,
}: {
  goToCalculator: () => void;
  resultsBodyRef: Ref<HTMLDivElement>;
  showCompareWithOthers: IWidgetConfig["show-branding"];
}) => {
  const state = useWatch<FormValues>();
  let result = calculateResult(state as FormValues);

  return (
    <Flex flexDirection="column" minW="100%" px={4} gap={4}>
      <Flex>
        <Button size="sm" variant="subtle" onClick={goToCalculator}>
          <LuChevronLeft /> Wróć
        </Button>
      </Flex>

      <Flex w="100%" justifyContent="center" ref={resultsBodyRef}>
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

          {showCompareWithOthers ? <ResultsCompareWithOthers /> : null}
        </Flex>
      </Flex>
    </Flex>
  );
};
