import DostanesieLogo from "@/assets/dostanesieLogo.svg";
import DostanesieLogoQuestionMark from "@/assets/dostanesieLogoQuestionMark.svg";
import { CertificateFields } from "@/features/8klasa/components/CertificateFields";
import { ContestsFields } from "@/features/8klasa/components/ContestsFields";
import { ExamFields } from "@/features/8klasa/components/ExamFields";
import { FieldsSection } from "@/features/8klasa/components/FieldsSection";
import { UserScore } from "@/features/8klasa/components/UserScore";
import { defaultFormValues } from "@/features/8klasa/consts/defaultFormValues";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

export const CalculatorForm = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultFormValues,
    mode: "onChange",
  });

  return (
    <FormProvider {...form}>
      <Flex
        flexDir="column"
        gap={8}
        m={1}
        p={2}
        rounded="xl"
        shadow="0px 4px 4px 0px #00000040"
      >
        <Flex>
          <Flex flexDir="column" gap={4}>
            <Heading fontSize="2xl">Kalkulator</Heading>

            <Text maxW={["100%", "70%"]}>
              Poniżej wpisz przewidywane lub już uzyskane wyniki oraz oceny i
              sprawdź jakie szkoły są w Twoim zasięgu.
            </Text>
          </Flex>

          <Image
            src={DostanesieLogoQuestionMark}
            alt="Logo dostanesie"
            w="32px"
            objectFit="contain"
            alignSelf="flex-start"
          />
        </Flex>

        <Flex flexDirection="column" gap={4}>
          <Flex flexWrap="wrap" gap={8}>
            <FieldsSection>
              <ExamFields />
            </FieldsSection>

            <FieldsSection>
              <CertificateFields />
            </FieldsSection>
          </Flex>

          <ContestsFields />
        </Flex>

        <Flex
          px={2}
          py={0.5}
          borderTop="1px solid"
          borderTopColor="gray.300"
          gap={2}
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <UserScore />

          <Image src={DostanesieLogo} h={10} />
        </Flex>
      </Flex>
    </FormProvider>
  );
};
