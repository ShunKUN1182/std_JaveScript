const btn = document.querySelector("#btn");
const tableA = document.querySelector("#timesTable>tbody");
let tableB = "";
let tableC = "";
const style = document.querySelector("style")



btn.addEventListener("click",()=>{


    for (let i = 1; i <= 9; i++){

        tableB += `<tr>`;
        tableB += `<th class="left">`;
        tableB += `${i}`;
        tableB += `</th>`;

        for(let j = 1; j <= 9; j++){
            
            tableB += `<td class="a${j} b${i}">`;
            tableB += `${i*j}`;
            tableB += `</td>`;

        }
        
        tableB += `</tr>`;
        // tableC = `.a:hover{`
        // tableC += `background-color: aqua;`
        // tableC += `}`
    }
    
    tableA.innerHTML += tableB;
    // style.innerHTML += tableC

    // for (let k = 1; k <= 9; k++) {
    //     const a = document.querySelectorAll(`.a${k}`) 
    // }

})