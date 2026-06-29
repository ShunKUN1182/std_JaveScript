const body = document.querySelector("body");
const audio01 = new Audio("../audio/type01.mp3");
const audio02 = new Audio("../audio/type02.mp3");
const audio03 = new Audio("../audio/type03.mp3");

body.addEventListener("keydown", (e) => {
    const keys = document.querySelectorAll(".key_wrap div");
    keys.forEach((ele) => {
        console.log(ele.textContent, e.code);
        const inputKey = e.code.split("y")[1];
        if (inputKey === ele.textContent) {
            ele.classList.add("active");
            audio01.played();
            setTimeout(() => {
                ele.classList.remove("active");
            }, 100);
        }
    });
});
