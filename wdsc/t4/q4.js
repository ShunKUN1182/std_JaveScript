const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

console.log(menuBtn);

let count = 0;

menuBtn.addEventListener("click", () => {
    // if (count == 0) {
    //     nav.classList.add("is-active");
    //     menuBtn.classList.add("is-active");
    //     count = 1;
    // } else {
    //     nav.classList.remove("is-active");
    //     menuBtn.classList.remove("is-active");
    //     count = 0;
    // }
    nav.classList.toggle("is-active");
    menuBtn.classList.toggle("is-active");
});
