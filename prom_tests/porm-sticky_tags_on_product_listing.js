try {
    hj('trigger', 'prom_sticky_tags');
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
	jQuery(window).ready(function($){
		var interval = setInterval(function(){
		if ($(".promoFilters__root--1Vc6E li").length>0) {
			$(".promoFilters__root--1Vc6E").appendTo(".x-header__search-row.js-header")
			var all_width = 0;
			
			var html = $('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').html();
			$('.x-header__search-row.js-header .promoFilters__root--1Vc6E').find('li').length
			$('.x-header__search-row.js-header .promoFilters__root--1Vc6E').find('li').each(function(index, el) {
				all_width = all_width + $(el).outerWidth()+13;
			});
			var realAll_width = all_width - 26
			$('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').css('width',realAll_width+'px');
			var trPos = 0;
			$('body').on('click', '.x-header__search-row.js-header .ab-slider-arrow.left-arrow', function(event) {
				var space = $('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').offset().left;
				if(space < 0 && space < -200){
					trPos = trPos + 200;
				}else{
					if(space < 0){
						// $('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').animate(
						// 	{
						// 	left: '-='+space
						// },200);
						trPos = trPos - space;
					}
					$(this).css('display','none');
				}
				$('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').css('transform','translateX('+trPos+'px)');
				$('body').find('.x-header__search-row.js-header .ab-slider-arrow.right-arrow').attr('style','');
				return false;
			});
			$('body').on('click', '.x-header__search-row.js-header .ab-slider-arrow.right-arrow', function(event) {
				var space = $('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').outerWidth()  + $('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').offset().left - $('.x-header__search-row.js-header .ab-test-slider').outerWidth() + 20;
				if(space >= 200){
					// $('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').animate(
					// 	{
					// 	left: '-=200'
					// },200);
					trPos = trPos - 200;
				}else{
					if(space > 0){
						// $('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').animate(
						// 	{
						// 	left: '-='+space
						// },200);
						trPos = trPos - space;
					}
					$(this).css('display','none');
				}
					$('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').css('transform','translateX('+trPos+'px)');
					$('body').find('.x-header__search-row.js-header .ab-slider-arrow.left-arrow').attr('style','');
				return false;
			});
			$(".promoFilters__root--1Vc6E").wrap("<div class='wrap-ab-test-slider'><div class='ab-test-slider'></div></div>")
			$(".promoFilters__root--1Vc6E").before('<span class="ab-slider-arrow left-arrow"><svg class="horizontalSlideContent__controlIcon--5mfgs" viewBox="0 0 64 64"><use xlink:href="#right2"></use></svg></span>')
			$(".promoFilters__root--1Vc6E").after('<span class="ab-slider-arrow right-arrow"><svg class="horizontalSlideContent__controlIcon--5mfgs" viewBox="0 0 64 64"><use xlink:href="#right2"></use></svg></span>')
			$('.x-header__search-row.js-header').find('.ab-slider-arrow.left-arrow').css('display','none');
			setInterval(function(){
				var all_width = 0;
				$('.x-header__search-row.js-header .promoFilters__root--1Vc6E').find('li').each(function(index, el) {
					all_width = all_width + $(el).outerWidth()+13;
				});
				var realAll_width = all_width - 26;
				console.log(realAll_width);
				if(realAll_width <= $('.x-header__search-row.js-header .promoFilters__root--1Vc6E').outerWidth()){
					$('.x-header__search-row.js-header').find('.ab-slider-arrow.left-arrow').css('display','none');
					$('.x-header__search-row.js-header').find('.ab-slider-arrow.right-arrow').css('display','none');
					$('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').css('transform','unset');

				}else{
					var space = $('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').outerWidth()  + $('.x-header__search-row.js-header .promoFilters__root--1Vc6E ul').offset().left - $('.x-header__search-row.js-header .ab-test-slider').outerWidth() + 20;
					$('.x-header__search-row.js-header .promoFilters__root--1Vc6E .promoFilters__list--2qiSG').css({"margin":"0"})
					$('.x-header__search-row.js-header .ab-test-slider').css({"text-align":"left", "padding":"0"})
					if(trPos > -21){
						$('.x-header__search-row.js-header').find('.ab-slider-arrow.left-arrow').css('display','none');
						$('.x-header__search-row.js-header').find('.ab-slider-arrow.right-arrow').attr('style','');
					}else if(space == 0){
						if(space == 0){
							$('.x-header__search-row.js-header').find('.ab-slider-arrow.left-arrow').attr('style','');
							$('.x-header__search-row.js-header').find('.ab-slider-arrow.right-arrow').css('display','none');
						}
					}else{
							$('.x-header__search-row.js-header').find('.ab-slider-arrow.left-arrow').attr('style','');
							$('.x-header__search-row.js-header').find('.ab-slider-arrow.right-arrow').attr('style','');
					}
				} 
			}, 300) 
			var widthSlider = $('.x-header__container').outerWidth()
			var widthSliderElem = $('.x-header__search-row.js-header .promoFilters__root--1Vc6E .promoFilters__list--2qiSG').outerWidth()
			if (widthSlider < widthSliderElem) {
				$('.x-header__search-row.js-header .ab-test-slider').css({"min-width":"100%", "text-align":"center"})
				$('.x-header__search-row.js-header .promoFilters__root--1Vc6E .promoFilters__list--2qiSG').css({"margin":"0 auto"})
			} else {
				$('.x-header__search-row.js-header .ab-test-slider').css({"min-width":"0px", "text-align":"left"})
				$('.x-header__search-row.js-header .promoFilters__root--1Vc6E .promoFilters__list--2qiSG').css({"margin":"0"})
			}

			clearInterval(interval);
		}
		}, 10)
			var styles = "<style>";
			styles += `
			.x-header__search-row.js-header .promoFilters__root--1Vc6E ul{
				transition-duration: 200ms;
				position:relative;
			}
			.ab-test-slider,.ab-test-slider *,.ab-test-slider *::after, .ab-test-slider::before {
				box-sizing: border-box;
			}
			.x-header__search-row.js-header .promoFilters__root--1Vc6E{
				overflow: hidden;
				position: relative;
			}
			.x-breadcrumb {
				margin-top: 40px;
			}
			.x-header__container{
				flex-wrap: wrap;
			}
			.x-header__search-row.js-header .promoFilters__root--1Vc6E {
				margin: 0;
				padding: 0;
				border: none;
			}
			.x-header__search-row.js-header .promoFilters__root--1Vc6E .promoFilters__list--2qiSG {
				margin: 0;
			    padding: 7px 0;
				height: 44px;
				box-sizing: border-box;
				display: flex;
			}
			.x-header__search-row.js-header .promoFilters__root--1Vc6E .promoFilter__root--2p4V4{
				margin: 0 0 0 13px;
				flex: 0 0 auto;
			}
			.x-header__search-row.js-header .promoFilters__root--1Vc6E .promoFilter__root--2p4V4:first-child {
				margin-left: 0;
			}
			.x-header__search-row.js-header {
				flex-wrap: wrap;
			}
			.x-header__search-row.js-header .wrap-ab-test-slider {
				background-color: white;
				box-shadow: 0px 4px 20px rgba(38, 25, 47, 0.18);
				display: block;
				width: 100%;
			}
			.ab-test-slider .promoFilter__close--Y0BNJ {
				top: -6px;
			}
			.ab-test-slider .promoFilter__content--t_x1a {
				height: 30px;
				border-radius: 100px;
				color: #333;
				border-color: #f5c002;
			}
			.ab-test-slider .promoFilter__content--t_x1a:hover {
				background-color: #f6f8fd;
			}
			.x-header__search-row.js-header .ab-test-slider {
				position: relative;
				padding: 0 20px;
				margin: auto;
			}
			.ab-slider-arrow {
				width: 20px;
				height: 44px;
				position: absolute;
				top: 0;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				background: #DFE1EF;
				cursor: pointer;
				z-index: 2;
			}
			.ab-slider-arrow:before {
				position: absolute;
				top: 0;
				bottom: 0;
				width: 50px;
				pointer-events: none;
				content: '';
			}
			.ab-slider-arrow.left-arrow{
				left: 0;
			}
			.ab-slider-arrow.left-arrow svg{
				transform: rotate(180deg);
			}
			.ab-slider-arrow.right-arrow{
				right: 0;
			}
			.ab-slider-arrow.left-arrow:before{
				background: linear-gradient(to right,#f6f8fd 0,rgba(246,248,253,0) 100%);
				left: 100%;
			}
			.ab-slider-arrow.right-arrow:before{
				background: linear-gradient(to left,#f6f8fd 0,rgba(246,248,253,0) 100%);
				right: 100%;
			}
			.x-header__search-row.js-header .ab-test-slider {
				width: 998px;
			}
			@media only screen and (min-width: 1240px) {
				.x-header__search-row.js-header .ab-test-slider {
					width: 1240px;
				}
			}
			@media only screen and (min-width: 1500px) {
				.x-header__search-row.js-header .ab-test-slider {
					width: 1482px;
				}
			}
			`;
			styles    += "</style>";
			jQuery('body').append(styles);
	})
}