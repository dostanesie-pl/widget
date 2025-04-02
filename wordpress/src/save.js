import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { blockId, enableAnimations, showBranding, debug } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <div
        id={blockId}
        data-disable-animations={!enableAnimations}
        data-show-branding={showBranding}
        data-debug={debug}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener("load", () => {
              const container = document.getElementById("${blockId}");
              if (container) {
                window.loadDostanesiePlWidget?.(container);
              }
            });
        `,
        }}
      />
    </div>
  );
}
