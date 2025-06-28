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

const sortNumber = [];

console.log("ランダムな数字",randomNumber);
/*
step1
js の sort を使って実現
*/



randomNumber.sort();

console.log(randomNumber);


/*
step2
配列操作で自作する
*/

console.log("並び替えたあとの数字",sortNumber);

