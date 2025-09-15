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

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});


// var prevScrollpos = window.pageYOffset;
// var nav = document.getElementById("nav");
// nav.style.transition = "top 0.3s ease";

// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     nav.style.top = "0";
//   } else {
//     nav.style.top = "-50%";
//   }
//   prevScrollpos = currentScrollPos;
// }

const menuToggle = document.getElementById("menuToggle");
const menuGroup = document.getElementById("menuGroup");
// const infotop = document.getElementById("info");

menuToggle.addEventListener("click", () => {
  menuGroup.classList.toggle("shows");
//   infotop.classList.toggle("show");

    if (menuGroup.classList.contains("shows")) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
  }
});



