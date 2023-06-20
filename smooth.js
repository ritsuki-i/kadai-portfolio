const pagetop_btn = document.querySelector(".top-button");
const pagetop_menu = document.querySelector(".top-menu");

pagetop_btn.addEventListener("click", function () {
    window.scroll({ top: 0, behavior: "smooth" });
});
pagetop_menu.addEventListener("click", function () {
    window.scroll({ top: 0, behavior: "smooth" });
});

const scorrllLinks = document.querySelectorAll('a[href^="#"]');
scorrllLinks.forEach((scorrllLink) => {
    scorrllLink.addEventListener("click", (e) => {
        e.preventDefault();
        const hrefLink = scorrllLink.getAttribute("href");
        const targetContent = document.getElementById(hrefLink.replace("#", ""));
        const rectTop = targetContent.getBoundingClientRect().top;
        const positionY = window.pageYOffset;
        const target = rectTop + positionY;
        window.scrollTo({
            top: target,
            behavior: "smooth",
        });
    });
});