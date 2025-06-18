const homeTeam = document.querySelector("#homeTeam")
const opponentTeam = document.querySelector("#opponentTeam")
const playBtn = document.querySelector("#playBtn")
const matchLists = document.querySelector("#matchList>tbody")
const winPct = document.querySelector("#winPct")

// console.log(homeTeam,opponentTeam,playBtn,matchList);

// let random = Math.random();

// console.log(random);
// ↑これで０〜１の乱数ができる、これに最大値をかけて使う
let totalMatch = 10;
while(totalMatch > 0){
    console.log("残り",totalMatch);
    totalMatch--;
}

playBtn.addEventListener("click",()=>{
    let matchList = `<tr>`
    let randomA = Math.floor(Math.random()*11);
    let randomB = Math.floor(Math.random()*11);
    
    
    matchList += `<td>`
    matchList += `${homeTeam.value} vs `  
    matchList += `${opponentTeam.value}`
    matchList += `</td>`
    matchList += `<td>`
    matchList += `${randomA}-${randomB}`
    matchList += `</td>`
    if (randomA>randomB) {
        matchList += `<td class="winP">`
        matchList +=`勝利`
    }else if (randomA<randomB) {
        matchList += `<td class="loseP">`
        matchList +=`敗北`
    }else{
        matchList += `<td class="drowP">`
        matchList +=`引き分け`
    }
    matchList += `</td>`
    matchList += `</tr>`
    if (homeTeam.value === "") {
        alert("error");
        matchList = "";
    }else if (opponentTeam.value === "") {
        alert("error");
        matchList = "";
    }
    matchLists.innerHTML += matchList.trim();

    const winP = document.querySelectorAll(".winP")
    const loseP = document.querySelectorAll(".loseP")
    const drowP = document.querySelectorAll(".drowP")
    
    console.log(winP,loseP,drowP);
    
    let winPt = `100%`
    winPct.innerHTML = winPt
})
