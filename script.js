// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===== NAVBAR SHRINK ON SCROLL =====
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.style.padding = "10px 0";
        navbar.style.transition = "0.3s";
    } else {
        navbar.style.padding = "20px 0";
    }
});


// ===== SCROLL REVEAL ANIMATION =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".section, .service-card, .gallery-item").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});
