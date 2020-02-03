var projecturl = "petbucket";
function initjQuery(callback) {
	var script = document.createElement( "script" )
	script.type = "text/javascript";
	if(script.readyState) {
		script.onreadystatechange = function() {
			if( script.readyState === "loaded" || script.readyState === "complete" ) {
				script.onreadystatechange = null;
				callback();
			}
		};
	}else{
		script.onload = function() {
			callback();
		};
	}
	var src = "";
	var href = location.href;
	if( href.indexOf('file://') === 0 ){
		src = "https:";
	}
	script.src = src+'//code.jquery.com/jquery.min.js';
  document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
	initjQuery(function() {
		readyjQueryinit();
	});
}else{
	readyjQueryinit();
}
function getCookiejQueryinit(name) {
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookiejQueryinit(name,value) {
	var date = new Date(new Date().getTime() + 30 *60 * 1000);
	document.cookie = name+"="+value+"; path=/; expires=" + date.toUTCString();
}
function readyjQueryinit(){
	jQuery(function($) {
		var reg = new RegExp(/www.petbucket.com\/blog\/(.*).html$/i);
		var href  = location.origin+location.pathname;
		console.log('Category GTM');
		if(href.search(reg) === -1){
			var path = location.origin+location.pathname;
			var change_title = getCookiejQueryinit('change_title');
			if( path == "https://www.petbucket.com/c/4405799/1/for-cats.html" && change_title){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'hj-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
				});
				$('body').find('.free-shipping-header').remove();
				$('body').find('.dogs-cats-menu').css('margin-top', '103px');
				$('body').find('.dogs-cats-menu').css('border', 'none');
				$('body').find('.dogs-cats-menu').css('font-size', '1.3em');
				$('body').find('.dogs-cats-menu').css('padding-left', '30px');
				$('body').find('.dogs-cats-menu').css('padding-right', '15px');
				$('body').find('.dogs-cats-menu').html('<strong>Parasite prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4521471/1/for-dogs.html" && change_title){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'hj-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
				});
				$('body').find('.free-shipping-header').remove();
				$('body').find('.dogs-cats-menu').css('margin-top', '103px');
				$('body').find('.dogs-cats-menu').css('border', 'none');
				$('body').find('.dogs-cats-menu').css('font-size', '1.3em');
				$('body').find('.dogs-cats-menu').css('padding-left', '30px');
				$('body').find('.dogs-cats-menu').css('padding-right', '15px');
				$('body').find('.dogs-cats-menu').html('<strong>Parasite prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4521472/1/flea.html" && change_title){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'hj-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
				});
				$('body').find('.wCenter .products-title').html('<strong>Flea prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4521473/1/tick.html" && change_title){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'hj-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
				});
				$('body').find('.wCenter .products-title').html('<strong>Tick prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4521474/1/heartworm.html" && change_title){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'hj-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
				});
				$('body').find('.wCenter .products-title').html('<strong>Heartworm prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4521475/1/intestinal-worms.html" && change_title){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'hj-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
				});
				$('body').find('.wCenter .products-title').html('<strong>Intestinal worms prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4405843/1/flea.html" && change_title){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'hj-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
				});
				$('body').find('.wCenter .products-title').html('<strong>Flea prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4540721/1/tick.html" && change_title){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'hj-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
				});
				$('body').find('.wCenter .products-title').html('<strong>Tick prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4405844/1/heartworm.html" && change_title){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'hj-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
				});
				$('body').find('.wCenter .products-title').html('<strong>Heartworm prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4405832/1/intestinal-worms.html" && change_title){
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'hj-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
				});
				$('body').find('.wCenter .products-title').html('<strong>Intestinal worms prevention from top brands with lowest price guarantee</strong>');
			}
		}
	});
}