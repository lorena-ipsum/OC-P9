//Paralaxe
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


//Animation sur les Titres

