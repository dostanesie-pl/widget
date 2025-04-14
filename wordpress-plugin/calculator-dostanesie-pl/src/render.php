<?php
if (!defined("ABSPATH")) {
    exit(); // Exit if accessed directly.
}

$block_id = esc_attr($attributes["blockId"]);
$disable_animations = $attributes["enableAnimations"] ? "false" : "true";
$show_branding = $attributes["showBranding"] ? "true" : "false";

$debug_enabled =
    (defined("WP_DEBUG") && WP_DEBUG) ||
    (isset($attributes["debug"]) && $attributes["debug"] === true);
$debug_enabled = $debug_enabled ? "true" : "false";
?>

<div
  id="<?php echo esc_attr($block_id); ?>"
  data-disable-animations="<?php echo esc_attr($disable_animations); ?>"
  data-show-branding="<?php echo esc_attr($show_branding); ?>"
  data-debug="<?php echo esc_attr($debug_enabled); ?>"
></div>
