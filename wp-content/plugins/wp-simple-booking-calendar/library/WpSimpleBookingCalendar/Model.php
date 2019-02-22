<?php
/**
 * @package WP Simple Booking Calendar
 *
 * Copyright (c) 2010 WP Simple Booking Calendar
 */

/**
 * WP Simple Booking Calendar model class
 */
class WpSimpleBookingCalendar_Model
{
	/**
	 * The lookup key used to locate the options record in the wp_options table
	 */
	const OPTIONS_KEY = 'wp-simple-booking-calendar-options';
	
	/**
	 * Options array
	 * @var array
	 */
	protected $_options = array();
	
	/**
	 * Performs initializion of the options structure
	 */
	public function __construct()
	{
		$options = get_option(self::OPTIONS_KEY);
		
		if (false === $options)
		{
			$options = array();
		}
		
		$this->_options = $options;
	}
	
	/**
	 * Updates the option identified by $name with the value provided in $value
	 * @param string $name The option name
	 * @param mixed $value The option value
	 * @return WpSimpleBookingCalendar_Model
	 */
	public function setOption($name, $value)
	{
		$this->_options[$name] = $value;
		return $this;
	}
	
	/**
	 * Returns a value of the option identified by $name
	 * @param string $name The option name
	 * @return mixed|null
	 */
	public function getOption($name)
	{
		$value = array_key_exists($name, $this->_options) ? $this->_options[$name] : null;
		return $value;
	}
	
	/**
	 * Saves the internal options data to the wp_options table
	 * @return boolean
	 */
	public function save()
	{
		return update_option(self::OPTIONS_KEY, $this->_options);
	}
	
	/**
	 * Returns the list of all calendars
	 * @return array
	 */
	public function getCalendarsList()
	{
		$calendarsList = $this->getOption('calendars');
		return (is_array($calendarsList) ? $calendarsList : array());
	}
	
	/**
	 * Returns the list of calendars with ids as keys and names as values
	 * @return array
	 */
	public function getCalendarsIdsAndNames()
	{
		$calendarsList = $this->getCalendarsList();
		$result = array();
		foreach ($calendarsList as $calendarId => $calendarData)
		{
			if ($calendarData !== null)
			{
				$result[$calendarId] = $calendarData['calendarName'];
			}
		}
		return $result;
	}
	
	/**
	 * Manages the list of calendars
	 * @param mixed $data
	 * @param integer $calendarId
	 * @return boolean
	 */
	public function _updateCalendarById($data, $calendarId)
	{
		$calendarsList = $this->getCalendarsList();
		
		if (count($calendarsList) == 0)
		{
			$calendarsList[1] = $data;
		}
		elseif ($calendarId === null)
		{
			$calendarsList[] = $data;
		}
		else
		{
			$calendarsList[$calendarId] = $data;
		}
		
		return $this->setOption('calendars', $calendarsList)->save();
	}
	
	/**
	 * Return calendar data
	 * @param integer $calendarId
	 * @return mixed
	 */
	public function getCalendarById($calendarId)
	{
		$calendarsList = $this->getCalendarsList();
		return (array_key_exists($calendarId, $calendarsList) ? $calendarsList[$calendarId] : null);
	}
	
	/**
	 * Insert new calendar
	 * @param array $data
	 * @return boolean
	 */
	public function insertCalendar($data)
	{
		$newCalendar = array(
			'calendarName' => $data['calendarName'],
			'calendarJson' => $data['calendarJson'],
			'dateCreated' => time(),
			'dateModified' => time()
		);
		
		return $this->_updateCalendarById($newCalendar, null);
	}
	
	/**
	 * Update calendar
	 * @param array $data
	 * @param integer $calendarId
	 * @return boolean
	 */
	public function updatedCalendar($data, $calendarId)
	{
		$oldCalendar = $this->getCalendarById($calendarId);
		
		$updatedCalendar = array(
			'calendarName' => $data['calendarName'],
			'calendarJson' => $data['calendarJson'],
			'dateModified' => time()
		);
		
		return $this->_updateCalendarById(array_merge($oldCalendar, $updatedCalendar), $calendarId);
	}
	
	/**
	 * Delete calendar
	 * @param integer $calendarId
	 * @return void
	 */
	public function deleteCalendar($calendarId)
	{
		return $this->_updateCalendarById(null, $calendarId);
	}
}