hj('trigger', 'sticky_purchase_buttons');
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
  window.dataLayer = window.dataLayer || [];
    dataLayer.push({
    'event': 'autoEvent',
    'eventCategory': 'Exp - Sticky Purchase Buttons',
    'eventAction': 'loaded'
  });
  $(window).ready(function(){

    $('body').after('<div class="wrap_sticky_btn buy-button-placeholder one_buy_btn"><a href="#" class="buy-button">Купить</a></div>');

    $(document).on( "touchstart click", ".wrap_sticky_btn a:first-child", function(event) {
      $(".wrap_sticky_btn a:first-child").css("background-color", "blue")
      window.dataLayer = window.dataLayer || [];
        dataLayer.push({
        'event': 'autoEvent',
        'eventCategory': 'Exp - Sticky Purchase Buttons',
        'eventAction': 'click',
        'eventLabel': 'Buy'
      });

      // $(this).click();
      $(".product-buy-container .button .buy-button-placeholder>div").click();
      $(".wrap_sticky_btn .buy-button").replaceWith('<a href="#" class="to-cart-button valign-wrapper"><span>В корзине</span></a>')
      event.preventDefault();
      alert("Alert")
    })


    var styles = `<style> 
      .wrap_sticky_btn {
        position: fixed;
        bottom: 0;
        transition: bottom .2s;
        right: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        z-index: 999;
      }
      .wrap_sticky_btn .to-cart-button {
        width: 50%;
      }
      .wrap_sticky_btn .buy-button,
      .wrap_sticky_btn .buy_credit_btn {
        cursor: pointer;
      }
      .wrap_sticky_btn.one_buy_btn div {
        width: 100%;
      }
      .wrap_sticky_btn div {
        text-transform: initial;
      }
      .buy_credit_btn {
        height: 44px;
        width: 50%;
        text-align: center;
        border: 2px solid #fd0028;
        cursor: pointer;
        position: relative;
        font-weight: 500;
        box-sizing: border-box;
        overflow: hidden;
        z-index: 1;
        transition: color 1s ease;
        color: #fd0028;
        background-color: #fff;
        flex: 0 0 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  </style>`;
  styles = styles += '';
  $('body').after(styles);
  })
}