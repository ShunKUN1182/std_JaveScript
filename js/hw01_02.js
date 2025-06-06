const No1=document.querySelector("#inputNo1")
const No2=document.querySelector("#inputNo2")
const btn=document.querySelector("#calculation")
const rlt=document.querySelector("#result")
const calcSymbol=document.querySelector("#calcSymbol")

// console.log(calcSymbol.value);


// const text1=document.querySelector("#iti")
        // const text2=document.querySelector("#ni")
        // const button=document.querySelector("button")
        // const result=document.querySelector("#result")
// こんなまちがいをしないようにしよう

btn.addEventListener("click", ()=>{

        const num1=parseInt(No1.value)
        const num2=parseInt(No2.value)

        if (calcSymbol.value="+") {
                rlt.value=num1+num2
        }
        else if (calcSymbol.value="-") {
                rlt.value=num1-num2
        }
        // console.log(No1.value + No2.value);
        // console.log(num1,num2);
        // rlt.value=parseInt(num1+calcSymbol.value+num2);
        
    
        // rlt.value=num1 calcSymbol.value num2;




})






        // function buttonpresseed(event){
            
        //     let keisan;
        //     keisan=text1+text2;
        //     console.log(keisan);
            
        // }
