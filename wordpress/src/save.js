import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { blockId } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <div
        id={blockId}
        data-disable-animations={!attributes.enableAnimations}
      />

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
