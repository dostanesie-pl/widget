import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { useEffect, useRef } from "react";

// https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
export default function Edit({ attributes, setAttributes, clientId }) {
  const containerRef = useRef(null);

  // set initial block id to use in save function
  useEffect(() => {
    if (!attributes.blockId) {
      setAttributes({ blockId: `dstpl-widget-${clientId}` });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      window.loadDostanesiePlWidget?.(container);
    }

    return () => {
      window.unloadDostanesiePlWidget?.(container);
    };
  }, [attributes]);

  return (
    <>
      <InspectorControls>
        <PanelBody title="Ustawienia">
          <ToggleControl
            __nextHasNoMarginBottom
            checked={attributes.enableAnimations}
            label="Włącz animacje"
            onChange={() =>
              setAttributes({
                enableAnimations: !attributes.enableAnimations,
              })
            }
          />

          <ToggleControl
            __nextHasNoMarginBottom
            checked={attributes.showBranding}
            label="Pokaż logo dostanesie.pl"
            onChange={() =>
              setAttributes({
                showBranding: !attributes.showBranding,
              })
            }
          />

          <ToggleControl
            __nextHasNoMarginBottom
            checked={attributes.debug}
            label="Włącz debugowanie"
            onChange={() =>
              setAttributes({
                debug: !attributes.debug,
              })
            }
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()}>
        <div
          ref={containerRef}
          data-disable-animations={!attributes.enableAnimations}
          data-show-branding={attributes.showBranding}
          data-debug={attributes.debug}
        />
      </div>
    </>
  );
}
