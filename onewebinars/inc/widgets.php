<?php 

/**
 * 
 */
class Onewebinars_widgets
{
	
	function __construct()
	{
		add_action( 'widgets_init', array( $this , 'widgets_init' ) );
	}
	function widgets_init(){
		register_sidebar(
			array(
				'name'          => __( 'Footer', 'onewebinars' ),
				'id'            => 'sidebar-1',
				'description'   => __( 'Add widgets here to appear in your footer.', 'onewebinars' ),
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget'  => '</section>',
				'before_title'  => '<h2 class="widget-title">',
				'after_title'   => '</h2>',
			)
		);
	}
}
$Onewebinars_widgets = new Onewebinars_widgets();
?>