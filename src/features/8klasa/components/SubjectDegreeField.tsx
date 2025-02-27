import { StepperInput } from "@/components/ui/stepper-input";
import { Controller, FieldPath, useFormContext } from "react-hook-form";
import { FormValues } from "@/features/8klasa/types/calculator";

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
          colorPalette="yellow"
        />
      )}
    />
  );
};
