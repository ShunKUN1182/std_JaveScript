const result = document.querySelector("input");
const btns = document.querySelectorAll("button");
let resultCalculation = "";

btns.forEach(e =>{
    e.addEventListener("click" , ()=>{
        if (e.textContent == "=") {
            result.value = eval(resultCalculation);
            resultCalculation = eval(resultCalculation)
        }else if(e.textContent === "c"){
            result.value = "";
            resultCalculation = "";
        }else if (e.textContent === "×") {
            result.value += e.textContent;
            resultCalculation += "*";
        }else if(e.textContent === "÷"){
            result.value += e.textContent;
            resultCalculation += "/";
        }else{
            result.value += e.textContent;
            resultCalculation += e.textContent;
        };
        console.log(resultCalculation);
        // result.value = formatDisplay(result.value);
        // console.log("計算用:", resultCalculation);
        // console.log("表示用:", result.value);
    })
});

// function formatDisplay(str) {
//     return str.replace(/\d+/g, num =>
//         num.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//     );
// }

// function formatNumber(num) {
//     return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }