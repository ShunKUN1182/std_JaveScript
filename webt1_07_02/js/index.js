const btn = document.querySelector(".btn");
const btnX = btn.getBoundingClientRect().top;
const btnY = btn.getBoundingClientRect().left;
const btnWidth = btn.getBoundingClientRect().width;
const btnHeight = btn.getBoundingClientRect().height;

btn.addEventListener("mouseenter", (e) => {
    console.log(e);
    const userX = e.clientX;
    const userY = e.clientY;
    if (userY <= btnX + 30) {
        classRemove();
        classAdd("top");
    }
    if (userY >= btnX + btnHeight - 30) {
        classRemove();
        classAdd("bottom");
    }
    if (userX <= btnY + 10) {
        classRemove();
        classAdd("left");
    }
    if (userX >= btnY + btnWidth - 10) {
        classRemove();
        classAdd("right");
    }
});

function classRemove() {
    btn.classList.remove("top");
    btn.classList.remove("left");
    btn.classList.remove("right");
    btn.classList.remove("bottom");
}

function classAdd(direction) {
    btn.classList.add(direction);
}

// window.addEventListener("mousemove", (e) => {
//     if (
//         e.clientX >= btn.offsetLeft &&
//         e.clientX <= btn.offsetLeft + btn.offsetWidth &&
//         e.clientY >= btn.offsetTop &&
//         e.clientY <= btn.offsetTop + btn.offsetHeight
//     ) {
//         console.log(e.clientX);
//         if (e.clientX === btn.offsetLeft) {
//             classRemove();
//             btn.classList.add("left");
//         }
//         if (e.clientX === btn.offsetLeft + btn.offsetWidth) {
//             classRemove();
//             btn.classList.add("right");
//         }
//         if (e.clientY === btn.offsetTop) {
//             classRemove();
//             btn.classList.add("top");
//         }
//         if (e.clientY === btn.offsetTop + btn.offsetHeight) {
//             classRemove();
//             btn.classList.add("bottom");
//         }
//     } else {
//         return;
//     }
// });
