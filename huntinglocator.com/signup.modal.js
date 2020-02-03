jQuery(function($) {
	$outhtml = '<div class="container-modal"><div class="container-modal-content"><a href="#" class="close-modal-container"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAAAXNSR0IB2cksfwAAAB5QTFRFAAAAMzMzMzMzMDAwMzMzMzMzMzMzMzMzMjIyMjIyzoa0SQAAAAp0Uk5TAKDPEJDQ/7/AYFGAMwEAAAA/SURBVHicYxAyYGBWYQhTZjBKZDBNMlYTYGAOU0pkYGAwTRMAkkZpygwMzGqiSQZABcxAZWECDKbpDI5AwU4A8QUIZuX/CJwAAAAASUVORK5CYII="></a><div class="container-modal-title">What do you get as a premium member?</div><ul><li>Instant access to thousands of Private Leases</li><li>Best in Class Hunting Maps (explore, plan and track all your hunts)</li><li>Automatically added to over $40,000 in giveaways a year.</li><li>Get on the right land: Alerts when listing are available near you.</li><li>List you hunting outfitter or guides - Target over 40K hunters a month.</li></ul><div class="foot-section"><a href="https://huntinglocator.com/signup">Unlock access to all properties in a FREE TRIAL</a></div></div></div><style>.container-modal{position:fixed;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:rgba(0,0,0,0.2);z-index:999999}.container-modal .container-modal-content ul li{position:relative;font-size:16px;font-weight:700;color:#000000;margin-bottom:12px}.container-modal .container-modal-content ul li:before{content:"";display:inline-block;width:16px;background:url("data:image/gif;base64,R0lGODlhEAALAKIAAAAAAP///wDCewDCfP///wAAAAAAAAAAACH5BAEAAAQALAAAAAAQAAsAAAMcSLq8Ii2qByWj9r7stm4Y6BFhhJUSNWbDylVWAgA7");height:16px;background-position:center;background-repeat:no-repeat;position:absolute;left:-24px;top:3px}.container-modal .container-modal-content ul{padding:0px 50px}.container-modal .container-modal-content .container-modal-title{color:#f77d0f;font-family:Oswald,Arial,sans-serif;font-size:26px;font-weight:300;letter-spacing:-0.7px;padding:0px 17px 17px;text-align:left;padding-left: 49px;margin-top:23px}.container-modal .container-modal-content .foot-section{padding:0px 27px;margin-bottom:29px;margin-top: 24px;}.container-modal .container-modal-content .close-modal-container{opacity:.5;width:38px;height:38px;display:flex;justify-content:center;align-items:center;position:absolute;right:0px;top:0px}.container-modal .container-modal-content .foot-section a{text-align:center;box-shadow:0 4px 9px rgba(0,0,0,0.23);border-radius:4px;background-color:#f77d0f;padding:15px;color:#ffffff;display:inline-block;width:100%;font-size:16px;font-weight:700;text-decoration:none;display: flex;justify-content: center;align-items: center;flex-wrap: nowrap;}.container-modal .container-modal-content .foot-section a:after {content: "";display: inline-block;background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAJBAMAAAAWSsseAAAAAXNSR0IB2cksfwAAACdQTFRFAAAA////////////////////////////////////////////////rj1KOQAAAA10Uk5TABCAYP9/v8BAkOCgUDWBjoEAAAAySURBVHicY2BgYBBgAANlCKViwMBgGhqa4szAUOICBA0M08vLl3hD5DaAKW2IyoMMDADjUghGLCheAwAAAABJRU5ErkJggg==");width: 11px;height: 8px;margin-left: 5px;}.container-modal .container-modal-content{width:510px;border-radius:4px;background:#fff;padding:17px;position:relative}</style>';
	$('body').on('click', '.close-modal-container', function(event) {
		$('.container-modal').remove();
		return false;
	});
	$('body').on('click', '.container-modal', function(event) {
		$('.container-modal').remove();
		return false;
	});
	$('body').on('click', '.foot-section a', function(event) {
		var href = $(this).attr('href');
		location.href = href;
		return false;
	});
	// if(location.pathname.search('leases')){
		setTimeout(function(){
			if($('body').find('.container-modal').length < 1){
				if(!$('body').find('.fancybox-overlay.fancybox-overlay-fixed').length > 0){
					$('body').append($outhtml);
				}
			}
		},15000);
	// }
});