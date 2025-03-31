import { Root } from "react-dom/client";
import { handleLoadWidget } from "./loader";

let root: Root | null = null;

// automatically load the widget when the page is loaded
window.addEventListener("load", () => {
  const container = document.getElementById("dostanesie-pl-widget");
  if (container) {
    // unmount to avoid multiple instances of the widget
    if (root) {
      root.unmount();
    }

    root = handleLoadWidget(container);
  } else {
    console.warn("#dostanesie-pl-widget container not found");
  }
});

// automatically unload the widget when the page is unloaded
window.addEventListener("beforeunload", () => {
  if (root) {
    root.unmount();
    root = null;
  }
});
