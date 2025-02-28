import Subjects from "@/assets/fetched/subjects.json";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { ExamSubjectField } from "@/features/8klasa/components/ExamSubjectField";
import { Flex, Text } from "@chakra-ui/react";

export const ExamFields = () => {
  return (
    <Flex flexDirection="column" alignItems="center" w="100%" gap={4}>
      <Text
        fontSize="xl"
        fontWeight="bold"
        alignSelf={["center", "flex-start"]}
      >
        Egzamin ósmoklasisty
      </Text>

      <Flex
        flexDirection="column"
        h="100%"
        justifyContent="space-evenly"
        gap={4}
        w="100%"
      >
        <ExamSubjectField title="j. polski" fieldPath="exams.pl" />
        <ExamSubjectField title="matematyka" fieldPath="exams.math" />

        <ExamSubjectField
          title={
            <NativeSelectRoot width="fit-content">
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
