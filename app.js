import {getLocation,getWeatherInfo} from "./getCurrentLocation/getLocation.js";

import {insertingTodayData,insertingWeekData} from "./getCurrentLocation/insertingData.js";

import {fetchingWeather,cityIdentification} from "./getCurrentLocation/fetchingData.js";

(function(){
    getLocation();
})()


// document.getElementById("searchBtn").addEventListener("click", search());
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click",()=>{
    let val = document.getElementById("inputLocation").value.trim();

    console.log(val);
    if(val==0){
        alert("Please enter a valid location");
        // console.log("Entered IF");
    }
    else{
        // async function gettingInfo(){
        //     let jsonData = await getWeatherInfo(val.trim())
        getWeatherInfo(val.trim());
            // console.log(apiData);
        // console.log("Entered ELSE");
        
    }
    document.getElementById("inputLocation").value = "";
});

document.getElementById("weekBtn").addEventListener("click",async ()=>{
    let rawData = await cityIdentification();
    let jsonData = await rawData.json();

    let rawData1 = await fetchingWeather(jsonData.city);
    let jsonData1 = await rawData1.json();

    insertingWeekData(jsonData1);
});

document.getElementById("todayBtn").addEventListener("click",async ()=>{
    let rawData = await cityIdentification();
    let jsonData = await rawData.json();

    let rawData1 = await fetchingWeather(jsonData.city);
    let jsonData1 = await rawData1.json();

    insertingTodayData(jsonData1);
});
