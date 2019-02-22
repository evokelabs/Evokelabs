<?php
/**
 * @package WP Simple Booking Calendar
 *
 * Copyright (c) 2010 WP Simple Booking Calendar
 */

/**
 * WP Simple Booking Calendar shortcode class
 */
class WpSimpleBookingCalendar_Shortcode
{
	/**
	 * Constructor
	 */
	public function __construct()
	{
		if (is_admin())
		{
			add_action('admin_menu', array($this, 'registerMetabox'));
		}
		else
		{
			add_shortcode('sbc', array($this, 'processShortcode'));
		}
	}
	
	/**
	 * Shortcode constructor metabox & scripts
	 * @return void
	 */
	public function registerMetabox()
	{
		// Metabox
		add_meta_box('sbc-metabox', __('Generate WP Simple Booking Calendar Token', 'sbc'), array($this, 'renderMetabox'), 'post', 'normal', 'high');
		add_meta_box('sbc-metabox', __('Generate WP Simple Booking Calendar Token', 'sbc'), array($this, 'renderMetabox'), 'page', 'normal', 'high');
        
        //Fix to add shortcode to custom post types
        $customPostTypes = get_post_types( array('_builtin' => false) );
        foreach($customPostTypes as $customPostType):
            add_meta_box('sbc-metabox', __('Generate WP Simple Booking Calendar Token', 'sbc'), array($this, 'renderMetabox'), $customPostType, 'normal', 'high');
        endforeach;
		
		// Scripts & styles
		add_action('admin_print_scripts', array($this, 'enqueueMetaboxScripts'));
		add_action('admin_print_styles', array($this, 'enqueueMetaboxStyles'));
	}
	
	/**
	 * Enqueues admin scripts
	 * @return void
	 */
	public function enqueueMetaboxScripts()
	{
		if (!empty($GLOBALS['editing']))
		{
			wp_enqueue_script('sbc-shortcode', SBC_DIR_URL . 'js/sbc-shortcode.js', array('jquery'));
		}
	}
	
	/**
	 * Enqueues admin styles
	 * @return void
	 */
	public function enqueueMetaboxStyles()
	{
		if (!empty($GLOBALS['editing']))
		{
			wp_enqueue_style('sbc-shortcode', SBC_DIR_URL . 'css/sbc-shortcode.css');
		}
	}
	
	/**
	 * Renders shortcode metabox
	 * @return void
	 */
	public function renderMetabox()
	{
		$model = new WpSimpleBookingCalendar_Model();
		$view = new WpSimpleBookingCalendar_View();
		$view->setTemplate('shortcode/metabox')
			->assign('calendarsList', $model->getCalendarsIdsAndNames())
			->render();
	}
	
	/**
	 * Validates the [sbc] shortcode parameters
	 * @param array $atts User defined attributes in shortcode tag
	 * @return array
	 */
	public static function validateAttributes($atts)
	{
		$atts = (array) $atts;
		
		// Validate booleans
		$booleans = array('legend',	'title');
		foreach ($booleans as $key)
		{
			if (isset($atts[$key]))
			{
				// Replace string values: Yes = true, No = false
				if (is_bool($atts[$key]) !== true)
				{
					$value = (strcasecmp($atts[$key], 'yes') == 0 || $atts[$key] == '1');
				}
				else
				{
					$value = $atts[$key];
				}
				
				$atts[$key] = $value;
			}
		}
		
		// Process attributes
		$defaults = array('id' => null, 'legend' => true, 'title' => true, 'view' => 1, 'dropdown' => 1, 'weekstart' => 1);
		return shortcode_atts($defaults, $atts);
	}
	
	/**
	 * Processes the [sbc] shortcode
	 * @param array $atts User defined attributes in shortcode tag
	 * @param string $content
	 * @return string Processed shortcode string
	 */
	public function processShortcode($atts, $content = '')
	{
	  
        $content = wpautop(trim($content));
		$values = $this->validateAttributes($atts);
		$model = new WpSimpleBookingCalendar_Model();
		$view = new WpSimpleBookingCalendar_View();
		return $view->setTemplate('shortcode/sbc')
			->assign('showLegend', $values['legend'])
			->assign('showTitle', $values['title'])
			->assign('calendarId', $values['id'])
            ->assign('calendarView', $values['view'])            
            ->assign('enableDropdown', $values['dropdown'])
            ->assign('weekStart', $values['weekstart'])
			->assign('calendar', $model->getCalendarById($values['id']))
			->fetch();
	}
}