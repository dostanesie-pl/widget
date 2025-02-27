import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Flex, Text } from "@chakra-ui/react";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { Field } from "@/components/ui/field";
import Subjects from "@/assets/fetched/subjects.json";
import { StepperInput } from "@/components/ui/stepper-input";
import { ExtraPoints } from "@/features/8klasa/components/ExtraPoints";

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
    <Flex flexDirection="column" alignItems="center" gap={4}>
      <Text fontSize="xl" fontWeight="bold">
        Świadectwo
      </Text>

      <Flex flexWrap="wrap" h="100%" justifyContent="center" gap={4}>
        {certificateFields.map((field, index) => (
          <Flex key={index} flexDirection="column" w="45%">
            <Flex flexDirection="column" gap={2} fontWeight={600}>
              {field.editable ? (
                <NativeSelectRoot width="auto" size="sm">
                  <NativeSelectField
                    {...register(`certificate.subjects.${index}.name`)}
                    value={
                      getValues(`certificate.subjects.${index}.name`) || ""
                    }
                  >
                    {Subjects.map((subject) => (
                      <option key={subject.full_name} value={subject.full_name}>
                        {subject.abbreviation || subject.full_name}
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
                    <StepperInput
                      name={field.name}
                      value={(field.value || 0).toString()}
                      onValueChange={({ value }) => {
                        field.onChange(value);
                      }}
                      min={1}
                      max={6}
                      colorPalette="yellow"
                    />
                  )}
                />
              </Field>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <ExtraPoints />
    </Flex>
  );
};
