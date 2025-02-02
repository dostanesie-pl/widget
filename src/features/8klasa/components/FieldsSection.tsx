import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

export const FieldsSection = ({ children }: { children: ReactNode }) => (
  <Flex
    flex={["1 1 100%", "1 1 48%"]}
    flexWrap="wrap"
    justifyContent="center"
    gap={4}
    px={4}
  >
    {children}
  </Flex>
);
