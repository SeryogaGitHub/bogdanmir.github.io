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
			// $('[data-qaid="shopping_cart"]').click();
			// $('.infoout-cart').remove();
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'cro-experiment-protect',
				'gtm-cro-event-action': 'back to cart click'
			});

			$(".qa-shoping-cart-list").show();
			$(".x-overlay__dialog.x-cart-overlay .for_cart_popup.x-ss-page").hide();
			$(".x-overlay__dialog.x-cart-overlay .coverCloseIcon").hide();
		});
		$('body').on('click','.coverCloseIcon',function(){
			// $('[data-qaid="shopping_cart"]').click();
			// $('.infoout-cart').remove();
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'cro-experiment-protect',
				'gtm-cro-event-action': 'back to cart close click'
			});

			$(".qa-shoping-cart-list").show();
			$(".x-overlay__dialog.x-cart-overlay .for_cart_popup.x-ss-page").hide();
			$(".x-overlay__dialog.x-cart-overlay .coverCloseIcon").hide();
		});
		setInterval(function(){
				if($('.qa-shoping-cart-list .x-title .info-pr-m').length < 1){
					$('.qa-shoping-cart-list .x-title').prepend('<a class="link-to-safe" href="https://prom.ua/safe_shopping"><img class="info-pr-m" src="https://htmldiz.github.io/prom_tests/img/info-pr-d.png" style="width: 100%;" /></a>');
				}

		},10);
	 //  	if(location.pathname == '/safe_shopping'){
	 //  		$('.b-safe-shop').append('<button data-qaid="portable-place-order-button" class="b-cart__button btn-trg" style="position: fixed;bottom: 0;">Оформить заказ</button>');
		// }

		$('body').on('click','.qa-shoping-cart-list .x-shc-total__controls-wrapper .qa-sc_list-buy_button',function(){
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'cro-experiment-protect',
				'gtm-cro-event-action': 'checkout click'
			});
		});

		$('body').on('click', '.link-to-safe', function(event) {
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'gtm-cro-event',
				'gtm-cro-event-category': 'cro-experiment-protect',
				'gtm-cro-event-action': 'purchase protection banner click'
			});

			$('.x-overlay__dialog.x-cart-overlay').append('<div class="for_cart_popup x-ss-page"> <div class="x-ss-page__content"> <h1 class="x-ss-page__title"> Программа защиты покупателей</h1> <table class="x-ss-page__table"> <tbody> <tr> <td class="x-ss-page__cell x-ss-page__cell_va_middle"> <img src="https://uaprom-static.c.prom.st/image/portal/content_pages/safe_shopping/defence-hc8f785ac239441fa46a8fba532188b1a6.svg" class="x-ss-page__img" alt="defence"> </td><td class="x-ss-page__cell x-ss-page__cell_va_middle"> <p> Программа Защиты Покупателей предполагает возможность получить компенсацию в сумме до 3 000 грн. для покупателей, заказы которых были оплачены, но не отправлены продавцом. </p></td></tr></tbody> </table> </div><div class="x-ss-page__line"></div><div class="x-ss-page__content"> <h2 class="x-title x-title_ta_center x-title_mb_30 x-title_lh_1"> Для получения компенсации нужно выполнить три условия: </h2> <table class="x-ss-page__table x-ss-page__table_layout_fixed"> <tbody> <tr> <td class="x-ss-page__cell x-ss-page__cell_align_center"> <img src="https://uaprom-static.c.prom.st/image/portal/content_pages/safe_shopping/cart-hc340f0d52bbacafc5b83de14cd64390b9.svg" class="x-ss-page__img x-ss-page__img_type_small" alt="cart"> </td><td class="x-ss-page__cell x-ss-page__cell_align_center"> <img src="https://uaprom-static.c.prom.st/image/portal/content_pages/safe_shopping/opl-hc1089eb35bb73c22cda17e48edc6be740.svg" class="x-ss-page__img x-ss-page__img_type_small" alt="cart"> </td><td class="x-ss-page__cell x-ss-page__cell_align_center"> <img src="https://uaprom-static.c.prom.st/image/portal/content_pages/safe_shopping/police-hc90e4947821a0e35d57d48b2fd86e335a.svg" class="x-ss-page__img x-ss-page__img_type_small" alt="cart"> </td></tr><tr> <td class="x-ss-page__cell"> <p> Корректно оформить все позиции заказа через корзину на Prom.ua и предоставить Службе Контроля Качества номер этого заказа. </p><br><p> Номер заказа вы получаете в письме-подтверждении после оформления заказа, а также он указан в кабинете покупателя. </p></td><td class="x-ss-page__cell"> <p> Предоставить документ, подтверждающий оплату заказа по реквизитам, полученным через площадку Prom.ua (опубликованным на сайте, предоставленным продавцом при обработке заказа или отправке сообщения через Prom.ua). </p></td><td class="x-ss-page__cell"> <p> Предоставить документ, подтверждающий ваше обращение в правоохранительные органы Украины по факту мошенничества продавца (выдержка из ЕРДР с указанным номером дела или талон-уведомление, подтверждающий принятие вашего заявления). </p></td></tr></tbody> </table> </div><div class="x-ss-page__line"></div><div class="x-gradient-block x-gradient-block_size_large"> <div class="x-gradient-block__content x-gradient-block__content_size_large"> <div class="x-title x-title_ta_center x-title_mb_30 x-title_lh_1"> Когда покупатель не сможет воспользоваться Программой Защиты Покупателей? </div><ul class="x-ss-page__list"> <li class="x-ss-page__list-item"> Сделка на портале Prom.ua была оформлена не через корзину; </li><li class="x-ss-page__list-item"> Реквизиты для оплаты заказа получены вне системы Prom.ua. Например через sms сообщение, личную почту, в телефонном режиме или другие каналы общения; </li><li class="x-ss-page__list-item"> Товар заказан с помощью Покупки без риска; </li><li class="x-ss-page__list-item"> Товар доставлен, но не соответствует заказу или товар оказался ненадлежащего качества (в таком случае обмен или возврат товара осуществляется в соответствии с Законом Украины "О защите прав потребителей"); </li><li class="x-ss-page__list-item"> Место отправки или место получения товара находится за пределами Украины; </li><li class="x-ss-page__list-item"> С момента оформления заказа прошло более 90 календарных дней; </li><li class="x-ss-page__list-item"> Товар не был доставлен или был повреждён по вине службы доставки (обратитесь в отделение перевозчика для уточнения процедуры компенсации); </li><li class="x-ss-page__list-item"> На момент обращения покупатель уже получил компенсацию по сделке от продавца или платежной системы; </li><li class="x-ss-page__list-item"> Заказана услуга. </li></ul> <p class="x-ss-page__grey-text"> *Обращение на выплату компенсации могут подавать только лица, данные которых указаны в заказе. Заявки от третьих лиц не рассматриваются. </p></div></div><div class="wrap-back-btn"> <button data-qaid="portable-place-order-button" class="b-cart__button btn-trg b-cart__button btn-trg x-button x-button_theme_dark-blue x-button_width_full x-button_size_l">Вернуться в корзину</button> </div></div><div class="coverCloseIcon"></div>');

			$(".x-overlay__dialog.x-cart-overlay .for_cart_popup x-ss-page").show();
			$(".qa-shoping-cart-list").hide();
			return false;
			// event.preventDefault();
		});
  })
  $('body').append('<style>a.link-to-safe{position:relative;display: inline-block;float: right;width: 445px;margin-top: -5px;margin-right:60px;}.x-ss-page__line:after{left: -30px;right: -30px;}.x-ss-page{padding-right: 0px;padding-left: 0px; padding-bottom:0;}.for_cart_popup .b-cart__button.btn-trg{display: block;-webkit-box-sizing: border-box;box-sizing: border-box;margin: auto;padding: 11px;width: 100%;border: 0;border-radius: 3px;background-color: #51499d;color: #fff;text-align: center;font-weight: 700;font-size: 14px;cursor: pointer;-webkit-appearance: none;max-width: 400px;}.for_cart_popup .x-gradient-block {background: none;}.coverCloseIcon{cursor:pointer; position: absolute;top: 10px;right: 10px;width: 40px;height: 40px;z-index: 9;}.wrap-back-btn{margin-top: 60px;background: #f6f8fd;margin-top: 60px;padding: 10px;position: sticky;position: -webkit-sticky;bottom: 0;left: 0;right: 0;}</style>');
  $('head').append('<link rel="stylesheet" href="https://uaprom-static.c.prom.st/css/portal_content_pages-hcd75db33f336d1821d9b289d6b1144bdf.css" type="text/css" media="all">');
}