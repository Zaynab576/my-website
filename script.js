// ===== SCROLL REVEAL ANIMATION =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".section, .service-card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

