<?php
// Enqueue parent et child styles 
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    // Enqueue parent style
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    // Enqueue child style (style.css)
    wp_enqueue_style( 'child-style', get_stylesheet_uri(), array( 'parent-style' ) );
}


//Enqueue scripts.js
function enqueue_custom_scripts() {
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/script.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');



?>
