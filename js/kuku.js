const btn = document.querySelector("#btn");
const tableA = document.querySelector("#timesTable>tbody");



btn.addEventListener("click",()=>{

    let tableB = "";

    for (let i = 1; i => 9; i++){

        tableB += `<tr>`;

        for(let j = 1; j => 9; j++){
            
            tableB += `<td>`;
            tableB += `${i*j}`;
            tableB += `</td>`;
            
        }
        
        tableB += `</tr>`;
    }

tableA.innerHTML += tableB;

})