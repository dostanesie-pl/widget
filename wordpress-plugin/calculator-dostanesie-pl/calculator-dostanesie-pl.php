<?php
/**
 * Plugin Name:       dostanesie.pl calculator
 * Description:       Place dostanesie.pl calculator on your webpage
 * Version:           1.0.1
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Jakub Różycki
 * Text Domain:       dstpl
 * Domain Path:       /languages
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package           dostanesie-pl
 */

if (!defined("ABSPATH")) {
    exit(); // Exit if accessed directly.
}

// https://developer.wordpress.org/reference/functions/register_block_type/

add_action("init", function () {
    register_block_type(__DIR__ . "/build");

    $script_handle = generate_block_asset_handle(
        "dostanesie-pl/widget",
        "editorScript"
    );

    wp_set_script_translations(
        $script_handle,
        "dstpl",
        plugin_dir_path(__FILE__) . "languages"
    );
});
