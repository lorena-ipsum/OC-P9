
document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.fade-in-section');

    function fadeInSections() {
        sections.forEach(function(section) {
            if (isElementInViewport(section) && !section.classList.contains('fade-in')) {
                section.classList.add('fade-in');
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', fadeInSections);
    window.addEventListener('resize', fadeInSections);

    fadeInSections(); // pour animer les sections déjà visibles lors du chargement initial
});