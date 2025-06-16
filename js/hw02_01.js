const homeTeam = document.querySelector("#homeTeam")
const opponentTeam = document.querySelector("#opponentTeam")
const playBtn = document.querySelector("#playBtn")
const matchLists = document.querySelector("#matchList>tbody")

// console.log(homeTeam,opponentTeam,playBtn,matchList);

// let random = Math.random();

// console.log(random);
// ↑これで０〜１の乱数ができる、これに最大値をかけて使う



let random = Math.floor(Math.random()*11);


playBtn.addEventListener("click",()=>{
    let matchList = `<tr>`
    matchList += `<td>`
    matchList += `${homeTeam.value}`
    matchList += `</td>`
    matchList += `<td>`
    matchList += `${opponentTeam.value}`
    matchList += `</td>`
    matchList += `<td>`
    matchList += `勝利`
    matchList += `</td>`
    matchList += `</tr>`
    matchLists.innerHTML = matchList
})
