const buttons = document.querySelectorAll('button');
const keisan = document.querySelector("#keisan");

let concatText="";
function buttonPresseed(event) {
    const text = event.target.textContent;

    if(text === "="){
        concatText = eval(concatText);
    }else if(text === "C"){
        concatText= "";
    } else {   
        concatText = concatText+text;
    }
    
    keisan.textContent = concatText;

    }



buttons.forEach(button => button.addEventListener('click',buttonPresseed))
