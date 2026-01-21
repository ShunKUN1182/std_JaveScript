const url = "https://click.ecc.ac.jp/ecc/webdesign/wdct/api/v1/schewd/";
const container = document.querySelector(".container");
const eventCount = document.querySelector("#eventCount");
const category = document.querySelector("#selectCategory");

async function callApi() {
    const apiDatas = await fetch(url);
    const events = await apiDatas.json();
    const eventData = await events.data;

    eventData.forEach((e) => {
        let htmlWrap = "";
        htmlWrap += `<div class="card">`;
        htmlWrap += `<div class="eventList">`;
        htmlWrap += `<h2>${e.name}</h2>`;
        htmlWrap += `<p>${e.category.name}</p>`;
        htmlWrap += `</div>`;
        htmlWrap += `<div class="contain">`;
        htmlWrap += `<div>`;
        htmlWrap += `<img src="images/Icon.png" alt="日付" />`;
        const dates = e.event_date.split("-");
        console.log(dates);
        htmlWrap += `<p>${dates[0]}年${dates[1]}月${dates[2]}日</p>`;

        htmlWrap += `</div>`;
        htmlWrap += `<div>`;
        htmlWrap += `<img src="images/icon2.png" alt="マップ" />`;
        if (e.location) {
            htmlWrap += `<p>${e.location}</p>`;
        } else {
            htmlWrap += `<p>未定</p>`;
        }
        htmlWrap += `</div>`;
        htmlWrap += `</div>`;
        htmlWrap += `</div>`;
        container.innerHTML += htmlWrap;
    });
    eventCount.textContent = `${eventData.length}件のイベントが見つかりました`;
}

callApi();
