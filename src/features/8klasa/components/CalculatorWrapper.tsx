import DostanesieLogoQuestionMark from "@/assets/dostanesieLogoQuestionMark.svg";
import { Flex, Heading, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

export const CalculatorWrapper = ({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: ReactNode;
}) => (
  <Flex
    flexDir="column"
    m={1}
    p={4}
    rounded="xl"
    shadow="0px 4px 4px 0px #00000040"
    gap={6}
  >
    <Flex w="100%" justifyContent="space-between">
      <Flex flexDir="column">
        <Heading fontSize="2xl">Kalkulator</Heading>
        {subtitle}
      </Flex>

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
