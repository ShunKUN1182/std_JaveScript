const playerSelect = document.querySelector("#playerSelect");
const btn = document.querySelector("#btn");
let playerPt = 0;
let cpuPt = 0;
const battleLog = document.querySelector("#log");
let playerHP = 3;
let cpuHP = 3;
let player = 0;
let cpu = 0;


// const name = prompt("名前を決めてね！")






function battle() {
    player = playerSelect.value; 
    cpu = Math.floor(Math.random()*4);
    console.log(cpu);
    
    if (cpu == 0) {
        cpu = "こうげき";
    }else if (cpu == 1) {
        cpu = "ぼうぎょ";
    }else if (cpu == 2) {
        if (playerPt >= 3) {
            cpu = "クリティカルこうげき";
        }else{
            cpu = "ためる";
        }    
    }else if (cpu == 3) {
        if (playerPt >= 3) {
            cpu = "クリティカルぼうぎょ";
        }else{
            let subCpu = Math.floor(Math.random()*3);
            if (subCpu == 0) {
                cpu = "こうげき";
            }else if(subCpu == 1){
                cpu = "ためる";
            }else{
                cpu = "ぼうぎょ";
            }    
        }   
        return;
    }    

    console.log(cpu);
    
    
    if (player == "こうげき") {
        playerAtk();
    }    
};    

function playerAtk(){
    if (cpu == "ぼうぎょ") {
        battleLog.insertAdjacentHTML("afterBegin" , "<p>こうげきが防がれた！！</p>")
    }else if (cpu == "こうげき") {
        cpuHP--;
        playerHP--;
        battleLog.insertAdjacentHTML("afterBegin" , "<p>あいうちだ！</p>")
    }else if (cpu == "クリティカルこうげき") {
        playerHP = 0;
        battleLog.insertAdjacentHTML("afterBegin" , "<p>クリティカルこうげきをくらった、、、</p>")
    }else{
        cpuHP--;
        battleLog.insertAdjacentHTML("afterBegin" , `<p>相手は${cpu}をした！</p>`)
    }    
}

btn.addEventListener("click" , ()=>{
    
    battle();
    
})
