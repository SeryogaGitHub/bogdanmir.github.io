<?php 
header('Access-Control-Allow-Origin: *');
if(isset($_POST['username']) && isset($_POST['phone']) && !empty($_POST['email']) && !empty($_POST['massege'])){
	$name     = $_POST['username'];
	$phone    = $_POST['phone'];
	$massege    = $_POST['massege'];
	$email    = $_POST['email'];
	$to       = 'muronhtz@gmail.com';
	$subject  = 'Зайвка';
	$message  = 'Добрый день! Меня зовут '.$name.".\n";
	$message .= 'Мой номер телефона '.$phone."\n";
	$message .= 'Мой email '.$email."\n";
	$message .= $massege."\n";
	$mail = @mail($to, $subject, $message);
	if($mail){
		$string = array(
			'message'=> "Ваше сообщение успешно отправлено"
		);
		$fp = fopen(dirname(__FILE__).'/list-muronhtz.txt', 'a+');
		fwrite($fp, $message."\n");
		fclose($fp);
		echo json_encode( $string );
	}
	exit();
}
