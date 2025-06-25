const btn = document.querySelector("#btn");
const tableA = document.querySelector("#timesTable>tbody");

btn.addEventListener("click",()=>{
    
    for (let i = 0; i < 9; i++) {
        let tableB = "<tr>"
        tableB += "<td>"
        tableB += "1"
        tableB += "</td>"
        tableB += "<td>"
        tableB += "1"
        tableB += "</td>"
        tableB += "<td>"
        tableB += "1"
        tableB += "</td>"
        tableB += "<td>"
        tableB += "1"
        tableB += "</td>"
        tableB += "<td>"
        tableB += "1"
        tableB += "</td>"
        tableB += "<td>"
        tableB += "1"
        tableB += "</td>"
        tableB += "<td>"
        tableB += "1"
        tableB += "</td>"
        tableB += "<td>"
        tableB += "1"
        tableB += "</td>"
        tableB += "<td>"
        tableB += "1"
        tableB += "</td>"
        tableB += "</tr>"
        tableA.innerHTML = tableB;
    }

})