import { Provider as ChakraProvider } from "@/components/ui/provider";
import { Flex, Heading, Image } from "@chakra-ui/react";
import DostanesieLogo from "@/assets/dostanesieLogo.svg";
import { FormProvider, useForm } from "react-hook-form";
import { FormValues } from "@/features/8klasa/types/calculator";
import { UserScore } from "@/features/8klasa/components/UserScore";
import { FieldsSection } from "@/features/8klasa/components/FieldsSection";
import { CertificateFields } from "@/features/8klasa/components/CertificateFields";
import { ExamFields } from "@/features/8klasa/components/ExamFields";
import { defaultFormValues } from "@/features/8klasa/consts/defaultFormValues";

const App = () => {
  const form = useForm<FormValues>({
    defaultValues: defaultFormValues,
    mode: "onChange",
  });

  return (
    <ChakraProvider>
      <FormProvider {...form}>
        <Flex
          flexDir="column"
          gap={2}
          m={1}
          border="1px solid"
          borderColor="gray.300"
          rounded="xl"
          shadow="md"
        >
          <Flex p={2} justifyContent="center">
            <Heading>Oblicz swoje punkty do szkoły</Heading>
          </Flex>

          <Flex flexWrap="wrap" gap={6}>
            <FieldsSection>
              <ExamFields />
            </FieldsSection>

            <FieldsSection>
              <CertificateFields />
            </FieldsSection>
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
    </ChakraProvider>
  );
};

export default App;
