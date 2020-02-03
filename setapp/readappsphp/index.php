<?php
$file = file_get_contents('https://store.setapp.com/web_data/api/v1/en_US');
$json = json_decode( $file, true );
$dats = $json["data"]["relationships"]["vendors"]["data"];
$applicationsout = array();
$file_cont = file_get_contents(dirname(__FILE__).DIRECTORY_SEPARATOR.'apps.xml');
// $file = file_get_contents(dirname(__FILE__).DIRECTORY_SEPARATOR.'appsrepl.xml');
foreach ($dats as $dat) {
	$applications = $dat["relationships"]["applications"]["data"];
	if(is_array($applications)){
		foreach ($applications as $application) {
			// var_dump($application["attributes"]["installers"]);
			$installers = array_shift($application["attributes"]["installers"]);
			// var_dump($installers);
			if(isset($installers["url"])){
				$url = $installers["url"];
				// $url = str_replace('https://store.setapp.com/', '', $url);
				// preg_match('/app\/([0-9]*)\/installers\/(.*)\/(.*\.zip)/', $url, $output_array);
				// echo "<pre>";
					$slugs = array_shift($application["attributes"]["app_slugs"]);
					// var_dump($slugs["slug"]);
					$file_cont = str_replace('href="https://setapp.com/apps/'.$slugs["slug"].'"', 'href="'.$url.'" target="_blank"', $file_cont);
				// echo "</pre>";
				$applicationsout[$application["id"]] = $url;
			}
		}
	}
}
$file_cont = str_replace('applications', 'applicationslist', $file_cont);
$file = fopen(dirname(__FILE__).DIRECTORY_SEPARATOR.'appsrepl.xml', 'w+');
fwrite($file, $file_cont);
fclose($file);
// echo "<pre>";
// 	var_dump($applicationsout);
// echo "</pre>";