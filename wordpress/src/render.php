<?php

$block_id = wp_json_encode($attributes["blockId"]);
$disable_animations = wp_json_encode(!$attributes["enableAnimations"]);
$show_branding = wp_json_encode($attributes["showBranding"]);

$debug_enabled =
    (defined("WP_DEBUG") && WP_DEBUG) ||
    (isset($attributes["debug"]) && $attributes["debug"] === true);
$debug_enabled = wp_json_encode($debug_enabled);

$div_content =
    '
<div
  id=' .
    $block_id .
    '
  data-disable-animations="' .
    $disable_animations .
    '"
  data-show-branding="' .
    $show_branding .
    '"
  data-debug="' .
    $debug_enabled .
    '"
></div>
';

$script_content =
    '
<script>
    window.addEventListener("load", () => {
      const container = document.getElementById(' .
    $block_id .
    ');
      if (container) {
        window.loadDostanesiePlWidget?.(container);
      }
    });
</script>
';

echo $div_content . "\n" . $script_content;
