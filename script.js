// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".section-label, .section-title, .about-card, .skill-card, .project-card, .education-card, .certificate-card, .contact-info, .contact-message"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// =========================
// HERO ANIMATION
// =========================

window.addEventListener("load", () => {
    document.querySelector(".hero-text")?.classList.add("hero-show");
    document.querySelector(".hero-photo")?.classList.add("photo-show");
});


// =========================
// TYPING EFFECT
// =========================

const typingText = document.querySelector(".hero h2");

if (typingText) {
    const originalText = typingText.textContent;
    typingText.textContent = "";

    let index = 0;

    function typeEffect() {
        if (index < originalText.length) {
            typingText.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeEffect, 70);
        }
    }

    setTimeout(typeEffect, 700);
}


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});
