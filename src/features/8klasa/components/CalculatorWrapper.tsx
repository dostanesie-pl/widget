import DostanesieLogoQuestionMark from "@/assets/dostanesieLogoQuestionMark.svg";
import { Flex, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

export const CalculatorWrapper = ({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: ReactNode;
}) => (
  <Flex flexDir="column" p={4} rounded="xl" gap={6} minW="100%">
    <Flex w="100%" justifyContent="space-between">
      <Image
        src={DostanesieLogoQuestionMark}
        alt="Logo dostanesie"
        w="32px"
        objectFit="contain"
        alignSelf="flex-start"
      />
    </Flex>

    {children}
  </Flex>
);
