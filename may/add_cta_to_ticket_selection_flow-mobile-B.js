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


	$outhtml  = '<div class="show_fares_btn">Show Fares'
	$outhtml  += '<svg class="show_fares_arrow" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0L3.70688 0.793125L6.84562 3.9375H0V5.0625H6.84562L3.70688 8.20687L4.5 9L9 4.5L4.5 0Z" fill="white"/></svg>'
	$outhtml  += '</div>'
	$('.class-container .class__item').append($outhtml);


	$(".show_fares_btn" ).on( "click", function(event) {
		$(".show_fares_btn" ).css("background","red")

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
	.show_fares_btn {
		background: #006CB8;
		padding: 14px 32px;
		font-weight: 400;
		font-size: 11px;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		color: #FFFFFF!important;
		position: relative;
		z-index: 9999999;
	}
	.show_fares_arrow {
		margin-left: 5px;
	}
	.flights-product[_ngcontent-c11] .class-container[_ngcontent-c11] .class__item[_ngcontent-c11] {
		align-items: flex-end;
		justify-content: flex-end;
	}
	.flights-product[_ngcontent-c11] .class-container[_ngcontent-c11] .class__item--info[_ngcontent-c11] {
	    padding-left: 25px;
	}
	`;
	styles    += "</style>";
	jQuery('body').append(styles);
}