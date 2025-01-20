import { Flex, Text } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { contestsValues } from "@/features/8klasa/consts/contestsValues";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { useFormContext } from "react-hook-form";
import { FormValues } from "@/features/8klasa/types/calculator";

export const ContestsFields = () => {
  const { setValue, watch } = useFormContext<FormValues>();

  return (
    <Flex flexDirection="column" paddingY={4} w="100%">
      <AccordionRoot collapsible>
        <AccordionItem value="">
          <AccordionItemTrigger>Konkursy</AccordionItemTrigger>
          <AccordionItemContent>
            <Flex flexDirection="column" gap={5}>
              {contestsValues.map((contest, index) => (
                <RadioGroup
                  key={contest.name}
                  as={Flex}
                  gap={2}
                  flexDirection="column"
                  onValueChange={(e) => {
                    setValue(
                      `contests.${index}.selectedFieldIndex`,
                      parseInt(e.value),
                    );
                  }}
                  name={`contests.${index}.selectedFieldIndex`}
                  colorScheme="yellow"
                >
                  <Text>{contest.name}</Text>
                  {contest.fields.map((contestField, subindex) => (
                    <Radio
                      key={contest.name + contestField.name}
                      value={subindex.toString()}
                    >
                      {contestField.name} ({contestField.value} pkt)
                    </Radio>
                  ))}
                </RadioGroup>
              ))}
            </Flex>
          </AccordionItemContent>
        </AccordionItem>
      </AccordionRoot>
    </Flex>
  );
};
