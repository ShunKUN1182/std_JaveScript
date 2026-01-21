const url = "https://click.ecc.ac.jp/ecc/webdesign/wdct/api/v1/schewd/";
const container = document.querySelector(".container");
const eventCount = document.querySelector("#eventCount");

async function callApi() {
    const apiDatas = await fetch(url);
    const events = await apiDatas.json();
    const eventData = await events.data;
    console.log(eventData);

    eventData.forEach((e) => {
        // console.log(e.name);
        // container.innerHTML += `
        //           <div class="card">
        //             <div class="eventList">
        //                 <h2>${e.name}</h2>
        //                 <p>${e.category.name}</p>
        //             </div>
        //             <div class="contain">
        //                 <div>
        //                     <img src="images/Icon.png" alt="日付" />
        //                     <p>${e.event_date}</p>
        //                 </div>
        //                 <div>
        //                     <img src="images/icon2.png" alt="マップ" />
        //                     <p>${e.location}</p>
        //                 </div>
        //             </div>
        //           </div>
        //         `;

        let htmlWrap = "";
        htmlWrap += `<div class="card">`;
        htmlWrap += `<div class="eventList">`;
        htmlWrap += `<h2>${e.name}</h2>`;
        htmlWrap += `<p>${e.category.name}</p>`;
        htmlWrap += `</div>`;
        htmlWrap += `<div class="contain">`;
        htmlWrap += `<div>`;
        htmlWrap += `<img src="images/Icon.png" alt="日付" />`;
        htmlWrap += `<p>${e.event_date}</p>`;
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
