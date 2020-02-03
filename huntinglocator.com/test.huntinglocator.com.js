window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'CRO_experiment',
	'eventCategory': 'Find a lease for me',
	'eventAction': 'loaded'
});
if($('#listings').length > 0){
	$('#clean-code-studio .container .single-column').closest('.container').removeClass('container').addClass('col-content').wrap('<div class="container container-wraper"><div class="row row-with-bnr"></div></div>');
	$('body').append('<div class="sticky-title"><span>Want us to find a lease for you?</span> <a href="#">Let us find for you <img src="https://htmldiz.github.io/huntinglocator.com/arrow-2.png" /></a></div>');
	$('body').on('click', '.sticky-title', function(event) {
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'CRO_experiment',
			'eventCategory': 'Find a lease for me',
			'eventAction': 'click',
			'eventLabel': 'Want us to find a lease for you?'
		});
		$('body').find('.col-bnr').addClass('display-mob');
		return false;
	});
	$('body').on('click', '.close-image-bnr', function(event) {
		$('body').find('.col-bnr').removeClass('display-mob');
		return false;
	});
	$('body').on('click', '.find-a-lease-for-me', function(event) {
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'CRO_experiment',
			'eventCategory': 'Find a lease for me',
			'eventAction': 'click',
			'eventLabel': 'Find a lease for me'
		});
	});
	$('body').find('#clean-code-studio .col-content').after('<div class="col-bnr"><div class="image-place-bnr"><a href="#" class="close-image-bnr"></a><img src="https://htmldiz.github.io/huntinglocator.com/image.png" /><div class="title-info">Want us to find a lease for you?</div><ul><li>Tell us what you’re looking for in a short quiz</li><li>We will deliver you multiple lease options that match your needs</li></ul><a href="https://huntinglocator.com/hunting-survey" class="find-a-lease-for-me">Find a lease for me</a><div class="foot-text">Only $199 - Money Back Guarantee</div></div></div>');
	var styles = `<style> 
	#clean-code-studio .row-with-bnr{
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}
	#clean-code-studio .col-bnr{
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 293px;
		-ms-flex: 0 0 293px;
		flex: 0 0 293px;
		max-width: 293px;
	}
	#clean-code-studio .col-content{
		padding-left: 15px;
		padding-right: 15px;
		-webkit-box-flex: 0;
		max-width: 100%;
	}
	#clean-code-studio .col-bnr{
		height: 699px;
	}
	.featured-listings .container ul{
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
	.image-place-bnr {
		margin-top: 18px;
	}
	.title-info {
		font-family: Oswald,Arial,sans-serif;
		font-size: 33px;
		font-weight: 400;
		letter-spacing: -0.89px;
		line-height: 43px;
		text-align: center;
	}
	.image-place-bnr a:after {
		content: "";
		display: inline-block;
		width: 10px;
		height: 9px;
		background-image: url(https://htmldiz.github.io/huntinglocator.com/arrow.png);
		background-position: center;
		background-repeat: no-repeat;
		margin-left: 10px;
	}
	.image-place-bnr img {
		position: absolute;
		z-index: 1;
	}
	.image-place-bnr a,
	.image-place-bnr ul,
	.image-place-bnr .foot-text,
	.image-place-bnr,
	.image-place-bnr .title-info {
		position:relative;
		z-index:2;
	}
	.image-place-bnr .foot-text{
		color: #ffffff;
		font-family: Lato;
		font-size: 14px;
		font-weight: 700;
		line-height: 17px;
		text-align: center;
		margin-top: 11px;
	}
	.image-place-bnr .title-info {
		padding:45px 23px;
		color:#ffffff;
	}
	.image-place-bnr ul {
		text-align:center;
		list-style:none;
		padding:0;
		margin:0;
	}
	.image-place-bnr li + li:after,
	.image-place-bnr li + li:before{
		content:"";
		display:block;
		width:3px;
		height:15px; 
		position:absolute;
		top:-30px;
		background-color:#ffffff;
		transform: rotate(40deg);
		left:calc(50% + 4px);
	}
	.image-place-bnr li + li:after{
		transform: rotate(-40deg);
		left:calc(50% - 4px);
	}
	.image-place-bnr li + li{
		position:relative;
		margin-top:45px;
	}
	.image-place-bnr li {
		color:#fff;
		display:block;
		margin-left:auto;
		margin-right:auto;
		max-width:224px;
		padding:24px;
		border-radius: 4px;
		border: 2px solid #f77d0f;
		background-color: #000000;
	}
	.image-place-bnr a {
		display:flex;
		margin-left:auto;
		margin-right:auto;
		align-items:center;
		justify-content:center;
		margin-top:86px;
		width: 224px;
		height: 48px;
		box-shadow: 0 4px 9px rgba(0, 0, 0, 0.23);
		border-radius: 4px;
		background-color: #f77d0f;
		color: #ffffff;
		text-align: center;
		font-family: Lato;
		font-size: 16px;
		font-weight: 700;
	}
	@media(min-width:992px) and (max-width:1329px){
		.listings .listings-details .listings-properties{
			margin-bottom: 50px;
			width: 100%;
		}
		.listings .listings-details .listings-description{
			width: 100%;
		}
	}
	.image-place-bnr .close-image-bnr,
	.sticky-title{
		display:none;
	} 
	.sticky-title a{
		color: #ff912e;
		font-family: Lato;
		font-size: 12px;
		font-weight: 700;
	}
	@media(max-width:992px) and (max-height:568px){
		.image-place-bnr a{
			margin-top: 36px;
		}
	}   
	@media(max-width:992px){
		.image-place-bnr img{
			width: 100%;
		}
		.image-place-bnr .close-image-bnr{
			display: block;
			width: 45px;
			height: 45px;
			position: fixed;
			top: 15px;
			right: 15px;
			background: unset;
			margin: 0;
			z-index: 999;
			box-shadow: unset;
		}
		.image-place-bnr .close-image-bnr:before, .image-place-bnr .close-image-bnr:after {
		    content: "";
		    display: block;
		    position: absolute;
		    width: 2px;
		    height: 25px;
		    background: #f77d0f;
		    -webkit-transform: rotate(45deg);
		    transform: rotate(45deg);
		    left: 22px;
		    margin: 0px;
		}
		.image-place-bnr .close-image-bnr:after {
		    transform: rotate(-45deg);
		}
		.image-place-bnr{
			margin-top: 0;
			min-height: 100%;
			overflow: hidden;
		}
		#clean-code-studio .col-bnr{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			max-width: unset;
			height: unset;
			bottom: 0;
			z-index:9;
			display:none;
			overflow: auto;
		}
		#clean-code-studio .col-bnr.display-mob{
			display:block;
		}
		.sticky-title{
			display:block;
			text-align: center;
			position:fixed;
			left: 0;
			top: 0;
			right: 0;
			padding:5px 14px;
			color: #ffffff;
			font-family: Lato;
			font-size: 12px;
			font-weight: 700;
			box-shadow: 0 4px 9px rgba(0, 0, 0, 0.23);
			border: 3px solid #f77d0f;
			background-color: #000000;
		}
	}
	@media(min-width:993px){
		#clean-code-studio .col-content{
			-webkit-flex: 0 0 calc(100% - 300px);
			-ms-flex: 0 0 calc(100% - 300px);
			flex: 0 0 calc(100% - 300px);
			max-width: calc(100% - 300px);
		}
	}
	@media(min-width:1330px){
		.container {
			max-width: 1300px;
			width: 1300px;
		}
		#listings div.featured-listings ul li{
			width: unset;
			max-width: 100%;
			flex: 0 0 auto;
		}
	}
	</style>`;
	styles = styles += '';
	$('body').after(styles);
	var element_work_with = $('body').find('.col-bnr');
	var top_start         = element_work_with.offset().top;
	var outerHeight_start = $('body').find('.col-bnr').outerHeight() + 50;
	$(document).scroll(function(){
		if($('body').outerWidth() > 992){
			if($(window).scrollTop() > top_start){
				if(-(top_start - $(window).scrollTop())+outerHeight_start <= $('body').find('.row-with-bnr').outerHeight()){
					element_work_with.css('margin-top',-(top_start - $(window).scrollTop()));
				}else{
					element_work_with.css('margin-top',$('body').find('.row-with-bnr').outerHeight() - outerHeight_start);
				}
				if($(window).scrollTop() < element_work_with.offset().top){
					element_work_with.css('margin-top',-(top_start - $(window).scrollTop()));
				}
			}else{
				element_work_with.attr('style','');
			}
		}else{
			element_work_with.attr('style','');
		}
	});
}
// test