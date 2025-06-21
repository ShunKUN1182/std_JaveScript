const btn = document.querySelector("#btn");
let q1 = document.getElementsByName("q1").checked;
const q2 = document.getElementsByName("q2");
const q3 = document.getElementsByName("q3");

// console.log(q1,q2,q3,btn);

console.log(q1);


btn.addEventListener("click",()=>{
    
    if (q1[1] === "true") {
        console.log("こってり");  
    }else{
        console.log("あっさり");
        
    }

})
