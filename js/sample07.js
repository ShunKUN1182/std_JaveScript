const btn = document.querySelector("#btn");
const tableA = document.querySelector("#timesTable>tbody");
const tableD = document.querySelector("#timesTable>thead")

btn.addEventListener("click",()=>{
    
    let tableB = `<tr class="top">`;
    tableB += "<td>";
    tableB += `×`;
    tableB += "</td>";
    tableB += "<td>";
    tableB += `1`;
    tableB += "</td>";
    tableB += "<td>";
    tableB += `2`;
    tableB += "</td>";
    tableB += "<td>";
    tableB += `3`;
    tableB += "</td>";
    tableB += "<td>";
    tableB += `4`;
    tableB += "</td>";
    tableB += "<td>";
    tableB += `5`;
    tableB += "</td>";
    tableB += "<td>";
    tableB += `6`;
    tableB += "</td>";
    tableB += "<td>";
    tableB += `7`;
    tableB += "</td>";
    tableB += "<td>";
    tableB += `8`;
    tableB += "</td>";
    tableB += "<td>";
    tableB += `9`;
    tableB += "</td>";
    tableD.innerHTML += tableB

    for (let i = 1; i <= 9; i++) {


        let tableC = "<tr>";
        tableC += `<td class="left">`;
        tableC += `${i}`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `${i*1}`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `${i*2}`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `${i*3}`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `${i*4}`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `${i*5}`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `${i*6}`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `${i*7}`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `${i*8}`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `${i*9}`;
        tableC += "</td>";
        tableC += "</tr>";
        tableA.innerHTML += tableC;
    }

})