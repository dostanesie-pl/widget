import { FormValues } from "@/features/8klasa/types/calculator";
import { calculateResult } from "@/features/8klasa/utils/calculateResult";
import { Flex, Text } from "@chakra-ui/react";
import { useFormContext, useWatch } from "react-hook-form";

export const UserScore = () => {
  const state = useWatch<FormValues>();
  const {
    formState: { isValid },
  } = useFormContext<FormValues>();

  let result = calculateResult(state as FormValues);
  if (!isValid) {
    return (
      <Flex>
        <Text marginRight={5} fontWeight="extrabold">
          Sprawdź błędy w formularzu
        </Text>
      </Flex>
    );
  }

  return (
    <Flex>
      <Text marginRight={5}>Twój wynik:</Text>
      <Text fontWeight="extrabold">{Math.round(result)}/200 pkt</Text>
    </Flex>
  );
};
