window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Adjust scroll distance as needed
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});