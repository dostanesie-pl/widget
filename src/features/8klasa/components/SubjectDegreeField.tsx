import { StepperInput } from "@/components/ui/stepper-input";
import { FormValues } from "@/features/8klasa/types/calculator";
import { Controller, FieldPath, useFormContext } from "react-hook-form";

export const SubjectDegreeField = ({
  fieldName,
}: {
  fieldName: FieldPath<FormValues>;
}) => {
  const { control } = useFormContext<FormValues>();

  return (
    <Controller
      name={fieldName}
      control={control}
      shouldUnregister
      rules={{
        min: 1,
        max: 6,
      }}
      render={({ field }) => (
        <StepperInput
          name={field.name}
          value={(field.value || 0).toString()}
          onValueChange={({ value }) => {
            field.onChange(value);
          }}
          min={1}
          max={6}
          colorPalette="yellowCustom"
        />
      )}
    />
  );
};
