const btn = document.querySelector("#btn");
let q1 = document.getElementsByName("q1");
const q2 = document.getElementsByName("q2");
const q3 = document.getElementsByName("q3");
const result = document.querySelector("h3");

// console.log(q1,q2,q3,btn);

btn.addEventListener("click",()=>{

    // console.log(q1[0].checked);

    if (q1[0].checked === true) {
        if (q2[0].checked === true) {
            if (q3[0].checked === true) {
                console.log("天下一品");
            }else{
                console.log("燃えよメンスケ");
            }
        }else{
            if (q3[0].checked === true) {
                console.log("人類みな麺類");
            }else{
                console.log("小麦の女神");
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



