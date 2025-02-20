document.addEventListener("DOMContentLoaded", function () {
    const hiddenSections = document.querySelectorAll(".hidden");

    function fadeInOnScroll() {
        hiddenSections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run initially to check already visible sections
});
