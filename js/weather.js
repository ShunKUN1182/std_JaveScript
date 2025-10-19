const cityName = document.querySelectorAll(".mapData");
const cityWeather = document.querySelectorAll(".weather");
const maxTemp = document.querySelectorAll(".maxTemperature");
const minTemp = document.querySelectorAll(".minTemperature");
const imgs = document.querySelectorAll(".weatherData > img");

const month = document.querySelectorAll(".month");
const day = document.querySelectorAll(".day");
const hours = document.querySelectorAll(".hours");
let date = new Date()
console.log(date);

const url = "https://api.openweathermap.org/data/2.5/weather?";
const appid = "15da96b2fae8092bcfef32eaac4baa79";
const units = "metric";
const lang = "ja";

const osakalat = "34.70655755227025";
const osakalon = "135.50327941228323";
const tokyolat = "35.68593553745339";
const tokyolon = "139.7593028953325";
const kyotolat = "35.01394986432612";
const kyotolon = "135.75264406218736";
const nagoyalat = "35.180122960051264";
const nagoyalon = "136.906384224774";
const yokohamalat = "35.44534107716856";
const yokohamalon = "139.6465455082567";
const fukuokalat = "33.59006969569004";
const fukuokalon = "130.40810947713226";
const sapporolat = "43.07102676672054";
const sapporolon = "141.4404659830317";
const kobelat = "34.6907154891843";
const kobelon = "135.19467224742309";

// const osaka = `${url}lat=${osakalat}&lon=${osakalon}&appid=${appid}&units=${units}&lang=${lang}`;
// const tokyo = `${url}lat=${tokyolat}&lon=${tokyolon}&appid=${appid}&units=${units}&lang=${lang}`;
// const kyoto = `${url}lat=${kyotolat}&lon=${kyotolon}&appid=${appid}&units=${units}&lang=${lang}`;

const citys = [
    `${url}lat=${osakalat}&lon=${osakalon}&appid=${appid}&units=${units}&lang=${lang}`,
    `${url}lat=${tokyolat}&lon=${tokyolon}&appid=${appid}&units=${units}&lang=${lang}`,
    `${url}lat=${kyotolat}&lon=${kyotolon}&appid=${appid}&units=${units}&lang=${lang}`,
    `${url}lat=${nagoyalat}&lon=${nagoyalon}&appid=${appid}&units=${units}&lang=${lang}`,
    `${url}lat=${yokohamalat}&lon=${yokohamalon}&appid=${appid}&units=${units}&lang=${lang}`,
    `${url}lat=${fukuokalat}&lon=${fukuokalon}&appid=${appid}&units=${units}&lang=${lang}`,
    `${url}lat=${sapporolat}&lon=${sapporolon}&appid=${appid}&units=${units}&lang=${lang}`,
    `${url}lat=${kobelat}&lon=${kobelon}&appid=${appid}&units=${units}&lang=${lang}`,
];

for(let i = 0; i < citys.length; i++){
    fetch(citys[i],{
        mode: 'cors',
        cache: 'no-store',
    })
    .then(response => response.json())
    .then(data =>{
        cityName[i].textContent = data.name;
        cityWeather[i].textContent = data.weather[0].description;
        maxTemp[i].textContent = data.main.temp_max;
        minTemp[i].textContent = data.main.temp_min;
        month[i].textContent = date.getMonth() + 1;
        day[i].textContent = date.getDate();
        hours[i].textContent = date.getHours();
        imgs[i].outerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="天気アイコン">`
        console.log(data.weather[0].icon);
    })
}

// fetch(osaka,{
//     mode: 'cors',
//     cache: 'no-store',
// })
// .then(response => response.json())
// .then(data =>{
//     console.log(data);
//     cityName[0].textContent = data.name;
//     cityWeather[0].textContent = data.weather[0].description;
//     maxTemp[0].textContent = data.main.temp_max;
//     minTemp[0].textContent = data.main.temp_min;
//     const iconData = data.weather[0].icon;
// })

// fetch(tokyo,{
//     mode: 'cors',
//     cache: 'no-store',
// })
// .then(response => response.json())
// .then(data =>{
//     console.log(data);
//     cityName[1].textContent = data.name;
//     cityWeather[1].textContent = data.weather[0].description;
//     maxTemp[1].textContent = data.main.temp_max;
//     minTemp[1].textContent = data.main.temp_min;
//     const iconData = data.weather[0].icon;
// })

// fetch(kyoto,{
//     mode: 'cors',
//     cache: 'no-store',
// })
// .then(response => response.json())
// .then(data =>{
//     console.log(data);
//     cityName[2].textContent = data.name;
//     cityWeather[2].textContent = data.weather[0].description;
//     maxTemp[2].textContent = data.main.temp_max;
//     minTemp[2].textContent = data.main.temp_min;
//     const iconData = data.weather[0].icon;
// })

// const iconData = data.weather[0].icon;
// async function icon() {
//     img.innerHTML = `<img src="../images/${iconData}.png" alt="天気アイコン">`;
//     console.log(img);
// };

