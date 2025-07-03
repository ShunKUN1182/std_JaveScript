const randomNums = [];
let setNums = new Set();
const maxNum = 5;
const limit = 10;

while(setNums.size<maxNum){
    randomNums.push(Math.floor(Math.random() * limit)+1);
    setNums = new Set(randomNums);
}

// randomNumber配列をsetNumsからコピー
const randomNumber = [...setNums];

let sortNumber = [];

console.log("ランダムな数字",randomNumber);
/*
step1
js の sort を使って実現
*/


// function compareFn(a,b){
//     return a-b;
// }


// function (){
    
// }

// ()=>{
//     a = b + c;
//     return a;
// }
// () => a

// btn.addEventListener("click",newWin);
// btn.addEventListener("tap", newWin);


randomNumber.sort((a,b)=>a-b);

// randomNumber.sort((a,b)=>{
//     return a - b;
// })

sortNumber = randomNumber

console.log("並び替えたあとの数字",sortNumber);


/*
step2
配列操作で自作する
*/


