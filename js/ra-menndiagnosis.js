const btn = document.querySelector("#btn");
let q1 = document.getElementsByName("q1");
const q2 = document.getElementsByName("q2");
const q3 = document.getElementsByName("q3");
const result = document.querySelector("h4");

// console.log(q1,q2,q3,btn);

btn.addEventListener("click",()=>{

    // console.log(q1[0].checked);

    if (q1[0].checked === true) {
        if (q2[0].checked === true) {
            if (q3[0].checked === true) {
                result.innerHTML = "鳥の鶏次"
            }else{
                result.innerHTML = "無鉄砲"
            }
        }else{
            if (q3[0].checked === true) {
                result.innerHTML = "ラーメン人生jet"
            }else{
                result.innerHTML = "小麦の麺神"
            }
        }
    }else{
        if (q2[0].checked === true) {
            if (q3[0].checked === true) {
                console.log("怪力屋");
            }else{
                console.log("来来亭");
            }
        }else{
            if (q3[0].checked === true) {
                console.log("ラーメン人生");
            }else{
                console.log("太鼓");
                
            }
        }
    }

})



