const btn = document.querySelector("#btn");
const tableA = document.querySelector("#timesTable>tbody");

btn.addEventListener("click",()=>{
    
    for (let i = 1; i < 10; i++) {
        let tableB = "<tr>";
        tableB += "<td>";
        tableB += `${i*1}`;
        tableB += "</td>";
        tableB += "<td>";
        tableB += `${i*2}`;
        tableB += "</td>";
        tableB += "<td>";
        tableB += `${i*3}`;
        tableB += "</td>";
        tableB += "<td>";
        tableB += `${i*4}`;
        tableB += "</td>";
        tableB += "<td>";
        tableB += `${i*5}`;
        tableB += "</td>";
        tableB += "<td>";
        tableB += `${i*6}`;
        tableB += "</td>";
        tableB += "<td>";
        tableB += `${i*7}`;
        tableB += "</td>";
        tableB += "<td>";
        tableB += `${i*8}`;
        tableB += "</td>";
        tableB += "<td>";
        tableB += `${i*9}`;
        tableB += "</td>";
        tableB += "</tr>";
        tableA.innerHTML += tableB;
    }

})