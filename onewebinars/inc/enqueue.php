<?php 

/**
 * 
 */
class Onewebinars_enqueue
{
	
	function __construct()
	{
		add_action( 'wp_enqueue_scripts', array( $this , 'enqueue_scripts' ) );
		add_action( 'wp_enqueue_style', array( $this , 'enqueue_style' ) );
	}
	function enqueue_style(){
		wp_enqueue_style( 'style-name', get_stylesheet_uri() );
	}
	function enqueue_scripts(){
		wp_enqueue_script(
			'webinarstheme-scripts',
			get_template_directory_uri() . '/js/webinarstheme.script.js',
			array('jquery')
		);
		if ( is_singular() ){
			wp_enqueue_script( "comment-reply" );
		}
	}
}
$Onewebinars_enqueue = new Onewebinars_enqueue();
?>