import { useBlockProps } from "@wordpress/block-editor";

export default function Save() {
  return (
    <div {...useBlockProps.save()}>
      <div id="dostanesie-pl-widget"></div>
    </div>
  );
}
