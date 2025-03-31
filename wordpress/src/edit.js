import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
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
    if (containerRef.current) {
      window.initDstplWidget?.(containerRef.current, {});
    }
  }, []);

  return (
    <>
      <InspectorControls>
        <PanelBody title="Ustawienia"></PanelBody>
      </InspectorControls>

      <div {...useBlockProps()}>
        <div ref={containerRef}></div>
      </div>
    </>
  );
}
