//EFFET PARALLAXE ENTRE LOGO ET BACKGROUND-VIDEO
document.addEventListener("DOMContentLoaded", function() {
    var banner = document.querySelector('.banner');
    var videoBackground = document.querySelector('.video-background');
    var logo = document.getElementById('logo');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // Pour bouger la video em background a la motie de la vitesse du scroll
        videoBackground.style.top = scrollPosition * 0.5 + 'px';

        // Check si le logo a touche le haut de la section Story
        var logoTop = logo.getBoundingClientRect().top;
        var historySectionTop = document.querySelector('#story').getBoundingClientRect().top;

        // Si le logo a touche le section story in va suivre le scroll
        if (logoTop <= historySectionTop) {
            logo.style.position = 'fixed';
            logo.style.top = '0';
        } else {
            // Si non, il reste dans son etat normal de fluctuation.
            logo.style.position = 'absolute';
            logo.style.top = 'initial';
        }
    });
});


//EFFET FADE-IN DES SECTIONS
jQuery(document).ready(function($) {
    $(document).on("scroll", function() {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var titles = $(".slide-up");

        for (var i = 0; i < titles.length; i++) {
            var title = titles[i];

            if ($(title).position().top < pageBottom) {
                $(title).addClass("visible");
            } else {
                 $(title).removeClass("visible");
            }
        }
    });
});

//ANIMATION DES TITRES
document.addEventListener('DOMContentLoaded', function() {
    var titresFocus = document.querySelectorAll('.section--titre__focus');

    function checkVisibility() {
        titresFocus.forEach(function(titre) {
            var rect = titre.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                titre.classList.add('visible');
            }
        });
    }

    // Vérifier la visibilité lors du chargement de la page
    checkVisibility();

    // Vérifier la visibilité lors du défilement
    window.addEventListener('scroll', function() {
        checkVisibility();
    });
});



//--NO ANIMATION ROTATE-FLOWERS ACELERATE AU SCROLL
document.addEventListener('DOMContentLoaded', function() {
    var scrollSpeed = 10; // Vitesse de défilement initiale
    var lastScrollTop = 0;

    // Fonction pour détecter le défilement et ajuster la vitesse de rotation
    function adjustRotationSpeed() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // L'utilisateur fait défiler vers le bas
            scrollSpeed += 2; // Augmenter la vitesse de rotation
        } else {
            // L'utilisateur fait défiler vers le haut
            scrollSpeed -= 2; // Diminuer la vitesse de rotation
            if (scrollSpeed < 4) {
                scrollSpeed = 4; // Limiter la vitesse minimale
            }
        }
        // Appliquer la nouvelle vitesse de rotation à tous les éléments avec l'animation
        var rotatingElements = document.querySelectorAll('.story__article::after, .story h2::after, #studio h2::after, #studio h2::before, .site-footer::after, .site-footer::before');
        rotatingElements.forEach(function(element) {
            element.style.animationDuration = scrollSpeed + 's';
        });
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Pour les mobiles ou les navigateurs qui ont un comportement de défilement étrange
    }

    // Écouter l'événement de défilement
    window.addEventListener('scroll', function() {
        adjustRotationSpeed();
    });
});


//--NO  FLUFFY CLOUD

//--NO  CARROUSSEL DES CHARACTERS

