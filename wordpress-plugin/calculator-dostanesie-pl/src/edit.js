import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect, useRef } from "react";

// https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
export default function Edit({ attributes, setAttributes, clientId }) {
  const containerRef = useRef(null);

  // set initial block id to use in save function
  useEffect(() => {
    if (!attributes.blockId) {
      setAttributes({ blockId: `dstpl-widget-${clientId}` });
    }

    if (!("enableAnimations" in attributes)) {
      setAttributes({ enableAnimations: true });
    }

    if (!("showBranding" in attributes)) {
      setAttributes({ showBranding: false });
    }

    if (!("debug" in attributes)) {
      setAttributes({ debug: false });
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
            label={__("Enable animations", "dstpl")}
            onChange={() =>
              setAttributes({
                enableAnimations: !attributes.enableAnimations,
              })
            }
          />

          <ToggleControl
            __nextHasNoMarginBottom
            checked={attributes.showBranding}
            label={__("Show dostanesie.pl logo", "dstpl")}
            onChange={() =>
              setAttributes({
                showBranding: !attributes.showBranding,
              })
            }
          />

          <ToggleControl
            __nextHasNoMarginBottom
            checked={attributes.debug}
            label={__("Enable debugging", "dstpl")}
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
