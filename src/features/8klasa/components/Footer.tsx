import DostanesieLogo from "@/assets/dostanesieLogo.svg";
import { Flex, Image } from "@chakra-ui/react";

export const Footer = () => (
  <Flex p={4}>
    <Image src={DostanesieLogo} h={8} />
  </Flex>
);
