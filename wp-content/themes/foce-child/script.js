//--OK Paralaxe
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


//--NO OK Animation sur fleurs lors du scroll
// Obtenez tous les éléments que vous souhaitez animer
const animatedElements = document.querySelectorAll('.story__article::after, .story h2::after, #studio h2::after, #studio h2::before, .site-footer::before, .site-footer::after');

// Ajoutez une classe pour accélérer l'animation
function accelerateAnimation() {
    // Boucle à travers tous les éléments animés
    animatedElements.forEach((element) => {
        // Vérifiez si l'élément est visible à l'écran
        var position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            // Si l'élément est partiellement visible, accélérez l'animation
            element.classList.add('faster-rotation');
        } else {
            // Sinon, supprimez la classe d'accélération
            element.classList.remove('faster-rotation');
        }
    });
}

// Écoutez l'événement de défilement et appelez la fonction d'accélération de l'animation
window.addEventListener('scroll', accelerateAnimation);

// Assurez-vous d'appeler la fonction une fois au chargement de la page pour initialiser l'animation
accelerateAnimation();

 
//--NO OK Animation des titres
// Fonction pour détecter si la section est visible à l'écran
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour gérer le scroll et l'animation des titres
// Fonction pour vérifier si un élément est visible à l'écran
function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
}

// Fonction pour gérer le scroll et l'animation des titres des sections
function handleSectionScroll() {
    var sectionTitles = document.querySelectorAll('.section--titre__focus');

    sectionTitles.forEach(function(title) {
        var section = title.closest('section');
        if (isElementVisible(section)) {
            title.classList.add('visible');
        }
    });
}

// Écouter l'événement de scroll
window.addEventListener('scroll', handleSectionScroll);

// Appeler handleSectionScroll une fois au chargement de la page pour initialiser les états visibles
handleSectionScroll();

//-- OK Fade in
    jQuery(document).ready(function($) {
        $(document).on("scroll", function() {
            var pageTop = $(document).scrollTop();
            var pageBottom = pageTop + $(window).height();
            var titles = $(".slide-up");

            for (var i = 0; i < titles.length; i++) {
                var title = titles[i];

                if ($(title).position().top < pageBottom) {
                    $(title).addClass("visible");
                // } else {
                //     $(title).removeClass("visible");
                }
            }
        });
    });





//--NO OK Animer les nuages

//--NO OK Carroussel des personagges simples vers le cote avec Swipe

//--NO OK Menu en full screen