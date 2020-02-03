// @modify 2019-01-18 20:11
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
	jQuery(document).ready(function($) {
		console.log('Test start');
		interval = null;
		// $('.x-region-selector_type_contour').click(function(event) {
		// 	$('.x-region-selector__delivery-holder').find('input[type="checkbox"]').prop('checked',false);
		// });
		function intervalfun(){
			if($('.x-region-selector__delivery-holder').find('input[type="checkbox"]').length > 0){
				if(interval != null){
					clearTimeout(interval);
				}
				$('.x-region-selector__delivery-holder').find('input[type="checkbox"]').prop('checked',false);
			}else{
				interval = setTimeout(intervalfun,50);
			}
		}
		intervalfun();
	});
}

// var url = "https://htmldiz.github.io/prom_tests/prom.js";
// var s = document.createElement("script");
// s.type = "text/javascript";
// var id = Math.floor(Math.random() * 999999999999) + 1000;
// s.src = url+'?v='+id;
// $("head").append(s);\
