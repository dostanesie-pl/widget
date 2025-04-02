import DostanesieLogo from "@/assets/dostanesieLogo.svg";
import { IWidgetConfig } from "@/features/config/types/IWidgetConfig";
import { Flex, Image } from "@chakra-ui/react";

export const Footer = ({
  showLogo,
}: {
  showLogo: IWidgetConfig["show-branding"];
}) => (
  <Flex p={4}>{showLogo ? <Image src={DostanesieLogo} h={8} /> : null}</Flex>
);
