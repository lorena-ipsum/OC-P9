<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner fade-in">
            <!--  Video en back ground here - with image as 'poster while video is charging -->
            <div class="video-background">
                <video autoplay loop muted>
                    <source src="/P9/wp-content/themes/foce-child/assets/videos/Studio_Koukaki-vidéo-header-sans-son.mp4" poster="/P9/wp-content/themes/foce-child/assets/images/banner.png" type="video/mp4">
                </video>
            </div>
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>" alt="logo Fleurs d'oranger & chats errants" class="floating-image" id="logo">
        </section>
        <section id="#story" class="story slide-up">
            <h2><span class= "section--titre__focus">Lhistoire</span></h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            
           
                <?php get_template_part('template-parts/characters'); ?>
            

            <article id="place" class="slide-up">
                <div>
                    <h3><span class= "section--titre__focus">Le Lieu</span></h3>
                    <!-- <div class=lieu--nuage><img scr="/assets/images/big_cloud.png"> -->
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
            </article>
        </section>
        <section id="studio" class="slide-up">
            <h2><span class= "section--titre__focus">Studio Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>


        <section class="slide-up"> 
            <p><?php get_template_part('template-parts/oscar'); ?></p>
        </section>

    </main>
<?php get_footer(); ?>
