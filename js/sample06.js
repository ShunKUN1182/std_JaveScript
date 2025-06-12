// text.innerHTML = "あいう<br>えお";
const text = document.querySelector("#text");
const userName = document.querySelector("#name")
const addBtn = document.querySelector("#addBtn")
const memberLists = document.querySelector(".memberList>tbody")

// console.log(userName,addBtn,memberLists);

let num = 0;

function clk() {
    num++;

};

addBtn.addEventListener("click",() =>{
      
    let memberList = `<tr>`;
    memberList += `<td>${num}</td>`;
    memberList += `<td>${userName.value}</td>`;
    memberList +="</tr>";
    memberLists.innerHTML+=memberList
    
})




// memberLists.innerHTML = "<tr><td>1</td><td>坂口晃平</td></tr>"

// 人を追加できるように（クリア！）
// Noが毎回変わるようにする（くりあ！）
// 全消しボタンの追加→tbodyは残す
// 個別削除の追加
// 空の場合はエラー
// 性別モードの実装
