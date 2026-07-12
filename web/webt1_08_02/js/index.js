const bsoWrap = document.querySelector(".bso_wrap");
const btnWrap = document.querySelector(".btn_wrap");
const ballBtn = document.querySelector("#ballBtn");
const strikeBtn = document.querySelector("#strikeBtn");
const outBtn = document.querySelector("#outBtn");
let counter = [0, 0, 0];
let ballWrap = `
          <div class="ball_wrap">
              <span></span>
              <span></span>
              <span></span>
          </div>;
        `;
let strikeWrap = `
          <div class="strike_wrap">
              <span></span>
              <span></span>
          </div>
        `;
let outWrap = `
          <div class="out_wrap">
              <span></span>
              <span></span>
          </div>
        `;

renderBso();

btnWrap.addEventListener("click", (e) => {
    if (e.target == ballBtn) {
        countChangeBall();
        renderBso();
    }
    if (e.target == strikeBtn) {
        countChangeStrike();
        renderBso();
    }
    if (e.target == outBtn) {
        countChangeOut();
        renderBso();
    }
    console.log(counter);
});

function renderBso() {
    renderBall();
    renderStrike();
    renderOut();
    bsoWrap.innerHTML = `${ballWrap}${strikeWrap}${outWrap}`;
}

function countChangeBall() {
    counter[0] += 1;
    if (counter[0] > 3) {
        counter[0] = 0;
        counter[1] = 0;
    }
}

function countChangeStrike() {
    counter[1] += 1;
    if (counter[1] > 2) {
        counter[1] = 0;
        counter[0] = 0;
        countChangeOut();
    }
}

function countChangeOut() {
    counter[2] += 1;
    counter[0] = 0;
    counter[1] = 0;
    if (counter[2] > 2) {
        counter[0] = 0;
        counter[1] = 0;
        counter[2] = 0;
    }
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

function renderStrike() {
    if (counter[1] == 0) {
        strikeWrap = `
          <div class="strike_wrap">
              <span></span>
              <span></span>
          </div>
      `;
    }
    if (counter[1] == 1) {
        strikeWrap = `
          <div class="strike_wrap">
              <span class="active"></span>
              <span></span>
          </div>
      `;
    }
    if (counter[1] == 2) {
        strikeWrap = `
          <div class="strike_wrap">
              <span class="active"></span>
              <span class="active"></span>
          </div>
      `;
    }
}

function renderOut() {
    if (counter[2] == 0) {
        outWrap = `
          <div class="out_wrap">
              <span></span>
              <span></span>
          </div>
      `;
    }
    if (counter[2] == 1) {
        outWrap = `
          <div class="out_wrap">
              <span class="active"></span>
              <span></span>
          </div>
      `;
    }
    if (counter[2] == 2) {
        outWrap = `
          <div class="out_wrap">
              <span class="active"></span>
              <span class="active"></span>
          </div>
      `;
    }
}
