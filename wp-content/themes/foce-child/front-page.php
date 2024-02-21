<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner fade-in">
            <div class="video-background">
                <video autoplay loop muted>
                    <source src="/P9/wp-content/themes/foce-child/assets/videos/Studio_Koukaki-vidéo-header-sans-son.mp4" poster="/P9/wp-content/themes/foce-child/assets/images/banner.png" type="video/mp4">
                    <!-- Adicione outros formatos de vídeo aqui (WebM, Ogg, etc.) para máxima compatibilidade -->
                </video>
            </div>
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>" alt="logo Fleurs d'oranger & chats errants" class="floating-image" id="logo">
        </section>
    </main>


        <section id="#story" class="story slide-up">
            <h2><span class= "section--titre__focus">L'histoire</span></h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>
            <article id="characters">
                <div class="main-character slide-up">
                    <h3><span class= "section--titre__focus">Les personnages</span></h3>
                    <?php
                    $main_character = $characters_query->posts[0];
                    echo '<figure>';
                    echo get_the_post_thumbnail( $main_character->ID, 'full' );
                    echo '<figcaption>'. $main_character->post_title . '</figcaption>';
                    echo '</figure>';
                    $characters_query->next_post();
                    ?>
                </div>
                <div class="other-characters">
                    <?php
                    while ( $characters_query->have_posts() ) {
                        $characters_query->the_post();
                        echo '<figure>';
                        echo get_the_post_thumbnail( get_the_ID(), 'full' );
                        echo '<figcaption>';
                        the_title();
                        echo'</figcaption>';
                        echo '</figure>';
                    }
                    ?>
                </div>
            </article>
            <article id="place" class="slide-up">
                <div>
                    <h3><span class= "section--titre__focus">Le Lieu</span></h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>

            </article>
        </section>
        <section id="studio" class="slide-up">
            <h2 class= "section--titre__focus"><span>Studio Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>


        <section class="slide-up">
            <h2 class= "section--titre__focus"><span>oscar manoooo</span></h2>
            <p><?php get_template_part( 'oscar' ); ?>
        </section>

        


    </main><!-- #main -->
<?php get_footer(); ?>
