import { extractConfigFromContainer } from "@/features/config/utils/extractConfigFromContainer";
import { createRoot, Root } from "react-dom/client";
import App from "./App";

let root: Root | null = null;

const handleLoadWidget = (container: HTMLElement | null) => {
  if (container) {
    const config = extractConfigFromContainer(container);

    // If an instance already exists, unmount it before re-rendering
    if (root) {
      handleUnloadWidget();
    }

    root = createRoot(container);
    root.render(<App {...config} />);
  } else {
    console.warn("#dostanesie-pl-widget container not found");
  }
};

const handleUnloadWidget = () => {
  if (root) {
    root.unmount();
    root = null;
  }
};

// automatically load the widget when the page is loaded
window.addEventListener("load", () => {
  const container = document.getElementById("dostanesie-pl-widget");
  handleLoadWidget(container);
});

// automatically unload the widget when the page is unloaded
window.addEventListener("beforeunload", handleUnloadWidget);

// you can use this function to load the widget manually
// currently it's used by WordPress plugin in block editor view
window.initDstplWidget = (container) => {
  handleLoadWidget(container);
};
