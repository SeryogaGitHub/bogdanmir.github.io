<?php
require_once dirname(__FILE__).'/inc/install.php';
require_once dirname(__FILE__).'/inc/enqueue.php';
require_once dirname(__FILE__).'/inc/widgets.php';
if (!function_exists('onewebinars_the_posts_navigation')) {
	function onewebinars_the_posts_navigation(){
		the_posts_pagination();
	}
}