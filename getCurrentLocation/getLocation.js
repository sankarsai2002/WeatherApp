import convertDateTime from "./ConvertDateTime.js";

import {insertingTodayData,insertingWeekData} from "./insertingData.js"

import linksOnTime from "./LinksBasedOnTime.js";

import  {fetchingWeather,cityIdentification} from "./fetchingData.js";


async function getWeatherInfo(city){
    let rawData = await fetchingWeather(city);
    let jsonData = await rawData.json();
    console.log(jsonData);

    let time1 = jsonData.currentConditions.datetime.split(":");//current Time
    let time2 = jsonData.currentConditions.sunset.split(":");//sunset Time
    let [backgroundURL,currentWeatherIconSRC] = linksOnTime(jsonData,time1,time2);
    
    let temp = jsonData.currentConditions.temp;
    let curCondition = jsonData.currentConditions.conditions;
    let presipitation = jsonData.currentConditions.precip;    
    let presentTemp = document.getElementById("presentTemp");
    let presentDayTime = document.getElementById("presentDayTime");
    let preCondition = document.getElementById("preCondition");
    let prePresp = document.getElementById("prePresp");

    presentTemp.innerHTML = `${temp}°<sup>c</sup>`;
    
    let date1 = jsonData.days[0].datetime.split('-');
    presentDayTime.innerText = convertDateTime(date1[0],date1[1]-1,date1[2],...time1);//converting the date and time in required format (monday 1.00 PM)
    
    preCondition.innerText = curCondition;
    prePresp.innerText = `${presipitation? presipitation:0}%`;//if null then placing 0
    document.body.style.backgroundImage = backgroundURL;
    document.getElementById("currentWeatherImage").innerHTML = `<img src=${currentWeatherIconSRC} alt="weatherImg">`

    document.querySelector(".todayBtn").classList.add("selected");
    insertingTodayData(jsonData);
}

async function getLocation(){    
    let rawData = await cityIdentification();
    let jsonData = await rawData.json();   
    getWeatherInfo(jsonData.city);
}

export {getLocation,getWeatherInfo};