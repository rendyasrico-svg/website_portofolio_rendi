// =========================
// MENU MOBILE
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const closeMenu = document.querySelector(".close-menu");

// buka menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
});

// tutup menu
closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

// klik menu otomatis tutup
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// =========================
// ANIMASI SCROLL
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            section.classList.add("show");
        }
    });
});