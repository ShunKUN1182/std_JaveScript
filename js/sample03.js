//毎回ログでコンソールをチェックする。

// console.log(document.querySelector("#btn"));
const btn=document.querySelector("#btn");
const num=document.querySelector("#num");

console.log(num);
btn.addEventListener("click",() =>{
    //クリックしたらこの中に動く
    console.log(parseInt(num.value));
});

