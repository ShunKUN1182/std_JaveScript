const board = document.querySelector("#board");

let setCell = [
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 2,
    },
    {
        bgc: "dark",
        setStone: 1,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 1,
    },
    {
        bgc: "light",
        setStone: 2,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
    {
        bgc: "dark",
        setStone: 0,
    },
    {
        bgc: "light",
        setStone: 0,
    },
];

for (let i = 0; i < setCell.length; i++) {
    if (setCell[i].setStone == 0) {
        board.innerHTML += `
          <div class="cell ${setCell[i].bgc}">
              <div class="stone"></div>
          </div>
        `;
    } else if (setCell[i].setStone == 1) {
        board.innerHTML += `
          <div class="cell ${setCell[i].bgc}">
              <div class="stone black"></div>
          </div>
        `;
    } else {
        board.innerHTML += `
          <div class="cell ${setCell[i].bgc}">
              <div class="stone white"></div>
          </div>
        `;
    }
}
