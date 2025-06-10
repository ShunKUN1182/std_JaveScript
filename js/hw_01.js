// console.log("hiro");

let result = document.querySelector("#result");
const btn = document.querySelectorAll(".button")

console.log(btn);

let text = "";

btn.forEach(target => {
    
    target.addEventListener("click", ()=>{
    
        result = btn.value

    })

});

