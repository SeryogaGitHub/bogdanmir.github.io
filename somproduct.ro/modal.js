jQuery(function($) {
	if(location.pathname == '/plaseaza-comanda'){
		$('#id_comments').html('TEST ORDER DO NOT PROCESS');
	}
	setInterval(
		function(){
			if($('html').hasClass('modal-on') && $('.modal-context.cotentmodal').length != 0){
				$('body').find('.page').css('display','none');
			}else{
				$('body').find('.page').attr('style','');
				if($('body').find('.contain-sticky').length > 0 ){
					$('body').find('.contain-sticky').remove();
				}
			}
		},10);
	function clearmodalIds(datamessages = ""){
				$('body').find('[action="https://www.somproduct.ro/checkout/cart/couponPost"] button').attr('onclick','');
				$('body').find('#coupon_code').attr('id','');
				$('body').find('#remove-coupon').attr('id','');
				if($('body').find('#discount-coupon-form .messages').length>1){
					$('body').find('#discount-coupon-form .messages:eq(0)').remove();
				}
				
				$('body').find('#discount-coupon-form .messages-cupons').html('');
				$('body').find('#discount-coupon-form').before('<div class="show-hide-form-coupon"><a class="show-hide-form-coupon-link" href="#">Got coupon?</a></div>');
				$('body').find('#discount-coupon-form').before('<ul class="messages-cupons">'+datamessages+'</ul>');
				$('body').find('#discount-coupon-form').attr('id','').addClass('discount-coupon-ajax');
				$('body').find('.contain-sticky').css('display','block');
	}
	function reloadtotalAjaxmodal(data,datamessages){
		var html = $(data).find('.row.bottom-cart-container').html();
		$('body').find('.row.bottom-cart-container').html(html);
		clearmodalIds(datamessages);
	}
	function reloadAjaxmodal(data){
			if($(data).find('.cart [action="https://www.somproduct.ro/checkout/cart/updatePost"]').length){
				$('body').find('.contain-sticky').remove();
				$('body').find('.modal-context').addClass('cotentmodal');
				var html = $(data).find('.cart [action="https://www.somproduct.ro/checkout/cart/updatePost"]').closest('.cart').html();
				$('body').find('.modal-context.cotentmodal').find('[data-modal-control="content"]').html(html);
				if($('body').find('.modal-context.cotentmodal').find('.btn.btn-orange.bottom-button').length>0){
					$('body').find('.modal-context.cotentmodal').find('.btn.btn-orange.bottom-button').after('<div style="clear: both;"></div>');
				}
				if($('body').find('.modal-context.cotentmodal').find('[data-modal-control="content"]').find('.cart-item').length > 1){
					$('body').find('.modal-context.cotentmodal').find('.btn.btn-orange.bottom-button').wrap('<div class="button-sticky"><div class="contain-sticky"></div></div>');
					var html = $('body').find('.button-sticky').html();
					$('body').find('.button-sticky').remove();
					$('body').find('.modal-context.cotentmodal').after(html);
					$('body').find('.modal-context.cotentmodal').addClass('with-sticky');
				}else{
					$('body').find('.modal-context.cotentmodal').removeClass('with-sticky');
				}
				$('body').find('.modal-context.cotentmodal').find('[data-modal-control="content"]').find('.page-title').remove();
				clearmodalIds();
			}
	}
	function reloadAjaxdiscount(data){
			if($(data).find('#discount-coupon-form .discount').length){
				var html = $(data).find('#discount-coupon-form .discount').html();
				$('body').find('.modal-context.cotentmodal #discount-coupon-form .discount').html(html);
				clearmodalIds();
			}
	}
	$('body').on('click', '.show-hide-form-coupon-link', function(event) {
		$('body').find('.show-hide-form-coupon').addClass('d-none');
		$('body').find('[action="https://www.somproduct.ro/checkout/cart/couponPost"]').toggleClass('active');
		return false;
	});
	$('body').on('click', '[action="https://www.somproduct.ro/checkout/cart/couponPost"] button', function(event) {
		var serialize = $('body').find('[action="https://www.somproduct.ro/checkout/cart/couponPost"]').serialize();
		$('body').find('.messages-cupons').html('');
		$.ajax({
			url: 'https://www.somproduct.ro/checkout/cart/couponPost',
			type: 'GET',
			dataType: 'html',
			data: serialize,
		})
		.done(function(data) {
			if($(data).find('.messages').length>0){
					var html = $(data).find('.messages').html();
					$('body').find('.messages-cupons').append(html);
			}
			if($(data).find('.success-msg').length > 0){
				$.ajax({
					url: 'https://www.somproduct.ro/checkout/cart',
					type: 'GET',
					dataType: 'html',
				})
				.done(function(datacome) {
					reloadAjaxmodal(datacome);
					reloadAjaxdiscount(datacome);
					if($('html').hasClass('modal-on')){$('body').find('.page').css('display','none');}
				});
				console.log('add');
			}
		});
		
		return false;
	});
	$('body').append('<style>#discount-coupon-form,.modal-context{display:none!important}.modal-context.cotentmodal .modal-container .modal-content{    overflow-y: unset !important;    height: auto !important;max-height: none !important;}.modal-context.cotentmodal .modal-title.h1{color:#393939;font-size:15px;font-weight:700;letter-spacing:-0.21px;background-color:#f1f1f1}.modal-context.cotentmodal{    overflow-y: auto;display:block!important;background-color:rgba(0,0,0,0.3)!important}.modal-content .grid-12.cart-header{display:none}.modal-context.cotentmodal .col-1.text-center.qty-container .qty-wrapper input{float:left;width:26px;height:29px;border:0!important;font-size:16px;letter-spacing:-.4px;text-align:center;color:#000;outline:0;padding:0}.modal-context.cotentmodal .modal-content .discount{background-color:#f8f8f8;margin-right:-20px;margin-left:-20px}.modal-context.cotentmodal .modal-content{padding-bottom: 0;}.modal-context.cotentmodal .modal-content .totals .grand-total{font-size:16px;text-transform:none;font-family:MarkWebPro-Bold}.modal-context.cotentmodal .modal-content  .totals .tax{margin-top:0}.modal-context.cotentmodal .modal-content  .totals .tax .price{opacity:.5}.modal-context.cotentmodal .modal-content .totals-wrapper .col-5.value{float:right}.modal-context.cotentmodal .modal-content .totals-wrapper .col-7.label{float:left}.modal-context.cotentmodal .modal-content  .totals>.grid-12{margin:0px 0 0 -25px;text-transform:none;font-size:12px;color:#000;letter-spacing:-.3px}.modal-context.cotentmodal .modal-content .totals-wrapper .col-6.label{float:left;opacity:.5}.modal-context.cotentmodal .modal-content sup{top:-.5em}.modal-context.cotentmodal .modal-content .totals .subtotal{font-size:16px;letter-spacing:.1px;color:#000;text-transform:none;opacity:1!important}.modal-context.cotentmodal .modal-content .totals-wrapper .col-6.label{float:left}.modal-context.cotentmodal .modal-content .expires{font-size:12px;color:#bfbfbf;margin-bottom:.5rem}.modal-context.cotentmodal .modal-content .col-sm-12.totals-wrapper{margin-right:-4px;margin-left:-4px;background:#f8f8f8;padding-bottom:20px;}.modal-context.cotentmodal .modal-content .discount .btn{background:#d8d8d8;border:1px solid #d8d8d8;color:#000;height:36px;width:auto;font-family:MarkWebPro,sans-serif;padding:0 20px;margin-left:-1px;border-radius:8px}.modal-context.cotentmodal .modal-content .discount input{max-width:100%;flex:1 1 80%;color:#a4a4a4;border:solid 1px #f1f1f1;height:36px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0 10px;font-size:14px;-webkit-border-top-left-radius:8px;-webkit-border-bottom-left-radius:8px;-moz-border-radius-topleft:8px;-moz-border-radius-bottomleft:8px;border-top-left-radius:8px;border-bottom-left-radius:8px;-webkit-box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1);-moz-box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1);box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1)}.modal-context.cotentmodal .modal-content .discount .glued{text-align:center;display:inherit;width:calc(100% - 30px);display:flex;flex-wrap:nowrap;justify-content:stretch;padding:12px 15px}.modal-context.cotentmodal .modal-content .cart-item .cart-price .price-item{opacity:.5;font-size:10px;text-align:right;margin-top:5px;color:#000}.modal-context.cotentmodal .modal-content .cart-item .cart-price{font-size:16px;color:#000;letter-spacing:0}.modal-context.cotentmodal .modal-content .total-label{font-size:12px;font-weight:300;display:none;float:left;margin-right:5px}.modal-context.cotentmodal .modal-content .item-msg.error{color:#d9534f;font:12px MarkWebPro-Medium;text-transform:uppercase}.modal-context.cotentmodal .modal-content .item-options dd,.modal-context.cotentmodal .modal-content .item-options dt{margin:0;display:inline;color:#ffc75c;font-size:13px}.modal-context.cotentmodal .modal-content .bottom-cart-container .cart-info-list li{list-style:none;margin-bottom:5px}.modal-context.cotentmodal .modal-content .glued .input-text{margin-right:-20px;-webkit-box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1);-moz-box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1);box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1)}.modal-context.cotentmodal .btn.btn-orange.bottom-button{padding-top:15px;padding-bottom:14px;-ms-touch-action:manipulation;touch-action:manipulation;background-color:#ffc518;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font:15px MarkWebPro-Medium;text-transform:uppercase;color:#000;height:50px;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;box-shadow:none;float:right;letter-spacing:1.4px;margin-bottom:10px;margin-top:10px;text-transform:none}.modal-context.cotentmodal .payment-methods,.modal-context.cotentmodal .modal-content .discount-coupon-ajax label[for="coupon_code"],.modal-context.cotentmodal .modal-content .discount-coupon-ajax,.modal-context.cotentmodal .modal-content .show-hide-form-coupon.d-none{display:none}.modal-context.cotentmodal .modal-content .discount-coupon-ajax.active{display:block}.modal-context.cotentmodal .modal-content .show-hide-form-coupon-link{color:#000000;font-size:13px;letter-spacing:-0.17px;text-decoration:none}.modal-context.cotentmodal .grid-12.cart-item:after{position:absolute;top:99%;background-color:#f1f1f1;height:1px;left:-20px;right:-20px;display:block}.modal-context.cotentmodal .modal-content .bottom-cart-container .cart-info-list{display:none;text-align:center;margin-bottom:30px;opacity:.68;font-size:14px;line-height:1.57;margin:0;padding:0;letter-spacing:.1px;color:#000}.modal-context.cotentmodal .modal-content .col-2.text-center.subtotal-col{float:right;text-align:right;padding:10px 0;padding-bottom:0}.modal-context.cotentmodal .modal-content .item-options{margin:10px 0 0}.modal-context.cotentmodal .modal-content{background:#fff}.modal-context.cotentmodal .col-1.text-center.qty-container .spinner-item.right .spinner__increase{width:20px;padding:1px 0 4px 0;display:inline-block;max-width:20px}.modal-context.cotentmodal .col-1.text-center.qty-container .spinner-item.right{-webkit-border-top-right-radius:10px;-webkit-border-bottom-right-radius:10px;-moz-border-radius-topright:10px;-moz-border-radius-bottomright:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;float:left;font-size:23px;color:#000;width:27px;height:29px;text-align:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.modal-context.cotentmodal .col-1.text-center.qty-container .spinner-item.left .spinner__decrease{width:20px;padding:1px 0 4px 0;display:inline-block;max-width:20px}.modal-context.cotentmodal .col-1.text-center.qty-container .spinner-item.left{-webkit-border-top-left-radius:10px;-webkit-border-bottom-left-radius:10px;-moz-border-radius-topleft:10px;-moz-border-radius-bottomleft:10px;border-top-left-radius:10px;border-bottom-left-radius:10px;float:left;font-size:23px;color:#000;width:27px;height:29px;text-align:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.modal-context.cotentmodal .col-1.text-center.qty-container>.flex .qty-wrapper{border-radius:10px;padding:0;border:solid 1px #f1f1f1;width:80px;height:29px;white-space:nowrap;overflow:hidden}.modal-context.cotentmodal .col-1.text-center.qty-container>.flex{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.modal-context.cotentmodal .col-1.text-center.qty-container{float:left;padding-right:0}.modal-context.cotentmodal .col-7.product-info{float:left;width:calc(100% - 62px);padding-right:0}.modal-context.cotentmodal .qty-label{display:none}.modal-context.cotentmodal .btn-remove2{color:#252525;margin-top:10px;display:inline-block;font-size:13px}.modal-context.cotentmodal .item-links{display:none}.modal-context.cotentmodal #product_delivery_time.delivery-green{font-size:12px;color:#228b22;margin-bottom:10px;margin-top:10px;font-family:MarkWebPro,sans-serif;letter-spacing:-.3px;opacity:.68}.modal-context.cotentmodal ul.messages-cupons ul{list-style:none;margin:0;padding:0}.modal-context.cotentmodal ul.messages-cupons .success-msg:before{font-size:13px;width:20px;position:absolute;left:20px;top:50%;transform:translateY(-50%);content:url(https://d1jtwkmfe1h6h4.cloudfront.net/skin/frontend/smp/default/img/success.svg)}.modal-context.cotentmodal ul.messages-cupons .success-msg{background:#efefef;margin-bottom:10px;position:relative;padding:17px 25px 17px 50px;font-size:14px;font-family:MarkWebPro-Medium;border-radius:8px}.modal-context.cotentmodal ul.messages-cupons .error-msg{background:#efefef;margin-bottom:10px;position:relative;padding:17px 25px 17px 50px;font-size:14px;font-family:MarkWebPro-Medium;border-radius:8px}.modal-context.cotentmodal ul.messages-cupons .error-msg:before{content:url(https://d1jtwkmfe1h6h4.cloudfront.net/skin/frontend/smp/default/img/error.svg);font-size:13px;width:20px;position:absolute;left:20px;top:50%;transform:translateY(-50%)}.modal-context.cotentmodal .messages-cupons{margin:0;padding:0;list-style:none}.modal-context.cotentmodal .show-hide-form-coupon{margin-left:-18px;margin-right:-18px;padding:15px;background:#f8f8f8}.modal-context.cotentmodal .product-name,.modal-context.cotentmodal .product-name a{font-size:16px;color:#000;text-decoration:none;text-transform:none}.modal-context.cotentmodal .modal-title-container{border-radius:0px;background-color:#f1f1f1}.modal-context.cotentmodal .modal-close{background-size: 12px;width: 24px;height: 24px;display: block;background-position: center;margin-top: -6px;}.modal-context.cotentmodal .col-2.image-product-wrapper{width:62px;padding:0;margin:0;text-align:center;float:left;min-height:150px}.modal-context.cotentmodal .grid-12.cart-item{margin:0;padding-top:5px;position:relative;width:100%;float:left}.modal-context.cotentmodal .grid-12.cart-item:first-child{padding-top:0}.modal-context.cotentmodal .modal-container{width:95%!important;background:none;margin-top:15px;top:0;transform:none}.modal-context.cotentmodal .product-delivery #product_delivery_time{font-size:13px;margin-top:10px}.modal-context.cotentmodal{background:none}.modal-context.cotentmodal.with-sticky .modal-content .col-sm-12.totals-wrapper{padding-bottom:60px}.contain-sticky .btn.btn-orange.bottom-button{padding-top:15px;padding-bottom:14px;-ms-touch-action:manipulation;touch-action:manipulation;background-color:#ffc518;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font:15px MarkWebPro-Medium;text-transform:uppercase;color:#000;height:50px;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;box-shadow:none;float:right;letter-spacing:1.4px;margin-bottom:10px;margin-top:10px;text-transform:none}.contain-sticky{position:fixed;z-index:999999999999;left:0;right:0;bottom:0;padding:8px 16px;background:#f8f8f8}.contain-sticky>.btn.btn-orange.bottom-button{margin:0;height:auto}</style>');
	$(document).ajaxComplete(function(event, xhr, settings) {
		if(settings.url == 'https://www.somproduct.ro/smp/cart/ajaxAdd'){
			var interval = setInterval(function (){
				if( $('body').find('.modal-context').length>0 ){
					clearInterval(interval);
					$('body').find('.modal-context').attr('style','');
					$.ajax({
						url: 'https://www.somproduct.ro/checkout/cart',
						type: 'GET',
						dataType: 'html',
					})
					.done(function(data) {
						reloadAjaxmodal(data);
						if($('html').hasClass('modal-on')){$('body').find('.page').css('display','none');}
					});
				}
			});
		}
	});
	$('body').on('click', '.modal-context.cotentmodal [data-modal-control="close"]', function(event) {
		$('.modal-context.cotentmodal.rand').remove();
		$('html').removeClass('modal-on');
		$('body').find('.page').attr('style','');
		$('body').find('.contain-sticky').css('display','none');
	});
	var htmlmodal = '<div class="modal-context rand" role="dialog" style="">  <div class="modal-container" data-modal-control="container" role="region" style="width: 960px;">    <div class="modal-title-container"><div class="modal-title h1" data-modal-control="title" role="heading">Produs adăugat în coș</div></div>    <button class="modal-close" data-modal-control="close"></button>    <div class="modal-content" data-modal-control="content"></div>  </div></div>';
	$('a[href="https://www.somproduct.ro/checkout/cart"]').click(function(event) {
		$('html').addClass('modal-on');
		$('body').append(htmlmodal);
		$.ajax({
			url: 'https://www.somproduct.ro/checkout/cart',
			type: 'GET',
			dataType: 'html',
		})
		.done(function(data) {
			reloadAjaxmodal(data);
			if($('html').hasClass('modal-on')){$('body').find('.page').css('display','none');}
		});
		return false;
	});
	$('body').on('click', '.spinner-item.left', function(event) {
		val2 = $(this).closest('.qty-wrapper').find('input').attr('value');
		val2 = Number(val2);
		val2--;
		if(val2 < 0){
			val2 = 0;
		}else{
			var val3 = $('.cart.cart-dropdown-toggle .mobile').html();
			val3 = Number(val3);
			val3--;
			if(val3 <= 0){
				val3 = "";
			}
			$('.cart.cart-dropdown-toggle .mobile').html(val3);
		}
		$(this).closest('.qty-wrapper').find('input').val(val2);
		$(this).closest('.qty-wrapper').find('input').attr('value',val2);
		$(this).closest('.qty-wrapper').find('input').trigger('change');
	});
	$('body').on('click', '.btn-remove', function(event) {
		var href = $(this).attr('href');
		$(this).closest('.cart-item').remove();
		if($('body').find('.modal-context.cotentmodal').find('[data-modal-control="content"]').find('.cart-item').length > 1){
			$('body').find('.modal-context.cotentmodal').find('.btn.btn-orange.bottom-button').wrap('<div class="contain-sticky"></div>');
			$('body').find('.modal-context.cotentmodal').addClass('with-sticky');
		}else{
			$('body').find('.modal-context.cotentmodal').removeClass('with-sticky');
		}
		$.ajax({
			url      : href,
			type     : 'GET',
			dataType : 'html',
		}).done(function(data) {
			$.ajax({
				url: 'https://www.somproduct.ro/checkout/cart',
				type: 'GET',
				dataType: 'html',
			})
			.done(function(data) {
				reloadAjaxmodal(data);
				if($('html').hasClass('modal-on')){$('body').find('.page').css('display','none');}
			});
		});
		return false;
	});
	$('body').on('click', '.spinner-item.right', function(event) {
		var val1 = $(this).closest('.qty-wrapper').find('input').attr('value');
		val1 = Number(val1);
		val1++;
		$(this).closest('.qty-wrapper').find('input').val(val1);
		$(this).closest('.qty-wrapper').find('input').attr('value',val1);
		$(this).closest('.qty-wrapper').find('input').trigger('change');
		var val3 = $('.cart.cart-dropdown-toggle .mobile').html();
			val3 = Number(val3);
			val3++;
			$('.cart.cart-dropdown-toggle .mobile').html(val3);
	});
	$('body').on('change', '[action="https://www.somproduct.ro/checkout/cart/updatePost"] input', function(event) {
		if(typeof window.timerout != 'undefined'){
			clearTimeout(window.timerout);
		}
		window.timerout = setTimeout(function(){
			var serialize = $('[action="https://www.somproduct.ro/checkout/cart/updatePost"]').serialize();
			$.ajax({
				url: 'https://www.somproduct.ro/checkout/cart/updatePost',
				type: 'POST',
				dataType: 'html',
				data:serialize,
			})
			.done(function(data) {
				$.ajax({
					url: 'https://www.somproduct.ro/checkout/cart',
					type: 'GET',
					dataType: 'html',
				})
				.done(function(data) {
					reloadAjaxmodal(data);
					if($('html').hasClass('modal-on')){$('body').find('.page').css('display','none');}
				});
			})
			.always(function() {
				console.log("complete");
			});

		},500);
		event.preventDefault();
	});
});