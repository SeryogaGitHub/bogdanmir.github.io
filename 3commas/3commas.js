try {
    hj('trigger', 'hj-3commas');
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
		var hrf = location.protocol+'//'+location.host+location.pathname;
		var lang = $('html').attr('lang');
		if(hrf == "https://3commas.io/" && lang == "en"){
			$('head').append('<style>.landing-05.video-right #topSection .btn.btn-lg.btn-main.goRegBtn.createAccBtn{max-width: 250px;white-space: normal;padding: 5px 15px;font-size: 14px;}@media(max-width:545px){.landing-05.video-right #topSection .btn.btn-lg.btn-main.goRegBtn.createAccBtn{max-width: 250px;white-space: normal;padding: 5px 15px;font-size: 12px;}#regBtn{font-size: 12px;}}.landing-05.video-right #topSection .btn.btn-lg.btn-main.goRegBtn.createAccBtn {font-size: 18px;line-height: 1.4;padding: 8px 10px 5px;margin-top: 30px;}.landing-05 #topSection {min-height: 630px;}</style>')
			$('.createAccBtn')
			.html('Get first profit in 7 days FREE TRIAL')
			$('.getFreeTrialBtn').html('Get first profit in 7 days FREE TRIAL')
			.css('max-width','310px')
			.css('white-space','normal')
			.css('padding','15px');
			$('#regBtn').html('Try For Free');
			$('.simple_form.new_user').find('[value="Register"]')
			.val('Get first profit in 7 days FREE TRIAL')
			.css('white-space','normal');
			$('.subscribe-card__bottom').each(function(index, el) {
				var text = $('.text',el).html();
				text = text.toLowerCase();
				console.log(text);
				console.log(text.search('from&nbsp;'));
				if(text.search('from&nbsp;') > -1){
					var numb = text.replace('from&nbsp;$','');
					numb = numb.replace(' / mo','');
					$('.text',el).html('$'+numb+' per month');
				}
			});
			$('.subscribe-card__bottom .subscribeNowBtn')
			.html('Try For FREE')
			.css('font-size','20px')
			.css('white-space','normal')
			.css('padding','6px')
			.css('line-height','1.5');
		}
	});
} 