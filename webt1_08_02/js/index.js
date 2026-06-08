const bsoWrap = document.querySelector(".bso_wrap");
const btnWrap = document.querySelector(".btn_wrap");
const ballBtn = document.querySelector("#ballBtn");
const strikeBtn = document.querySelector("strikeBtn");
const outBtn = document.querySelector("#outBtn");
let counter = [0, 0, 0];
let ballWrap = "";
let strikeWrap = "";
let outWrap = "";
console.log(ballBtn);

// function renderBso() {}

btnWrap.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target == ballBtn) {
        countChangeBall();
        renderBall();
        renderBso();
    }
    if (e.target == strikeBtn) {
        console.log("ストライク");
    }
    if (e.target == outBtn) {
        console.log("アウト");
    }
});

function renderBso() {
    bsoWrap.innerHTML = ballWrap;
}

function countChangeBall() {
    counter[0] += 1;
    if (counter[0] > 3) {
        console.log("ファーボールやで！");
        counter[0] = 0;
    }
    console.log(counter[0]);
}

function renderBall() {
    if (counter[0] == 0) {
        ballWrap = `
          <div class="ball_wrap">
              <span></span>
              <span></span>
              <span></span>
          </div>;
        `;
    }
    if (counter[0] == 1) {
        ballWrap = `
          <div class="ball_wrap">
              <span class="active"></span>
              <span></span>
              <span></span>
          </div>;
        `;
    }
    if (counter[0] == 2) {
        ballWrap = `
          <div class="ball_wrap">
              <span class="active"></span>
              <span class="active"></span>
              <span></span>
          </div>;
        `;
    }
    if (counter[0] == 3) {
        ballWrap = `
          <div class="ball_wrap">
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
          </div>;
        `;
    }
}
