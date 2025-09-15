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

// const navbar = document.querySelector("nav");

// window.addEventListener("scroll", () => {
//     if (window.scrollY > 100) {
//         navbar.classList.add("active");
//     } else {
//         navbar.classList.remove("active");
//     }
// });


const nav = document.getElementById("nav");
let prevScrollPos = window.pageYOffset;

nav.style.transition = "top 0.3s ease, background 0.3s ease";

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos === 0) {
    nav.style.top = "0";
    nav.style.background = "transparent";
    nav.style.backdropFilter= "blur(0)";
  } else {
    nav.style.top = prevScrollPos > currentScrollPos ? "0" : "-50%";
    nav.style.background = " rgba(0, 0, 0, 0.2)";
    nav.style.backdropFilter= "blur(20px)";
    // backdrop-filter: blur(20px);
  }

  prevScrollPos = currentScrollPos;
});


const menuToggle = document.getElementById("menuToggle");
const menuGroup = document.getElementById("menuGroup");
const infotop = document.getElementById("info");

menuToggle.addEventListener("click", () => {
  menuGroup.classList.toggle("shows");
  infotop.classList.toggle("show");

    if (menuGroup.classList.contains("shows")) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
  }
});



