console.log('%c script is come', 'background: #e7624b; color: #ffffff','');
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
function setC(cname, cvalue, exdays = 1) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
window.this_tab_loaded = false;
jQuery(function($) {
    var clone = "";
    var _popupcandisplay = getC('popupcandisplay');
    if(_popupcandisplay == 'true'){
		try {
			hj('trigger', 'exit_intent_popup');
		} 
		catch(e) {}
		console.log('%c hj run', 'background: #e7624b; color: #ffffff','');
    }
    function get_data_item(name){
        var cart_items = getC('cart_items');
        if(cart_items == ''){
            cart_items = {};
        }else{
            cart_items = JSON.parse(cart_items);
        }
        // console.log((typeof cart_items[name] != 'undefined') ? cart_items[name] : '0');
        return (typeof cart_items[name] != 'undefined') ? cart_items[name] : '0';
        // return cart_items;
    }
    function set_data_item( name, value ){
        value = repl_url( value );
        // console.log(value);
        var cart_items = getC('cart_items');
        if(cart_items == ''){
            cart_items = {};
        }else{
            cart_items = JSON.parse(cart_items);
        }
        cart_items[name] = value;
        var save = JSON.stringify(cart_items);
        // console.log('save');
        // console.log(cart_items);
        // console.log(save);
        setC('cart_items', save);
        // return (typeof cart_items[name] != 'undefined') ? cart_items[name] : '';
        // return cart_items;
    }
    function repl_url( href ){
        var hrefrep = href.trim()
            .replace(new RegExp('-','g'),'')
            .replace(new RegExp('.html','g'),'')
            .replace('https://www.somproduct.ro/','')
            .replace('%','')
            // .replace('&nbsp;lei','')
            // .replace(' lei','')
            // .replace(new RegExp(',00','g'),'')
            .replace(new RegExp('/','g'),'');
        hrefrep = hrefrep.toLowerCase();
        return hrefrep;
    }
    function reloaddiscontdata(href){
        var hrefrep   = repl_url( href );
        var discount  = get_data_item(hrefrep);
        if(discount != '0' && $('body').find('.modal-context.cotentmodal.cotentmodal-dialog .modal-container [data-discont="'+hrefrep+'"]').length < 1){
            if($('body').find('.modal-context.cotentmodal.cotentmodal-dialog .modal-container a[href="'+href+'"]').length > 0){
                if(discount.search('lei') > -1 ){
                    discount = "-"+discount;
                }else{
                    discount = "-"+discount+"%";
                }
                var item_after = $('body').find('.modal-context.cotentmodal.cotentmodal-dialog .modal-container a[href="'+href+'"]').closest('.grid-12.cart-item').find('.col-7.product-info .product-name');
                if($('body').find('.modal-context.cotentmodal.cotentmodal-dialog .modal-container [data-discont="'+hrefrep+'"]').length < 1){
                    item_after.after('<div class="discont-item" data-discont="'+hrefrep+'"><span class="discont-t">Today</span> <span class="discont-item-t">'+discount+'</span></div>');
                }else{
                    $('body').find('.modal-context.cotentmodal.cotentmodal-dialog .modal-container [data-discont="'+hrefrep+'"]').html('<span class="discont-t">Today</span> <span class="discont-item-t">'+discount+'</span>');
                }
            }
        }
        loading_end();
    }
    function loading_start(){
        if( $('body').find('.svg-loaderss').length > 0){
            $('body').find('.svg-loaderss').remove();
        }
        $('body').find('.modal-context.rand.cotentmodal.cotentmodal-dialog .modal-content').append('<div class="svg-loaderss"><img src="https://htmldiz.github.io/somproduct.ro/loader.svg" /></div>');
    }
    function loading_end(){
        if( $('body').find('.modal-context.rand.cotentmodal.cotentmodal-dialog').find('.svg-loaderss').length > 0){
            $('body').find('.modal-context.rand.cotentmodal.cotentmodal-dialog').find('.svg-loaderss').remove();
        }
    }
    function reload_discont(data){
        // console.log('reload_discont');
        // console.log(data);
        loading_start();
        window.load_discount = $(data).find('.cart-items .cart-item').length;
        // console.log(window.load_discount);
        if( $(data).find('.cart-items .cart-item').length > 0 ){
            $(data).find('.cart-items .cart-item').each(function(index, el) {
                if($(el).find('.product-name a').length > 0){
                    var href      = $(el).find('.product-name a').attr('href');
                    var hrefrep   = repl_url( href );
                    var discount = get_data_item(hrefrep);
                    // console.log(discount);
                    if(discount == '0'){
                        loading_start();
                        jQuery.ajax({
                            url: href,
                            type: 'GET',
                            dataType: 'html',
                        })
                        .done(function(data) {
                            var discount = '0';
                            var href = this.url;
                            var hrefrep  = repl_url( href );
                            if(jQuery(data).find('.discount>span').length){
                                discount = jQuery(data).find('.discount>span').text();
                                // discount = repl_url( discount );
                            }
                            console.log(discount);
                            set_data_item( hrefrep, discount );
                            reloaddiscontdata(href);
                        });
                    }else{
                        reloaddiscontdata(href);
                    }
                }
            });
        }
    }
    function reload_modal(){
        // console.log('reload_modal');
        loading_start();
       $.ajax({
            url: 'https://www.somproduct.ro/checkout/cart',
            type: 'GET',
            dataType: 'html',
        })
       .done(function(done) {
        // console.log($(done).find('[action="https://www.somproduct.ro/checkout/cart/updatePost"]').length);
        if($(done).find('[action="https://www.somproduct.ro/checkout/cart/updatePost"]').length > 1){
            clone = $(done).find('[action="https://www.somproduct.ro/checkout/cart/updatePost"]:eq(1)').clone();
            // $(done).find('[action="https://www.somproduct.ro/checkout/cart/updatePost"] .cart-items .cart-item a.product-image').each(function(index, el) {
            //     var href = $(el).attr('href');
            //     href = href.replace('https://www.somproduct.ro/','');
            //     var chref = href.trim().replace(new RegExp(' ','g'),'').toLowerCase().replace(new RegExp('/','g'),'').replace(new RegExp(',','g'),'');
            //     var cheskchref = getC(chref);
            //     if($('body').find('.modal-context.rand.cotentmodal.cotentmodal-dialog').length >0){
            //         $('.modal-context.rand.cotentmodal.cotentmodal-dialog .modal-container .modal-content .form-place').html('');
                   clone.appendTo('.modal-context.rand.cotentmodal.cotentmodal-dialog .modal-container .modal-content .form-place');
            //        var html = $('body').find('.modal-context.rand.cotentmodal.cotentmodal-dialog .modal-container .modal-content .form-place').html();
            //        reload_discont(html);
            //        clone = "";
            //     }
            // });
            var html = $(done).find('[action="https://www.somproduct.ro/checkout/cart/updatePost"]:eq(1)').html();
           $('.modal-context.rand.cotentmodal.cotentmodal-dialog .modal-container .modal-content .form-place').html('');
            reload_discont(html);
            loading_end();
            // loading_end();
        }
    });
    }
    window.popupcandisplay = false;
    window.dont_show_on_this_page = false;
    $(document).ajaxComplete(function(event, xhr, settings) {
        // console.log( settings.url );
        if (settings.url == "https://www.somproduct.ro/smp/cart/ajaxAdd"){
            window.dont_show_on_this_page = true;
            setC('popupcandisplay', 'true');
            var _popupcandisplay = getC('popupcandisplay');
            if(_popupcandisplay == 'true'){
                try {
                    hj('trigger', 'exit_intent_popup');
                } 
                catch(e) {}
                console.log('%c hj run', 'background: #e7624b; color: #ffffff','');
            }
        }
        switch (true) {
            case settings.url == "https://www.somproduct.ro/smp/cart/ajaxAdd":
            case settings.url == "https://www.somproduct.ro/smp/cart/getCartDropdown":
            case (settings.url.search(new RegExp('https://www.somproduct.ro/smp/cart/updateAjax','g')) > -1):
            case (settings.url.search(new RegExp('https://www.somproduct.ro/smp/cart/removeAjax','g')) > -1):
                var _popupcandisplay = getC('popupcandisplay');
                if(_popupcandisplay == 'true'){
                    reload_modal();
                }
                // console.log('popup can display!');
                break;
            default:break;
        }
    });
    function get_tabsnum(){
        var tabs             = getC('tabs');
        if(tabs == ''){
            tabs = 0;
        }
        tabs = Number(tabs);
        if(window.this_tab_loaded == false){
            window.this_tab_loaded = true;
            tabs++;
            setC('tabs',tabs);
        }
        return tabs;
    }
    $( window ).unload(function() {
        var tabs_num = get_tabsnum();
        tabs_num--;
        if(tabs_num < 0){
            tabs_num = 0;
        }
        setC('tabs',tabs_num);
        var popup_is_display = getC('popup_is_display');
        var popupcandisplay  = getC('popupcandisplay');
        if(tabs_num < 1 && popup_is_display == 'true' && window.dont_show_on_this_page == false){
            setC('popup_is_display' ,'',0);
            setC('popupcandisplay' ,'',0);
        }
    });
    reload_modal();
    $('body').on('click','.modal-context.cotentmodal.cotentmodal-dialog',function(event) {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'exit_intent_popup',
            'gtm-cro-event-category': 'Exit Intent Popup',
            'gtm-cro-event-action': 'click',
            'gtm-cro-event-label': 'Close via background'
        });
        console.log('%c Close via background', 'background: #e7624b; color: #ffffff','');
        $('.modal-context.cotentmodal.cotentmodal-dialog').remove();

    });
    $('body').on('click','.modal-context.cotentmodal.cotentmodal-dialog .modal-close',function(event) {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'exit_intent_popup',
            'gtm-cro-event-category': 'Exit Intent Popup',
            'gtm-cro-event-action': 'click',
            'gtm-cro-event-label': 'Close via X'
        });
        console.log('%c Close via X', 'background: #e7624b; color: #ffffff','');
        $('.modal-context.cotentmodal.cotentmodal-dialog').remove();
    });
    $('body').on('click','.modal-context.cotentmodal.cotentmodal-dialog .modal-container',function(event) {
        return false;
    });
    get_tabsnum();

    $(document).mouseleave(function(event) {
        
        var popup_is_display = getC('popup_is_display');
        var tabs             = get_tabsnum();
        tabs                 = Number(tabs);
        var _popupcandisplay = getC('popupcandisplay');
        // loading_start();
        if(popup_is_display != 'true' && _popupcandisplay == 'true' && tabs < 2  && window.dont_show_on_this_page == false){
            $('body').find('.modal-context').remove();
            if($('body').find('.modal-context.rand.cotentmodal.cotentmodal-dialog').length < 1){
                setC('popup_is_display', 'true');
                $('body').append('<div class="modal-context rand cotentmodal cotentmodal-dialog" role="dialog" style="z-index: 999999999999;"><div class="modal-container" data-modal-control="container" role="region" style="width: 570px;"><button class="modal-close" data-modal-control="close"></button><div class="modal-title-container"><div class="modal-title h1" data-modal-control="title" role="heading">Produsele neachitate din cosul tau au o cerere foarte ridicata. Mai sunt doar cateva bucati disponibile in stoc.</div></div><div class="modal-content" data-modal-control="content"><div class="form-place"></div><div class="row bottom-cart-container"><div class="info-box">Nu putem garanta disponibilitatea acestor produse daca parasesti site-ul!</div><a href="https://www.somproduct.ro/plaseaza-comanda" class="link-complite-cart">Finalizeaza comanda!</a></div><span class="payment-methods">Modalităţi de plată</span></div></div></div>');
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'CRO_experiment',
                    'gtm-cro-event-category': 'Exit Intent Popup',
                    'gtm-cro-event-action': 'loaded'
                });
                console.log('%c loaded', 'background: #e7624b; color: #ffffff','');
           }
           scroll_detector();
           $('.modal-context.rand.cotentmodal.cotentmodal-dialog .modal-container .modal-content .form-place').html('');
           if(clone == ""){
            reload_modal();
           }else{
            clone.appendTo('.modal-context.rand.cotentmodal.cotentmodal-dialog .modal-container .modal-content .form-place');
            var data_html = $('body').find('.modal-context.rand.cotentmodal.cotentmodal-dialog .modal-container .modal-content .form-place').html();
            // console.log(data_html);
            // console.log('mouseleave done');
            reload_discont(data_html);
            clone = "";
            scroll_detector();
        }
       }
    });
    function scroll_detector(){
         $('[action="https://www.somproduct.ro/checkout/cart/updatePost"]').on('scroll',function(){
            window.scroll_run = typeof window.scroll_run  != 'undefined' ? window.scroll_run : false;
            if(window.scroll_run == false){
                console.log('Scroll');
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'exit_intent_popup',
                    'gtm-cro-event-category': 'Exit Intent Popup',
                    'gtm-cro-event-action': 'scroll'
                });
                console.log('%c scroll', 'background: #e7624b; color: #ffffff','');
                window.scroll_run = true;
                setTimeout(function(){
                    window.scroll_run = false;
                }, 1000);
            }
        });
    }
    $('body').on('click', '.row.bottom-cart-container .link-complite-cart', function(event) {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'exit_intent_popup',
            'gtm-cro-event-category': 'Exit Intent Popup',
            'gtm-cro-event-action': 'click',
            'gtm-cro-event-label': 'Complete your order'
        });
        console.log('%c Complete your order', 'background: #e7624b; color: #ffffff','');
        location.href="https://www.somproduct.ro/plaseaza-comanda";
    });
    $('body').append('<style>.loading.modal-content:before {content: "";display: block;position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: url(https://d1jtwkmfe1h6h4.cloudfront.net/skin/frontend/smp/default/img/spinner.svg);z-index: 9;background-color: rgba(255,255,255,.5);background-repeat: no-repeat;background-position: center;background-size: 50px;}.row.bottom-cart-container{background: #f8f8f8;margin-right: -20px;margin-left: -20px;overflow: hidden;display: flex;flex-wrap: wrap;}.modal-context.cotentmodal .modal-container .modal-content{    overflow-y: unset !important;    height: auto !important;max-height: none !important;}.modal-context.cotentmodal .modal-title.h1{color:#393939;font-size:15px;font-weight:700;letter-spacing:-0.21px;background-color:#fff}.modal-context.cotentmodal{    overflow-y: auto;display:block!important;background-color:rgba(0,0,0,0.6)!important}.modal-content .grid-12.cart-header{display:none}.modal-context.cotentmodal .col-1.text-center.qty-container .qty-wrapper input{float:left;width:26px;height:29px;border:0!important;font-size:16px;letter-spacing:-.4px;text-align:center;color:#000;outline:0;padding:0}.modal-context.cotentmodal .modal-content .discount{background-color:#f8f8f8;}.modal-context.cotentmodal .modal-content{padding-bottom: 0;}.modal-context.cotentmodal .modal-content .totals .grand-total{font-size:16px;text-transform:none;font-family:MarkWebPro-Bold}.modal-context.cotentmodal .modal-content  .totals .tax{margin-top:0}.modal-context.cotentmodal .modal-content  .totals .tax .price{opacity:.5}.modal-context.cotentmodal .modal-content .totals-wrapper .col-5.value{float:right}.modal-context.cotentmodal .modal-content .totals-wrapper .col-7.label{float:left;text-align:left;}.modal-context.cotentmodal .modal-content  .totals>.grid-12{margin:0px 0 0 -25px;text-transform:none;font-size:12px;color:#000;letter-spacing:-.3px}.modal-context.cotentmodal .modal-content .totals-wrapper .col-6.label{float:left;opacity:.5}.modal-context.cotentmodal .modal-content sup{top:-.5em}.modal-context.cotentmodal .modal-content .totals .subtotal{font-size:16px;letter-spacing:.1px;color:#000;text-transform:none;opacity:1!important}.modal-context.cotentmodal .modal-content .totals-wrapper .col-6.label{float:left;text-align:left;}.modal-context.cotentmodal .modal-content .expires{font-size:12px;color:#bfbfbf;margin-bottom:.5rem}.modal-context.cotentmodal .modal-content .col-sm-12.totals-wrapper{flex:0 0  100%;background:#f8f8f8;padding-bottom:20px;padding-left: 30px;padding-right: 30px;}.modal-context.cotentmodal .modal-content .discount .btn{background:#d8d8d8;border:1px solid #d8d8d8;color:#000;height:36px;width:auto;font-family:MarkWebPro,sans-serif;padding:0 20px;margin-left:-1px;border-radius:8px}.row.bottom-cart-container > .col-sm-12.col-md-8{background: #f8f8f8;flex:0 0 100%;}.modal-context.cotentmodal .modal-content .discount input{max-width:100%;flex:1 1 80%;color:#a4a4a4;border:solid 1px #f1f1f1;height:36px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0 10px;font-size:14px;-webkit-border-top-left-radius:8px;-webkit-border-bottom-left-radius:8px;-moz-border-radius-topleft:8px;-moz-border-radius-bottomleft:8px;border-top-left-radius:8px;border-bottom-left-radius:8px;-webkit-box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1);-moz-box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1);box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1)}.modal-context.cotentmodal .modal-content .discount .glued{text-align:center;display:inherit;width:calc(100% - 30px);display:flex;flex-wrap:nowrap;justify-content:stretch;padding:12px 15px}.modal-context.cotentmodal .modal-content .cart-item .cart-price .price-item{opacity:.5;font-size:10px;text-align:right;margin-top:5px;color:#000}.modal-context.cotentmodal .modal-content .cart-item .cart-price{font-size:16px;color:#000;letter-spacing:0}.modal-context.cotentmodal .modal-content .total-label{font-size:12px;font-weight:300;display:none;float:left;margin-right:5px}.modal-context.cotentmodal .modal-content .item-msg.error{color:#d9534f;font:12px MarkWebPro-Medium;text-transform:uppercase}.modal-context.cotentmodal .modal-content .item-options dd,.modal-context.cotentmodal .modal-content .item-options dt{margin:0;display:inline;color:#ffc75c;font-size:13px}.modal-context.cotentmodal .modal-content .bottom-cart-container .cart-info-list li{list-style:none;margin-bottom:5px}.modal-context.cotentmodal .modal-content .glued .input-text{margin-right:-20px;-webkit-box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1);-moz-box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1);box-shadow:inset 0px 2px 5px 0px rgba(0,0,0,0.1)}.modal-context.cotentmodal .btn.btn-orange.bottom-button{margin-left: auto;margin-right: auto;max-width: 320px;float: none;display: inherit;padding-top:15px;padding-bottom:14px;-ms-touch-action:manipulation;touch-action:manipulation;background-color:#ffc518;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font:15px MarkWebPro-Medium;text-transform:uppercase;color:#000;height:50px;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;box-shadow:none;letter-spacing:1.4px;margin-bottom:10px;margin-top:20px;text-transform:none}.modal-context.cotentmodal .payment-methods,.modal-context.cotentmodal .modal-content .discount-coupon-ajax label[for="coupon_code"],.modal-context.cotentmodal .modal-content .discount-coupon-ajax,.modal-context.cotentmodal .modal-content .show-hide-form-coupon.d-none{display:none}.modal-context.cotentmodal .modal-content .discount-coupon-ajax.active{display:block}.modal-context.cotentmodal .modal-content .show-hide-form-coupon-link{color:#000000;font-size:13px;letter-spacing:-0.17px;text-decoration:none}.modal-context.cotentmodal .grid-12.cart-item:after{position:absolute;top:99%;background-color:#f1f1f1;height:1px;left:-20px;right:-20px;display:block}.modal-context.cotentmodal .modal-content .bottom-cart-container .cart-info-list{display:none;text-align:center;margin-bottom:30px;opacity:.68;font-size:14px;line-height:1.57;margin:0;padding:0;letter-spacing:.1px;color:#000}.modal-context.cotentmodal .modal-content .col-2.text-center.subtotal-col{float:right;text-align:right;padding:10px 0;padding-bottom:0;width: 50%;padding-right: 20px;}.modal-context.cotentmodal .modal-content .item-options{margin:10px 0 0}.modal-context.cotentmodal .modal-content{background:#fff}.modal-context.cotentmodal .col-1.text-center.qty-container .spinner-item.right .spinner__increase{width:20px;padding:1px 0 4px 0;display:inline-block;max-width:20px}.modal-context.cotentmodal .col-1.text-center.qty-container .spinner-item.right{-webkit-border-top-right-radius:10px;-webkit-border-bottom-right-radius:10px;-moz-border-radius-topright:10px;-moz-border-radius-bottomright:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;float:left;font-size:23px;color:#000;width:27px;height:29px;text-align:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.modal-context.cotentmodal .col-1.text-center.qty-container .spinner-item.left .spinner__decrease{width:20px;padding:1px 0 4px 0;display:inline-block;max-width:20px}.modal-context.cotentmodal .col-1.text-center.qty-container .spinner-item.left{-webkit-border-top-left-radius:10px;-webkit-border-bottom-left-radius:10px;-moz-border-radius-topleft:10px;-moz-border-radius-bottomleft:10px;border-top-left-radius:10px;border-bottom-left-radius:10px;float:left;font-size:23px;color:#000;width:27px;height:29px;text-align:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.modal-context.cotentmodal .col-1.text-center.qty-container>.flex .qty-wrapper{border-radius:10px;padding:0;border:solid 1px #f1f1f1;width:80px;height:29px;white-space:nowrap;overflow:hidden}.modal-context.cotentmodal .col-1.text-center.qty-container>.flex{    justify-content: flex-start;align-items:center;display:flex;height:100%;justify-content:flex-start;width:100%}.modal-context.cotentmodal .col-1.text-center.qty-container{width: 180px;float: left;padding-right: 0;padding-left: 26px;}.modal-context.cotentmodal .col-7.product-info{float:left;width:calc(100% - 92px);padding-right:0;margin-bottom: 0;    padding-left: 32px;}.row.bottom-cart-container:after {content: " ";display: block;clear: both;}.modal-context.cotentmodal .qty-label{display:none}.modal-context.cotentmodal .btn-remove2{color:#252525;margin-top:10px;display:inline-block;font-size:13px}.modal-context.cotentmodal .item-links{display:none}.modal-context.cotentmodal #product_delivery_time.delivery-green{font-size:12px;color:#228b22;margin-bottom:10px;margin-top:10px;font-family:MarkWebPro,sans-serif;letter-spacing:-.3px;opacity:.68}.modal-context.cotentmodal ul.messages-cupons ul{list-style:none;margin:0;padding:0}.modal-context.cotentmodal ul.messages-cupons .success-msg:before{font-size:13px;width:20px;position:absolute;left:20px;top:50%;transform:translateY(-50%);content:url(https://d1jtwkmfe1h6h4.cloudfront.net/skin/frontend/smp/default/img/success.svg)}.modal-context.cotentmodal ul.messages-cupons .success-msg{background:#efefef;margin-bottom:10px;position:relative;padding:17px 25px 17px 50px;font-size:14px;font-family:MarkWebPro-Medium;border-radius:8px}.modal-context.cotentmodal ul.messages-cupons .error-msg{background:#efefef;margin-bottom:10px;position:relative;padding:17px 25px 17px 50px;font-size:14px;font-family:MarkWebPro-Medium;border-radius:8px}.modal-context.cotentmodal ul.messages-cupons .error-msg:before{content:url(https://d1jtwkmfe1h6h4.cloudfront.net/skin/frontend/smp/default/img/error.svg);font-size:13px;width:20px;position:absolute;left:20px;top:50%;transform:translateY(-50%)}.modal-context.cotentmodal .messages-cupons{margin:0;padding:0;list-style:none}.modal-context.cotentmodal .show-hide-form-coupon{width: 100%;padding:15px;background:#f8f8f8}.modal-context.cotentmodal .product-name,.modal-context.cotentmodal .product-name a{font-size:16px;color:#000;text-decoration:none;text-transform:none}.modal-context.cotentmodal .modal-title-container{border-radius:0px;background-color:#fff}.modal-context.cotentmodal .modal-close{background-size: 12px;width: 24px;height: 24px;display: block;background-position: center;margin-top:-12px;}.modal-context.cotentmodal .col-2.image-product-wrapper{width:82px;padding:0;margin:0;text-align:center;float:left;}.modal-context.cotentmodal .grid-12.cart-item{margin:0;padding-top:5px;position:relative;width:100%;float:left}.modal-context.cotentmodal .grid-12.cart-item:first-child{padding-top:0}.modal-context.cotentmodal .modal-container{width:600px!important;background:none;margin-top:15px;top:0;transform:none}.modal-context.cotentmodal .product-delivery #product_delivery_time{font-size:13px;margin-top:10px}.modal-context.cotentmodal{background:none}.modal-context.cotentmodal.with-sticky .modal-content .col-sm-12.totals-wrapper{padding-bottom:60px}.contain-sticky .btn.btn-orange.bottom-button{padding-top:15px;padding-bottom:14px;-ms-touch-action:manipulation;touch-action:manipulation;background-color:#ffc518;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font:15px MarkWebPro-Medium;text-transform:uppercase;color:#000;height:50px;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;box-shadow:none;float:right;letter-spacing:1.4px;margin-bottom:10px;margin-top:10px;text-transform:none}.contain-sticky{position:fixed;z-index:999999999999;left:0;right:0;bottom:0;padding:8px 16px;background:#f8f8f8}.contain-sticky>.btn.btn-orange.bottom-button{margin:0;height:auto}.modal-context.cotentmodal .col-2.image-product-wrapper{position: relative;}.modal-context.cotentmodal .col-2.image-product-wrapper .product-image{margin-left: 20px;}.modal-context.cotentmodal .btn-remove2{position: absolute;top: 50%;transform: translate3d(0px, -50%, 0px);margin: 0px;left: -4px;display: block;color: rgba(0,0,0,0);overflow: hidden;background: url(https://d1jtwkmfe1h6h4.cloudfront.net/skin/frontend/smp/default/img/smp-close.png);background-size: 100%;width: 18px;height: 18px;opacity:.3;}.modal-context.cotentmodal .btn-remove2:hover{opacity:1;}.modal-context.cotentmodal.cotentmodal-dialog .row.bottom-cart-container .link-complite-cart{color:#ffffff;font-size:16px;font-weight:700;letter-spacing:-0.23px;text-transform:uppercase;border-radius:10px;background-color:#90b1dc;margin-left:auto;margin-right:auto;padding:15px 28px;text-decoration:none}.modal-context.cotentmodal.cotentmodal-dialog .row.bottom-cart-container .info-box{border:2px solid #ffc517;background-color:#fbec91;padding:8px 31px;margin-bottom:32px;margin-right: -32px;margin-left: -32px;}.modal-context.cotentmodal.cotentmodal-dialog .row.bottom-cart-container{font-size:17px;font-weight:700;letter-spacing:-0.24px;text-align:center;padding:32px;background:#fff}.modal-context.cotentmodal.cotentmodal-dialog .btn-remove{display:none}.modal-context.cotentmodal.cotentmodal-dialog .col-2.image-product-wrapper .product-image{margin-left:0}.modal-context.cotentmodal.cotentmodal-dialog .modal-container{max-width:570px;z-index:999999999999;border-radius:5px;margin-top:55px;margin-bottom:55px}.modal-context.cotentmodal.cotentmodal-dialog .modal-title-container{padding:20px;line-height:25px;font-size:20px;font-weight:700;background-color:#ffc517;overflow:hidden;border-top-right-radius:5px;border-top-left-radius:5px}.modal-context.cotentmodal.cotentmodal-dialog img{max-width:100%;max-height:110px}.modal-context.cotentmodal.cotentmodal-dialog .col-1.text-center.qty-container>.flex .qty-wrapper{width:35px}.modal-context.cotentmodal .modal-content .col-2.text-center.subtotal-col{width:30%}.modal-context.cotentmodal .col-1.text-center.qty-container .qty-wrapper input{width:100%}.modal-context.cotentmodal.cotentmodal-dialog .input-text.qty{width:100%}.modal-context.cotentmodal.cotentmodal-dialog .spinner-item.right,.modal-context.cotentmodal.cotentmodal-dialog .spinner-item.left{display:none}.modal-context.cotentmodal.cotentmodal-dialog .col-7.product-info{width:calc(100% - 156px)}.modal-context.cotentmodal.cotentmodal-dialog .col-2.image-product-wrapper{width:156px}.modal-context.cotentmodal.cotentmodal-dialog{z-index:999999999999;background-color:rgba(0,0,0,0.4)!important}.modal-context.cotentmodal.cotentmodal-dialog .modal-close{width:24px;height:24px;margin-top:-52px;margin-right:-43px;background-size:100%}.modal-context.cotentmodal.cotentmodal-dialog .modal-title.h1{color:#393939;font-size:15px;font-weight:700;letter-spacing:-0.21px;background-color:#fff;background-color:#ffc517;text-transform:none}.modal-context.cotentmodal .form-place form{max-height:calc(100vh - 370px);overflow-y:auto;overflow-x:hidden;padding-right:25px}.modal-context.cotentmodal.cotentmodal-dialog .modal-title.h1 .title-btn{color: #ffffff;font-size: 13px;font-weight: 700;letter-spacing: -0.23px;text-transform: uppercase;border-radius: 10px;background-color: #90b1dc;margin-left: 10px;margin-right: auto;padding: 5px 15px;text-decoration: none;}.modal-context.cotentmodal.cotentmodal-dialog .modal-title.h1{display: flex;justify-content: flex-end;align-items: center;}.discont-item .discont-t{font-size: 15px;letter-spacing: -0.21px;color: #393939;}.discont-item-t{color: #ffffff;font-size: 13px;font-weight: 700;letter-spacing: -0.19px;border-radius: 6px;background-color: #ff0905;padding: 3px 6px;}.discont-item{margin-top: 8px;}.discont-save{color: #ecb100;font-size: 15px;font-weight: 700;letter-spacing: -0.21px;}.svg-loaderss{background: rgba(255,255,255,0.4);position: absolute;left: 0;right: 0;top: 0;bottom: 0;display: flex;justify-content: center;align-items: center;z-index: 999999999999999;}.modal-context.cotentmodal .qty-wrapper,.modal-context.cotentmodal .product-name{position: relative;}.modal-context.cotentmodal .qty-wrapper:before,.modal-context.cotentmodal .product-name:before {position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: " ";display: block;}</style>');});