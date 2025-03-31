<?php
/**
 * Plugin Name:       dostanesie.pl widget
 * Description:       Widget kalkulatora dostanesie.pl
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Jakub Różycki
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
});
