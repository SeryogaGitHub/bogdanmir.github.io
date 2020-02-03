<?php get_header();
while ( have_posts() ) :
	the_post();
	onewebinars_the_posts_navigation();
endwhile;
get_footer(); ?>