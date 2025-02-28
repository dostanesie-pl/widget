import {
  ConfigSchema,
  IWidgetConfig,
} from "@/features/config/types/IWidgetConfig";
import * as v from "valibot";

export function extractConfigFromContainer(
  container: HTMLElement,
): IWidgetConfig {
  const config: Record<string, any> = {};

  const dataAttributes = Array.from(container.attributes).filter((attr) =>
    attr.name.startsWith("data-"),
  );

  dataAttributes.forEach((attr) => {
    const key = attr.name.replace("data-", "") as keyof IWidgetConfig;

    try {
      config[key] = JSON.parse(attr.value);
    } catch (e) {
      config[key] = attr.value;
    }
  });

  const parseResult = v.safeParse(ConfigSchema, config);

  if (!parseResult.success) {
    console.warn(
      // There was an issue during parsing the config:
      "Błąd w konfiguracji widgetu dostanesie.pl:",
      JSON.stringify(parseResult.issues),
    );

    return {};
  }

  return parseResult.output;
}
