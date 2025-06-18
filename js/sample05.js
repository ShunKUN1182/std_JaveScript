/*

for(カウンター；終了の条件；カウント){

}


*/

for(let i=0; i<10; i++){
    // console.log("メッセージ"+(i+1)+"回目");
    console.log(`メッセージ${i+1}回目`); 
}

let count=0;
while(count<10){
    console.log(`メッセージ${count}回目`);
    
    count++;
}

// let school = new Array();
let school = [];
school[0]="ECCコンピュータ専門学校";
school[1]="ECCアーティスト専門学校";
school[2]="ECC国際外語専門学校";
school[3]="ECCコンピュータ高等学校";
school[4]="ECCコンピュータ高等学校";
school[5]="ECCコンピュータ高等学校";
school[6]="ECCコンピュータ高等学校";
school[7]="ECCコンピュータ高等学校";
school[8]="ECCコンピュータ高等学校";

console.log(school.length);



for(let i=0; i<school.length; i++){
    // console.log(school[i]);
}


school.forEach((v,i)=>{
    console.log(i);
    
})


const btn = document.querySelectorAll(".btn");


btn.forEach((e)=>{
    e.addEventListener("click", () =>{
        // console.log("btn");
        document.body.style.backgroundColor = e.value;
    });  
    
})


