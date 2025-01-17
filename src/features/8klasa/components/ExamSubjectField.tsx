import {
  Controller,
  FieldPath,
  useController,
  useFormContext,
} from "react-hook-form";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Flex, Text } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import {
  NumberInputField,
  NumberInputRoot,
} from "@/components/ui/number-input";

export const ExamSubjectField = ({
  title,
  fieldPath,
}: {
  title: string;
  fieldPath: Extract<
    FieldPath<FormValues>,
    "exams.pl" | "exams.math" | "examLanguage"
  >;
}) => {
  const { control, register, watch } = useFormContext<FormValues>();

  const {
    fieldState: { error: scoreError },
  } = useController<FormValues>({ name: `${fieldPath}.score` });

  const {
    fieldState: { error: degreeError },
  } = useController<FormValues>({
    name: `${fieldPath}.degree`,
  });

  return (
    <Flex flexDirection="column" gap={2}>
      <Flex justifyContent="space-between" w="100%">
        <Text>{title}</Text>
        <Checkbox {...register(`${fieldPath}.exempt`)} colorScheme="yellow">
          zwolniony
        </Checkbox>
      </Flex>

      {watch(`${fieldPath}.exempt`) ? (
        <Field invalid={!!degreeError}>
          <Controller
            name={`${fieldPath}.degree`}
            control={control}
            rules={{
              min: 1,
              max: 6,
            }}
            render={({ field }) => (
              <NumberInputRoot
                name={field.name}
                value={field.value || undefined}
                onValueChange={({ value }) => {
                  field.onChange(value);
                }}
                w="100%"
              >
                <NumberInputField onBlur={field.onBlur} placeholder="ocena" />
              </NumberInputRoot>
            )}
          />
          <Text fontSize="sm" color="red.500" h={3}>
            {degreeError && "Ocena musi być z przedziału 1-6"}
          </Text>
        </Field>
      ) : (
        <Field invalid={!!scoreError}>
          <Controller
            name={`${fieldPath}.score`}
            control={control}
            rules={{
              min: 0,
              max: 100,
            }}
            render={({ field }) => (
              <NumberInputRoot
                name={field.name}
                value={field.value || undefined}
                onValueChange={({ value }) => {
                  field.onChange(value);
                }}
                w="100%"
                step={5}
              >
                <NumberInputField onBlur={field.onBlur} placeholder="wynik %" />
              </NumberInputRoot>
            )}
          />
          <Text fontSize="sm" color="red.500" h={3}>
            {scoreError && "Wynik z egzaminu musi być z przedziału 0-100"}
          </Text>
        </Field>
      )}
    </Flex>
  );
};
