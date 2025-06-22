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
                result.innerHTML = "鳥の鶏次";
            }else{
                result.innerHTML = "無鉄砲";
            }
        }else{
            if (q3[0].checked === true) {
                result.innerHTML = "ラーメン人生jet";
            }else{
                result.innerHTML = "たけ井";
            }
        }
    }else{
        if (q2[0].checked === true) {
            if (q3[0].checked === true) {
                result.innerHTML = "ニューヨーク×ニューヨーク";
            }else{
                result.innerHTML = "カドヤ食堂";
            }
        }else{
            if (q3[0].checked === true) {
                result.innerHTML = "坂本龍馬が愛したラーメン食堂";
            }else{
                result.innerHTML = "燃えよ麺助"
                
            }
        }
    }

})



