const text = document.querySelector("#text");


text.innerHTML = "あいう<br>えお";

const userName = document.querySelector("#name")
const addBtn = document.querySelector("#addBtn")
const memberLists = document.querySelector(".memberList>tbody")

// console.log(userName,addBtn,memberLists);

addBtn.addEventListener("click",() =>{

    let memberList = "<tr>";
    memberList += `<td>1</td>`;
    memberList += `<td>${userName.value}</td>`;
    memberList +="</tr>";

    memberLists.innerHTML=memberList
})




// memberLists.innerHTML = "<tr><td>1</td><td>坂口晃平</td></tr>"

// 人を追加できるように
// Noが毎回変わるようにする
// 全消しボタンの追加→tbodyは残す
// 個別削除の追加
// 空の場合はエラー
// 性別モードの実装
