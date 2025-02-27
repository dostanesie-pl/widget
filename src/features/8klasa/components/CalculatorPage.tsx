import { Button } from "@/components/ui/button";
import { CalculatorWrapper } from "@/features/8klasa/components/CalculatorWrapper";
import { CertificateFields } from "@/features/8klasa/components/CertificateFields";
import { ContestsFields } from "@/features/8klasa/components/ContestsFields";
import { ExamFields } from "@/features/8klasa/components/ExamFields";
import { FieldsSection } from "@/features/8klasa/components/FieldsSection";
import { Footer } from "@/features/8klasa/components/Footer";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Flex, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const CalculatorPage = ({
  goToResults,
}: {
  goToResults: () => void;
}) => {
  const {
    formState: { isValid },
  } = useFormContext<FormValues>();

  return (
    <CalculatorWrapper
      subtitle={
        <Text maxW={["100%", "80%"]} my={4}>
          Poniżej wpisz przewidywane lub już uzyskane wyniki oraz oceny i
          sprawdź jakie szkoły są w Twoim zasięgu.
        </Text>
      }
    >
      <Flex flexDir="column" gap={8}>


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

        <Flex w="100%" justifyContent="center" my={5}>
          <Button
            colorPalette="yellow"
            fontWeight="bold"
            size="xl"
            onClick={goToResults}
            disabled={!isValid}
          >
            Sprawdź swoje punkty
          </Button>
        </Flex>

        <Footer />
      </Flex>
    </CalculatorWrapper>
  );
};
