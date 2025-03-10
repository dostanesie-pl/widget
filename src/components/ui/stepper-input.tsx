import { Flex, IconButton, NumberInput, Span } from "@chakra-ui/react";
import * as React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

export interface StepperInputProps extends NumberInput.RootProps {
  label?: React.ReactNode;
}

export const StepperInput = React.forwardRef<HTMLDivElement, StepperInputProps>(
  function StepperInput(props, ref) {
    const { label, ...rest } = props;
    return (
      <NumberInput.Root {...rest} unstyled ref={ref} w="100%">
        {label && <NumberInput.Label>{label}</NumberInput.Label>}
        <Flex justifyContent="space-between">
          <DecrementTrigger />
          <Flex flexDirection="column">
            <NumberInput.ValueText
              textAlign="center"
              fontSize="lg"
              minW="3ch"
              lineHeight="normal"
            />
            <Span fontWeight="light" fontSize="xs">
              ocena
            </Span>
          </Flex>
          <IncrementTrigger />
        </Flex>
      </NumberInput.Root>
    );
  },
);

const DecrementTrigger = React.forwardRef<
  HTMLButtonElement,
  NumberInput.DecrementTriggerProps
>(function DecrementTrigger(props, ref) {
  return (
    <NumberInput.DecrementTrigger {...props} asChild ref={ref}>
      <IconButton variant="outline" size="md">
        <LuMinus />
      </IconButton>
    </NumberInput.DecrementTrigger>
  );
});

const IncrementTrigger = React.forwardRef<
  HTMLButtonElement,
  NumberInput.IncrementTriggerProps
>(function IncrementTrigger(props, ref) {
  return (
    <NumberInput.IncrementTrigger {...props} asChild ref={ref}>
      <IconButton variant="outline" size="md">
        <LuPlus />
      </IconButton>
    </NumberInput.IncrementTrigger>
  );
});
