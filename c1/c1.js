$(function() {
  window.mvc4 = 2;
  window.sotc4 = true;
  window.candetect = true;
  window.mmd = 0;
  var us3 = localStorage.getItem('usc4');
  if(us3 == null){
    localStorage.setItem('usc4','false');
  }
  function getTabs() {
    var tabs = localStorage.getItem('tc4');
    if (tabs == null) {
      tabs = 0;
    }
    return tabs;
  }
  function getcatalog() {
    var catalog = localStorage.getItem('clc4');
    return catalog;
  }
  function getv3s() {
    var v3 = localStorage.getItem('vc4');
    return v3;
  }
  function deteectUnload() {
    var tabs = localStorage.getItem('tc4');
    if (tabs == null) {
      tabs = 0;
      localStorage.setItem('tc4', tabs);
    } else {
      tabs = Number(tabs - 1);
      localStorage.setItem('tc4', tabs);
    }
    if(tabs == -1){
      tabs = 0;
      localStorage.setItem('tc4', tabs);
    }
    return tabs;
  }
  function deteectUnloadcat() {
    var catalog = localStorage.getItem('clc4');
    if (catalog == null) {
      catalog = 0;
      localStorage.setItem('clc4', catalog);
    } else {
      catalog = Number(catalog - 1);
      localStorage.setItem('clc4', catalog);
    }
    return catalog;
  }
  if ($('.x-catalog .x-catalog__sidebar').length > 0) {
    document.addEventListener("mouseleave", function( event ) {
      var tabs = getTabs();
      var catalog = getcatalog();
      var us3 = localStorage.getItem('usc4');
      // && v3 > window.mvc4 catalog == 1 && 
      if (tabs == 0 && us3 == 'false' && window.candetect == true && window.mmd >1) {
        showPopup();
        window.mmd = 0;
      }
      window.intout = setInterval(function(){
        var tabs    = getTabs();
        var catalog = getcatalog();
        var us3     = localStorage.getItem('usc4');
        // && v3 > window.mvc4 catalog == 1 && 
        if (tabs == 0 && us3 == 'false' && window.candetect == true) {
          showPopup();
          window.mmd = 0;
        }
      },10);
    });
    var catalog = localStorage.getItem('clc4');
    if (catalog == null) {
      catalog = 0;
    }
    if (catalog < 0) {
      catalog = 0;
    }
    catalog++;
    localStorage.setItem('clc4', catalog);
    $(window).on('beforeunload', function() {
      deteectUnloadcat();
    });
  }
  $.fn.visitThisPage = function () {
      var visitThisPage = 0;
      if($('[data-qaid="main_product_info"]').length>0){
        var text = $('[data-qaid="main_product_info"]').attr('data-rt-order-url');
          var reptext = text+'';
          var match = reptext.match(/(product_id=[0-9]*)/g);
          visitThisPage = 0;
          if(match.length>0){
            match = match[0];
            match = match.replace('product_id=','');
            visitThisPage = localStorage.getItem('pvc4'+match);
          }
          if (visitThisPage == null) {
            visitThisPage = 0;
          }
      }
      return visitThisPage;
  }
  $.fn.setVisitThisPage = function(number) {
    var visitThisPage = 0;
    if($('[data-qaid="main_product_info"]').length>0){
      var text = $('[data-qaid="main_product_info"]').attr('data-rt-order-url');
      var reptext = text+'';
      var match = reptext.match(/(product_id=[0-9]*)/g);
      if(match.length>0){
        match = match[0];
        match = match.replace('product_id=','');
        visitThisPage = localStorage.setItem('pvc4'+match,number);
      }
    }
    return visitThisPage;
  }
  if ($('.x-product-page__details').length > 0) {
    var v3 = localStorage.getItem('vc4');
    if (v3 == null) {
      v3 = 0;
      localStorage.setItem('vc4', v3);
    }
    var tabs = localStorage.getItem('tc4');
    if (tabs == null) {
      tabs = 0;
    }
    if (tabs < 0) {
      tabs = 0;
    }
    tabs++;
    localStorage.setItem('tc4', tabs);
    $(window).on('beforeunload', function() {
      deteectUnload();
    });
    document.addEventListener("mouseleave", function( event ) {
      var tabs    = getTabs();
      var catalog = getcatalog();
      var v3      = getv3s();
      var us3     = localStorage.getItem('usc4');
      visitThisPage = $.fn.visitThisPage();
      if (v3 > window.mvc4 && us3 == 'false' && tabs == 1 && window.candetect == true && window.mmd > 1) {
        showPopup();
        window.mmd = 0;
      }
      window.intout = setInterval(function(){
        var tabs    = getTabs();
        var catalog = getcatalog();
        var v3      = getv3s();
        var us3     = localStorage.getItem('usc4');
        visitThisPage = $.fn.visitThisPage();
        if (v3 > window.mvc4 && us3 == 'false' && tabs == 1 && window.candetect == true) {
          showPopup();
          window.mmd = 0;
        }
      },100);
    });
    document.addEventListener("mousemove", function( event ) {
      var visitThisPage = $.fn.visitThisPage();
      if(visitThisPage == 0 && window.candetect == true){
        var v3           = getv3s();
        $.fn.setVisitThisPage(1);
        v3++;
        localStorage.setItem('vc4', v3);
      }
    });
  }
  document.addEventListener("mousemove", function( event ) {
      window.mmd++;
  });
  $( window ).scroll(function() {
    window.candetect = false;
    if(window.tm){clearTimeout(window.tm);
      // console.log(window.candetect);
    }
     window.tm = setTimeout( function(){
      window.candetect = true;
      // console.log(window.candetect);
    }, 150 );
  });
  $(document).mouseenter(function(event) {
    if(window.intout){
      clearInterval(window.intout);
    }
  });
  document.onmousedown = function(event){
    if(event.button == 1 || event.button == 2){
      window.candetect = false;
      if(window.tm){clearTimeout(window.tm);
        // console.log(window.candetect);
      }
       window.tm = setTimeout( function(){
        window.candetect = true;
        // console.log(window.candetect);
      }, 150 );
    }
  }
  $(document).on('focus','.form_here [name="search_term"]',function(){dataLayer.push({'event':'gtm-cro-event','gtm-cro-event-category':'EXP - Exit-Popup','gtm-cro-event-action':'Focus search'});console.log('Focus search')}),$(document).on('click','.form_here [data-qaid="search_term_link"],.form_here [data-qaid="category_term_link"]',function(){dataLayer.push({'event':'gtm-cro-event','gtm-cro-event-category':'EXP - Exit-Popup','gtm-cro-event-action':'Click search results'});console.log('Click search results')}),$(document).on('click','.form_here [data-qaid="search_button"]',function(){dataLayer.push({'event':'gtm-cro-event','gtm-cro-event-category':'EXP - Exit-Popup','gtm-cro-event-action':'Click lens'})});
  function showPopup(){
    if($('.x-404-page').length<1 && window.candetect == true){
      // alert('detect');
    var us3 = localStorage.getItem('usc4');
  if(window.sotc4 == true ){
    if ($(".search_popup").find('.form_here').length < 1) {
      localStorage.setItem('usc4','true');
      dataLayer.push({'event':'gtm-cro-event','gtm-cro-event-category':'EXP - Exit-Popup','gtm-cro-event-action':'Popup loaded'})
      $(".search_popup .x-header__search").remove();
      var html = $(".x-header__search").html();
      $(html).find('#search_form').removeAttr('id');
      $("body").css("overflow","hidden");
      $("html").css("overflow","hidden");
      $(".search_popup .form_here").remove();
      $(".search_popup").append("<div class='form_here'>" + html + "</div>");
      $(".search_popup .x-search__header-overlay").remove();
      $(".search_popup .x-search__page-overlay").remove();
      $(".x-search__inner .x-search__autocomplete .x-autocomplete").remove();
      $('.form_here .x-search__autocomplete').remove('');
      $('.form_here [name="search_term"]').val('');
      $('.x-search .x-search__field[name="search_term"]').blur();
      $('.x-search').removeClass('x-search_state_active');
      $('.x-search__page-overlay').css('background','transparent');
      $(".x-product-main-terms .x-product-main-terms__col .x-pseudo-link+.x-overlay").hide();
      $("[data-bazooka='GlobalShowPhones'] .x-overlay").addClass("x-hidden");
      $(".x-product-sticky .x-product-sticky__col:nth-child(1) .x-overlay").addClass("x-hidden");
      $(".x-product-info__variation .x-overlay").hide();
      $(".qa-shoping-cart-list").closest(".x-overlay").hide();
      $('.x-overlay__dialog_type_padded [data-qaid="success_msg_popup"]').closest(".x-overlay").addClass("x-hidden");
      $(".x-company-info__parts .x-company-info__item .x-iconed-text .x-overlay").addClass("x-hidden");
      $(".x-product-info .x-product-info__images .x-overlay").addClass("x-hidden");
      $(".search_popup").css('display', 'block');
      $(".search_overlay").css('display', 'block');
      if(window.location.href.indexOf("prom.ua/ua") > -1) {
          $(".search_popup .modal_title").text("Шукаете щось інше?");
          $(".search_popup .sub_title").text("Ми допоможемо Вам знайти потрібний товар");
          $(".search_popup .x-search__field").attr("placeholder", "Почніть вводити назву товару");
        }else{
          $(".search_popup .modal_title").text("Ищете что-то другое?")
          $(".search_popup .sub_title").text("Мы поможем Вам найти нужный товар");
          $(".search_popup .x-search__field").attr("placeholder", "Начните вводить название товара");
      }
      //event for download pop-up
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
      'event': 'gtm-ee-event-1'
      });
      console.log('download_popup_event')
      //
    }
  }
  }};
window.ccc = 0;window.addEventListener('contextmenu', function(e) {window.candetect=0;window.tm=setInterval(function(){window.candetect=false;window.ccc++;if(window.ccc ==1000){clearInterval(window.tm);window.candetect=true}},10)}, false);

  //event for focus pop-up
  $('body').on('focus', '.search_popup .form_here .x-search__field', function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
    'event': 'gtm-ee-event-2'
    });
    console.log('focus_popup_event')
  });

  //event for click on search item
  $('body').on('click', '.search_popup .form_here .x-autocomplete__link', function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
    'event': 'gtm-ee-event-3'
    });
    console.log('search_item_event')
  });
  
  //event for click loop btn
  $('body').on('click', '.search_popup .form_here .x-search__button', function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
    'event': 'gtm-ee-event-4'
    });
    console.log('loop_btn_event')
  });

  //event for close popup
  $('body').on('click', '.search_popup .x-overlay__close-button', function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
    'event': 'gtm-ee-event-5'
    });
    console.log('close popup')
  });

  if($('.x-404-page').length<1){

  $('body').on('keyup', ".form_here [name='search_term']", function() {
    var value = $(this).val();
    if(window.typeint){
      clearTimeout(window.typeint);
    }
    window.typeint = setTimeout(function(value){
      var autocomplete = $('.form_here .x-search').attr('data-autocomplete-url');
      if(value.length>0){
        $.ajax({
          url: autocomplete,
          type: 'GET',
          dataType: 'json',
          data: {term: value},
        })
        .done(function(data) {
          if($('.form_here .x-search__autocomplete').length<1){
            $('.form_here .x-search').after('<div class="x-search__autocomplete"><div class="x-autocomplete"><ul class="autocomplete1 x-autocomplete__group" data-qaid="autocomplete_list"></ul><ul class="autocomplete2 x-autocomplete__group" data-qaid="autocomplete_list"></ul><ul class="autocomplete3 x-autocomplete__group" data-qaid="all_results_list"></ul></div></div>');
          }
          $('.form_here .x-autocomplete__group').html("");
          var countvar1 = 5;
          $.each(data.results,function(index, el) {
            if(el.name){
              if(countvar1 > 0){
                $('.form_here .autocomplete1').append('<li class="x-autocomplete__item" data-qaid="suggest_item"><a class="x-autocomplete__link" href="https://prom.ua/search?search_term='+el.query+'" data-qaid="category_term_link"><span class="x-autocomplete__text"><b>'+value+'</b> в <span class="x-autocomplete__highlight-text">'+el.name+'</span></span></a></li>');
                countvar1--;
              }
            }
          });
          var countvar2 = 5;
          $.each(data.results,function(index, el) {
            if(el.type == 'tag'){
              if(countvar2 > 0){
                $('.form_here .autocomplete2').append('<li class="x-autocomplete__item" data-qaid="suggest_item"><a class="x-autocomplete__link" data-qaid="search_term_link" href="https://prom.ua/search?search_term='+el.query+'"><span class="x-autocomplete__counter-holder" data-qaid="term_hits_text">Найдено: &nbsp;<span class="x-autocomplete__counter">'+el.hits+'</span></span><span class="b-autocomplete__text" data-qaid="term_main_text"><b>'+el.query+'</b></span></a></li>');
                countvar2--;
              }
            }
          });
          var countvar3 = 1;
          $.each(data.results,function(index, el) {
            if(el.type == 'search_term'){
              if(countvar3 > 0){
                $('.form_here .autocomplete3').append('<li class="x-autocomplete__item" data-qaid="suggest_all_result"><a href="https://prom.ua/search?search_term='+el.query+'" class="x-autocomplete__link x-autocomplete__link_state_highlighted" data-qaid="suggest_link"><span class="x-autocomplete__text">Все результаты поиска</span></a></li>');
                countvar3--;
              }
            }
          });

        })
        .fail(function() {})
        .always(function() {});
      }
    },500,value);
  });

  console.log('desktop_var_c_4')
  $('body').on('click', '[data-qaid="buy-button"]', function(event) {
    window.sotc4 = false;
  });
  $('body').on('click', '[data-qaid="one-click-order-button"]', function(event) {
    window.sotc4 = false;
  });

  function shackee(){
    if($('.x-product-info .js-product-buy-button.x-button_type_contour').length>0 || $('.x-button_state_load').length>0){
      window.sotc4 = false;
    }
  }
  shackee();
  setInterval(function(){
    shackee();
  },100);
}
});
$(function(){$(".x-404-page").length<1&&($("body").on("click",".search_popup .x-overlay__close-button",function(){$(".search_popup").css("display","none"),$(".search_overlay").css("display","none"),$(".x-search__page-overlay").remove(),$("body").removeClass("h-layout-hidden"),$("body").css("overflow","auto"),$("html").css("overflow","auto")}),$("body").on("click",".x-pseudo-link",function(){$(this).closest(".x-product-main-terms__item").find(".x-overlay").show()}),$("body").on("click",".x-product-info__content .x-product-conversion .x-product-conversion__col>.x-product-conversion__iconed-text:first-child",function(){$("[data-bazooka='GlobalShowPhones'] .x-overlay").removeClass("x-hidden")}),$("body").on("click",".x-company-info__parts .x-company-info__item .x-iconed-text",function(){$(this).closest(".x-company-info__item").find(".x-overlay").removeClass("x-hidden")}),$("body").on("click",".x-product-info .x-product-info__images .x-product-info__blame-link",function(){$(this).closest(".x-product-info__images").find(".x-overlay").removeClass("x-hidden")}),$("body").on("click",".x-product-sticky .x-product-sticky__col:nth-child(2) .x-product-sticky__item>div>div:nth-child(2)",function(){$("[data-bazooka='GlobalShowPhones'] .x-overlay").removeClass("x-hidden")}),$("body").on("click",".x-product-sticky .x-product-sticky__col:nth-child(1) [data-bazooka='CompanyLocation']",function(){$(this).closest(".x-product-sticky__item").find(".x-overlay").removeClass("x-hidden")}),$("body").on("click",".x-product-sticky .x-product-sticky__col:nth-child(1) [data-bazooka='CompanySchedule']",function(){$(this).closest(".x-product-sticky__item").find(".x-overlay").removeClass("x-hidden")}),$("body").on("click",".x-product-info__variation .x-drop-down__list .x-drop-down__list-item",function(){$(this).closest(".x-product-info__variation").find(".x-overlay").show()}),$("body").on("click",".x-product-info__variation .x-pseudo-link",function(){$(this).closest(".x-product-info__variation").find(".x-overlay").show()}),$("body").on("click",".x-header .js-shopping-cart-button-container",function(){$(".qa-shoping-cart-list").closest(".x-overlay").show()}),$("body").on("click",".x-product-conversion__item [data-qaid='order-payment-button']",function(){$('.x-overlay__dialog_type_padded [data-qaid="success_msg_popup"]').closest(".x-overlay").removeClass("x-hidden")}),$("body").prepend('<div class="x-overlay search_overlay" style="z-index: 5000;"><div class="x-overlay__dialog x-cart-overlay search_popup" data-qaid="overlay"> <span class="x-overlay__close-button" data-qaid="close_btn">×</span><div class="x-empty-results"><div class="modal_title">Ищете что-то другое?</div> <p class="sub_title">Мы поможем Вам найти нужный товар</p></div></div>'),$("<style type='text/css'>.search_overlay{display:none;overflow:hidden; z-index: 99999999 !important;}.search_popup{display:none;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;height: 143px;   max-width:475px;background-color:#f19b20;background-image:linear-gradient(-55deg,#772189 0%,#4853a2 100%);text-align:center;padding-top:21px;padding-bottom:49px}.search_popup .modal_title{color:#fff;font-size:32px;font-weight:400;margin-bottom:22px}.search_popup .x-overlay__close-button{color:#fff;right:7px;top:0px;opacity:0.2;cursor:pointer;z-index: 999;width: 30px;right: 0;}.search_popup .sub_title{color:#fff;font-size:19px;font-weight:400}.search_popup .x-empty-results{padding:0 0 15px}.search_popup .x-search{display:block;padding:0;max-width:370px;margin:0 auto;text-align:left;}.search_popup .x-search_state_active .x-search__inner{width:100%}.search_popup .x-search_state_active .x-search__holder{position:relative;top:0;right:0;left:0}.search_popup .form_here .x-search__autocomplete{top: auto;max-width: 368px;margin: 0 auto;text-align: left;}.search_popup .form_here .x-autocomplete__group{padding: 0;}.search_popup .form_here .x-autocomplete__item:first-child{padding-top: 10px;}, .search_popup .form_here .x-autocomplete__item:last-child{padding-bottom: 10px;}.x-one-click-order__btn[data-qaid='one-click-order-button']{pointer-events:auto}.x-one-click-order__btn.x-one-click-order__btn_state_disabled[data-qaid='one-click-order-button']{pointer-events:none}  .b-besida__btn.b-besida__btn_state_disabled{pointer-events:none}.b-besida__btn{pointer-events:auto}   .search_popup .form_here .x-autocomplete__link{position: relative;z-index: 999;padding: 10px 10px 10px 15px;}.search_overlay .search_popup .form_here .x-autocomplete{max-height: 300px;overflow-y: scroll;}.search_popup .x-autocomplete .autocomplete3 .x-autocomplete__item{padding: 0 !important;}@media screen and (max-height: 720px) {.search_overlay .search_popup .form_here .x-autocomplete{max-height: 200px;}}</style>").appendTo("head"))});