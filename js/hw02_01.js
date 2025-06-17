const homeTeam = document.querySelector("#homeTeam")
const opponentTeam = document.querySelector("#opponentTeam")
const playBtn = document.querySelector("#playBtn")
const matchLists = document.querySelector("#matchList>tbody")

// console.log(homeTeam,opponentTeam,playBtn,matchList);

// let random = Math.random();

// console.log(random);
// ↑これで０〜１の乱数ができる、これに最大値をかけて使う



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
    matchList += `<td>`
    if (randomA>randomB) {
        matchList +=`勝利`
    }else if (randomA<randomB) {
        matchList +=`敗北`
    }else{
        matchList +=`引き分け`
    }
    matchList += `</td>`
    matchList += `</tr>`
    matchLists.innerHTML += matchList

})
