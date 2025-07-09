console.log("foo");
const btns = document.querySelectorAll(".btn");



// btns.addEventListener("click",()=>{
//     console.log("saka");
// })

function changeBackground(color="#FFF") {
    document.body.style.backgroundColor = color;
}

btns.forEach((e) => {
    e.addEventListener("click",(event)=>{
        console.dir(event.target.dataset.color);
        changeBackground(event.target.dataset.color);
    })
});