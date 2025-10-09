const btns = document.querySelectorAll(".button");
const result = document.querySelector("#result");

btns.forEach(e => {
    e.addEventListener("click" , ()=>{
        if (e.value == "=") {
            result.value = eval(result.value);
        }else if (e.value == "c") {
            result.value = "";
        }else{
            result.value += e.value;
        }
    })
});


































