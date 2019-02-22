<?php
/**
 * @package WP Simple Booking Calendar
 *
 * Copyright (c) 2010 WP Simple Booking Calendar
 */

/**
 * WP Simple Booking Calendar ajax class
 */
class WpSimpleBookingCalendar_Ajax
{
	/**
	 * Constructor
	 */
	public function __construct()
	{
		add_action('wp_ajax_calendarNavigation', array($this, 'calendarNavigation'));
		add_action('wp_ajax_nopriv_calendarNavigation', array($this, 'calendarNavigation'));
	}
	
	/**
	 * Ajax navigation (next/prev month)
	 * @return void
	 */
	public function calendarNavigation()
	{
		$currentTimestamp = strtotime('15' . date('F Y H:i:s'));
		$currentYear = (int) gmdate('Y', $currentTimestamp);
		$currentMonth = (int) gmdate('m', $currentTimestamp);
		
		// Prepare variables
		$inputMonth = filter_input(INPUT_POST, 'month', FILTER_VALIDATE_INT, array('options' => array(
			'default' => $currentMonth,
			'min_range' => 1,
			'max_range' => 12
		)));
		$inputYear = filter_input(INPUT_POST, 'year', FILTER_VALIDATE_INT, array('options' => array(
			'default' => $currentYear,
			'min_range' => 2000,
			'max_range' => $currentYear + 15
		)));
		
        $calendarView = (int) filter_input(INPUT_POST, 'view', FILTER_VALIDATE_INT);
        
		
		$operation = filter_input(INPUT_POST, 'operation', FILTER_SANITIZE_STRING);
        
        if (in_array($operation, array('nextMonth', 'prevMonth')))
		{
			// Additional validation
			if ($operation == 'nextMonth' && $inputMonth == 12 && $inputYear >= $currentYear + 15)
			{
				$inputYear == $currentYear + 14;
			}
			
			$newTimestamp = strtotime(($operation == 'nextMonth' ? '+' : '-') . '1 month',
				gmmktime(1, 1, 1, $inputMonth, 1, $inputYear));
		}
		else
		{
			$newTimestamp = gmmktime(null, null, null, $inputMonth, 1, $inputYear);
		}
		
		// Prepare calendar data
        $enableDropdown = filter_input(INPUT_POST, 'dropdown');
        $weekStart = filter_input(INPUT_POST, 'weekstart');
		$calendarData = filter_input(INPUT_POST, 'calendarData');        
		$calendarId = (int) filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT);
        
        
		if (!empty($calendarData))
		{
			$includeCalendarEditor = true;
		}
		else
		{
			$includeCalendarEditor = false;
			$model = new WpSimpleBookingCalendar_Model();
			$calendar = $model->getCalendarById($calendarId);
			$calendarData = (isset($calendar['calendarJson']) ? $calendar['calendarJson'] : null);
		}
		
		// Disable cache
		header('Cache-Control: no-cache', true);
		header('Pragma: no-cache', true);
		
        $calendarTemplate = 'calendar/calendar';        
        
		// Render calendar
		$view = new WpSimpleBookingCalendar_View();
		$view->setTemplate($calendarTemplate)
			->assign('timestamp', $newTimestamp)
			->assign('calendarId', $calendarId)
			->assign('calendarView', $calendarView)
            ->assign('enableDropdown', $enableDropdown)
            ->assign('weekStart', $weekStart)
			->assign('calendarData', json_decode($calendarData))
			->assign('includeCalendarEditor', $includeCalendarEditor)
			->render();
		
		exit;
	}
}