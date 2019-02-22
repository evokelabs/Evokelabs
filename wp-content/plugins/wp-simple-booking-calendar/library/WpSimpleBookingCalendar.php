<?php
/**
 * @package WP Simple Booking Calendar
 *
 * Copyright (c) 2010 WP Simple Booking Calendar
 */

/**
 * WP Simple Booking Calendar
 */
class WpSimpleBookingCalendar
{
	/**
	 * Plugin initialization
	 * @return void
	 */
	public static function init()
	{
		// Backend hooks and action callbacks
		if (is_admin())
		{
			add_action('admin_menu', create_function('', 'new WpSimpleBookingCalendar_Controller();'));
		}
		else
		{
            function wp_enqueue_script_style(){
                wp_enqueue_style('sbc', SBC_DIR_URL . 'css/sbc.css');
                wp_enqueue_script('sbc', SBC_DIR_URL . 'js/sbc.js', array('jquery'));
            }
            add_action('init', 'wp_enqueue_script_style');
            
            function wp_admin_ajax_url(){
                echo '<script type="text/javascript">var admin_ajax_url = "'.get_bloginfo('wpurl').'/wp-admin/admin-ajax.php";</script>';
            }
            add_action( 'wp_head', 'wp_admin_ajax_url' );
		}
		
		// Register shortcode
        
		add_action('init', create_function('', 'new WpSimpleBookingCalendar_Shortcode();'));
		
		// Register AJAX actions
		add_action('init', create_function('', 'new WpSimpleBookingCalendar_Ajax();'));
		
		// Register widget
		add_action('widgets_init', create_function('', 'return register_widget("WpSimpleBookingCalendar_Widget");'));
	}
}