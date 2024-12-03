document.addEventListener("scroll", () => {
    const typewriter = document.querySelector(".typewriter");
    const rect = typewriter.getBoundingClientRect();
    const isScrolledPast = rect.bottom < window.innerHeight; // 텍스트가 화면 아래로 스크롤됨

    if (isScrolledPast) {
        typewriter.classList.add("hidden");
    } else {
        typewriter.classList.remove("hidden");
    }
});
