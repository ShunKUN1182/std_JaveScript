const homeTeam = document.querySelector("#homeTeam")
const opponentTeam = document.querySelector("#opponentTeam")
const playBtn = document.querySelector("#playBtn")
const matchLists = document.querySelector("#matchList>tbody")
const winPct = document.querySelector("#winPct")

// console.log(homeTeam,opponentTeam,playBtn,matchList);

// let random = Math.random();

// console.log(random);
// ↑これで０〜１の乱数ができる、これに最大値をかけて使う
let totalMatch = 143;
let matchNum = 1;
let result = "引き分け";
let totolResult = [0,0,0];

playBtn.addEventListener("click",()=>{
    while(totalMatch > 0){
        console.log("残り:",totalMatch);
        
        
        let randomA = Math.floor(Math.random()*11);
        let randomB = Math.floor(Math.random()*11);
        let matchList = `<tr>`;
        matchList += `<td>`;
        matchList += `第${matchNum}試合`;
        matchList += `</td>`;
        matchList += `<td>`;
        matchList += `${homeTeam.value} vs `;  
        matchList += `${opponentTeam.value}`;
        matchList += `</td>`;
        matchList += `<td>`;
        matchList += `${randomA}-${randomB}`;
        matchList += `</td>`;
        if (randomA>randomB) {
            matchList += `<td class="winP">`;
            result = `勝利`;
            matchList += result;
        }else if (randomA<randomB) {
            matchList += `<td class="loseP">`;
            result = `敗北`;
            matchList += result;
        }else{
            matchList += `<td class="drowP">`;
            result = `引き分け`;
            matchList += result;
        }
        matchList += `</td>`;
        matchList += `</tr>`;
        if (homeTeam.value === "") {
            alert("error");
            matchList = "";
        }else if (opponentTeam.value === "") {
            alert("error");
            matchList = "";
        }
        matchLists.innerHTML += matchList.trim();

        if (result === "勝利") {
            matchLists.querySelector("tr:last-child").classList.add("winP");
        }else if (result === "敗北") {
            matchLists.querySelector("tr:last-child").classList.add("loseP");
        }else if (result === "引き分け") {
            matchLists.querySelector("tr:last-child").classList.add("drowP");
        }else{
            matchLists.querySelector("tr:last-child").classList.add("err");
        }
        
        
        const loseP = document.querySelectorAll(".loseP");
        const drowP = document.querySelectorAll(".drowP");
        
        // console.log(winP,loseP,drowP);
        
        let winPt = `100%`;
        winPct.innerHTML = winPt;
        totalMatch--;
        matchNum++;
    }
    })
