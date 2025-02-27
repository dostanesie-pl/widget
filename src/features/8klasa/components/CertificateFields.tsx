import Subjects from "@/assets/fetched/subjects.json";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { ExtraPoints } from "@/features/8klasa/components/ExtraPoints";
import { SubjectDegreeField } from "@/features/8klasa/components/SubjectDegreeField";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Flex, Separator, Text } from "@chakra-ui/react";
import { useFieldArray, useFormContext } from "react-hook-form";

export const CertificateFields = () => {
  const { control, getValues, register } = useFormContext<FormValues>();

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
          <Flex key={index} flexDirection="column" flex="1 1">
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

              <SubjectDegreeField
                fieldName={`certificate.subjects.${index}.score`}
              />
            </Flex>
          </Flex>
        ))}
      </Flex>

      <Separator borderColor="yellowCustom.100" size="md" w="100%" />

      <ExtraPoints />
      <Separator borderColor="yellowCustom.100" size="md" w="100%" />
    </Flex>
  );
};
