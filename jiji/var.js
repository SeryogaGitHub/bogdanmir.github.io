try {
    hj('trigger', 'top_specialists');
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

	var mobileBar = $(".b-mobile-bar.b-mobile-bar-redesign").html()
	$(".container.b-app-header__inner").append(mobileBar)
	setTimeout(function(){ 

	}, 30);

	$outhtml  = '<div class="wrap_show_number">';
	$outhtml  += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><path fill="#fff" d="M553.5,907.6C470.3,858.8,381.8,788.7,291.2,698c-78-78.3-150.1-171.8-202.7-263.2c-27-44-43.8-87.7-57.3-125.1C17.1,270.9,10,234.7,10,202.1c0-17.6,6.3-36,17.8-51.9c10.8-17.8,25.1-35.7,42.6-53.2c16.1-16.1,66.3-60.1,88.9-75.2c2.1-1.4,4.4-2.6,6.9-3.4l19.4-6.6c10.4-3.4,21.8-0.8,29.5,7c2.1,2.2,4.8,4.2,7.7,6.8c5.9,4.9,13.1,10.9,21.5,19.3c17.6,21,33.7,43.3,55.6,76c35.1,51.2,55.5,96.7,64.4,119.3c1.4,3.5,2.1,7.2,2.1,10.8c0,14.2-8.4,23.9-28.6,47.4c-6.6,7.7-17.6,20.5-20,24.5c-6.3,11.1-5,21.9-2.1,41.9c0.7,4.2,1.2,8.6,1.8,13c6.3,27.9,12.1,54.2,39.7,90.2c14.8,22.1,34.6,43.7,55.7,66.7c6.9,7.4,13.9,15,20.8,22.8c22.4,22.3,51.4,49.3,85.2,78.9c33.6,25.8,61.1,38.5,85,38.5c35.6,0,63.1-14.2,85.4-28.2c1.4-1,2.9-1.7,4.5-2.3c5.3-2.1,10.2-4.7,14.6-6.9c10.8-5.7,22.1-11.5,35-11.5c4.6,0,9,1,13,3.1l3.4,1.7c16.1,7.9,58.7,29,117.8,72.5c38.6,29,66.5,52.8,85.1,68.4c6.7,5.6,12.2,10.3,16.5,13.8c7.9,6.3,11.9,16.1,10.5,26c-5.6,45.8-85.4,126.9-86.1,127.6c-12.7,12.8-32.7,30-55.2,39.1c-13.3,6.8-33.7,11.8-49.6,11.8C798.8,989.7,697.2,993.7,553.5,907.6z"/></g></svg>';
	$outhtml  += '<span class="text_show_number">SHOW PHONE NUMBER</span>';
	$outhtml  += '</div>';
	$('.b-mobile-bar.b-mobile-bar-redesign').append($outhtml);

	$(".wrap_show_number").click(function(){
		$(".b-show-contact-content").click()
		setInterval(function(){
			var number = $(".b-advert-card .b-buttons-wrapper a.qa-show-contact .b-button__text").text();
			$(".text_show_number").html('<a href="tel:'+number+'">'+number+'</a>');
		}, 300);
	})

	$("#tab-home-outlined path, #tab-favorite-outlined path, #tab-message-outlined path, #tab-profile-outlined path").attr("fill","#fff")


var styles = "<style>";
styles += `
.container.b-app-header__inner .b-app-header__icon-wrapper,
.container.b-app-header__inner .b-app-header__page-title-wrapper {
	display: none;
}
.container.b-app-header__inner {
	padding-right: 7%;
}
.container.b-app-header__inner .b-mobile-bar-item-outer {
    display: flex;
    flex: 1 0;
    text-align: center;
    position: relative;
    justify-content: center;
}
.container.b-app-header__inner .b-mobile-bar-item-outer .b-mobile-bar-item,
.container.b-app-header__inner .b-mobile-bar-item-outer .b-mobile-bar-item-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 10px;
    line-height: 16px;
    color: #fff;
}
.container.b-app-header__inner .b-mobile-bar-item.b-mobile-bar-item--sell-container {
	padding: 3px;
	background-color: #fff;
	position: relative;
	border-radius: 50%;
	display: block;
}
.container.b-app-header__inner .b-mobile-bar-item.b-mobile-bar-item--sell-container .b-mobile-bar-item--sell {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #f5a623;
    color: #fff;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
}
.b-mobile-bar.b-mobile-bar-redesign .b-mobile-bar-item-outer {
    display: none;
}
.b-mobile-bar.b-mobile-bar-redesign {
	background-color: #fff;
	height: 62px;
}
.wrap_show_number {
	display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 5px 8px;
    color: #fff;
    background-color: #f5a623;
    padding: 10px;
    font-size: 16px;
    border-radius: 7px;
}
.wrap_show_number svg {
    width: 18px;
    margin-right: 8px;
}
.wrap_show_number .text_show_number a {
    color: #fff;
    font-size: 18px;
}
@media(max-width: 1199px) {
	.kb-form {
		width: auto;
	}
}
`;
styles    += "</style>";
jQuery('body').append(styles);
	});
}