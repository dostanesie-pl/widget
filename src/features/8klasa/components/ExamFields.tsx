import { Flex, Text } from "@chakra-ui/react";
import { ExamSubjectField } from "@/features/8klasa/components/ExamSubjectField";

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
      </Flex>
    </Flex>
  );
};
