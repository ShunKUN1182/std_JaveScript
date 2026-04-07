const board = document.querySelector("#board");
const turn = document.querySelector("#turn");
const blackScore = document.querySelector(".black_index p");
const whiteScore = document.querySelector(".white_index p");

let setCell = [
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },

    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },

    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },

    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 2, hint: "" },
    { bgc: "dark", setStone: 1, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },

    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 1, hint: "" },
    { bgc: "light", setStone: 2, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },

    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },

    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },

    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
    { bgc: "dark", setStone: 0, hint: "" },
    { bgc: "light", setStone: 0, hint: "" },
];

let currentPlayer = 1;

const directions = [-1, 1, -8, 8, -9, -7, 7, 9];

// 初期描画
updateHints();
stoneChange();
updateScore();

function stoneChange() {
    board.innerHTML = "";
    setCell.forEach((e, i) => {
        let stoneClass = "";
        if (e.setStone === 1) stoneClass = "black";
        else if (e.setStone === 2) stoneClass = "white";

        board.innerHTML += `
          <div class="cell ${e.bgc} ${e.hint}" data-index="${i}">
              <div class="stone ${stoneClass}"></div>
          </div>
        `;
    });
}

board.addEventListener("click", (e) => {
    const cell = e.target.closest(".hint");
    if (!cell) return;

    const index = Number(cell.dataset.index);
    if (setCell[index].setStone !== 0) return;

    // 石を置いてひっくり返す
    setCell[index].setStone = currentPlayer;
    setCell[index].hint = "";
    flipStone(index, currentPlayer);

    // プレイヤー交代
    currentPlayer = currentPlayer === 1 ? 2 : 1;

    // 次のプレイヤーが置ける場所があるか確認
    const hasMove = setCell.some((_, i) => canPlace(i, currentPlayer));
    if (!hasMove) {
        // パスして元のプレイヤーに戻す
        currentPlayer = currentPlayer === 1 ? 2 : 1;

        // 元のプレイヤーも置けなければゲーム終了
        const hasAnyMove = setCell.some((_, i) => canPlace(i, currentPlayer));
        if (!hasAnyMove) {
            updateHints();
            stoneChange();
            updateScore();
            endGame();
            return;
        }
    }

    updateHints();
    stoneChange();
    updateScore();
    updateTurnUI();
});

function updateTurnUI() {
    turn.textContent = currentPlayer === 1 ? "黒の番です" : "白の番です";
}

function updateScore() {
    const black = setCell.filter((c) => c.setStone === 1).length;
    const white = setCell.filter((c) => c.setStone === 2).length;
    blackScore.textContent = black;
    whiteScore.textContent = white;
}

function endGame() {
    const black = setCell.filter((c) => c.setStone === 1).length;
    const white = setCell.filter((c) => c.setStone === 2).length;
    let result = "";
    if (black > white) result = "黒の勝ち！";
    else if (white > black) result = "白の勝ち！";
    else result = "引き分け！";
    turn.textContent = `ゲーム終了 - ${result}`;
}

function flipStone(index, player) {
    const opponent = player === 1 ? 2 : 1;

    directions.forEach((dir) => {
        let current = index + dir;
        let stonesToFlip = [];

        while (current >= 0 && current < 64 && isSameRowOrCol(index, current, dir)) {
            if (setCell[current].setStone === opponent) {
                stonesToFlip.push(current);
            } else if (setCell[current].setStone === player) {
                stonesToFlip.forEach((i) => {
                    setCell[i].setStone = player;
                });
                break;
            } else {
                break;
            }
            current += dir;
        }
    });
}

function isSameRowOrCol(start, current, dir) {
    const startRow = Math.floor(start / 8);
    const currentRow = Math.floor(current / 8);

    if (dir === -1 || dir === 1) {
        return startRow === currentRow;
    }
    if (dir === -9 || dir === 7) {
        return current % 8 !== 7;
    }
    if (dir === -7 || dir === 9) {
        return current % 8 !== 0;
    }

    return true;
}

function canPlace(index, player) {
    if (setCell[index].setStone !== 0) return false;

    const opponent = player === 1 ? 2 : 1;

    for (let dir of directions) {
        let current = index + dir;
        let hasOpponent = false;

        while (current >= 0 && current < 64 && isSameRowOrCol(index, current, dir)) {
            if (setCell[current].setStone === opponent) {
                hasOpponent = true;
            } else if (setCell[current].setStone === player) {
                if (hasOpponent) return true;
                break;
            } else {
                break;
            }
            current += dir;
        }
    }

    return false;
}

function updateHints() {
    setCell.forEach((cell) => {
        cell.hint = "";
    });
    setCell.forEach((cell, index) => {
        if (canPlace(index, currentPlayer)) {
            cell.hint = "hint";
        }
    });
}
