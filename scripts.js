const button = document.getElementById("nav-button");
const ul = document.getElementById("ul");
const ulleft = ul.offsetLeft;
const openerr = 40;
const closedd = -205;

button.addEventListener("click", function () {
    if (ul.offsetLeft === openerr) {
        ul.style.left = closedd + "px";
    } else {
        ul.style.left = openerr + "px";
    }
    if (ul.offsetLeft === openerr) {
        ul.style.left = closed + "px";
    }

});

// Contact Section Animation Script
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".contact-section-card");

    const revealOnScroll = () => {
        const trigger = window.innerHeight * 0.85;
        cards.forEach(card => {
            const top = card.getBoundingClientRect().top;
            if (top < trigger) {
                card.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
