import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  // Generate a random id string.
  const { blockId } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <div id={blockId}></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener("load", () => {
              const container = document.getElementById("${blockId}");
              if (container) {
                window.initDstplWidget?.(container);
              }
            });
        `,
        }}
      />
    </div>
  );
}
