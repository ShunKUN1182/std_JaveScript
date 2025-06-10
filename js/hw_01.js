// console.log("hiro");

let result = document.querySelector("#result");
const buttons = document.querySelectorAll(".button")


let text = "";

function name(event) {

    const text = event.target.textContent;

    if (text === "=") {
        concatText = eval(concatText);   
    } else {
        concatText = concatText + text;
    }
}
result.value = concatText

buttons.forEach(button => button.addEventListener("click",name ));
    

