// text.innerHTML = "あいう<br>えお";
const text = document.querySelector("#text");
const userName = document.querySelector("#name")
const addBtn = document.querySelector("#addBtn")
const memberLists = document.querySelector(".memberList>tbody")
const allReset = document.querySelector("#allReset")
const gerderSelect = document.querySelectorAll(".gerderSelect")

// console.log(userName,addBtn,memberLists);
console.log(gerderSelect);


let num = 0;

// function clk() {
    
// };

const addList = ()=>{
    
    num++;
    let memberList = `<tr>`;
    if(userName.value===""){
        alert("人の名前を入れてください")
        memberLists.innerHTML = "";
        num = 0;

    } else{
        memberList += `<td>${num}</td>`;
        memberList += `<td>${userName.value.trim()}</td>`;
        memberList +=`<td width="75">`;
        memberList +=`<input type="button" value="リセット">`;
        memberList +="</td>"
        memberList +="</tr>";
        memberLists.innerHTML+=memberList
        userName.value = ""
    }
    
    
}

addBtn.addEventListener("click",() =>{
    addList()
})


userName.addEventListener("keydown",(event)=>{
    if (event.code==='Enter') {
        addList()
    }
})





allReset.addEventListener("click",()=>{

    memberLists.innerHTML = "";
    num = 0;

})








// memberLists.innerHTML = "<tr><td>1</td><td>坂口晃平</td></tr>"

// 人を追加できるように（クリア！）
// Noが毎回変わるようにする（くりあ！）
// 全消しボタンの追加→tbodyは残す(クリア！)
//エンターで入力、送信でテキスト消える（クリア！）
// 個別削除の追加
// 空の場合はエラー（クリア！）
// 性別モードの実装
