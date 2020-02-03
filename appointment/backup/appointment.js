try {
    hj('trigger', 'hj-cro-optimize-conversion-form');
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
		console.log('Appointment 1 start');
		if(!/\/doctor\//.test(hrf)){
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Optimize Conversion Form',
				'gtm-cro-event-action': 'load'
			});
			$projectlocation = "https://democourse.how-to-learn.ru/certificate/";
			$('body').append('<link rel="stylesheet" href="'+$projectlocation+'css/style.css" />');
			if($('#appointment').length>0){
				$('#appointment form').prepend('<h3>Our friendly nurse will contact you to help choose most suitable clinic and doctor to address your specific need.</h3>');
				$('#appointment .clinic-locations-form').css('display','none');
				$('#appointment .doctors-lists').css('display','none');
				$('#appointment .short-field').css('display','none');
				$('#appointment .datepicker_with_icon.hasDatepicker').val('21/12/2112');
				$('#appointment [value="Submit"]').css('display','none');
				window.form_id = $('#appointment [value="Submit"]').attr('id');
				$('#appointment [value="Submit"]').clone().attr('onclick','').attr('style','').attr('id','').attr('value','Book an Appointment').attr('type','button').attr('onkeypress','').addClass('appointment-submit').insertAfter('#appointment [value="Submit"]');
			}
			$('body').on('click', '#appointment .appointment-submit', function(event) {
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Optimize Conversion Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Submit'
				});
				var firstname = validate_name($('#appointment [placeholder="First Name"]').get(0));
				var lastname  = validate_name($('#appointment [placeholder="Last Name"]').get(0));
				var Email     = validateEmail($('#appointment [type="email"]').get(0),true);
				var Phone     = validatePhone($('#appointment [placeholder="Your Phone"]').get(0));
				if(!Phone){
					$('#appointment [placeholder="Your Phone"]').focus();
				}
				if(!Email){
					$('#appointment [type="email"]').focus();
				}
				if(!lastname){
					$('#appointment [placeholder="Last Name"]').focus();
				}
				if(!firstname){
					$('#appointment [placeholder="First Name"]').focus();
				}
				if(firstname == true && lastname == true && Email == true && Phone == true ){
					$('#'+window.form_id).trigger('click');
				}
				event.preventDefault();
			});
			$('body').on('blur', '#appointment [placeholder="Last Name"]', function(event) {
				validate_name(this);
				event.preventDefault();
			});
			$('body').on('focus', '#appointment [placeholder="Last Name"]', function(event) {
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Optimize Conversion Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Last Name'
				});
				$(this).attr('autocomplete','nope');
			    $(this).parent().removeClass("error-fuildenter");
				$(this).parent().removeClass("success-fuildenter");
			    $(this).removeClass("error");
			    $(this).parent().find('.error_text').remove();
				event.preventDefault();
			});
			$('body').on('blur', '#appointment [placeholder="First Name"]', function(event) {
				validate_name(this);
				event.preventDefault();
			});
			$('body').on('focus', '#appointment [placeholder="First Name"]', function(event) {
				$(this).attr('autocomplete','nope');
			    $(this).parent().removeClass("error-fuildenter");
				$(this).parent().removeClass("success-fuildenter");
			    $(this).removeClass("error");
			    $(this).parent().find('.error_text').remove();
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Optimize Conversion Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'First Name'
				});
				event.preventDefault();
			});
			function validate_name(input){
				var val = $(input).val();
		        var pattern = (!val || /[0-9]/.test(val));
			    if( pattern ){
				    $(input).parent().addClass("error-fuildenter");
				    $(input).parent().removeClass("success-fuildenter");
				    $(input).addClass("error");
					$(input).before("<span class='error_text not_empty'>This field is required.</span>");
					return false;
			    }else{
				    $(input).parent().removeClass("error-fuildenter");
				    $(input).removeClass("error");
				    $(input).parent().addClass("success-fuildenter");
				    return true;
			    }
			}
			$('body').on('focus', '#appointment .fuild-full-name', function(event) {
				$(this).attr('autocomplete','nope');
			    $(this).parent().removeClass("error-fuildenter");
				$(this).parent().removeClass("success-fuildenter");
			    $(this).removeClass("error");
			    $(this).parent().find('.error_text').remove();
				event.preventDefault();
			});
			$('body').on('focus', '#appointment [type="email"]', function(event) {
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Optimize Conversion Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Email'
				});
				$(this).attr('autocomplete','nope');
			    $(this).parent().removeClass("error-fuildenter");
				$(this).parent().removeClass("success-fuildenter");
			    $(this).removeClass("error");
				$(this).removeClass("not_empty");
			    $(this).parent().find('.error_text').remove();
				event.preventDefault();
			});
			$('body').on('blur', '#appointment [type="email"]', function(event) {
				var val = $(this).val();
				validateEmail(this,true);
				event.preventDefault();
			});
			$('body').on('blur', '#appointment [placeholder="Your Phone"]', function(event) {
				$(this).attr('autocomplete','nope');
				var val = $(this).val();
				validatePhone(this);
				event.preventDefault();
			});
			$('body').on('focus', '#appointment [placeholder="Your Phone"]', function(event) {
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Optimize Conversion Form',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Your Phone'
				});
				$(this).parent().find('.error_text').remove();
			    $(this).parent().removeClass("error-fuildenter");
				$(this).parent().removeClass("success-fuildenter");
			    $(this).removeClass("error");
				$(this).removeClass("not_empty");
				event.preventDefault();
			});
			function validatePhone(input){
				$(input).parent().find('.error_text').remove();
				var val = $(input).val();
				$(input).parent().removeClass("error-fuildenter");
			    $(input).removeClass("error");
			    $(input).removeClass("success-fuildenter");
		        var pattern = (!val || /[A-z]/.test($(input).val()) || /^\s*$/.test($(input).val()));
			    if( pattern ){
				    $(input).parent().addClass("error-fuildenter");
				    $(input).parent().removeClass("success-fuildenter");
				    $(input).addClass("error");
					$(input).before("<span class='error_text not_empty'>This field is required.</span>");
					return false;
				}else{
				    $(input).parent().removeClass("error-fuildenter");
				    $(input).removeClass("error");
				    $(input).parent().addClass("success-fuildenter");
					return true;
				}
			}
			function validateEmail(input,empty){
				$(input).parent().find('.error_text').remove();
				$(input).removeClass("error");
				var val = $(input).val();
				$(input).removeClass("not_empty");
				var incorrects = false;
				if($(input).val() != '') {
			        var pattern = /^([a-z0-9_\.\+-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				    if(pattern.test($(input).val())){
					    $(input).parent().removeClass("error-fuildenter");
					    $(input).removeClass("error");
				        $(input).parent().addClass("success-fuildenter");
				        return true;
				    } else {
				    	incorrects = true;
				    }
				    if(incorrects === true){
				        $(input).before("<span class='error_text not_empty'>Please enter a valid email address.</span>");
				        $(input).addClass("not_empty");
				        $(input).addClass("error");
				        $(input).parent().addClass("error-fuildenter");
				        return false;
				    }
				}else{
					if(empty){
				        $(input).before("<span class='error_text'>This field is required.</span>");
				        $(input).addClass("error");
				        $(input).parent().addClass("error-fuildenter");
				        return false;
					}
				}
				return true;
			}
		}
	});
}