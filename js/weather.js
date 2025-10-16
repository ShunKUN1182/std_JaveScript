const url = "https://api.openweathermap.org/data/2.5/weather?";
const lat = "34.70655755227025";
const lon = "135.50327941228323";
const appid = "15da96b2fae8092bcfef32eaac4baa79";
const units = "metric";
const lang = "ja";

const osaka = `${url}lat=${lat}&lon=${lon}&appid=${appid}&units=${units}&lang=${lang}`;

const osakaName = document.querySelector(".mapData");
const osakaWeather = document.querySelector(".weather");
const maxTemp = document.querySelector(".maxTemperature");
const minTemp = document.querySelector(".minTemperature");

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