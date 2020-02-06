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


	$outhtml  = '<div class="ab_show_fares_btn">Показать тарифы'
	$outhtml  += '<svg class="show_fares_arrow" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0L3.70688 0.793125L6.84562 3.9375H0V5.0625H6.84562L3.70688 8.20687L4.5 9L9 4.5L4.5 0Z" fill="white"/></svg>'
	$outhtml  += '</div>'

	$outhtmlselect  = '<div class="ab_select_btn">Выбрать'
	$outhtmlselect  += '</div>'
	setInterval(function(){
		$( ".class-container .class__item" ).each(function(  ) {
			if ($(this).find('.ab_show_fares_btn').length< 1) {
				    $(this).append($outhtml);
			}
		})
		if (window.matchMedia('(max-width: 1280px)').matches) {
			$( ".flights-fares[_ngcontent-c16] .fare-family__item[_ngcontent-c16] .price-container[_ngcontent-c16] .item__price[_ngcontent-c16]" ).each(function(  ) {
				if ($(this).find('.ab_select_btn').length< 1) {
					    $(this).append($outhtmlselect);
				}
			})
		}
	}, 100);

	$(".clickable-product").on( "click", function(event) {
	})
	var styles = "<style>";
	styles += `
	.ab_show_fares_btn,
	.ab_select_btn {
		background: #006CB8;
		padding: 14px 32px;
		font-weight: 400;
		font-size: 11px;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		color: #FFFFFF!important;
		position: relative;
	}
	.soldout .ab_show_fares_btn,
	.opened .ab_show_fares_btn,
	.soldout .ab_select_btn,
	.fare-selected .ab_show_fares_btn,
	.fare-selected .ab_select_btn {
		display: none;
	}
	.show_fares_arrow {
		margin-left: 5px;
	}
	@media (min-width: 1280px) {
		.flights-product[_ngcontent-c11] .class-container[_ngcontent-c11] .class__item--info[_ngcontent-c11] {
			padding-left: 25px;
		}
		.flights-product[_ngcontent-c11] .class-container[_ngcontent-c11] .class__item[_ngcontent-c11] {
			flex-direction: row;
			justify-content: space-between;
		}
		.flights-product[_ngcontent-c11] .class-container[_ngcontent-c11] .class__item[_ngcontent-c11] .ab_show_fares_btn {
			margin-right: 1.2rem;
		}
		.search-results-container[_ngcontent-c6] .product__controls[_ngcontent-c6] .cabin-classes[_ngcontent-c6] .class__item.Business[_ngcontent-c6],
		.search-results-container[_ngcontent-c6] .product__controls[_ngcontent-c6] .cabin-classes[_ngcontent-c6] .class__item.Economy[_ngcontent-c6] {
			opacity: 0.8;
		}

	}
	@media (max-width: 1280px) {
		.flights-product[_ngcontent-c11] .class-container[_ngcontent-c11] {
			padding: 1.2rem;
		}
		.flights-product[_ngcontent-c11] .class-container[_ngcontent-c11] .class__item[_ngcontent-c11] {
			align-items: flex-end;
		}
		.flights-product[_ngcontent-c11] .class-container[_ngcontent-c11] .class__item--info[_ngcontent-c11] {
			padding-right: 0;
		}
		.flights-product[_ngcontent-c11] .class-container[_ngcontent-c11] .fare-selected .class__item--info[_ngcontent-c11] {
			padding-bottom: 0;
		}
		.flights-fares[_ngcontent-c16] .fare-family__item[_ngcontent-c16] .price-container[_ngcontent-c16] .item__price[_ngcontent-c16] {
			align-items: center;
			justify-content: space-between;
		}
	}
	`;
	styles    += "</style>";
	jQuery('body').append(styles);
}