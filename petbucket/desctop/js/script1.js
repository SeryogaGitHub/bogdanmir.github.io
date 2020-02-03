window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'hj-cro-event',
	'gtm-cro-event-category': 'EXP - Desktop - PDP Add to Cart Popup'
});
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
  script.src = '//code.jquery.com/jquery.min.js';
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
var variation_popup = getCookiejQueryinit('variation_popup');
if($('.BreadCrumbHolder [href="https://www.petbucket.com/c/4521471/1/for-dogs.html"]').length>0 && !variation_popup){
	  var serialize = $('[action="/Basket/AddToBasket"]').serialize();
	  var projectpath = "https://htmldiz.github.io/petbucket/desctop/";
		headlink = '<link href="'+projectpath+'css/style.css" rel="stylesheet">';
		$('head').append(headlink);
		outhtml = '<div class="pb_overlay" style="display:none;">';
		outhtml += '<div class="pb_popup">';
		outhtml += '<span class="pb_close_btn"></span>';
		outhtml += '<h2 class="pb_popup_title">Prevent tick and fleas for 5 months with Bayer’s Kiltix collar';
		outhtml += '</h2>';
		outhtml += '<div class="pb_popup_content">';
		outhtml += '<div class="pb_photo">';
		outhtml += '<div class="pb_main_img">';
		outhtml += '<a href="'+projectpath+'img/photo.jpg" data-thumb-link="true">';
		outhtml += '<img src="'+projectpath+'img/photo.jpg">';
		outhtml += '</a>';
		outhtml += '</div>';
		outhtml += '<div class="pb_thumbnails">';
		outhtml += '<a href="https://static.cdnbridge.com/resources/18/160536/resized/2B/84867883_360x360.jpg" data-thumb-link="true">';
		outhtml += '<img src="'+projectpath+'img/photo-mini.png" alt="">';
		outhtml += '</a>';
		outhtml += '<a href="https://static.cdnbridge.com/resources/18/160536/resized/2A/84867882_360x360.jpg" data-thumb-link="true">';
		outhtml += '<img src="'+projectpath+'img/photo-mini2.png" alt="">';
		outhtml += '</a>';
		outhtml += '</div>';
		outhtml += '</div>';
		outhtml += '<div class="pb_description">';
		outhtml += '<div class="pb_price_section">';
		outhtml += '<div class="pb_price_stars">';
		outhtml += '<span class="pb_price">Only $18.99</span>';
		outhtml += '<span class="pb_star">';
		outhtml += '<img src="'+projectpath+'img/star.png" alt="">';
		outhtml += '<img src="'+projectpath+'img/star.png" alt="">';
		outhtml += '<img src="'+projectpath+'img/star.png" alt="">';
		outhtml += '<img src="'+projectpath+'img/star.png" alt="">';
		outhtml += '<img src="'+projectpath+'img/star.png" alt="">';
		outhtml += '</span>';
		outhtml += '</div>';
		outhtml += '<div class="pb_flea_mite">';
		outhtml += '<img src="'+projectpath+'img/no-flea.png" alt="">';
		outhtml += '<img src="'+projectpath+'img/no-mite.png" alt="">';
		outhtml += '</div>';
		outhtml += '</div>';
		outhtml += '<ul class="pb_advantages">';
		outhtml += '<li>';
		outhtml += '<span class="pb_tick"></span>Works for dogs of all sizes and breeds';
		outhtml += '</li>';
		outhtml += '<li>';
		outhtml += '<span class="pb_tick"></span>No-prescription required';
		outhtml += '</li>';
		outhtml += '<li>';
		outhtml += '<span class="pb_tick"></span>Safe for puppies older than 3 months';
		outhtml += '</li>';
		outhtml += '</ul>';
		outhtml += '<p class="pb_txt">Keep the collar around your dog’s neck, and feel secure in the knowledge that for the next 5 months ticks and fleas can’t resist the powerful insecticides covering your dog’s coat.</p>';
		outhtml += '</div>';
		outhtml += '</div>';
		outhtml += '<div class="pb_footer">';
		outhtml += '<div class="pb_no_btn pb_btn">';
		outhtml += '<a href="" class="">';
		outhtml += '<span class="pb_title_btn">No, thanks</span>continue to cart';
		outhtml += '</a>';
		outhtml += '</div>';
		outhtml += '<div class="pb_yes_btn pb_btn">';
		outhtml += '<a href="" class="pb_yes_btn_link_send">';
		outhtml += '<img src="'+projectpath+'img/cart.png" alt="">';
		outhtml += '<span>';
		outhtml += '<span class="pb_title_btn">Yes, add to сart<br></span>';
		outhtml += '<span>and protect my dog</span>';
		outhtml += '</span>';
		outhtml += '</a>';
		outhtml += '</div>';
		outhtml += '</div>';
		outhtml += '</div>';
		outhtml += '</div>';
		$('body').append(outhtml);
	  $('body').on('click', '.closethumb-imagebig', function(event) {
	  	$('body').find('.thumb-imagebig-wrap').fadeOut('fast', function() {
	  		$(this).remove(); 
	  	});
	  });
	  $('body').on('click', '[data-thumb-link]', function(event) {
	  	$('body').find('thumb-imagebig-wrap').remove();
	  	var href = $(this).attr('href');
	  	$('body').append('<div class="thumb-imagebig-wrap"><div class="thumb-imagebig"><a href="#" class="closethumb-imagebig pb_close_btn"></a><img src="'+href+'"/></div></div>');
	  	return false;
	  });
	  $('body').on('click', '.pb_no_btn a', function(event) {
	  	setCookiejQueryinit('variation_popup',true);
	  	window.dataLayer = window.dataLayer || [];
	  	dataLayer.push({
	  		'event': 'gtm-cro-event',
	  		'gtm-cro-event-category': 'EXP - Desktop - PDP Add to Cart Popup',
	  		'gtm-cro-event-action': 'click',
	  		'gtm-cro-event-label': 'No Thanks'
	  	});
	  	location.href = "https://www.petbucket.com/Basket";
		return false;
	  });
	  $('body').on('click', '.pb_popup span.pb_close_btn', function(event) {
	  	setCookiejQueryinit('variation_popup',true);
	  	window.dataLayer = window.dataLayer || [];
	  	dataLayer.push({
	  		'event': 'gtm-cro-event',
	  		'gtm-cro-event-category': 'EXP - Desktop - PDP Add to Cart Popup',
	  		'gtm-cro-event-action': 'click',
	  		'gtm-cro-event-label': 'Close'
	  	});
		location.href = "https://www.petbucket.com/Basket";
		return false;
	  });
	  $('body').on('click', '.pb_yes_btn_link_send', function(event) {
	  	setCookiejQueryinit('variation_popup',true);
		$.ajax({
			url: 'https://www.petbucket.com/Basket/AddToBasket',
			type: 'POST',
			dataType: 'html',
			data: {rad_Variant_1367960: '57786370',ProductId: '6976310',Quantity: '1'},
		})
		.done(function() {
			location.href = "https://www.petbucket.com/Basket";
		});
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'gtm-cro-event',
			'gtm-cro-event-category': 'EXP - Desktop - PDP Add to Cart Popup',
			'gtm-cro-event-action': 'click',
			'gtm-cro-event-label': 'Yes Add to Cart'
		});
		return false;
	  });
	  $('body').on('submit', '[action="/Basket/AddToBasket"]', function(event) {
	  		setCookiejQueryinit('variation_popup',true);
	  		var serialize = $('[action="/Basket/AddToBasket"]').serialize();
		  	$.ajax({
		  		url: 'https://www.petbucket.com/Basket/AddToBasket',
		  		type: 'POST',
		  		dataType: 'html',
		  		data: serialize,
		  	});
		  	$('body').addClass('pb_body');
		  	window.dataLayer = window.dataLayer || [];
		  	dataLayer.push({
		  		'event': 'gtm-cro-event',
		  		'gtm-cro-event-category': 'EXP - Desktop - PDP Add to Cart Popup',
		  		'gtm-cro-event-action': 'load',
		  		'gtm-cro-event-label': 'PDP Popup'
		  	});
	  	$('body').find('.pb_overlay').attr('style','');
	  	return false;
	  });
	}
}