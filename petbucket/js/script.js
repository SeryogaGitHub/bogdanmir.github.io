window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'hj-cro-event',
	'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar'
});
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
		var href = location.href;
		var url = "";
		if( href.indexOf('file://') === 0 ){
			url = "";
		}else{
			url = "https://htmldiz.github.io/"+projecturl+"/";
		}
		var reg = new RegExp(/www.petbucket.com\/blog\/(.*).html$/i);
		var href  = location.origin+location.pathname;
		console.log('variant b');
		if(href.search(reg) > -1){
			setCookiejQueryinit('change_title',true);
			$('head').append('<link rel="stylesheet" href="'+url+'css/style.css" />');
			$('body').append('<a href="#" class="'+projecturl+'-step-1" data-localizer="detect">protect your pet from parasites</a>');
			$('body').append('<div class="'+projecturl+'-step-2 petbucket-animate '+projecturl+'fadeOutLeft"><a href="#" class="'+projecturl+'-link '+projecturl+'dog-link dog"><img src="'+url+'img/dog.png" alt="For dogs" /><span data-localizer="detect">For dogs</span></a> <span>OR</span><a href="#" class="'+projecturl+'-link '+projecturl+'cat-link cat"><img src="'+url+'img/cat.png" alt="For cats" /><span data-localizer="detect">For cats</span></a></div>');
			$('body').append('<div class="'+projecturl+'-step-3 petbucket-animate '+projecturl+'fadeOutLeft"><div class="'+projecturl+'-step-3-title">prevent from:</div><div class="petbucket-steps"><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-flea" data-'+projecturl+'select="flea"><span data-localizer="detect">Flea</span></a><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-tick" data-'+projecturl+'select="tick"><span data-localizer="detect">tick</span></a><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-heartworm" data-'+projecturl+'select="heartworm"><span data-localizer="detect">heartworm</span></a><a href="#" class="'+projecturl+'step-select '+projecturl+'step-select-iw" data-'+projecturl+'select="iw"><span data-localizer="detect">INTESTINAL WORMS</span></a></div></div>');
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
			'event': 'gtm-cro-event',
			'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
			'gtm-cro-event-action': 'load',
			'gtm-cro-event-label': 'Protect your pet from parasites'
			});
			$('body').on('click', '.'+projecturl+'-step-1', function(event) {
				$(this).addClass(projecturl+'-animate');
				$(this).addClass(projecturl+'fadeOutLeft');
				$('.'+projecturl+'-step-2').addClass(projecturl+'-animate');
				$('.'+projecturl+'-step-2').addClass(projecturl+'fadeInRight');
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
				'gtm-cro-event-action': 'click',
				'gtm-cro-event-label': 'Protect your pet from parasites'
				});
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
				'gtm-cro-event-action': 'load',
				'gtm-cro-event-label': 'Dogs/Cats'
				});
				return false;
			});
			var type_it = "";
			$('body').on('click', '.'+projecturl+'-step-3 [data-'+projecturl+'select]', function(event) {
				var typehere = $(this).attr('data-'+projecturl+'select');
				var get_link = type_it+'-'+typehere;
				window.dataLayer = window.dataLayer || [];
				switch (get_link){
					case "dog-flea":
						dataLayer.push({
						'event': 'gtm-cro-event',
						'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
						'gtm-cro-event-action': 'click',
						'gtm-cro-event-label': 'Dogs - Flea'
						});
						location.href = "https://www.petbucket.com/c/4521472/1/flea.html";
					break;
					case "dog-tick":
						dataLayer.push({
						'event': 'gtm-cro-event',
						'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
						'gtm-cro-event-action': 'click',
						'gtm-cro-event-label': 'Dogs - Tick'
						});
						location.href = "https://www.petbucket.com/c/4521473/1/tick.html";
					break;
					case "dog-heartworm":
						dataLayer.push({
						'event': 'gtm-cro-event',
						'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
						'gtm-cro-event-action': 'click',
						'gtm-cro-event-label': 'Dogs - Heartworm'
						});
						location.href = "https://www.petbucket.com/c/4521474/1/heartworm.html";
					break;
					case "dog-iw":
						dataLayer.push({
						'event': 'gtm-cro-event',
						'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
						'gtm-cro-event-action': 'click',
						'gtm-cro-event-label': 'Dogs - Intestinal Worms'
						});
						location.href = "https://www.petbucket.com/c/4521475/1/intestinal-worms.html";
					break;
					case "cat-flea":
						dataLayer.push({
						'event': 'gtm-cro-event',
						'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
						'gtm-cro-event-action': 'click',
						'gtm-cro-event-label': 'Cats - Flea'
						});
						location.href = "https://www.petbucket.com/c/4405843/1/flea.html";
					break;
					case "cat-tick":
						dataLayer.push({
						'event': 'gtm-cro-event',
						'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
						'gtm-cro-event-action': 'click',
						'gtm-cro-event-label': 'Cats - Tick'
						});
						location.href = "https://www.petbucket.com/c/4540721/1/tick.html";
					break;
					case "cat-heartworm":
						dataLayer.push({
						'event': 'gtm-cro-event',
						'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
						'gtm-cro-event-action': 'click',
						'gtm-cro-event-label': 'Cats - Heartworm'
						});
						location.href = "https://www.petbucket.com/c/4405844/1/heartworm.html";
					break;
					case "cat-iw":
						dataLayer.push({
						'event': 'gtm-cro-event',
						'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
						'gtm-cro-event-action': 'click',
						'gtm-cro-event-label': 'Cats - Intestinal Worms'
						});
						location.href = "https://www.petbucket.com/c/4405832/1/intestinal-worms.html";
					break;
				}
			});
			$('body').on('click', '.'+projecturl+'dog-link, .'+projecturl+'cat-link', function(event) {
				// $('.'+projecturl+'-step-2').addClass(projecturl+'fadeOutLeft');
				$('.'+projecturl+'-step-2').removeClass(projecturl+'fadeInRight');
				$('.'+projecturl+'-step-3').addClass(projecturl+'-animate');
				$('.'+projecturl+'-step-3').addClass(projecturl+'fadeInRight');
				window.dataLayer = window.dataLayer || [];
				if($(this).hasClass('cat')){
					type_it = "cat";
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Cats'
					});
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
					'gtm-cro-event-action': 'load',
					'gtm-cro-event-label': 'Cats - Categories'
					});
				}else{
					type_it = "dog";
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
					'gtm-cro-event-action': 'click',
					'gtm-cro-event-label': 'Dogs'
					});
					dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'EXP - Mobile - Sticky Bar',
					'gtm-cro-event-action': 'load',
					'gtm-cro-event-label': 'Dogs - Categories'
					});
				}
				return false;
			});
		}else{
			var path = location.origin+location.pathname;
			var change_title = getCookiejQueryinit('change_title');
			if( path == "https://www.petbucket.com/c/4521472/1/flea.html" && change_title){
				$('body').find('.wCenter .products-title').html('<strong>Flea prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4521473/1/tick.html" && change_title){
				$('body').find('.wCenter .products-title').html('<strong>Tick prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4521474/1/heartworm.html" && change_title){
				$('body').find('.wCenter .products-title').html('<strong>Heartworm prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4521475/1/intestinal-worms.html" && change_title){
				$('body').find('.wCenter .products-title').html('<strong>Intestinal worms prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4405843/1/flea.html" && change_title){
				$('body').find('.wCenter .products-title').html('<strong>Flea prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4540721/1/tick.html" && change_title){
				$('body').find('.wCenter .products-title').html('<strong>Tick prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4405844/1/heartworm.html" && change_title){
				$('body').find('.wCenter .products-title').html('<strong>Heartworm prevention from top brands with lowest price guarantee</strong>');
			}
			if( path == "https://www.petbucket.com/c/4405832/1/intestinal-worms.html" && change_title){
				$('body').find('.wCenter .products-title').html('<strong>Intestinal worms prevention from top brands with lowest price guarantee</strong>');
			}
		}
	});
}