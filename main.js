const backToTopButton = document.querySelector("#backtotop");
const overlay = document.querySelector(".overlay");
const showMore = document.querySelector("#seemore");
const closeButton = document.querySelector("#close");
const toggleButton = document.querySelector("#toggle");
const mobileMenu = document.querySelector('#menu');
const menuToggleButton = document.querySelector('#menu-toggle')

window.onscroll = function () {
    scrollFunction();
};
const scrollFunction = () => {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

const displayElement = () => {
    console.log("Button is clicked");
    overlay.classList.toggle("hidden");
};

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

const toggleTheTheme = () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};


window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

menuToggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    menuToggleButton.setAttribute("aria-expanded", mobileMenu.classList.contains("active"));
});

document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && !menuToggleButton.contains(event.target)) {
        mobileMenu.classList.remove("active");
        menuToggleButton.setAttribute("aria-expanded", "false");
    }
});


backToTopButton.addEventListener("click", backToTop);
showMore.addEventListener("click", displayElement);
closeButton.addEventListener("click", displayElement);
toggleButton.addEventListener('click', toggleTheTheme)

