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


gsap.registerPlugin(ScrollTrigger);


gsap.from(".video-h1",
    {
        scrollTrigger: { trigger: ".video-h1" },
        y: "-500%", opacity: 0, duration: 2
    });

gsap.from(".video-text a",
    {
        scrollTrigger: { trigger: ".video-text a" },
        y: "-500%", opacity: 0, duration: 2
    });

gsap.from(".vertical-line",
    {
        scrollTrigger: { trigger: ".vertical-line" },
        xPercent: -100, left: "100%", opacity: 0,  duration: 2, force3D: true,
    });


gsap.from(".about-h2", {
    scrollTrigger: { trigger: ".about-h2", toggleActions: "restart none none none" },
    xPercent:-100, left:"100%", force3D:true, duration: 2
}
);


gsap.from(".about-us p",
    {
        scrollTrigger: { trigger: ".about-us p" },
        yPercent: -100, top: "100%", opacity: 0, duration: 2, force3D:true,
    });


gsap.from(".community-left",
    {
        scrollTrigger: { trigger: ".community-left", toggleActions: "restart none none none" },
        y: "-200%", opacity: 0, duration: 2
    });





