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

	$('.modify-search').click();

	setTimeout(function(){ 
		var test = $('.search-filters-compact');
		$('.search-header__related').prepend(test);
	}, 100);
	$("#modify-search-submit-button" ).on( "click", function() {
		console.log("CLICK")
		// $('mat-dialog-container .ps-content .search-summary').remove()
		// setTimeout(function(){ 
		//    	$('.modify-search').click();

		// 	setTimeout(function(){ 
		// 		var test = $('mat-dialog-container .ps-content');
		// 		$('.search-summary').prepend(test);
		// 	}, 100);
		// }, 1000);
	});
	var styles = "<style>";
	styles += `
	.cdk-overlay-container {
		// display: none;
	}
	#modify-search-submit-button {
		position: relative;
	}
	#modify-search-submit-button:after {
		display: block;
		content: " ";
		width: 30px;
		height: 30px;
		top: 0;
		left: 0;
		position: absolute;
		background-color: red;
	}
	`;
	styles    += "</style>";
	jQuery('body').append(styles);
}