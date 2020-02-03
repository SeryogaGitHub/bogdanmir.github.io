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
function readyjQueryinit(){
	console.log('Loaded test');
	jQuery(function($) {
		function getC(cname) {
		    var name = cname + "=";
		    var decodedCookie = decodeURIComponent(document.cookie);
		    var ca = decodedCookie.split(';');
		    for(var i = 0; i <ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0) == ' ') {
		          c = c.substring(1);
		      }
		      if (c.indexOf(name) == 0) {
		          return c.substring(name.length, c.length);
		      }
		  }
		  return "";
		}
		function setC(cname, cvalue, exdays) {
			if(!exdays){
				exdays = 1;
			}
		  var d = new Date();
		  d.setTime(d.getTime() + (exdays*24*60*60*1000));
		  var expires = "expires="+ d.toUTCString();
		  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}
		function empty(name){
			name = name.trim();
			return (name == '');
		}
		function location_contain(name){
			return location.pathname.search(name) != -1;
		}
		$('body').on('click', '#fixed_div.bottom_page.sticky,.cbb-also-bought-add-to-cart-button, .product-form__cart-submit', function(event) {
			setC('useradd_producttocart','true');
			event.preventDefault();
		});
		$( window ).unload(function() {
			var useradd_producttocart = getC('useradd_producttocart');
			var is_cart               = location_contain('cart');
			if(!empty(useradd_producttocart) && is_cart){
				setC('trylivecart','true');
			}
		});
		function render_popup(form){
			$outhtml  = '<div class="fixed-box-modal">';
			$outhtml += '<div class="fixed-box-modal-content">';
			$outhtml += '<div class="modal-box-top">Unpaid products in your cart are in high demand. We can"t guarantee their availability if you leave the site.<button class="modal-close" data-modal-control="close"></button></div>';
			$outhtml += '<form action="modal-popup-fx">';
			$outhtml += '</form>';
			$outhtml += '<div class="modal-box-bottom">Get 10% off if you complete your order now</div>';
			$outhtml += '<div class="modal-box-bottom-link"><a href="https://sidekicktool.com/checkout">Complete your order with 10% OFF</a></div>';
			$outhtml += '</div>';
			$outhtml += '</div>';
			$outhtml += '<style>.fixed-box-modal-content .modal-close{position: absolute;right: -20px;top: -30px;background: url(https://d1jtwkmfe1h6h4.cloudfront.net/skin/frontend/smp/default/img/close-icon.png);display: block;background-position: center;    background-repeat: no-repeat;border: none;width: 24px;height: 24px;}.modal-box-bottom-link{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:15px 18px}.modal-box-bottom-link a{text-align: center;width: 100%;border-radius:4px;background-color:#5bbfb9;font-size:12px;font-weight:700;letter-spacing:-0.17px;text-transform:uppercase;color:#ffffff;padding:10px}.modal-box-bottom{color:#e7624b;font-size:14px;font-weight:900;letter-spacing:-0.43px;border:1px solid #e7624b;background-color:#ffffff;max-width:90%;width:90%;margin-left:auto;margin-right:auto;padding:10px 24px;text-align:center}.modal-box-top{border-top-left-radius: 4px;border-top-right-radius: 4px;position: relative;width:100%;color:#ffffff;font-family:Lato;font-size:12px;font-weight:700;letter-spacing:-0.37px;line-height:18px;padding:11px 12px;background-color:#e7624b;text-align:center}.fixed-box-modal{bottom:0;position:fixed;top:0;left:0;right:0;background:rgba(0,0,0,0.3);z-index:99999999999;display:none;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;overflow:auto}.fixed-box-modal.show{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}td.cart__update-wrapper.cart-flex-item.text-right{position:absolute;bottom:9px;left:85px;padding-left:0px;padding-right:0;padding-bottom:0;width:42px}.fixed-box-modal-content .cart__qty{padding:0}.fixed-box-modal-content .cart__meta.small--text-left.cart-flex-item{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;max-width:auto}.fixed-box-modal-content .cart__qty-input{height:28px;max-width:100%;padding:0;text-align:center}.fixed-box-modal-content tr.cart__row.border-bottom.cart-flex{position:relative;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.fixed-box-modal-content td.text-right.small--hide{display:block!important;-ms-flex-order:3;order:3;border:none;-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;-webkit-box-flex:0;-webkit-flex:0 0 100px;-ms-flex:0 0 100px;flex:0 0 100px;max-width:100px}.fixed-box-modal-content{min-height:10px;border-radius:4px;width:80%;margin-left:auto;margin-right:auto;background:#ebeff2;margin-bottom:50px;margin-top:50px}.fixed-box-modal-content .border-bottom{border:none}.fixed-box-modal-content .cart-flex-item{-ms-flex-order:4;order:4;border:none}.fixed-box-modal-content .cart__meta{-ms-flex-order:2;order:2;font-size:12px;font-weight:400;letter-spacing:-0.4px;line-height:12px;color:#4a4d53;padding-left:0px;padding-bottom:0}.fixed-box-modal-content .cart__update-wrapper .spinner-new{max-width:100%}.fixed-box-modal-content .cart__image-wrapper{-ms-flex-order:1;order:1}.fixed-box-modal-content .cart__image-wrapper a{padding:0px}@media(min-width:750px){.fixed-box-modal-content .cart__meta{width:300px}.fixed-box-modal-content td.text-right.small--hide{max-width:calc(100% - 430px);flex:0 0 100%}td.cart__update-wrapper.cart-flex-item.text-right{left:130px}}@media(max-width:749px){.fixed-box-modal-content .cart__meta.small--text-left.cart-flex-item{max-width:calc(100% - 200px);flex:0 0 100%}.fixed-box-modal-content td.text-right.small--hide{font-size:12px}}@media(max-width:379px){.fixed-box-modal-content .cart__meta.small--text-left.cart-flex-item{max-width:90px;padding-right:5px}.fixed-box-modal-content td.text-right.small--hide{flex:0 0 80px;max-width:80px;padding:10px 8px}}tr.cart__row.border-bottom.line1.cart-flex:first-child {margin-top: 14px;}[action="modal-popup-fx"] table {    margin-bottom: 0;}tr.cart__row.border-bottom.cart-flex:last-child {margin-bottom: 15px;}</style>';
			$('body').append($outhtml);
			$('.recommend-product-wrapper',form).remove();
			$('script',form).remove();
			$('style',form).remove();
			$('script',form).remove();
			$('.cart__row.border-bottom:last-child',form).remove();
			// $('.small--hide',form).remove();
			$('thead.cart__row.cart__header',form).remove();
			$('.cart__price-wrapper.cart-flex-item',form).remove();
			$('.input-group-btn-vertical',form).remove();
			$('.cart__remove',form).remove();
			$('.cart__update',form).remove();
			$('.cart__qty-label',form).remove();
			$('[action="modal-popup-fx"]').html(form.html());
			display_popup();
		}
		function get_cart(){
			var useradd_producttocart = getC( 'useradd_producttocart' );
			if(!empty(useradd_producttocart)){
				jQuery.ajax({
					url: 'https://sidekicktool.com/cart',
					type: 'GET',
					dataType: 'html',
				})
				.done(function(data) {
					var form = jQuery(data).find('[action="/cart"] .cart_top').clone();
					render_popup(form);
				});
				
			}
		}
		function display_popup(){
			// setTimeout(
				// function(){
					console.log('%c Display popup! ', 'background: #e7624b; color: #ffffff','');
					setC( 'useradd_producttocart' , '' , 0 );
					setC( 'visitcheckout'         , '' , 0 );
					setC( 'trylivecart'           , '' , 0 );
					setC( 'visitcart'             , '' , 0 );
					setC( 'product_in_cart_url'   , '' , 0 );
					$('body').find('.fixed-box-modal').addClass('show');
				// }
			// ,10000);
		}
		$('body').on('click', '.fixed-box-modal.show', function(event) {
			$(this).remove();
			return false;
		});
		$('body').on('click', '.fixed-box-modal-content .modal-close', function(event) {
			$('.fixed-box-modal.show').remove();
			return false;
		});
		$('body').on('click', '.fixed-box-modal-content', function(event) {
			return false;
		});
		$('body').on('click', '.fixed-box-modal-content a[href="https://sidekicktool.com/checkout"]', function(event) {
			location.href = 'https://sidekicktool.com/checkout';
		});
		$('body').on('click', '#buy-now1, .product-form__cart-submit', function() {
			setC( 'product_in_cart_url'   , location.pathname  );
		});
		function checkfordisplaypopup(){
			var useradd_producttocart = getC( 'useradd_producttocart' );
			var trylivecart           = getC( 'trylivecart' );
			var checkouts             = location_contain( 'checkouts' );
			var cart                  = location_contain( 'cart' );
			if( checkouts ){
				setC('visitcheckout','true');
			}
			if( cart ){
				setC('visitcart','true');
			}
			var visitcheckouts        = getC('visitcheckout');
			var product_in_cart_url   = getC('product_in_cart_url');
			var visitcart             = getC('visitcart');
			console.log('checkouts', checkouts);
			console.log('cart', cart);
			if(!empty(useradd_producttocart) && !empty(trylivecart) ){
				if( visitcart && !cart && !checkouts && location.pathname != product_in_cart_url){
					get_cart();
				}
				if( visitcart && cart && !empty(visitcheckouts) && location.pathname != product_in_cart_url){
					get_cart();
				}
			}
		}
		checkfordisplaypopup();
	});
}