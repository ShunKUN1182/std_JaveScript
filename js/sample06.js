// text.innerHTML = "あいう<br>えお";
const text = document.querySelector("#text");
const userName = document.querySelector("#name")
const addBtn = document.querySelector("#addBtn")
const memberLists = document.querySelector(".memberList>tbody")
const allReset = document.querySelector("#allReset")

// console.log(userName,addBtn,memberLists);
console.log(allReset);


let num = 0;

// function clk() {
    
// };

addBtn.addEventListener("click",() =>{
    
    num++;
    let memberList = `<tr>`;
    memberList += `<td>${num}</td>`;
    memberList += `<td>${userName.value.trim()}</td>`;
    memberList +=`<td width="75">`;
    memberList +=`<input id="resetBtn" type="button" value="リセット${num}">`;
    memberList +="</td>"
    memberList +="</tr>";
    memberLists.innerHTML+=memberList
    // if{
        
    // }
    
})

const resetBtn = document.querySelector("#resetBtn")
console.log(resetBtn);


allReset.addEventListener("click",()=>{

    memberLists.innerHTML = "";
    num = 0;

})








// memberLists.innerHTML = "<tr><td>1</td><td>坂口晃平</td></tr>"

// 人を追加できるように（クリア！）
// Noが毎回変わるようにする（くりあ！）
// 全消しボタンの追加→tbodyは残す(クリア！)
// 個別削除の追加
// 空の場合はエラー
// 性別モードの実装
