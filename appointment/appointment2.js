try {
    hj('trigger', 'hj-cro-sticky-form');
} 
catch(e) {}
function initjQuery(callback) {
	var script = document.createElement( "script" )
	script.type = "text/javascript";
	if(script.readyState) {
	script.onreadystatechange = function() {
		if ( script.readyState === "loaded" || script.readyState === "complete" ) {
			script.onreadystatechange = null;
			callback();
		}
	};
  } else {
	script.onload = function() {
		callback();
	};
  }
  script.src = '//code.jquery.com/jquery-3.3.1.min.js';
  document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
	initjQuery(function() {
		readyjQueryinit();
	});
}else{
	readyjQueryinit();
}
function readyjQueryinit(){
	jQuery(function($) {
		var hrf = location.href;
		console.log('Appointment 2 start');
		if(hrf == "https://monashivf.com/resources/free-ivf-nurse-chat/"){
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'load'
			});
			$projectlocation = "https://htmldiz.github.io/appointment/";
			$('body').append('<link rel="stylesheet" href="'+$projectlocation+'css/style2.css" />');
			console.log('Appointment 2 run');
			var sidebar = $('#sidebar').clone();
			var form = $('#form-bottom').clone();
			$('#form-bottom').remove();
			$('#sidebar').remove();
			$('.col-sm-8.inner-content>h3').remove();
			$('.monash-o-btn').remove();
			sidebar.appendTo('.col-sm-8.inner-content');
			form.appendTo('.col-sm-4.sidebar');
			$('body').find('.col-sm-4.sidebar .datepicker').addClass('datepicker-here');
			$('body').find('.col-sm-4.sidebar .datepicker').removeClass('datepicker');
			$('body').on('click', '.col-sm-4.sidebar .ui-datepicker-trigger', function(event) {
				var init_datepicker = false;
				if($(this).data('init_datepicker') !== undefined){
					init_datepicker = $(this).data('init_datepicker');
				}
				if(init_datepicker === false){
					$(this).data('init_datepicker',true);
				}
				event.preventDefault();
			});
			$('body').find('#form-bottom .gfield_label.gfield_label_before_complex').remove();
			$('body').find('#form-bottom .field_description_below:not(.recieved-occ-mail) .gfield_label').remove();
				var clone_btn = $('body').find('#form-bottom [value="Submit"]').clone();
				clone_btn.attr('value','FREE NURSE CHAT');
				clone_btn.attr('onkeypress','');
				clone_btn.attr('onclick','');
				clone_btn.attr('id','');
				clone_btn.insertAfter('#form-bottom [value="Submit"]');
			$('body').find('#form-bottom [value="Submit"]').css('display','none');
			$('body').on('click','.ui-datepicker-trigger', function(){
				$(this).parent().find('input').focus();
			});
			$('body').on('focus','#form-bottom [placeholder="First Name"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'First Name'
				});
			});
			$('body').on('focus','#form-bottom [placeholder="Your Email"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
			});
			$('body').on('focus','#form-bottom [placeholder="Your Email"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Email'
				});
			});
			$('body').on('focus','#form-bottom [placeholder="Last Name"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Sticky Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Last Name'
				});
			});
			$('body').on('click','#form-bottom [value="FREE NURSE CHAT"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Sticky Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Submit'
				});
				$('body').find('#form-bottom [value="Submit"]').trigger('click');
			});
			setInterval(function(){
				if($('body').find('#form-bottom [value="FREE NURSE CHAT"]').length === 0){
					var clone_btn = $('body').find('#form-bottom [value="Submit"]').clone();
					clone_btn.attr('value','FREE NURSE CHAT');
					clone_btn.attr('onkeypress','');
					clone_btn.attr('onclick','');
					clone_btn.insertAfter('#form-bottom [value="Submit"]');
					$('body').find('#form-bottom [value="Submit"]').css('display','none');
				}
			},300);
		}
	});
	jQuery(document).ready(function($) {
			var scriptreappend = jQuery('body').find('iframe[name="gform_ajax_frame_20"]').parent().find('script').html();
			$('body').append('<script>setTimeout(function() {'+scriptreappend+'},300);</script>');
			gformInitDatepicker_int();
	});
}
function gformInitDatepicker_int() {
	jQuery('body').find("#form-bottom .datepicker-here").each(function() {
		jQuery(this).val(jQuery(this).attr('placeholder'));
		jQuery(this).removeClass( "hasDatepicker" );
		var a = jQuery(this);
		var r = Math.floor(Math.random() * (10000 - 1) ) + 1;
			a.attr('id','input_'+r);
			b = a.attr('id'),
			c = {
				yearRange: "-100:+20",
				showOn: "focus",
				dateFormat: "dd/mm/yy",
			};

		// a.hasClass("dmy") ? c.dateFormat = "dd/mm/yy" : a.hasClass("dmy_dash") ? c.dateFormat = "dd-mm-yy" : a.hasClass("dmy_dot") ? c.dateFormat = "dd.mm.yy" : a.hasClass("ymd_slash") ? c.dateFormat = "yy/mm/dd" : a.hasClass("ymd_dash") ? c.dateFormat = "yy-mm-dd" : a.hasClass("ymd_dot") && (c.dateFormat = "yy.mm.dd"), a.hasClass("datepicker_with_icon") && (c.showOn = "both", c.buttonImage = jQuery("#gforms_calendar_icon_" + b).val(), c.buttonImageOnly = !0), b = b.split("_"), c = gform.applyFilters("gform_datepicker_options_pre_init", c, b[1], b[2]);
		c.dateFormat = "dd/mm/yy";
		a.datepicker(c);
	})
}