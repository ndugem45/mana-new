function scrollToSection(target, offset) {
    var element = document.getElementById(target);
    if (!element) return;

    var elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

    var offsetPosition;

    if (offset === true) {
        // Scroll ke tengah viewport
        var viewportHeight = window.innerHeight;
        var elementHeight = element.offsetHeight;
        offsetPosition = elementPosition - (viewportHeight / 2) + (elementHeight / 2);
    } else {
        // Scroll ke atas elemen (tanpa offset)
        offsetPosition = elementPosition;
    }

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
