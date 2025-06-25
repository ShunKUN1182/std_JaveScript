const btn = document.querySelector("#btn");
const tableA = document.querySelector("#timesTable>tbody");

btn.addEventListener("click",()=>{
    
    for (let i = 1; i < 10; i++) {

        let tableB = `<tr class="top">`;
        tableC += "<td>";
        tableC += `1`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `2`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `3`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `4`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `5`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `6`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `7`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `8`;
        tableC += "</td>";
        tableC += "<td>";
        tableC += `9`;
        tableC += "</td>";


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