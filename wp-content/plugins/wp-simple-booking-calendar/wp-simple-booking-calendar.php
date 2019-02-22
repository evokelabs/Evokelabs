<?php
/**
 * Plugin Name: WP Simple Booking Calendar
 * Plugin URI:  http://www.wpsimplebookingcalendar.com
 * Description: WP Simple Booking Calendar.
 * Version:     4.4
 * Author:      WP Simple Booking Calendar
 * Author URI:  http://www.wpsimplebookingcalendar.com
 *
 * Copyright (c) 2013 WP Simple Booking Calendar
 */
// Translation
load_plugin_textdomain('sbc', false, dirname(plugin_basename(__FILE__)) . '/languages/');

// Initialization
define('SBC_DIR_URL', plugin_dir_url(__FILE__));

require_once 'library/WpSimpleBookingCalendar/Exception.php';
require_once 'library/WpSimpleBookingCalendar/Model.php';
require_once 'library/WpSimpleBookingCalendar/View.php';
require_once 'library/WpSimpleBookingCalendar/Controller.php';
require_once 'library/WpSimpleBookingCalendar/Shortcode.php';
require_once 'library/WpSimpleBookingCalendar/Widget.php';
require_once 'library/WpSimpleBookingCalendar/Ajax.php';
require_once 'library/WpSimpleBookingCalendar.php';

WpSimpleBookingCalendar::init();