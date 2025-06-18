const homeTeam = document.querySelector("#homeTeam");
const opponentTeam = document.querySelector("#opponentTeam");
const playBtn = document.querySelector("#playBtn");
const matchLists = document.querySelector("#matchList>tbody");
const winPct = document.querySelector("#winPct");
const matchWinPct = document.querySelector("#matchWinPct");

// console.log(homeTeam,opponentTeam,playBtn,matchList);

// let random = Math.random();

// console.log(random);
// ↑これで０〜１の乱数ができる、これに最大値をかけて使う
const totalMatchNum = 143;
let totalMatch =totalMatchNum ;
let matchNum = 1;
let result = "引き分け";
// let totalResults = [0,0,0];
let totalResults = [];
totalResults["win"]=0;
totalResults["lose"]=0;
totalResults["draw"]=0;





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
            matchList += `<td class="drawP">`;
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
            totalResults["win"]+= 1;

        }else if (result === "敗北") {
            matchLists.querySelector("tr:last-child").classList.add("loseP");
            totalResults["lose"]+= 1;

        }else if (result === "引き分け") {
            matchLists.querySelector("tr:last-child").classList.add("drawP");
            totalResults["draw"]+= 1;

        }else{
            matchLists.querySelector("tr:last-child").classList.add("err");
        }
        
        
        const loseP = document.querySelectorAll(".loseP");
        const drawP = document.querySelectorAll(".drawP");
        
        // console.log(winP,loseP,drawP);
        
        totalMatch--;
        matchNum++;

    }
    // let totalResult = totalResults["win"];
    // totalResult += "勝";
    // totalResult += totalResults["lose"];
    // totalResult += "敗";
    // totalResult += totalResult["draw"];
    // totalResult += "分"
    matchWinPct.innerHTML = `${totalResults["win"]}勝${totalResults["lose"]}敗${totalResults["draw"]}分`;
    let winPt = Math.trunc((totalResults["win"]/(totalMatchNum-totalResults["draw"]))*100);
    console.log(winPt);
    
    winPct.innerHTML = `${winPt}%`
    })
