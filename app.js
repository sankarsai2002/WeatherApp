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

    document.querySelector(".todayBtn").classList.remove("selected");
    document.querySelector(".weekBtn").classList.add("selected");
    document.querySelector(".Hours").classList.add("hideTemp");
    document.querySelector(".Weeks").classList.remove("hideTemp");

    // console.log("Week Btn Clicked");
    
});

document.getElementById("todayBtn").addEventListener("click",async ()=>{
    document.querySelector(".todayBtn").classList.add("selected");
    document.querySelector(".weekBtn").classList.remove("selected");
    document.querySelector(".Weeks").classList.add("hideTemp");
    document.querySelector(".Hours").classList.remove("hideTemp");
    
    // console.log("Today btn Clicked");
    
});
