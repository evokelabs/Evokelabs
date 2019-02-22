/*
 * @package WP Simple Booking Calendar
 *
 * Copyright (c) 2010 WP Simple Booking Calendar
 */

jQuery(function($) {
	
    
    $(document).on('click',"#updateCalendarMultiple",function(e){
        e.preventDefault();
        
        var currentTimestamp = $("#batchCurrentTimestamp").val();
        var currentDate = new Date(currentTimestamp * 1000);
       
        
        var startDay = $("#startDay").val();
        var startMonth = $("#startMonth").val();
        var startYear = $("#startYear").val();
        
        var endDay = $("#endDay").val();
        var endMonth = $("#endMonth").val();
        var endYear = $("#endYear").val();
        
        var status = $("#changeStatus").val();


        var startTime = (Date.parse(startDay + " " + startMonth + " " + startYear))/1000;
        var endTime = (Date.parse(endDay + " " + endMonth + " " + endYear))/1000;
        if(startTime < endTime){
            for(i=startTime; i <= endTime; i = i + 60*60*24){
                var changeDate = new Date(i * 1000);
                
                if(changeDate.getMonth() == currentDate.getMonth() && changeDate.getFullYear() == currentDate.getFullYear()){
                    $("select.day"+(changeDate.getDate())).find('option.sbc-status-' + status).attr("selected","selected");
                    $("select.day"+(changeDate.getDate())).parent().parent().find('.sbc-editor-day').removeClass().addClass('sbc-editor-day sbc-status-' + status);
                    $(".sbc-day"+changeDate.getDate()).removeClass().addClass("sbc-day"+changeDate.getDate()+ " sbc-status-" + status);
                }
                
                var currentYear = 'year' + changeDate.getFullYear();
        		var currentMonth = 'month' + (changeDate.getMonth()+1);
        		var currentDay = 'day' + (changeDate.getDate());
        		
        		if (!(currentYear in sbcCalendarData)) {
        			sbcCalendarData[currentYear] = {};
        		}
        		
        		if (!(currentMonth in sbcCalendarData[currentYear])) {
        			sbcCalendarData[currentYear][currentMonth] = {};
        		}
        
                sbcCalendarData[currentYear][currentMonth][currentDay] = status;
            }
        } else {
            alert ("The start time must be lower than the end time.");
        }
        
    })
    
    
	// Delete calendar
	$('.sbc-wrapper a.submitdelete').bind('click', function(event) {
		var $calendarRow = $(this).closest('tr').addClass('error');
		if (!confirm($(this).attr('title'))) {
			$calendarRow.removeClass('error');
			return false;
		}
	});
	
	
	/**
	 * Editor
	 */
	var $editCalendarForm = $('.sbc-wrapper #edit-calendar');
	if ($editCalendarForm.length) {
		sbcCalendarData = JSON.parse(sbcCalendarDataJson);
	}

	function getCurrentMonth() {
		var date = $('.sbc-navigation select[name="sbcdatepicker"]').val().split('/');
		return parseInt(date[0], 10);
	}
	
	function getCurrentYear() {
		var date = $('.sbc-navigation select[name="sbcdatepicker"]').val().split('/');
		return parseInt(date[1], 10);
	}
	
	// Form validation
	$editCalendarForm.validate({
		errorClass: 'error',
		onSubmit: false
	});
	$editCalendarForm.bind('submit', function() {
		$('input[name="calendarData"]', $editCalendarForm).val(JSON.stringify(sbcCalendarData));
		if ($editCalendarForm.valid()) {
			return true;
		}
		return false;
	});
	
	// Status selector
	$(document).on('change', '#sbc-editor select', function() {
		var $this = $(this);
		var statusClass = $this.find('option:selected').attr('class');
		
		// Update editor class
		$this.closest('tr').children('td.sbc-editor-day').attr('class', 'sbc-editor-day ' + statusClass);
		
		// Update calendar class
        
		$('.sbc-wrapper table tbody td.sbc-' + $this.attr('name'))
			.removeClass()
			.addClass('sbc-'+$this.attr('name')+ " " +statusClass);
        
        
		// Update calendar data
		var currentYear = 'year' + getCurrentYear();
		var currentMonth = 'month' + getCurrentMonth();
		var currentDay = $this.attr('name');
		
		if (!(currentYear in sbcCalendarData)) {
			sbcCalendarData[currentYear] = {};
		}
		
		if (!(currentMonth in sbcCalendarData[currentYear])) {
			sbcCalendarData[currentYear][currentMonth] = {};
		}
		
		sbcCalendarData[currentYear][currentMonth][currentDay] = $this.val();
        
        
	});
    $(document).on('change', '#sbc-editor input', function() {
		var $this = $(this);
		var statusClass = $this.find('option:selected').attr('class');
		
		
		// Update calendar data
		var currentYear = 'year' + getCurrentYear();
		var currentMonth = 'month' + getCurrentMonth();
		var currentTitle = $this.attr('name');
		
		if (!(currentYear in sbcCalendarData)) {
			sbcCalendarData[currentYear] = {};
		}
		
		if (!(currentMonth in sbcCalendarData[currentYear])) {
			sbcCalendarData[currentYear][currentMonth] = {};
		}

        sbcCalendarData[currentYear][currentMonth][currentTitle] = $(this).val();
        
	});
	
	
	/**
	 * Editor navigation
	 */
	function ajaxCalendarUpdate(operation) {
		var data = {
			action: 'calendarNavigation',
			operation: operation,
			calendarData: JSON.stringify(sbcCalendarData), 
			month: getCurrentMonth(),
			year: getCurrentYear()
		};
		$('.sbc-calendar-wrapper div.sbc-loader').addClass('sbc-loader-visible');
		$.post(ajaxurl, data, function(response) {
			$('.sbc-calendar-wrapper').html(response);
		});
	}
		
	$($('.sbc-calendar-wrapper')).on('click', 'a.sbc-prev-month, a.sbc-next-month',  function(event) {
		event.preventDefault();
		ajaxCalendarUpdate($(this).is('.sbc-prev-month') ? 'prevMonth' : 'nextMonth');
	});
	
	$(document).on('change', '.sbc-calendar .sbc-navigation select', function() {
		ajaxCalendarUpdate('date');
	});
});