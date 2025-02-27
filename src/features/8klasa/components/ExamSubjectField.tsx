import {
  Controller,
  FieldPath,
  useController,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Flex, Text } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import {
  NumberInputField,
  NumberInputRoot,
} from "@/components/ui/number-input";
import { ReactNode } from "react";
import { CheckboxInvertedLabel } from "@/components/ui/checkboxInvertedLabel";
import { SubjectDegreeField } from "@/features/8klasa/components/SubjectDegreeField";

export const ExamSubjectField = ({
  title,
  fieldPath,
}: {
  title: string | ReactNode;
  fieldPath: Extract<
    FieldPath<FormValues>,
    "exams.pl" | "exams.math" | "examLanguage"
  >;
}) => {
  const { control, register } = useFormContext<FormValues>();
  const isExempt = useWatch({ name: `${fieldPath}.exempt` });

  const {
    fieldState: { error: scoreError },
  } = useController<FormValues>({ name: `${fieldPath}.score` });

  const {
    fieldState: { error: degreeError },
  } = useController<FormValues>({
    name: `${fieldPath}.degree`,
  });

  return (
    <Flex flexDirection="column" gap={1}>
      <Flex justifyContent="space-between" w="100%" gap={2} fontWeight={600}>
        {typeof title === "string" ? <Text>{title}</Text> : title}
      </Flex>

      <Flex gap={5} alignItems="center">
        {isExempt ? (
          <Field invalid={!!degreeError} key="degree">
            <SubjectDegreeField fieldName={`${fieldPath}.degree`} />
          </Field>
        ) : (
          <Field invalid={!!scoreError} key="score">
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
                  <NumberInputField
                    onBlur={field.onBlur}
                    placeholder="wynik %"
                  />
                </NumberInputRoot>
              )}
            />
          </Field>
        )}

        <Flex>
          <CheckboxInvertedLabel
            {...register(`${fieldPath}.exempt`)}
            flexDirection="column"
            gap={1}
            fontSize="sm"
            fontWeight={400}
          >
            zwolniony
          </CheckboxInvertedLabel>
        </Flex>
      </Flex>

      <Text fontSize="xs" color="red.500">
        {!isExempt &&
          scoreError &&
          "Wynik z egzaminu musi być z przedziału 0-100"}

        {isExempt && degreeError && "Ocena musi być z przedziału 1-6"}
      </Text>
    </Flex>
  );
};
