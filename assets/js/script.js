'use strict'


//* Add event on multiple elements - Function
const addEventOnElement = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

//* Navbar Toggle for mobile

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavBar = () => {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement([navToggleBtn, overlay], "click", toggleNavBar)


//! PARALLAX EFFECT
const parallaxElements = document.querySelectorAll("[data-parallax]");


document.addEventListener("mousemove", (event) => {
    for (let i = 0; i < parallaxElements.length; i++) {
        const movementX = (event.clientX / window.innerWidth) * Number(parallaxElements[i].dataset.parallaxSpeed)
        const movementY = (event.clientY / window.innerHeight) * Number(parallaxElements[i].dataset.parallaxSpeed)
        parallaxElements[i].animate({
            transform: `translate(${movementX}px, ${movementY}px)`
        }, { duration: 500, fill: "forwards" })
    }
})

