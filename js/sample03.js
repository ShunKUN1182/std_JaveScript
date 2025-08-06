//毎回ログでコンソールをチェックする。

// console.log(document.querySelector("#btn"));
const btn=document.querySelector("#btn");
const num=document.querySelector("#num");

console.log(btn);

btn.addEventListener("click",() =>{
    console.log(parseInt(num.value));
    document.body.style.backgroundColor = "tomato";
});


