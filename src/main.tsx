import { createRoot } from "react-dom/client";
import App from "./App";

declare global {
  interface Window {
    initDstplWidget?: (
      container: HTMLElement,
      props?: Record<string, unknown>,
    ) => void;
  }
}

window.initDstplWidget = (container, props = {}) => {
  if (!container) {
    throw new Error("Container element is required for rendering the widget.");
  }

  const root = createRoot(container); // Create a root for React rendering
  root.render(<App {...props} />); // Render the React App with the provided props
};
