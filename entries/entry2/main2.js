document.addEventListener("scroll", () => {
    const typewriter = document.querySelector(".typewriter");
    const rect = typewriter.getBoundingClientRect();

    // Check if element is within the viewport
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
        typewriter.classList.remove("hidden"); // Show element
    } else {
        typewriter.classList.add("hidden"); // Hide element
    }
});
