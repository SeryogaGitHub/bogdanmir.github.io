function initjQuery1(callback) {
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
	initjQuery1(function() {
		readyjQueryinit1();
	});
}else{
	readyjQueryinit1();
}
var hrf = location.protocol+'//'+location.host+location.pathname;
function readyjQueryinit1(){
	jQuery(function($) {
		var hrf = location.protocol+'//'+location.host+location.pathname;
		$projectlocation = "https://htmldiz.github.io/appointment/";
		if(hrf == "https://monashivf.com/"){
    var newBanner = '<section id="banner-alternative"> <div class="banner-alternative__container"> <div class="banner-alternative__banner-text"> <h2>Monash IVF Victoria</h2> <p id="js-li-location"></p><ul> <li>Monash IVF was responsible for the world&rsquo;s first IVF pregnancy</li><li>We&rsquo;ve helped over 35,000 couples fall pregnant</li><li>A Monash IVF baby is born every 2.5 hours</li></ul><a class="banner-alternative__btn" href="https://monashivf.com/resources/free-ivf-nurse-chat/" id="cta-button-cro-exp">Book Your Free Nurse Call</a> </div><div class="monash-girl"></div></div></section>';
    if ($('#banner').length) {
      $('#banner').replaceWith(newBanner);
    }
    var yourLocation = $('.au-states .state-dropdown').text().trim();
    var listOfLocations = ['Your Location: Victoria','Your Location: New South Wales','Your Location: Queensland','Your Location: Tasmania','Your Location: South Australia','Your Location: Western Australia','Your Location: Northern Territory'];
    var listOfParagraphs = ['Accessing IVF treatment has been easier with 48 locations all over <a href="https://monashivf.com/ivf-clinic-melbourne/">Melbourne</a> and Victoria.',
        'Located in <a href="https://monashivf.com/clinic/ivf-bondi-junction/">Bondi Junction</a>, <a href="https://monashivf.com/clinic/ivf-campbelltown-2/">Campbelltown</a>,&nbsp;<a href="https://monashivf.com/clinic/ivf-mosman/">Mosman</a>,&nbsp;<a href="https://monashivf.com/clinic/ivf-parramatta/">Parramatta</a>&nbsp;and <a href="http://monashivf.com/clinic/ivf-penrith/">Penrith</a>.',
        'Located in <a href="https://monashivf.com/ivf-clinic-brisbane/">Brisbane</a>, <a href="https://monashivf.com/clinic/gold-coast/">Gold Coast</a>,<br> <a href="https://monashivf.com/clinic/ivf-rockhampton/">Rockhampton</a> and <a href="https://monashivf.com/clinic/townsville/">Townsville</a>.',
        'Monash IVF Tasmania is delivered through it’s sister clinic&nbsp;<a target="_blank" href="http://fertilitytasmania.com.au/" rel="noopener noreferrer">Fertility Tasmania</a>.',
        'Monash IVF’s sister clinic in South Australia is <a target="_blank" href="http://repromed.com.au/" rel="noopener noreferrer">Repromed IVF Adelaide</a>.',
        'Many of our <a href="http://monashivf.com/fertility-specialists/">leading doctors</a> undertake remote consulting and skype appointments.',
        'Monash IVF’s sister clinic in Northern Territory is <a target="_blank" href="http://repromed.com.au/" rel="noopener noreferrer">Repromed&nbsp;IVF Darwin.</a>'];
    $('#js-li-location').html(listOfParagraphs[listOfLocations.indexOf(yourLocation)]);
    $("<style type='text/css'>section#banner-alternative{min-height:570px;background:url(https://monashivf.com/assets/uploads/2017/01/new_banner_large.jpg) 47% 100% no-repeat #d7d7d7;background-size:cover;position:relative}.banner-alternative__container{max-width:1230px;width:100%;position:relative;margin:0 auto;padding:0 15px;overflow:hidden}.banner-alternative__banner-text{color:#363636;line-height:28px;padding:100px 0 0;font-family:'Open Sans',sans-serif}.banner-alternative__banner-text h2{font-weight:300;font-size:48px;line-height:1.2;margin:0 0 20px;padding:0}.banner-alternative__banner-text p{font-size:23px;line-height:1.2;margin:0 0 9px;padding:0;font-weight:300;max-width:600px}.banner-alternative__banner-text p.p-small{font-size:16px;font-weight:500;margin:23px 0 6px;letter-spacing:.3px}.banner-alternative__banner-text ul{margin:23px 0 64px 22px;padding:0}.banner-alternative__banner-text li{font-size:20px;font-weight:400;line-height:1;margin:11px 0 0;padding:0 0 0 5px;width:100%;letter-spacing:.01px;max-width:600px}.banner-alternative__banner-text li a{text-decoration:none;color:#08a0f4}.banner-alternative__banner-text li a:hover{text-decoration:underline}.banner-alternative__btn,.banner-alternative__btn:active,.banner-alternative__btn:hover,.banner-alternative__btn:visited{background:#00a7f1;border-radius:26px;text-decoration:none;transition:all .3s ease;color:#fff;font-size:18px;font-weight:400;line-height:1.2;display:inline-block;padding:14px 40px;margin:0;border:2px solid #fff}.banner-alternative__btn:hover{background:#ffac66}@media screen and (max-width:768px){.banner-alternative__container{padding:0}section#banner-alternative{min-height:370px;display:flex;align-items:center;justify-content:center;margin-top:59px;background:url(https://monashivf.com/assets/uploads/2017/01/new_banner_large.jpg) 50% 100% no-repeat #d7d7d7;background-size:cover}.banner-alternative__banner-text{padding:25px 20% 25px 25px}.banner-alternative__banner-text h2{font-size:25px;line-height:26px}.banner-alternative__banner-text li,.banner-alternative__banner-text p,.banner-alternative__banner-text p.p-small{font-size:12px;line-height:17px}.banner-alternative__banner-text p{font-size:14px;max-width:300px}.banner-alternative__banner-text ul{margin:20px 0 20px 15px}.banner-alternative__banner-text li{padding:0;max-width:300px}.banner-alternative__banner-text li span{display:block}.banner-alternative__btn,.banner-alternative__btn:active,.banner-alternative__btn:hover,.banner-alternative__btn:visited{font-size:12px;padding:5px 20px;height:auto;line-height:26px;letter-spacing:1.5px;width:230px}div#intercom-container{display:none}#nsw-promo,.address-mobile,div#cta-sticky{display:none!important;animation:fadein .3s ease}@keyframes fadein{from{opacity:0}to{opacity:1}}}</style>").appendTo('head');
		}
		});
}