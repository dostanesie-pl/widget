import { registerBlockType } from "@wordpress/blocks";

import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

const icon = (
  <svg
    width="52"
    height="52"
    fill="none"
    viewBox="0 0 52 52"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#fff" d="M0 0h51.3v51.3H0z" />
    <circle cx="25.9" cy="45.7" r="2" fill="#042342" />
    <circle cx="25.9" cy="45.7" r="4.1" stroke="#042342" fill="none" />
    <path
      d="M17.4 18.9a9.3 9.3 0 0 1 8.5-13c5.2-.1 9.3 4 9.3 9.2 0 5.1-4.1 9.3-9.3 9.3v8.3"
      stroke="#042342"
      fill="none"
    />
    <path
      d="M26 17a1.3 1.3 0 1 0 0 2.5V17Zm-3-1.8 1.2.3-1.3-.3Zm-9.4 0a1.3 1.3 0 1 0-2.6 0h2.6Zm-2.6.2a1.3 1.3 0 1 0 2.6 0H11ZM30.2 28 30 27c-.6.1-1 .6-1 1.2h1.3ZM23 24.6a1.3 1.3 0 1 0-2.6 0H23Zm4.7-9.4c0 1-.7 1.7-1.7 1.7v2.6c2.4 0 4.3-2 4.3-4.3h-2.6Zm-3.4.3c.2-.7.4-1.2.7-1.6.3-.3.6-.4 1-.4v-2.6c-1.2 0-2.2.5-2.9 1.3-.7.8-1 1.7-1.3 2.7l2.5.6Zm1.7-2c1 0 1.7.7 1.7 1.7h2.6c0-2.4-1.9-4.3-4.3-4.3v2.6Zm-4.2 1.4c-.6 2.2-1.2 3.7-2 4.6-.7.9-1.5 1.3-2.6 1.3v2.6c1.9 0 3.4-.8 4.6-2.3 1.1-1.3 1.9-3.2 2.5-5.6l-2.5-.6ZM17 20.8c-1 0-1.8-.5-2.4-1.4-.7-1-1.1-2.4-1.1-4.1H11c0 2.1.5 4 1.6 5.6 1 1.5 2.6 2.5 4.5 2.5v-2.6Zm-3.5-5.5v-.1H11h2.6Zm0 0H11h2.6Zm0 0C13.6 8.5 19 3 25.8 3V.5C17.6.5 11 7.1 11 15.3h2.6ZM25.8 3c6.7 0 12.1 5.5 12.1 12.3h2.6C40.5 7.2 34 .5 25.8.5v2.6Zm12.1 12.3c0 5.9-4.2 10.3-8 11.5l.7 2.4c4.8-1.5 10-6.8 10-14h-2.7ZM29 33a3 3 0 0 1-3 3v2.6c3.1 0 5.6-2.5 5.6-5.6H29Zm-3 3a3 3 0 0 1-3-3h-2.6c0 3 2.5 5.6 5.6 5.6V36Zm-3-3v-8.4h-2.6V33H23Zm8.6 0V28H29V33h2.5Z"
      fill="#042342"
    />
  </svg>
);

// https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
registerBlockType(metadata.name, {
  icon: icon,
  attributes: {
    blockId: {
      type: "string",
    },
    enableAnimations: {
      type: "boolean",
      default: true,
    },
    showBranding: {
      type: "boolean",
      default: false,
    },
    debug: {
      type: "boolean",
      default: false,
    },
  },
  category: "widgets",
  title: metadata.title,
  name: metadata.name,
  edit: Edit,
  save: Save,
});
