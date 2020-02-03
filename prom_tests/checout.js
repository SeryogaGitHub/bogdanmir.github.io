if($('.x-order-form').length > 0){
	window.validateEmail = function (email) {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	}
	window.validatePhone = function (p) {
	  var phoneRe = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
	  return phoneRe.test(p);
	} 
	$('.x-order-form').find('.x-order-form-row').css('display','none');
	$('.x-order-form').find('.x-order-prepare__total').css('display','none');
	$('.x-order-form').find('.x-order-form__accept').css('display','none');
	$('.x-order-form').find('.x-order-form__agreement').css('display','none');
	$('.x-order-form').find('[data-qaid="client_email"]').parent().css('display','block');
	$('.x-order-form').find('[data-qaid="client_phone"]').parent().css('display','block');
	var Numrow = $('.x-order-form .x-order-form__content .x-order-form-row').length;
	$('.x-order-form .x-order-form__content .x-order-form-row:eq('+Number(Numrow - 1)+')').after('<div class="x-order-form-row submit-validatefc"><div class="x-input"><span class="check-email-phone x-button x-button_width_full x-button_theme_purple"><span class="x-button__text qa-test-create-order">Выбрать способ доставки</span></span></div></div>');
	$('body').on('click', '.check-email-phone', function(event) {
		var email = $('.x-order-form').find('[data-qaid="client_email"] [data-qaid="input_field"]').val();
		var validateEmail = window.validateEmail(email);
		var validateform = true;
		if(!validateEmail){
			validateform = false;
			$('.x-order-form').find('[data-qaid="client_email"] [data-qaid="input_field"]').after('<div class="x-input__validation" data-qaid="required_field">Это обязательное поле.</div>');
		}
		var phone = $('.x-order-form').find('[data-qaid="client_phone"] [data-qaid="input_field"]').val();
		var validatePhone = window.validatePhone(phone);
		if(!validatePhone){
			validateform = false;
			$('.x-order-form').find('[data-qaid="client_email"] [data-qaid="input_field"]').after('<div class="x-input__validation" data-qaid="required_field">Это обязательное поле.</div>');
		}
		if(validateform == true){
			$('.submit-validatefc').css('display','none');
		}
		// event.preventDefault();
		return false;
	});
}