import * as v from "valibot";

export const ConfigSchema = v.object({
  rspo: v.optional(v.number()),
});

export type IWidgetConfig = v.InferOutput<typeof ConfigSchema>;
