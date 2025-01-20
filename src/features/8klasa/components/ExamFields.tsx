import { Flex, Text } from "@chakra-ui/react";
import { ExamSubjectField } from "@/features/8klasa/components/ExamSubjectField";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import Subjects from "@/assets/fetched/subjects.json";

export const ExamFields = () => {
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
        <ExamSubjectField title="język polski" fieldPath="exams.pl" />
        <ExamSubjectField title="matematyka" fieldPath="exams.math" />

        <ExamSubjectField
          title={
            <NativeSelectRoot>
              <NativeSelectField>
                {Subjects.filter((s) => s.is_foreign).map((subject) => (
                  <option key={subject.full_name} value={subject.full_name}>
                    {subject.full_name}
                  </option>
                ))}
              </NativeSelectField>
            </NativeSelectRoot>
          }
          fieldPath="examLanguage"
        />
      </Flex>
    </Flex>
  );
};
