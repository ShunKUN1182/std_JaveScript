console.log("hosokawa");

const age = parseInt(prompt("年齢入力"));


// console.log(age);
// もしもageの値が１２より小さい場合　こどもだね　と表示する

/*

if (条件) {
    条件がtrueの場合実らが動く
}

A＝＝B 同じ
A!=B 同じじゃない
A>B
A<B
A>=B　以上
A<=B　以下
*/

// 
if( age>=0 && age<=12){
    console.log("子供でちゅね");
}
else if (age>=13 && age<=15) {
    console.log("勉強がんばれ");
}
else if (age==20) {
    console.log("成人おめでとう");
    
}
else if (age<0 || age>=101) {
    console.log("人間ですか？");
    
}



else{
    console.log("数字入れろ");
    
}