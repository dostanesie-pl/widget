<?php
// Check if WP_DEBUG is enabled or if debug attribute is set to true
$debug_enabled =
    (defined("WP_DEBUG") && WP_DEBUG) ||
    (isset($attributes["debug"]) && $attributes["debug"] === true);

if ($debug_enabled) {
    // Replace data-debug="false" with data-debug="true"
    $content = str_replace('data-debug="false"', 'data-debug="true"', $content);
}

// not using wp_kses_post() because we need to trigger <script> and initialize widget
echo $content;
