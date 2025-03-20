import * as v from "valibot";

export const ConfigSchema = v.object({
  rspo: v.optional(v.number()),
  "disable-animations": v.optional(v.boolean()),
});

export type IWidgetConfig = v.InferOutput<typeof ConfigSchema>;
