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
var hrf = location.protocol+'//'+location.host+location.pathname;
function readyjQueryinit(){
	jQuery(function($) {
		var hrf = location.protocol+'//'+location.host+location.pathname;
		$projectlocation = "https://htmldiz.github.io/appointment/";
		if(hrf == "https://monashivf.com/"){
    var newBanner = '<section id="banner-alternative"> <div class="banner-alternative__container"> <div class="banner-alternative__banner-text"> <h2>Monash IVF Victoria</h2> <p id="js-li-location"></p><ul> <li>Monash IVF was responsible for the world&rsquo;s first IVF pregnancy</li><li>We&rsquo;ve helped over 35,000 couples fall pregnant</li><li>A Monash IVF baby is born every 2.5 hours</li></ul><a class="banner-alternative__btn" href="https://monashivf.com/resources/free-ivf-nurse-chat/" id="cta-button-cro-exp">Book Your Free Nurse Call</a> </div><div class="monash-girl"></div></div></section>';
    if ($('#banner').length) {
      $('#banner').replaceWith(newBanner);
    }
    var yourLocation = $('.au-states .state-dropdown').text().trim();
    var listOfLocations = ['Your Location: Victoria','Your Location: New South Wales','Your Location: Queensland','Your Location: Tasmania','Your Location: South Australia','Your Location: Western Australia','Your Location: Northern Territory'];
    var listOfParagraphs = ['Accessing IVF treatment has been easier with 48 locations all over <a href="https://monashivf.com/ivf-clinic-melbourne/">Melbourne</a> and Victoria.',
        'Located in <a href="https://monashivf.com/clinic/ivf-bondi-junction/">Bondi Junction</a>, <a href="https://monashivf.com/clinic/ivf-campbelltown-2/">Campbelltown</a>,&nbsp;<a href="https://monashivf.com/clinic/ivf-mosman/">Mosman</a>,&nbsp;<a href="https://monashivf.com/clinic/ivf-parramatta/">Parramatta</a>&nbsp;and <a href="http://monashivf.com/clinic/ivf-penrith/">Penrith</a>.',
        'Located in <a href="https://monashivf.com/ivf-clinic-brisbane/">Brisbane</a>, <a href="https://monashivf.com/clinic/gold-coast/">Gold Coast</a>,<br> <a href="https://monashivf.com/clinic/ivf-rockhampton/">Rockhampton</a> and <a href="https://monashivf.com/clinic/townsville/">Townsville</a>.',
        'Monash IVF Tasmania is delivered through it’s sister clinic&nbsp;<a target="_blank" href="http://fertilitytasmania.com.au/" rel="noopener noreferrer">Fertility Tasmania</a>.',
        'Monash IVF’s sister clinic in South Australia is <a target="_blank" href="http://repromed.com.au/" rel="noopener noreferrer">Repromed IVF Adelaide</a>.',
        'Many of our <a href="http://monashivf.com/fertility-specialists/">leading doctors</a> undertake remote consulting and skype appointments.',
        'Monash IVF’s sister clinic in Northern Territory is <a target="_blank" href="http://repromed.com.au/" rel="noopener noreferrer">Repromed&nbsp;IVF Darwin.</a>'];
    $('#js-li-location').html(listOfParagraphs[listOfLocations.indexOf(yourLocation)]);
    $("<style type='text/css'>section#banner-alternative{min-height:570px;background:url(https://monashivf.com/assets/uploads/2017/01/new_banner_large.jpg) 47% 100% no-repeat #d7d7d7;background-size:cover;position:relative}.banner-alternative__container{max-width:1230px;width:100%;position:relative;margin:0 auto;padding:0 15px;overflow:hidden}.banner-alternative__banner-text{color:#363636;line-height:28px;padding:100px 0 0;font-family:'Open Sans',sans-serif}.banner-alternative__banner-text h2{font-weight:300;font-size:48px;line-height:1.2;margin:0 0 20px;padding:0}.banner-alternative__banner-text p{font-size:23px;line-height:1.2;margin:0 0 9px;padding:0;font-weight:300;max-width:600px}.banner-alternative__banner-text p.p-small{font-size:16px;font-weight:500;margin:23px 0 6px;letter-spacing:.3px}.banner-alternative__banner-text ul{margin:23px 0 64px 22px;padding:0}.banner-alternative__banner-text li{font-size:20px;font-weight:400;line-height:1;margin:11px 0 0;padding:0 0 0 5px;width:100%;letter-spacing:.01px;max-width:600px}.banner-alternative__banner-text li a{text-decoration:none;color:#08a0f4}.banner-alternative__banner-text li a:hover{text-decoration:underline}.banner-alternative__btn,.banner-alternative__btn:active,.banner-alternative__btn:hover,.banner-alternative__btn:visited{background:#00a7f1;border-radius:26px;text-decoration:none;transition:all .3s ease;color:#fff;font-size:18px;font-weight:400;line-height:1.2;display:inline-block;padding:14px 40px;margin:0;border:2px solid #fff}.banner-alternative__btn:hover{background:#ffac66}@media screen and (max-width:768px){.banner-alternative__container{padding:0}section#banner-alternative{min-height:370px;display:flex;align-items:center;justify-content:center;margin-top:59px;background:url(https://monashivf.com/assets/uploads/2017/01/new_banner_large.jpg) 50% 100% no-repeat #d7d7d7;background-size:cover}.banner-alternative__banner-text{padding:25px 20% 25px 25px}.banner-alternative__banner-text h2{font-size:25px;line-height:26px}.banner-alternative__banner-text li,.banner-alternative__banner-text p,.banner-alternative__banner-text p.p-small{font-size:12px;line-height:17px}.banner-alternative__banner-text p{font-size:14px;max-width:300px}.banner-alternative__banner-text ul{margin:20px 0 20px 15px}.banner-alternative__banner-text li{padding:0;max-width:300px}.banner-alternative__banner-text li span{display:block}.banner-alternative__btn,.banner-alternative__btn:active,.banner-alternative__btn:hover,.banner-alternative__btn:visited{font-size:12px;padding:5px 20px;height:auto;line-height:26px;letter-spacing:1.5px;width:230px}div#intercom-container{display:none}#nsw-promo,.address-mobile,div#cta-sticky{display:none!important;animation:fadein .3s ease}@keyframes fadein{from{opacity:0}to{opacity:1}}}</style>").appendTo('head');
		}
		if(hrf == "https://monashivf.com/resources/free-ivf-nurse-chat/"){
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'load'
			});
			$('body').append('<style>section.main-content>.container>.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.col-sm-4.sidebar{padding-top:20px}#form-bottom label[for="input_20_35"],#form-bottom label[for="input_20_10"],#form-bottom label[for="input_20_36"],#form-bottom label[for="input_20_4"]{display:none!important}#form-bottom .gform_body ul#gform_fields_20 li.complex-field-form label.gfield_label.gfield_label_before_complex{display:none!important}ul#gform_fields_20 li.complex-field-form div.ginput_container.ginput_container_name{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;width:100%;margin-left:0!important}#form-bottom #field_20_36 .ginput_container.ginput_container_text,#form-bottom .gfield_description.validation_message,#form-bottom ul#gform_fields_20 #field_20_4>.ginput_container.ginput_container_email,ul#gform_fields_20 li.complex-field-form .gfield_description.validation_message{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;width:100%!important;margin-left:0!important}ul#gform_fields_20 #field_20_4,ul#gform_fields_20 li.complex-field-form{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}#form-bottom input#input_20_4,#form-bottom input#input_20_36[type="text"]{}#sidebar{margin-bottom:20px!important}.page-id-243 #form-bottom .complex-field-form .name_last,.page-id-243 #form-bottom .complex-field-form .name_first{margin-right:0!important;width:100%!important}.page-id-243 .complex-field-form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.ui-datepicker{background-color:#d7d7d7}.ui-datepicker tbody td{background:#ebebeb}.ui-datepicker tbody td.ui-datepicker-unselectable.ui-state-disabled{background:#d7d7d7}.page-id-243 .ginput_container.ginput_container_select,.page-id-243 .ginput_container.ginput_container_text,.page-id-243 .ginput_container.ginput_container_email,.page-id-243 ul#gform_fields_20 li.complex-field-form div.ginput_container_name{margin-left:0!important;margin-right:0!important;-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.page-id-243 #form-bottom .recieved-occ-mail .ginput_container.ginput_container_checkbox .gfield_checkbox>li{margin-bottom:0!important}.page-id-243 #form-bottom input[type="submit"]{width:100%}#form-bottom .recieved-occ-mail .gfield_label{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;max-width:none;width:auto!important}#form-bottom .recieved-occ-mail{display:flex;align-items:center}#form-bottom{margin-top:auto;position:-webkit-sticky;position:-moz-sticky;position:-ms-sticky;position:-o-sticky;position:sticky;top:119px}.col-sm-8,.col-sm-4{margin:0!important}@media (max-width:576px){.col-sm-8,.col-sm-4{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}@media (min-width:576px){.col-sm-8,.col-sm-4{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}@media (min-width:768px){.col-sm-8{-webkit-box-flex:0;-webkit-flex:0 0 66.66666667%;-ms-flex:0 0 66.66666667%;flex:0 0 66.66666667%;max-width:66.66666667%}.col-sm-4{-webkit-box-flex:0;-webkit-flex:0 0 33.33333333%;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%}}@media (min-width:992px){.col-sm-8{-webkit-box-flex:0;-webkit-flex:0 0 66.66666667%;-ms-flex:0 0 66.66666667%;flex:0 0 66.66666667%;max-width:66.66666667%}.col-sm-4{-webkit-box-flex:0;-webkit-flex:0 0 33.33333333%;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%}}#field_20_10,#field_20_35{width:50%;}#field_20_10{position:relative;}#field_20_10 .ui-datepicker-trigger{position:relative;top:-43px;left:100%;}#input_20_35{padding:10px 15px !important;}.page-id-243 #form-bottom .recieved-occ-mail .ginput_container.ginput_container_checkbox .gfield_checkbox>li{margin-left:10px !important;margin-top:15px !important;}.loader-form{display:none;}#field_20_10{height:55px;}body #form-bottom .gform_wrapper .top_label #field_20_35 div.ginput_container{width:100% !important;}body #form-bottom .gform_wrapper .top_label div.ginput_container{width: 86% !important;}#form-bottom input[type="text"].datepicker_with_icon.lv_invalid,#form-bottom input[type="text"].datepicker_with_icon.lv_valid{background-size: 18px;}.datepicker_with_icon{padding: 10px 10px;}input.lv_valid:-webkit-autofill{-webkit-animation-name:autofillv}input.lv_invalid:-webkit-autofill{-webkit-animation-name:autofillinv}@-webkit-keyframes autofillinv {to {color: #666;background: url(https://monashivf.com/assets/themes/monash/assets/images/cross-mobile.png) no-repeat scroll 95% #edf4ec;}}@-webkit-keyframes autofillv {to {color: #666;background: url(https://monashivf.com/assets/themes/monash/assets/images/checknew-mobile.png) no-repeat scroll 95% #edf4ec;}}</style>');
			console.log('Appointment 2 run');
			var sidebar = $('#sidebar').clone();
			var form = $('#form-bottom').clone();
			$('#form-bottom').remove();
			$('#sidebar').remove();
			$('.col-sm-8.inner-content>h3').remove();
			$('.monash-o-btn').remove();
			sidebar.appendTo('.col-sm-8.inner-content');
			form.find('iframe').remove();
			form.find('[type="text/javascript"]').remove();
			form.find('[target="gform_ajax_frame_20"]').removeAttr('target').removeAttr('onsubmit');
			form.find('.gform_button.button').removeAttr('onclick').removeAttr('onkeypress').removeAttr('onkeypress').after('<img src="https://monashivf.com/assets/plugins/gravityforms/images/spinner.gif" class="loader-form" />');
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
			$('body').on('submit', '[enctype="multipart/form-data"]', function(event) {
				var action = $(this).attr('action');
				var fieldFirstName   = $('[placeholder="First Name"]',this);
				var fieldLastname    = $('[name="input_38.6"]',this);
				var fieldPhoneNumber = $('[placeholder="Your Phone"]',this);
				var fieldEmail       = $('[placeholder="Your Email"]',this);
				var datepicker       = $('.datepicker_with_icon',this);
				var validateFirstName   = validatefn(fieldFirstName);
				var validateLastname    = validatefn(fieldLastname);
				var validatePhoneNumber = validatefn(fieldPhoneNumber) && validatePhone(fieldPhoneNumber.val());
				var validatefieldEmail  = validatefn(fieldEmail)    && validateEmail(fieldEmail.val());
				var validatedatepicker  = validatefn(datepicker);
				if(validateFirstName && validateLastname && validatePhoneNumber && validatefieldEmail && validatedatepicker){
					var serialize           = $(this).serialize();
					var form                = $(this);
					$(this).find('.loader-form').css('display','block');
					$.ajax({
						url: action,
						type: 'POST',
						dataType: 'html',
						data: serialize,
					})
					.done(function(data) {
						var dataitem = $(data);
						if(data.search('gformRedirect') > 0){
							form.append(dataitem);
							gformRedirect();
						}else{
							dataitem.find('iframe').remove();
							dataitem.find('[type="text/javascript"]').remove();
							dataitem.find('[target="gform_ajax_frame_20"]').removeAttr('target').removeAttr('onsubmit');
							dataitem.find('.gfield_error input').addClass('lv_invalid');
							dataitem.find('.gform_button.button').removeAttr('onclick').removeAttr('onkeypress').removeAttr('onkeypress').after('<img src="https://monashivf.com/assets/plugins/gravityforms/images/spinner.gif" class="loader-form" />');
							$('#form-bottom').html('');
							$('#form-bottom').append(dataitem);
							setTimeout(function() {
								gformInitDatepicker_int1();
							},100);
						}
					});
				}
				return false;
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
			$('body').on('blur','[enctype="multipart/form-data"] .datepicker_with_icon',function(){
				validatefn($(this));
			});
			$('body').on('blur','[enctype="multipart/form-data"] [placeholder="First Name"]',function(){
				validatefn($(this));
			});
			$('body').on('focus','[enctype="multipart/form-data"] [placeholder="First Name"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'First Name'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
			});
			$('body').on('blur','[enctype="multipart/form-data"] [name="input_38.6"]',function(){
				validatefn($(this));
			});
			$('body').on('focus','[enctype="multipart/form-data"] [name="input_38.6"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'First Name'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
				$(this).removeClass('lv_valid');
				$(this).removeClass('LV_valid_field');
			});
			$('body').on('blur','[enctype="multipart/form-data"] [placeholder="Your Phone"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				var val = $(this).val();
				if(validatefn($(this),false) === true && validatePhone(val) === true){
					$(this).addClass('lv_valid');
					$(this).addClass('LV_valid_field');
				}else{
					$(this).addClass('lv_invalid');
					$(this).addClass('LV_invalid_field');
				}
			});
			$('body').on('focus','[enctype="multipart/form-data"] [placeholder="Your Phone"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
				$(this).removeClass('lv_valid');
				$(this).removeClass('LV_valid_field');
			});
			$('body').on('blur','[enctype="multipart/form-data"] [placeholder="Your Email"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				var val = $(this).val();
				if(validatefn($(this),false) && validateEmail(val)){
					$(this).addClass('lv_valid');
					$(this).addClass('LV_valid_field');
				}else{
					$(this).addClass('lv_invalid');
					$(this).addClass('LV_invalid_field');
				}
			});
			$('body').on('focus','[enctype="multipart/form-data"] [placeholder="Your Email"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
				$(this).removeClass('lv_valid');
				$(this).removeClass('LV_valid_field');
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
			jQuery(document).ready(function($) {
					var scriptreappend = jQuery('body').find('iframe[name="gform_ajax_frame_20"]').parent().find('script').html();
					$('body').append('<script>setTimeout(function() {'+scriptreappend+'},300);</script>');
					gformInitDatepicker_int1();
			});
		}
		
		if(hrf == "https://monashivf.com/fertility-treatments/fertility-treatments/the-ivf-process/"){
			$('.col-sm-4.sidebar').css('opacity','0');
			$('.col-sm-4.sidebar').html('');
			$projectlocation = "https://htmldiz.github.io/appointment/";
			$('body').append('<link rel="stylesheet" href="'+$projectlocation+'css/style3.last.css" />');
			var sidebar = $('#sidebar').clone();
			var form = $('#form-bottom').clone();
			$('#sidebar').remove();
			$('.col-sm-8.inner-content>h3').remove();
			$('.monash-o-btn').remove();
			$.ajax({
				url: 'https://monashivf.com/resources/free-ivf-nurse-chat/',
				type: 'POST',
				dataType: 'html',
			}) 
			.done(function(html) {
				$('.col-sm-4.sidebar').css('opacity','1');
				var clone = $(html).find('#form-bottom').clone();
				clone.attr('id','form-bottom2');
				clone.find('[enctype="multipart/form-data"]').removeAttr('target').removeAttr('id');
				clone.find('.datepicker_with_icon').after('<img class="ui-datepicker-trigger" src="https://monashivf.com/assets/plugins/gravityforms/images/calendar.png" alt="..." title="...">');
				clone.appendTo('.col-sm-4.sidebar');
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
				$('body').find('#form-bottom2').css('padding-bottom','600px');
				$('body').find('#form-bottom2').prepend('<h3 style="padding-top:10px;">Get a free consultation on the IVF process</h3>');
				$('body').find('#form-bottom2 .gfield_label.gfield_label_before_complex').remove();
				$('body').find('#form-bottom2 .field_description_below:not(.recieved-occ-mail) .gfield_label').remove();
					var clone_btn = $('body').find('#form-bottom2 [value="Submit"]').clone();
					clone_btn.attr('value','BOOK YOUR FREE NURSE CALL');
					clone_btn.attr('onkeypress','');
					clone_btn.attr('onclick','');
					clone_btn.attr('id','');
					clone_btn.insertAfter('#form-bottom2 [value="Submit"]');
				$('body').find('#form-bottom2 [value="Submit"]').css('display','none');
				gformInitDatepicker_int1(); 
			});
			$('body').on('click','.ui-datepicker-trigger', function(){
				$(this).parent().find('input').focus();
			});

			$('body').on('blur','[enctype="multipart/form-data"] .datepicker_with_icon',function(){
				validatefn($(this));
			});
			$('body').on('blur','[enctype="multipart/form-data"] [placeholder="First Name"]',function(){
				validatefn($(this));
			});
			$('body').on('focus','[enctype="multipart/form-data"] [placeholder="First Name"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'First Name'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
			});
			$('body').on('blur','[enctype="multipart/form-data"] [name="input_38.6"]',function(){
				validatefn($(this));
			});
			$('body').on('focus','[enctype="multipart/form-data"] [name="input_38.6"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'First Name'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
				$(this).removeClass('lv_valid');
				$(this).removeClass('LV_valid_field');
			});
			$('body').on('blur','[enctype="multipart/form-data"] [placeholder="Your Phone"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				var val = $(this).val();
				if(validatefn($(this),false) === true && validatePhone(val) === true){
					$(this).addClass('lv_valid');
					$(this).addClass('LV_valid_field');
				}else{
					$(this).addClass('lv_invalid');
					$(this).addClass('LV_invalid_field');
				}
			});
			$('body').on('focus','[enctype="multipart/form-data"] [placeholder="Your Phone"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
				$(this).removeClass('lv_valid');
				$(this).removeClass('LV_valid_field');
			});
			$('body').on('blur','[enctype="multipart/form-data"] [placeholder="Your Email"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				var val = $(this).val();
				if(validatefn($(this),false) && validateEmail(val)){
					$(this).addClass('lv_valid');
					$(this).addClass('LV_valid_field');
				}else{
					$(this).addClass('lv_invalid');
					$(this).addClass('LV_invalid_field');
				}
			});
			$('body').on('focus','[enctype="multipart/form-data"] [placeholder="Your Email"]',function(){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Sticky Form',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Your Phone'
				});
				$(this).removeClass('lv_invalid');
				$(this).removeClass('LV_invalid_field');
				$(this).removeClass('lv_valid');
				$(this).removeClass('LV_valid_field');
			});
			$('body').on('click','[enctype="multipart/form-data"] [value="BOOK YOUR FREE NURSE CALL"]',function(){
				$(this).closest('[enctype="multipart/form-data"]').submit();
			});
			$('body').on('submit', '[enctype="multipart/form-data"]', function(event) {
				var action = $(this).attr('action');
				var fieldFirstName   = $('[placeholder="First Name"]',this);
				var fieldLastname    = $('[name="input_38.6"]',this);
				var fieldPhoneNumber = $('[placeholder="Your Phone"]',this);
				var fieldEmail       = $('[placeholder="Your Email"]',this);
				var datepicker       = $('.datepicker_with_icon',this);
				var validateFirstName   = validatefn(fieldFirstName);
				var validateLastname    = validatefn(fieldLastname);
				var validatePhoneNumber = validatefn(fieldPhoneNumber) && validatePhone(fieldPhoneNumber.val());
				var validatefieldEmail  = validatefn(fieldEmail)    && validateEmail(fieldEmail.val());
				var validatedatepicker  = validatefn(datepicker);
				if(validateFirstName && validateLastname && validatePhoneNumber && validatefieldEmail && validatedatepicker){
					var serialize           = $(this).serialize();
					var form                = $(this);
					$(this).find('.loader-form').css('display','block');
					$.ajax({
						url: action,
						type: 'POST',
						dataType: 'html',
						data: serialize,
					})
					.done(function(data) {
						var dataitem = $(data);
						if(data.search('gformRedirect') > 0){
							form.append(dataitem);
							gformRedirect();
						}else{
							dataitem.find('iframe').remove();
							dataitem.find('[type="text/javascript"]').remove();
							dataitem.find('.datepicker_with_icon').after('<img class="ui-datepicker-trigger" src="https://monashivf.com/assets/plugins/gravityforms/images/calendar.png" alt="..." title="...">');
							dataitem.find('[enctype="multipart/form-data"]').removeAttr('id').removeAttr('target').removeAttr('onsubmit');
							dataitem.find('.gfield_error input').addClass('lv_invalid');
							dataitem.find('.gform_button.button').removeAttr('onclick').removeAttr('onkeypress').removeAttr('onkeypress').after('<img src="https://monashivf.com/assets/plugins/gravityforms/images/spinner.gif" class="loader-form" />');
							$('#form-bottom').html('');
							$('#form-bottom').append(dataitem);
							setTimeout(function() {
								gformInitDatepicker_int1();
							},100);
						}
					});
				}
				return false;
			});
		}
	});
}
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validatePhone(p) {
  var phoneRe = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  return phoneRe.test(p);
} 
function validatefn(p,addClasses=true) {
	var val = p.val();
	var placeholder = p.attr('placeholder').length > 0 ? p.attr('placeholder') : ' ';
	if(val === "" || val === placeholder){
		if(addClasses === false){}else{
			p.addClass('lv_invalid');
			p.addClass('LV_invalid_field');
			p.removeClass('lv_valid');
			p.removeClass('LV_valid_field');
		}
		return false;
	}else{
		if(addClasses === false){}else{
			p.removeClass('lv_invalid');
			p.removeClass('LV_invalid_field');
			p.addClass('lv_valid');
			p.addClass('LV_valid_field');
		}
		return true;
	}
}
function gformInitDatepicker_int1() {
	jQuery('body').find('[enctype="multipart/form-data"] .datepicker_with_icon').each(function() {
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
				onSelect:function(dateText) {
					validatefn(jQuery(this));
				}
			};
		c.dateFormat = "dd/mm/yy";
		a.datepicker(c);
	})
}
