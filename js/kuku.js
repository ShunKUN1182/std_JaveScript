const btn = document.querySelector("#btn");
const tableA = document.querySelector("#timesTable>tbody");
let tableB = "";



btn.addEventListener("click",()=>{


    for (let i = 1; i <= 9; i++){

        tableB += `<tr>`;
        tableB += `<td class="left">`;
        tableB += `${i}`;
        tableB += `</td>`;

        for(let j = 1; j <= 9; j++){
            
            tableB += `<td>`;
            tableB += `${i*j}`;
            tableB += `</td>`;

        }
        
        tableB += `</tr>`;
    }
    
    tableA.innerHTML += tableB;

})