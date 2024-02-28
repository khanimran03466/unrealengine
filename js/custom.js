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
})