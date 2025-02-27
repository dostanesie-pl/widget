import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const FieldsSection = ({ children }: { children: ReactNode }) => (
  <Flex
    flex={["1 1 100%", "1 1 40%"]}
    flexWrap="wrap"
    justifyContent="center"
    gap={4}
  >
    {children}
  </Flex>
);
