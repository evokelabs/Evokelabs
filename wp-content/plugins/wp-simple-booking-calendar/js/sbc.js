/*
 * @package WP Simple Booking Calendar
 *
 * Copyright (c) 2010 WP Simple Booking Calendar
 */

jQuery.browser = {}
;(function () {
  jQuery.browser.msie = false
  jQuery.browser.version = 0
  if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
    jQuery.browser.msie = true
    jQuery.browser.version = RegExp.$1
  }
})()

jQuery(function ($) {
  $('div.sbc-calendar-wrapper').each(function () {
    var $calendar = $(this)

    function getCurrentMonth() {
      var date = $('.sbc-navigation select[name="sbcdatepicker"]', $calendar)
        .val()
        .split('/')
      return parseInt(date[0], 10)
    }

    function getCurrentYear() {
      var date = $('.sbc-navigation select[name="sbcdatepicker"]', $calendar)
        .val()
        .split('/')
      return parseInt(date[1], 10)
    }

    function ajaxCalendarUpdate(operation) {
      var ajaxUrl = $('form', $calendar).attr('action')
      var data = {
        action: 'calendarNavigation',
        operation: operation,
        month: getCurrentMonth(),
        year: getCurrentYear(),
        id: $('form input[name="sbcId"]', $calendar).val(),
        view: $('form input[name="view"]', $calendar).val(),
        dropdown: $('form input[name="dropdown"]', $calendar).val(),
        weekstart: $('form input[name="weekstart"]', $calendar).val()
      }
      $('div.sbc-loader', $calendar).addClass('sbc-loader-visible')
      $.post(admin_ajax_url, data, function (response) {
        $calendar.find('.sbc-calendar').replaceWith(response)
        /*   maxHeight = 0;
                $('#sbc-calendar').find('.sbc-calendar-month table').each(function(i, e) {
                    if (e.offsetHeight > maxHeight) {
                        maxHeight = e.offsetHeight;
                    }
                });
               $('#sbc-calendar').find('.sbc-calendar-month table').each(function(i, e) {
                    maxHeight += 2;
                    e.style.height = maxHeight + 'px';
                }); */
        $('.sbc-navigation select', $calendar).bind('change', changeMonthOrYear)
      })
    }

    // Prev/next month
    $($calendar).on(
      'click',
      'a.sbc-prev-month, a.sbc-next-month',
      function (event) {
        event.preventDefault()
        ajaxCalendarUpdate(
          $(this).is('.sbc-prev-month') ? 'prevMonth' : 'nextMonth'
        )
      }
    )

    // Custom month/year
    function changeMonthOrYear() {
      ajaxCalendarUpdate('date')
    }
    $('.sbc-navigation select', $calendar).bind('change', changeMonthOrYear)
  })
})
