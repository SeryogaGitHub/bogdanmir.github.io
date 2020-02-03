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
			$('[data-qaid="shopping_cart"]').click();
		});
		setInterval(function(){
				if($('[data-qaid="portable-shoping-cart-block"] .info-pr-m').length < 1){
					$('[data-qaid="portable-shoping-cart-block"]').prepend('<img class="info-pr-m" src="https://htmldiz.github.io/prom_tests/img/info-pr-m.png" style="width: 100%;margin-top: 10px;" />');
				}
			},10);
	  	if(location.pathname == '/safe_shopping'){
	  		$('.b-safe-shop').append('<button data-qaid="portable-place-order-button" class="b-cart__button btn-trg" style="position: fixed;bottom: 0;">Оформить заказ</button>');
		}
  })
  $('body').append('<style>a.link-to-safe{position:relative;}a.link-to-safe:before{content:"";position:absolute;left:-15px;right:-15px;display:block;bottom:6px;height:1px;background:#f2f9fc}</style>');
  console.log('@modify 2019-02-04 23:40');
}
// 