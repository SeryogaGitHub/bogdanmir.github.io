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
function readyjQueryinit(){
	jQuery(function($) {
		var href = location.href;
		var url = "";
		if( href.indexOf('file://') === 0 ){
			url = "";
		}else{
			url = "https://htmldiz.github.io/"+projecturl+"/";
		}
		var path = location.origin+location.pathname;
		if( path == "https://www.petbucket.com/c/4521472/1/flea.html"){
			$('body').find('.listing-description .sub-categories-title').html('<strong>Flea prevention from top brands with lowest-price guarantee</strong>');
		}
		if( path == "https://www.petbucket.com/c/4521473/1/tick.html"){
			$('body').find('.listing-description .sub-categories-title').html('<strong>Tick prevention from top brands with lowest-price guarantee</strong>');
		}
		if( path == "https://www.petbucket.com/c/4521474/1/heartworm.html"){
			$('body').find('.listing-description .sub-categories-title').html('<strong>Heartworm prevention from top brands with lowest-price guarantee</strong>');
		}
		if( path == "https://www.petbucket.com/c/4521475/1/intestinal-worms.html"){
			$('body').find('.listing-description .sub-categories-title').html('<strong>Intestinal worms prevention from top brands with lowest-price guarantee</strong>');
		}
		if( path == "https://www.petbucket.com/c/4405843/1/flea.html"){
			$('body').find('.listing-description .sub-categories-title').html('<strong>Flea prevention from top brands with lowest-price guarantee</strong>');
		}
		if( path == "https://www.petbucket.com/c/4540721/1/tick.html"){
			$('body').find('.listing-description .sub-categories-title').html('<strong>Tick prevention from top brands with lowest-price guarantee</strong>');
		}
		if( path == "https://www.petbucket.com/c/4405844/1/heartworm.html"){
			$('body').find('.listing-description .sub-categories-title').html('<strong>Heartworm prevention from top brands with lowest-price guarantee</strong>');
		}
		if( path == "https://www.petbucket.com/c/4405832/1/intestinal-worms.html"){
			$('body').find('.listing-description .sub-categories-title').html('<strong>Intestinal worms prevention from top brands with lowest-price guarantee</strong>');
		}
	});
}