const body = document.querySelector("body");
const audio01 = new Audio("./audio/type01.mp3");
const audio02 = new Audio("./audio/type02.mp3");
const audio03 = new Audio("./audio/type03.mp3");

body.addEventListener("keydown", (e) => {
    const keys = document.querySelectorAll(".key_wrap div");
    keys.forEach((ele) => {
        console.log(ele.textContent, e.code);
        const inputKey = e.code.split("y")[1];
        if (inputKey === ele.textContent) {
            const randomNum = Math.floor(Math.random() * 3 + 1);
            if (randomNum == 1) {
                audio01.currentTime = 0;
                audio01.play();
            } else if (randomNum == 2) {
                audio02.currentTime = 0;
                audio02.play();
            } else {
                audio03.currentTime = 0;
                audio03.play();
            }
            ele.classList.add("active");
            setTimeout(() => {
                ele.classList.remove("active");
            }, 100);
        }
    });
});
