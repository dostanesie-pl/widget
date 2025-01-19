import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Flex, Grid, Text } from "@chakra-ui/react";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import {
  NumberInputField,
  NumberInputRoot,
} from "@/components/ui/number-input";
import { Field } from "@/components/ui/field";
import Subjects from "@/assets/fetched/subjects.json";

export const CertificateFields = () => {
  const {
    control,
    getValues,
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  const { fields: certificateFields } = useFieldArray({
    control: control,
    name: "certificate.subjects",
  });

  return (
    <Flex flexDirection="column" alignItems="center">
      <Text fontSize="xl" fontWeight="bold">
        Świadectwo
      </Text>

      <Flex
        flexDirection="column"
        h="100%"
        justifyContent="space-evenly"
        gap={1}
      >
        {certificateFields.map((field, index) => (
          <Flex key={index} flexDirection="column">
            <Grid templateColumns="2fr 1fr" gap={3} alignItems="center">
              {field.editable ? (
                <NativeSelectRoot width="auto">
                  <NativeSelectField
                    {...register(`certificate.subjects.${index}.name`)}
                    value={
                      getValues(`certificate.subjects.${index}.name`) || ""
                    }
                  >
                    <option value="">wybierz przedmiot</option>
                    {Subjects.map((subject) => (
                      <option key={subject.full_name} value={subject.full_name}>
                        {subject.full_name}
                      </option>
                    ))}
                  </NativeSelectField>
                </NativeSelectRoot>
              ) : (
                <Text>{field.name}</Text>
              )}

              <Field invalid={!!errors.certificate?.subjects?.[index]?.score}>
                <Controller
                  name={`certificate.subjects.${index}.score`}
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
                      min={1}
                      max={6}
                    >
                      <NumberInputField onBlur={field.onBlur} />
                    </NumberInputRoot>
                  )}
                />
              </Field>
            </Grid>

            <Text fontSize="sm" color="red.500" h={3}>
              {errors.certificate?.subjects?.[index]?.score &&
                "Ocena musi być z przedziału 1-6"}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
