import DostanesieLogo from "@/assets/dostanesieLogo.svg";
import { Button } from "@/components/ui/button";
import { Flex, Image, Span, Text } from "@chakra-ui/react";

export const ResultsCompareWithOthers = () => (
  <Flex
    maxW={["100%", "50%"]}
    border="1px solid"
    borderColor="yellowCustom.100"
    p={5}
    rounded="md"
    flexDir="column"
    gap={2}
  >
    <Text>
      Chcesz zobaczyć jak Twój wynik wypada na tle wyników innych uczniów?
    </Text>

    <Flex alignItems="flex-end" gap={1}>
      <Span lineHeight="normal">Odwiedź</Span>
      <Image src={DostanesieLogo} h={10} />
    </Flex>

    <Button fontWeight={700} size="xl" colorPalette="yellow" mt={6}>
      Porównaj swój wynik
    </Button>
  </Flex>
);
