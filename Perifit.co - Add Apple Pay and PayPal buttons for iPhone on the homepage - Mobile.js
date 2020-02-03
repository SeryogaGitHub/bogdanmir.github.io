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
	jQuery(window).ready(function($){
			$('body').on('click', '.pay_btn.applepay_btn', function(event) {
				alert("Apple pay Click")
				$("._1LP9NPTft85QosIXd3_zOV._3G6VJhJYno-AX3-X38f1TA._2EiMjnumZ6FVtlC7RViKtj._32WLV12P15SH53KwhI_yKe").click()
			})
			$('body').on('click', '.pay_btn.paypal_btn', function(event) {
				$("._1LP9NPTft85QosIXd3_zOV._3G6VJhJYno-AX3-X38f1TA._2EiMjnumZ6FVtlC7RViKtj._3DL4HVlgeOhG7Paj6K8DqS").click()
				alert("PayPal Click")
			})


			$outhtml = '<div class="wrap_pay_btns">';
			$outhtml += '<div style="display: none; height: 45px" class="pay_btn applepay_btn">';
			$outhtml += '<svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 210.2" xml:space="preserve"><path id="XMLID_34_" d="M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2C123.3,42.9,107.7,41.3,102.3,40.9 M182.6,11.9v155.9h24.2v-53.3h33.5c30.6,0,52.1-21,52.1-51.4c0-30.4-21.1-51.2-51.3-51.2H182.6zM206.8,32.3h27.9c21,0,33,11.2,33,30.9c0,19.7-12,31-33.1,31h-27.8V32.3z M336.6,169c15.2,0,29.3-7.7,35.7-19.9h0.5v18.7h22.4V90.2c0-22.5-18-37-45.7-37c-25.7,0-44.7,14.7-45.4,34.9h21.8c1.8-9.6,10.7-15.9,22.9-15.9c14.8,0,23.1,6.9,23.1,19.6v8.6l-30.2,1.8c-28.1,1.7-43.3,13.2-43.3,33.2C298.4,155.6,314.1,169,336.6,169z M343.1,150.5c-12.9,0-21.1-6.2-21.1-15.7c0-9.8,7.9-15.5,23-16.4l26.9-1.7v8.8C371.9,140.1,359.5,150.5,343.1,150.5z M425.1,210.2c23.6,0,34.7-9,44.4-36.3L512,54.7h-24.6l-28.5,92.1h-0.5l-28.5-92.1h-25.3l41,113.5l-2.2,6.9c-3.7,11.7-9.7,16.2-20.4,16.2c-1.9,0-5.6-0.2-7.1-0.4v18.7C417.3,210,423.3,210.2,425.1,210.2z"/><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
			$outhtml += '</div>';
			$outhtml += '<div style="display: none; height: 45px" class="pay_btn paypal_btn">';
			$outhtml += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2500" height="812" viewBox="-11.153 -13.144 326.05 105.914"><g transform="matrix(2.07675 0 0 -2.07675 -11.153 92.77)"><defs><path id="a" d="M-84.525-27.457h326.05V78.457h-326.05z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><path d="M32.419 40.982c-1.674 1.908-4.7 2.726-8.571 2.726H12.613a1.609 1.609 0 0 1-1.59-1.357L6.347 12.68a.964.964 0 0 1 .953-1.114h6.936l1.742 11.049-.054-.346a1.604 1.604 0 0 0 1.583 1.357h3.296c6.475 0 11.545 2.63 13.026 10.238.044.225.082.444.115.658.44 2.812-.003 4.726-1.524 6.459" fill="#003087"/><path d="M117.331 26.863c-.424-2.784-2.55-2.784-4.606-2.784h-1.17l.821 5.198c.05.314.32.545.638.545h.537c1.4 0 2.722 0 3.404-.797.407-.477.53-1.185.376-2.162m-.895 7.264h-7.756a1.08 1.08 0 0 1-1.066-.91L104.48 13.33a.647.647 0 0 1 .638-.747h3.98c.371 0 .687.27.745.636l.89 5.64c.082.523.534.91 1.064.91h2.454c5.11 0 8.058 2.471 8.828 7.372.347 2.142.014 3.826-.989 5.005-1.103 1.296-3.058 1.982-5.653 1.982" fill="#009cde"/><path d="M62.011 26.863c-.424-2.784-2.55-2.784-4.607-2.784h-1.17l.821 5.198c.05.314.32.545.638.545h.537c1.4 0 2.722 0 3.404-.797.408-.477.531-1.185.377-2.162m-.895 7.264H53.36c-.53 0-.982-.386-1.065-.91L49.16 13.33a.646.646 0 0 1 .638-.747h3.704c.53 0 .981.386 1.064.91l.847 5.365c.082.524.534.91 1.064.91h2.454c5.11 0 8.058 2.472 8.828 7.373.347 2.142.014 3.826-.989 5.005-1.103 1.296-3.058 1.982-5.653 1.982M79.123 19.723c-.36-2.122-2.043-3.547-4.192-3.547-1.077 0-1.94.347-2.494 1.003-.55.65-.756 1.577-.582 2.608.334 2.104 2.046 3.574 4.162 3.574 1.055 0 1.91-.35 2.476-1.012.569-.667.793-1.599.63-2.626m5.176 7.23h-3.714a.647.647 0 0 1-.64-.547l-.162-1.038-.26.376c-.804 1.167-2.597 1.558-4.387 1.558-4.103 0-7.608-3.11-8.29-7.47-.355-2.177.149-4.256 1.383-5.707 1.133-1.333 2.75-1.888 4.677-1.888 3.308 0 5.142 2.124 5.142 2.124l-.166-1.032a.646.646 0 0 1 .639-.747h3.344c.53 0 .982.385 1.065.91l2.008 12.713a.647.647 0 0 1-.64.747" fill="#003087"/><path d="M134.443 19.723c-.36-2.122-2.043-3.547-4.192-3.547-1.077 0-1.94.347-2.494 1.003-.55.65-.756 1.577-.582 2.608.334 2.104 2.045 3.574 4.162 3.574 1.055 0 1.91-.35 2.476-1.012.569-.667.793-1.599.63-2.626m5.176 7.23h-3.714a.647.647 0 0 1-.64-.547l-.162-1.038-.26.376c-.804 1.167-2.597 1.558-4.387 1.558-4.102 0-7.607-3.11-8.29-7.47-.355-2.177.15-4.256 1.384-5.707 1.133-1.333 2.75-1.888 4.677-1.888 3.309 0 5.143 2.124 5.143 2.124l-.166-1.032a.644.644 0 0 1 .637-.747h3.343c.53 0 .982.385 1.066.91l2.008 12.713a.647.647 0 0 1-.64.747" fill="#009cde"/><path d="M104.08 26.952h-3.734c-.357 0-.69-.177-.89-.473l-5.15-7.584-2.183 7.288a1.08 1.08 0 0 1-1.033.77h-3.669a.647.647 0 0 1-.612-.856l4.11-12.066-3.866-5.455a.647.647 0 0 1 .528-1.02h3.73c.352 0 .683.173.885.463l12.414 17.918a.646.646 0 0 1-.53 1.015" fill="#003087"/><path d="M143.996 33.58l-3.184-20.251a.647.647 0 0 1 .639-.747h3.201c.53 0 .982.386 1.065.91l3.139 19.888a.646.646 0 0 1-.639.747h-3.582a.645.645 0 0 1-.639-.546" fill="#009cde"/><path d="M32.419 40.982c-1.674 1.908-4.7 2.726-8.571 2.726H12.613a1.609 1.609 0 0 1-1.59-1.357L6.347 12.68a.964.964 0 0 1 .953-1.114h6.936l1.742 11.049-.054-.346a1.604 1.604 0 0 0 1.583 1.357h3.296c6.475 0 11.545 2.63 13.026 10.238.044.225.082.444.115.658.44 2.812-.003 4.726-1.524 6.459" fill="#003087"/><path d="M17.849 34.485a1.408 1.408 0 0 0 1.389 1.187h8.808c1.043 0 2.016-.068 2.905-.21a12.206 12.206 0 0 0 1.44-.322 7.957 7.957 0 0 0 1.551-.618c.442 2.813-.002 4.726-1.523 6.46-1.675 1.907-4.7 2.725-8.571 2.725H12.612a1.609 1.609 0 0 1-1.588-1.357L6.346 12.682a.964.964 0 0 1 .952-1.115h6.937l1.742 11.05 1.872 11.868z" fill="#003087"/><path d="M33.943 34.523a18.294 18.294 0 0 0-.115-.658c-1.481-7.607-6.551-10.238-13.026-10.238h-3.297a1.602 1.602 0 0 1-1.582-1.357l-1.688-10.702-.48-3.036a.844.844 0 0 1 .834-.976h5.847c.692 0 1.28.504 1.389 1.187l.057.298 1.102 6.984.07.386a1.407 1.407 0 0 0 1.39 1.187h.875c5.664 0 10.099 2.3 11.395 8.956.54 2.78.26 5.103-1.17 6.734a5.584 5.584 0 0 1-1.601 1.235" fill="#009cde"/><path d="M32.392 35.14c-.226.067-.459.127-.699.18-.24.053-.488.1-.742.14-.89.145-1.862.213-2.906.213h-8.807a1.404 1.404 0 0 1-1.389-1.188l-1.872-11.87-.054-.345a1.602 1.602 0 0 0 1.582 1.357h3.297c6.475 0 11.545 2.63 13.026 10.238.044.225.081.443.115.658a7.998 7.998 0 0 1-1.218.514c-.109.036-.22.07-.333.104" fill="#012169"/></g></g></svg>';
			$outhtml += '</div>';
			$outhtml += '</div>';

			$("#shopify-section-slideshow .SectionHeader__ButtonWrapper").after($outhtml)
			$('a:contains("Buy Perifit now")').after($outhtml)
			$('.ProductForm__AddToCart.Button.Button--primary.Button--full').after($outhtml)

			var intervalll = setInterval(function(){
				if ($("._1LP9NPTft85QosIXd3_zOV._3G6VJhJYno-AX3-X38f1TA._2EiMjnumZ6FVtlC7RViKtj._32WLV12P15SH53KwhI_yKe").length>0) {
					$(".pay_btn.applepay_btn").slideDown()
					clearInterval(intervalll);
				}

				if ($("._1LP9NPTft85QosIXd3_zOV._3G6VJhJYno-AX3-X38f1TA._2EiMjnumZ6FVtlC7RViKtj._3DL4HVlgeOhG7Paj6K8DqS").length>0) {
					$(".pay_btn.paypal_btn").slideDown()
					clearInterval(intervalll);
				}
				if ($(".shopify-payment-button__button.shopify-payment-button__button--unbranded._2ogcW-Q9I-rgsSkNbRiJzA._2EiMjnumZ6FVtlC7RViKtj._2-dUletcCZ2ZL1aaH0GXxT").length>0) {
					clearInterval(intervalll);
					$("#shopify-section-slideshow .SectionHeader__ButtonWrapper .ButtonGroup__Item.Button").click(function(event) {
						event.preventDefault()
						$(".shopify-payment-button__button.shopify-payment-button__button--unbranded._2ogcW-Q9I-rgsSkNbRiJzA._2EiMjnumZ6FVtlC7RViKtj._2-dUletcCZ2ZL1aaH0GXxT").click()
					})
					$('a:contains("Buy Perifit now")').click(function(event) {
						event.preventDefault()
						$(".shopify-payment-button__button.shopify-payment-button__button--unbranded._2ogcW-Q9I-rgsSkNbRiJzA._2EiMjnumZ6FVtlC7RViKtj._2-dUletcCZ2ZL1aaH0GXxT").click()
					})
					$('.ProductForm__AddToCart.Button.Button--primary.Button--full').click(function(event) {
						event.preventDefault()
						$(".shopify-payment-button__button.shopify-payment-button__button--unbranded._2ogcW-Q9I-rgsSkNbRiJzA._2EiMjnumZ6FVtlC7RViKtj._2-dUletcCZ2ZL1aaH0GXxT").click()
					})
				}
			}, 100)

			var styles = "<style>";
			styles += `
			.wrap_pay_btns {
				display: flex;
			}
			.pay_btn {
				margin-top: 20px;
				margin-left: auto;
				margin-right: auto;
				width: 205px;
				height: 45px;
				background-color: #ffffff;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.pay_btn svg {
				max-width: 100%;
				max-height: 100%;
			}
			.pay_btn.applepay_btn svg {
				height: 25px;
			}
			.pay_btn.paypal_btn svg {
				height: 30px;
			}
			@media only screen and (min-width: 1500px) {
				.x-header__search-row.js-header .ab-test-slider {
					width: 1482px;
				}
			}
			`;
			styles    += "</style>";
			jQuery('body').append(styles);
			console.log(styles)
	})
}
