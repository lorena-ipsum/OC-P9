<?php
// Enqueu parent et child styles 
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    // Enfileira o estilo do tema pai
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    // Enfileira o estilo do tema filho (style.css)
    wp_enqueue_style( 'child-style', get_stylesheet_uri(), array( 'parent-style' ) );
}
?>
