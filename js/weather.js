const url = "https://api.openweathermap.org/data/2.5/weather?";
const appid = "15da96b2fae8092bcfef32eaac4baa79";
const units = "metric";
const lang = "ja";
const osakalat = "34.70655755227025";
const osakalon = "135.50327941228323";
const tokyolat = "35.68177";
const tokyolon = "139.76801";
const kyotolat = "34.98711";
const kyotolon = "135.76112";

const osaka = `${url}lat=${osakalat}&lon=${osakalon}&appid=${appid}&units=${units}&lang=${lang}`;
const tokyo = `${url}lat=${tokyolat}&lon=${tokyolon}&appid=${appid}&units=${units}&lang=${lang}`;
const kyoto = `${url}lat=${kyotolat}&lon=${kyotolon}&appid=${appid}&units=${units}&lang=${lang}`;

const osakaName = document.querySelector(".mapData");
const osakaWeather = document.querySelector(".weather");
const maxTemp = document.querySelector(".maxTemperature");
const minTemp = document.querySelector(".minTemperature");
const img = document.querySelector("h2");

const month = document.querySelector(".month");
const day = document.querySelector(".day");
const hours = document.querySelector(".hours");
let date = new Date()

month.textContent = date.getMonth();
day.textContent = date.getDate();
hours.textContent = date.getHours();

fetch(osaka,{
    mode: 'cors',
    cache: 'no-store',
})
.then(response => response.json())
.then(data =>{
    console.log(data);
    osakaName.textContent = data.name;
    osakaWeather.textContent = data.weather[0].description;
    maxTemp.textContent = data.main.temp_max;
    minTemp.textContent = data.main.temp_min;
})

