const btn = document.querySelector("#btn");
let q1 = document.getElementsByName("q1");
const q2 = document.getElementsByName("q2");
const q3 = document.getElementsByName("q3");
const img = document.querySelector("h3");
const result = document.querySelector("h4");

// console.log(q1,q2,q3,btn);


btn.addEventListener("click",()=>{

    // console.log(q1[0].checked);

    if (q1[0].checked === true) {
        if (q2[0].checked === true) {
            if (q3[0].checked === true) {
                result.innerHTML = "鳥の鶏次";
                img.innerHTML = `<img src="images/keiji.jpg" alt="鳥の鶏次">`
            }else{
                result.innerHTML = "無鉄砲";
                img.innerHTML = `<img src="images/muteppou.jpg" alt="無鉄砲">`
            }
        }else{
            if (q3[0].checked === true) {
                result.innerHTML = "ラーメン人生jet";
                img.innerHTML = `<img src="images/jinsei.webp" alt="ラーメン人生jit">`
            }else{
                result.innerHTML = "たけ井";
                img.innerHTML = `<img src="images/takei.webp" alt="たけい">`
            }
        }
    }else{
        if (q2[0].checked === true) {
            if (q3[0].checked === true) {
                result.innerHTML = "ニューヨーク×ニューヨーク";
                img.innerHTML = `<img src="images/newyork.jpg" alt="ニューヨーク">`
            }else{
                result.innerHTML = "カドヤ食堂";
                img.innerHTML = `<img src="images/kadoya.jpg" alt="カドヤ">`
            }
        }else{
            if (q3[0].checked === true) {
                result.innerHTML = "坂本龍馬が愛したラーメン食堂";
                img.innerHTML = `<img src="images/ryouma.webp" alt="龍馬">`
            }else{
                result.innerHTML = "燃えよ麺助"
                img.innerHTML = `<img src="images/moeyo.jpg" alt="燃えよ">`
                
            }
        }
    }

})



