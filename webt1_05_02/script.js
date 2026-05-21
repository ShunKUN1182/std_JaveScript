const menuBtn = document.querySelector(".menuBtn");
const span = document.querySelector("#span");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("isActive");
    span.classList.toggle("isActive");
});
