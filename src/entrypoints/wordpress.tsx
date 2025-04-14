import { handleLoadWidget } from "@/entrypoints/loader";
import { Root } from "react-dom/client";

type ContainerId = string;
const mountedContainers = new Map<ContainerId, Root>();

// WordPress allows multiple instances of the widget
window.loadDostanesiePlWidget = (container) => {
  const containerId = container.getAttribute("id");
  const root = handleLoadWidget(container);

  // unmount to avoid multiple instances of the widget coming from the same container
  if (containerId) {
    const mountedContainer = mountedContainers.get(containerId);
    mountedContainer?.unmount();
    mountedContainers.set(containerId, root);
  }
};

window.unloadDostanesiePlWidget = (container) => {
  const containerId = container.getAttribute("id");

  if (!containerId) {
    return;
  }

  const mountedContainer = mountedContainers.get(containerId);
  mountedContainer?.unmount();
  mountedContainers.delete(containerId);
};

window.addEventListener("load", () => {
  const regex = /^dstpl-widget-.*$/;
  const widgetContainers = Array.from(document.querySelectorAll("div")).filter(
    (div) => regex.test(div.id),
  );

  widgetContainers.forEach((container) => {
    const containerId = container.getAttribute("id");
    const root = handleLoadWidget(container);

    if (!containerId) {
      console.error("Container ID not found");
      return;
    }

    const mountedContainer = mountedContainers.get(containerId);
    mountedContainer?.unmount();
    mountedContainers.set(containerId, root);
  });
});
