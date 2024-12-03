window.addEventListener("scroll", () => {
    const scrolledToEnd =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (scrolledToEnd) {
        document.body.classList.add("scrolled-to-end");
    } else {
        document.body.classList.remove("scrolled-to-end");
    }
});
