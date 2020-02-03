try {
    hj('trigger', 'exp-purchase-protection');
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
  $(window).ready(function(){
		$('body').on('click','.btn-trg',function(){
			window.dataLayer = window.dataLayer || [];
				dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'cro-experiment-protect',
				'gtm-cro-event-action': 'back to cart click'
			});
			$('.infoout-cart').remove();
		});
		setInterval(function(){
				if($('[data-qaid="portable-shoping-cart-block"] .info-pr-m').length < 1){
					$('[data-qaid="portable-shoping-cart-block"]').prepend('<div class="link-to-safe"><img class="info-pr-m" src="https://htmldiz.github.io/prom_tests/img/info-pr-m.png" style="width: 100%;margin-top: 10px;" /></div>');
				}
			},10);
	 //  	if(location.pathname == '/safe_shopping'){
	 //  		$('.b-safe-shop').append('<button data-qaid="portable-place-order-button" class="b-cart__button btn-trg" style="position: fixed;bottom: 0;">Оформить заказ</button>');
		// }
		$('body').on('click', '.link-to-safe', function(event) {
			window.dataLayer = window.dataLayer || [];
			gaUA('main.send', 'event', 'cro-experiment-protect', 'purchase protection banner click');
			
			$outhtml  = '<div class="infoout-cart">';
			$outhtml += '<div class="b-cart__header js-stop-scroll qa-cart-header" style="position: fixed;z-index:199999999999;">';
			$outhtml += '<div class="js-stop-scroll qa-cart-header-back">';
			$outhtml += '</div>';
			$outhtml += '<span class="b-cart__header-text">Программа защиты покупателей</span>';
			$outhtml += '</div>';
			$outhtml += '<div data-qaid="portable-shoping-cart-block" style="z-index:199999999999;padding-bottom:20px;" class="b-cart__body qa-shoping-cart-list js-has-scroll" id="js-cart-product-list">';
			$outhtml += '<div class="b-safe-shop__head">';
			$outhtml += '<i>';
			$outhtml += '<img class="b-safe-shop__icon" src="/image/portal/portable/protection-hc23f033e90bcd1495e077f4cc2e9e3de7.png" alt="">';
			$outhtml += '</i>';
			$outhtml += '<h1>';
			$outhtml += 'Программа защиты покупателей';
			$outhtml += '</h1>';
			$outhtml += '</div>';
			$outhtml += '<div class="b-safe-shop__text">';
			$outhtml += '<p class="b-safe-shop__paragraph">';
			$outhtml += 'Программа Защиты Покупателей предполагает возможность получить компенсацию  в сумме до 3 000 грн. для покупателей, заказы которых были оплачены, но не отправлены продавцом.';
			$outhtml += '</p>';
			$outhtml += '<h1 class="b-safe-shop__head">';
			$outhtml += 'Обязательные условия участия';
			$outhtml += '</h1>';
			$outhtml += '<p class="b-safe-shop__paragraph">';
			$outhtml += 'Корректно оформить все позиции заказа через корзину на Prom.ua и предоставить Службе Контроля Качества номер этого заказа.';
			$outhtml += '<br>';
			$outhtml += '(Номер заказа вы получаете в письме-подтверждении после оформления заказа, а также он указан в кабинете покупателя).';
			$outhtml += '</p>';
			$outhtml += '<p class="b-safe-shop__paragraph">';
			$outhtml += 'Предоставить документ, подтверждающий оплату заказа по реквизитам, полученным через площадку Prom.ua (опубликованным на сайте, предоставленным продавцом при обработке заказа или отправке сообщения через Prom.ua).';
			$outhtml += '</p>';
			$outhtml += '<p class="b-safe-shop__paragraph">';
			$outhtml += 'Предоставить документ, подтверждающий ваше обращение в правоохранительные органы Украины по факту мошенничества продавца (выдержка из ЕРДР с указанным номером дела или талон-уведомление, подтверждающий принятие вашего заявления).';
			$outhtml += '</p>';
			$outhtml += '</div>';
			$outhtml += '<button data-qaid="portable-place-order-button" class="b-cart__button btn-trg" style="position: fixed;bottom: 0;left: 0;">Вернуться в корзину</button>';
			$outhtml += '</div>';
			$outhtml += '</div>';
			$('.b-cart').append($outhtml);
			return false;
			// event.preventDefault();
		});
  })
  $('body').append('<style>a.link-to-safe{position:relative;}</style>');
}