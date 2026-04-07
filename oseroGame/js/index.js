const board = document.querySelector("#board");

let setCell = [
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "hint",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "hint",
    },
    {
        bgc: "light",
        setStone: 2,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 1,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 1,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 2,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "hint",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "hint",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "dark",
        setStone: 0,
        hint: "",
    },
    {
        bgc: "light",
        setStone: 0,
        hint: "",
    },
];

for (let i = 0; i < setCell.length; i++) {
    if (setCell[i].setStone == 0) {
        board.innerHTML += `
          <div class="cell ${setCell[i].bgc} ${setCell[i].hint}">
              <div class="stone"></div>
          </div>
        `;
    } else if (setCell[i].setStone == 1) {
        board.innerHTML += `
          <div class="cell ${setCell[i].bgc} ${setCell[i].hint}">
              <div class="stone black"></div>
          </div>
        `;
    } else {
        board.innerHTML += `
          <div class="cell ${setCell[i].bgc} ${setCell[i].hint}">
              <div class="stone white"></div>
          </div>
        `;
    }
}
