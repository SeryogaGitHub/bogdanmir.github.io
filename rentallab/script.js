try {
    hj('trigger', 'rentoownlabs_mobile_redirect_popup');
} 
catch(e) {}
jQuery(function($) {
    $("body").on("click", "#popup-register-form #submit", function(event){
        var can_submit = true;
        $('.valid_text').remove();
        var form = $('#popup-register-form');
        if(form.find('[name="custphone"]').val() == ""){
            can_submit = false;
            form.find('[name="custphone"]').focus();
            form.find('[name="custphone"]').before("<p class='phone_valid_text valid_text'>Please fill out this field</p>")
        }
        if(form.find('[name="custemail"]').val() == ""){
            can_submit = false;
            form.find('[name="custemail"]').focus();
            form.find('[name="custemail"]').before("<p class='mail_valid_text valid_text'>Please fill out this field</p>")
        }
        var mailPattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
        if(form.find('[name="custemail"]').val().search(mailPattern) !== 0 && form.find('[name="custemail"]').val() !== ""){
            can_submit = false;
            form.find('[name="custemail"]').focus();
            form.find('[name="custemail"]').before("<p class='mail_valid_text valid_text'>Incorrect email adress</p>")
        }
        if(form.find('#custlname').val() == ""){
            can_submit = false;
            form.find('#custlname').focus();
            form.find('#custlname').before("<p class='fname_valid_text valid_text'>Please fill out this field</p>")
        }
        if(form.find('#custfname').val() == ""){
            can_submit = false;
            form.find('#custfname').focus();
            form.find('#custfname').before("<p class='fname_valid_text valid_text'>Please fill out this field</p>")
        }
        $('.fancybox-skin #popup .spinner_box').remove();
        $('.fancybox-skin #popup').append('<div class="spinner_box"><img src="data:image/png;base64,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" alt="spinner"></div>');
        $('.fancybox-skin #popup .logo_box').remove();
        $('.fancybox-skin #popup').append('<div class="logo_box"><img src="data:image/png;base64,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" alt="rent2own"></div>');
        if(can_submit == true){
            console.log("true2")
            $('body').addClass('body_load_spin');
            $('.spinner_box').addClass('load_spin');
            $('.logo_box').addClass('load_spin');

            $('.fancybox-skin #popup').addClass('loading');
            $(this).closest('.fancybox-wrap.fancybox-desktop').addClass('loading_wrapp');
            $('.fancybox-skin #popup.loading').append('<h2 class="l_title">Redirecting to <span>yourrent2own.com</span></h2>');
            $('.fancybox-skin #popup.loading').append('<div class="trial_box"><h3 class="t_title">What will you get in $1 trial?</h3><ul><li>All property details</li> <li>Owners direct contact information</li> <li>Access to over 1 Million other bargain listings, some as low as $10,000</li></ul></div>');
            setTimeout(function(){
                console.log("true3")
                var obj = $("#popup-register-form").serializeArray();
                var action = "https://renttoownlabs.com/wp-content/themes/renttoown/dbparsedetails.php";
                $('body').append('<form action="'+action+'" id="hiddenform" method="POST"></form>');
                $.each(obj,function(ind,elem){
                    $('body').find('#hiddenform').append('<input type="text" name="'+elem.name+'" value="'+elem.value+'">');
                })
                $('body').find('#hiddenform').append('<input type="submit" name="sss">');
                $('body').find('#hiddenform').submit();
            },300);
        }
        return false;
    });
        var form = $('#popup-register-form');
        $(document).on("blur", '#custfname', function(){
            if(form.find('#custfname').val() == ""){
                can_submit = false;
                form.find('.fname_valid_text').remove();
                form.find('#custfname').before("<p class='fname_valid_text valid_text'>Please fill out this field</p>")
            }else{
                form.find('.fname_valid_text').remove();
            }
        });
        $(document).on("blur", '#custlname', function(){
            if(form.find('#custlname').val() == ""){
                can_submit = false;
                form.find('.custlname_valid_text').remove();
                form.find('#custlname').before("<p class='custlname_valid_text valid_text'>Please fill out this field</p>")
            }else{
                form.find('.custlname_valid_text').remove();
            }
        });
        var mailPattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
        $(document).on("blur", '[name="custemail"]', function(){
            if(form.find('[name="custemail"]').val() == ""){
                can_submit = false;
                form.find('.mail_valid_text').remove();
                form.find('[name="custemail"]').before("<p class='mail_valid_text valid_text'>Please fill out this field</p>")
            }else if(form.find('[name="custemail"]').val().search(mailPattern) !== 0){
                can_submit = false;
                form.find('.mail_valid_text').remove();
                form.find('[name="custemail"]').before("<p class='mail_valid_text valid_text'>Incorrect email adress</p>")
            }else{
                form.find('.mail_valid_text').remove();
            }
        });
        $(document).on("blur", '[name="custphone"]', function(){
            if(form.find('[name="custphone"]').val() == ""){
                can_submit = false;
                form.find('.phone_valid_text').remove();
                form.find('[name="custphone"]').before("<p class='phone_valid_text valid_text'>Please fill out this field</p>")
            }else{
                form.find('.phone_valid_text').remove();
                $('.fancybox-wrap .fancybox-inner').animate({
                    scrollTop: 500
                }, 200);
            }
        });
        $(document).on("click",".ctaModal", function(){
            $('html').addClass('fancybox_open');
            $('body').addClass('fancybox_open');
            $("#popup-register-form #submit").prependTo("#popup-register-form .disclaimer")
        });
        $(document).on("click",".fancybox-close", function(){
            $('html').removeClass('fancybox_open');
            $('body').removeClass('fancybox_open');
        });
        $(document).on("click",".fancybox-overlay", function(){
            if($('.fancybox_open').length>0){
                $('body').removeClass('fancybox_open');
                $('html').removeClass('fancybox_open');
            }
        });
    jQuery(document).ready(function($) {
        $('#custfname').before("<div class='custfname cover_input'></div>");
        $(".custfname").click(function() {
            $('#custfname').focus();
        })

        $('#custlname').before("<div class='custlname cover_input'></div>");
        $(".custlname").click(function() {
            $('#custlname').focus();
        })

        $('[name="custemail"]').before("<div class='custemail cover_input'></div>");
        $(".custemail").click(function() {
            $('[name="custemail"]').focus();
        })
        $('[name="custphone"]').before("<div class='custphone cover_input'></div>");
        $(".custphone").click(function() {
            $('[name="custphone"]').focus();
        })
        $('body').on('click',".cover_input",function() {
          var isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i)?true:false;
          if(!isIOS){
              var $container = $('.fancybox-wrap .fancybox-inner');
              var $scrollTo = $(this);
              var calc = $scrollTo.offset().top - $container.offset().top + $container.scrollTop() - 25;
              console.log(calc);
              $container.animate({
                  scrollTop: calc
              });
          }
        })
    });
    $("<style type='text/css'>#popup form{position:relative}.valid_text{font-size:13px}.custlname_valid_text.fname_valid_text{position:absolute;top:60px;right:12px;color:#f00}.lname_valid_text{position:absolute;top:87px;right:10px;color:#f00}.mail_valid_text{position:absolute;top:192px;right:20px;color:#f00}.phone_valid_text{position:absolute;top:265px;right:20px;color:#f00}#popup.loading .l_title{color:#2f2f2f;font-size:20px;font-weight:400;display:block;text-align:center;line-height:1.6}#popup.loading .l_title span{color:#7bbdff;font-weight:700}#popup.loading .t_title{color:#2f2f2f;font-size:17px;font-weight:600;display:block;text-align:center;margin-bottom:14px}#popup.loading .trial_box{border:1px solid #f3a427;background-color:#ffffff;padding:14px 2px 23px;margin:0 8px 0 8px;position:absolute;bottom:15px;left:0;right:0;margin:auto}#popup.loading{width:509px}.loading_wrapp{width:599px!important;max-width:90%!important}.loading_wrapp .fancybox-inner{width:569px!important;max-width:100%!important}#popup.loading .spinner_box{text-align:center;padding-top:80px}#popup.loading .spinner_box img{-webkit-animation:spin 2s linear infinite;-moz-animation:spin 2s linear infinite;animation:spin 2s linear infinite;max-width:145px}@-moz-keyframes spin{100%{-moz-transform:rotate(360deg)}}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg)}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}#popup.loading .logo_box img{max-width:150px}#popup.loading .trial_box ul li{color:#1e1e1e;font-size:14px;font-weight:400;position:relative;padding:0 0 4px 33px;line-height:1.2}#popup.loading .trial_box ul li:before{content:'';position:absolute;left:26px;top:4px;background-color:#383737;height:7px;width:1px;transform:rotate(45deg)}#popup.loading .trial_box ul li:after{content:'';position:absolute;left:23px;top:6px;background-color:#383737;height:5px;width:1px;transform:rotate(-45deg)}#popup.loading h2,#popup.loading h3,#popup.loading form,#popup.loading .left,#popup.loading .right{display:none}.fancybox-skin .spinner_box{display:none}.fancybox-skin .load_spin.spinner_box{display:block}.spinner_box{position:absolute;top:0;left:0;right:0;margin:auto}.logo_box{position:absolute;top:280px;left:0;right:0;margin:auto}.fancybox-skin .logo_box{display:none;text-align:center}.fancybox-skin .load_spin.logo_box{display:block}@media(max-width:768px){.loading_wrapp .fancybox-inner{width:569px!important}}@media(max-width:568px){.loading_wrapp .fancybox-inner{width:569px!important}}@media(max-width:375px){#popup.loading .l_title{font-size:18px}}.page-template.fancybox-lock{overflow:hidden}.fancybox-opened{z-index:999999999!important;position:fixed!important;top:20px!important;overflow-y:auto!important;max-width:100%}body.fancybox_open{position:fixed;top:0px;left:0px;bottom:0;right:0;overflow:hidden;min-height:100vh;height:100vh;width:100vw;margin-bottom:0!important}#popup.loading{display:flex;flex-wrap:wrap;min-height:100%;align-items:center;flex-direction:column}#popup.loading .l_title{order:1;flex:0 0 100%}#popup.loading .spinner_box{margin-top:0;margin-bottom:0;order:2;position:relative;flex:0 0 100%;padding-top:10px}#popup.loading .logo_box{position:relative;order:3;top:auto;padding-top:30px;margin-top:0;margin-bottom:0}#popup.loading .trial_box{position:relative;order:4;margin-top:40px;bottom:auto}.fancybox-close{top:-4px!important;right:-4px!important}.fancybox-skin{height:auto!important}.cover_input{position:absolute;height:50px;position:absolute;left:0;right:0}.custfname{top:35px}.custlname{top:104px}.custemail{top:175px}.custphone{top:245px}.fancybox_open .fixed_link.wrap_cta_link{opacity:0}.custlname_valid_text.valid_text{position:absolute;top:119px;right:20px;color:#f00}.fname_valid_text.valid_text{position:absolute;top:46px;right:20px;color:#f00}.fancybox-opened .fancybox-outer,.fancybox-inner,.fancybox-opened,.fancybox-opened .fancybox-skin{    max-width: 100% !important;}#popup{max-width: 100%!important;width: 90%!important;margin-left: auto;margin-right: auto;}.fancybox-wrap,.fancybox-skin {width: 90% !important;}.fancybox-inner{width: 100% !important;}</style>").appendTo('head'); 
    $('<meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;"/>').appendTo('head'); 
    jQuery('head meta[name=viewport]').remove();
    var isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i)?true:false;
    var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    var other = navigator.userAgent.toLowerCase().indexOf('crios') == -1 && navigator.userAgent.toLowerCase().indexOf('firefox') == -1;
    if(is_safari && isIOS && other){
        $("<style type='text/css'>.fancybox-opened {bottom: 80px !important;height: calc(100vh - 100px) !important;}</style>").appendTo('head');
    }else{
        $("<style type='text/css'>.fancybox-opened {bottom: 20px !important;height: calc(100vh - 40px) !important;}</style>").appendTo('head');
    }
});