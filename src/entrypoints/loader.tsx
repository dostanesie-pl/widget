import App from "@/App";
import { extractConfigFromContainer } from "@/features/config/utils/extractConfigFromContainer";
import { createRoot } from "react-dom/client";

export const handleLoadWidget = (container: HTMLElement) => {
  const config = extractConfigFromContainer(container);
  const containerId = container.getAttribute("id");

  const root = createRoot(container);
  root.render(<App config={config} containerId={containerId} />);

  return root;
};
