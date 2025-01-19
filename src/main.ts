import { render, h } from 'preact';
import App from './App';

declare global {
  interface Window {
    initDstplWidget?: (container: HTMLElement, props?: Record<string, unknown>) => void;
  }
}

window.initDstplWidget = (container, props = {}) => {
  render(h(App, props), container);
};
