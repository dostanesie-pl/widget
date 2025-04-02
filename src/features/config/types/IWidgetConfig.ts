import * as v from "valibot";

export const ConfigSchema = v.object({
  rspo: v.optional(v.number()),
  "disable-animations": v.optional(v.boolean(), false),
  "show-branding": v.optional(v.boolean(), true),
  debug: v.optional(v.boolean(), false),
});

export const ConfigDefaults = v.getDefaults(ConfigSchema);

export type IWidgetConfig = v.InferOutput<typeof ConfigSchema>;
