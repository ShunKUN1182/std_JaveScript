let wd2a = [0, 0, 1, 0, 0];
let body = document.querySelector("body");

console.log(wd2a);

body.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        wd2a.fill(0, 2, 3);
        wd2a.fill(1, 3, 4);
    }
    console.log(wd2a);
});
