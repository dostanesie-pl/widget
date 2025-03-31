import { handleLoadWidget } from "@/entrypoints/loader";

// WordPress allows multiple instances of the widget
window.initDstplWidget = (container) => {
  handleLoadWidget(container);
};
