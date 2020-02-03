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
var hrf = location.href;

function readyjQueryinit(){
	jQuery(function($) {
		var hrf = location.href;
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
			$('body').append('<style>section.main-content>.container>.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.col-sm-4.sidebar{padding-top:20px}#form-bottom label[for="input_20_35"],#form-bottom label[for="input_20_10"],#form-bottom label[for="input_20_36"],#form-bottom label[for="input_20_4"]{display:none!important}#form-bottom .gform_body ul#gform_fields_20 li.complex-field-form label.gfield_label.gfield_label_before_complex{display:none!important}ul#gform_fields_20 li.complex-field-form div.ginput_container.ginput_container_name{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;width:100%;margin-left:0!important}#form-bottom #field_20_36 .ginput_container.ginput_container_text,#form-bottom .gfield_description.validation_message,#form-bottom ul#gform_fields_20 #field_20_4>.ginput_container.ginput_container_email,ul#gform_fields_20 li.complex-field-form .gfield_description.validation_message{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;width:100%!important;margin-left:0!important}ul#gform_fields_20 #field_20_4,ul#gform_fields_20 li.complex-field-form{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}#form-bottom input#input_20_4,#form-bottom input#input_20_36[type="text"]{}#sidebar{margin-bottom:20px!important}.page-id-243 #form-bottom .complex-field-form .name_last,.page-id-243 #form-bottom .complex-field-form .name_first{margin-right:0!important;width:100%!important}.page-id-243 .complex-field-form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.ui-datepicker{background-color:#d7d7d7}.ui-datepicker tbody td{background:#ebebeb}.ui-datepicker tbody td.ui-datepicker-unselectable.ui-state-disabled{background:#d7d7d7}.page-id-243 .ginput_container.ginput_container_select,.page-id-243 .ginput_container.ginput_container_text,.page-id-243 .ginput_container.ginput_container_email,.page-id-243 ul#gform_fields_20 li.complex-field-form div.ginput_container_name{margin-left:0!important;margin-right:0!important;-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.page-id-243 #form-bottom .recieved-occ-mail .ginput_container.ginput_container_checkbox .gfield_checkbox>li{margin-bottom:0!important}.page-id-243 #form-bottom input[type="submit"]{width:100%}#form-bottom .recieved-occ-mail .gfield_label{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;max-width:none;width:auto!important}#form-bottom .recieved-occ-mail{display:flex;align-items:center}#form-bottom{margin-top:auto;position:-webkit-sticky;position:-moz-sticky;position:-ms-sticky;position:-o-sticky;position:sticky;top:119px}.col-sm-8,.col-sm-4{margin:0!important}@media (max-width:576px){.col-sm-8,.col-sm-4{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}@media (min-width:576px){.col-sm-8,.col-sm-4{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}@media (min-width:768px){.col-sm-8{-webkit-box-flex:0;-webkit-flex:0 0 66.66666667%;-ms-flex:0 0 66.66666667%;flex:0 0 66.66666667%;max-width:66.66666667%}.col-sm-4{-webkit-box-flex:0;-webkit-flex:0 0 33.33333333%;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%}}@media (min-width:992px){.col-sm-8{-webkit-box-flex:0;-webkit-flex:0 0 66.66666667%;-ms-flex:0 0 66.66666667%;flex:0 0 66.66666667%;max-width:66.66666667%}.col-sm-4{-webkit-box-flex:0;-webkit-flex:0 0 33.33333333%;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%}}</style>');
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
			jQuery(document).ready(function($) {
					var scriptreappend = jQuery('body').find('iframe[name="gform_ajax_frame_20"]').parent().find('script').html();
					$('body').append('<script>setTimeout(function() {'+scriptreappend+'},300);</script>');
					gformInitDatepicker_int1();
			});
			setInterval(function(){
				if($('body').find('#form-bottom [value="FREE NURSE CHAT"]').length === 0){
					var clone_btn = $('body').find('#form-bottom [value="Submit"]').clone();
					clone_btn.attr('value','FREE NURSE CHAT'); 
					clone_btn.attr('onkeypress','');
					clone_btn.attr('onclick','');
					clone_btn.removeAttr('id');
					clone_btn.insertAfter('#form-bottom [value="Submit"]');
					$('body').find('#form-bottom [value="Submit"]').css('display','none');
				}
			},10);
			setInterval(function(){
				if($('body').find('#form-bottom .gform_submit_button_20').length > 1){
					console.log($('body').find('#form-bottom .gform_submit_button_20'));
					$('body').find('#form-bottom .gform_submit_button_20:eq(2)').remove();
				}
			});
		}
	});
	jQuery(document).ready(function($) {
	});
}
function gformInitDatepicker_int() {
	jQuery('body').find("#form-bottom2 .datepicker-here").each(function() {
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
		c.dateFormat = "dd/mm/yy";
		a.datepicker(c);
	})
}
function gformInitDatepicker_int1() {
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
		c.dateFormat = "dd/mm/yy";
		a.datepicker(c);
	})
}
