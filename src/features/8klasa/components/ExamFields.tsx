import { Flex, Text } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import {
  NumberInputField,
  NumberInputRoot,
} from "@/components/ui/number-input";

export const ExamFields = () => {
  const {
    control,
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormValues>();

  return (
    <Flex flexDirection="column" alignItems="center" w="100%">
      <Text fontSize="xl" fontWeight="bold">
        Egzamin ósmoklasisty
      </Text>

      <Flex
        flexDirection="column"
        h="100%"
        justifyContent="space-evenly"
        gap={5}
        w="100%"
      >
        <Flex flexDirection="column" gap={2}>
          <Flex justifyContent="space-between" w="100%">
            <Text>język polski</Text>
            <Checkbox {...register("exams.pl.exempt")} colorScheme="yellow">
              zwolniony
            </Checkbox>
          </Flex>

          {watch("exams.pl.exempt") ? (
            <Field invalid={!!errors.exams?.pl?.degree}>
              <Controller
                name="exams.pl.degree"
                key="exams.pl.degree"
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
                    <NumberInputField
                      onBlur={field.onBlur}
                      placeholder="ocena"
                    />
                  </NumberInputRoot>
                )}
              />
              <Text fontSize="sm" color="red.500" h={3}>
                {errors.exams?.pl?.degree && "Ocena musi być z przedziału 1-6"}
              </Text>
            </Field>
          ) : (
            <Field invalid={!!errors.exams?.pl?.score}>
              <Controller
                name="exams.pl.score"
                key="exams.pl.score"
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
              <Text fontSize="sm" color="red.500" h={3}>
                {errors.exams?.pl?.score &&
                  "Wynik z egzaminu musi być z przedziału 0-100"}
              </Text>
            </Field>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
