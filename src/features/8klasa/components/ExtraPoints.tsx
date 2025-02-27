import { useFormContext } from "react-hook-form";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Flex } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";

export const ExtraPoints = () => {
  const {register} = useFormContext<FormValues>()

  return (
    <Flex flexDirection="column" gap={2} w="100%">
      <Checkbox {...register("volunteer")}>
        wolontariat <b>+3 pkt</b>
      </Checkbox>

      <Checkbox {...register("certificate.withHonors")}>
        świadectwo z wyróżnieniem <b>+7 pkt</b>
      </Checkbox>
    </Flex>
  )
}