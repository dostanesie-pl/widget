import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { contestsValues } from "@/features/8klasa/consts/contestsValues";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Flex, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const ContestsFields = () => {
  const { setValue } = useFormContext<FormValues>();

  return (
    <Flex flexDirection="column" w="100%">
      <AccordionRoot collapsible>
        <AccordionItem value="" borderColor="yellowCustom.100">
          <AccordionItemTrigger fontWeight={700} fontSize="xl">
            Konkursy
          </AccordionItemTrigger>
          <AccordionItemContent>
            <Flex flexDirection="column" gap={5}>
              {contestsValues.map((contest, index) => (
                <RadioGroup
                  key={contest.name}
                  as={Flex}
                  gap={2}
                  flexDirection="column"
                  onValueChange={(e) => {
                    const value = e.value;
                    if (typeof value === "string") {
                      setValue(
                        `contests.${index}.selectedFieldIndex`,
                        parseInt(value),
                      );
                    }
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
