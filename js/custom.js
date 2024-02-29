const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

const menuLi = document.querySelectorAll("nav ul li");



hamburger.addEventListener("click", (e) => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
    body.classList.toggle("active");
})

menuLi.forEach(el => {
    el.addEventListener("click", e => {
        nav.classList.toggle("active");
        hamburger.classList.toggle("active");
        body.classList.toggle("active");
    })
});



// Amination goes here.

const timeline = gsap.timeline({ default: { duration: 1, ease: "bounce.out" } });

timeline
    .from(".video-text h1", { y: "-500%", delay: .5, opacity: 0 })
    .from(".video-text a", { y: "-500%", delay: .5, opacity: 0 })
    .from(".vertical-line", { x: "-500%", delay: .5, opacity: 0 })
    .from(".about-us h2", { y: "500%", delay: .5, opacity: 0 })
    .from(".about-us p", { y: "-500%", delay: .5, opacity: 0 })
    .from(".community-left", { y: "-200%", delay: 2, opacity: 0 })