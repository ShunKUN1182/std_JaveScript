// console.log("foo");

// function 関数名(引数){
//     やることをかく
// }

// 関数の使い方（呼び出し方）
// 関数名()

function showConsole(name="名無し",msg="おはよう"){
    console.log(`${msg}${name}さん`);
}

// showConsole("さかくら","こんばんわ");

// showConsole("ほそかわ");

// showConsole();

let taxNum = 0;
let errMsg;
let result;
function calcTax(itemPrice,selectBuy){
    switch(selectBuy){
        case 0:
            console.log("テイクアウト");
            taxNum = 0.1;
        break;
        case 1:
            console.log("イートイン");
            taxNum = 0.08;
        break;
        default:
            errMsg = "error";
        break;
    }
    // if (selectBuy === 1) {
    //     taxNum = 0.08;
    // }else{
    //     return "error";
    // }
    // console.log(errMsg);
    if(errMsg === undefined){
        let tax = taxNum;
        let itemPriceA = itemPrice;
        result = itemPriceA + (tax*itemPriceA); 

    }else{
        result = errMsg;
    }

    // console.log(result);
    return result;
}


const resultPrice = calcTax(10000,2);
console.log(resultPrice);
