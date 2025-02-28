import { extractConfigFromContainer } from "@/features/config/utils/extractConfigFromContainer";
import { createRoot } from "react-dom/client";
import App from "./App";

window.addEventListener("load", () => {
  const container = document.getElementById("dostanesie-pl-widget");

  if (container) {
    const config = extractConfigFromContainer(container);

    const root = createRoot(container);
    root.render(<App {...config} />);
  }
});
