const links = document.querySelectorAll(".navbar-item");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop - 50;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}