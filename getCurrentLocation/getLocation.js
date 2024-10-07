import convertDateTime from "./ConvertDateTime.js";

async function getWeatherInfo(city){
    let api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`;

    let rawData = await fetch(api);
    let jsonData = await rawData.json();
    console.log(jsonData);
    
    let date1 = jsonData.days[0].datetime.split('-');
    let time1 = jsonData.currentConditions.datetime.split(":");
    let dateStamp1 =  new Date(date1[0],date1[1]-1,date1[2],...time1);
    console.log(dateStamp1);   

    let time2 = jsonData.currentConditions.sunset.split(":");
    let dateStamp2 = new Date(date1[0],date1[1]-1,date1[2],...time2);
    // console.log();

    let condition = jsonData.currentConditions.conditions.toLowerCase();
    let backgroundURL = "";
    let currentWeatherIconSRC = "";
    if(dateStamp1<dateStamp2){
        if(condition.includes("clear")){
            backgroundURL = 'url("https://i.ibb.co/WGry01m/cd.jpg")';
            currentWeatherIconSRC = "https://i.ibb.co/rb4rrJL/26.png";
        }
        else if(condition.includes("rain")){
            backgroundURL = 'url("https://i.ibb.co/h2p6Yhd/rain.webp")';
            currentWeatherIconSRC = "https://i.ibb.co/kBd2NTS/39.png";
        }
        else{
            backgroundURL = 'url("https://i.ibb.co/qNv7NxZ/pc.webp")';
            currentWeatherIconSRC = "https://i.ibb.co/PZQXH8V/27.png";
        }
        //rain
        //clear
        //cloudy or overcast -
    }
    else{
        if(condition.includes("clear")){
            backgroundURL = 'url("https://i.ibb.co/kqtZ1Gx/cn.jpg")';
            currentWeatherIconSRC = "https://i.ibb.co/1nxNGHL/10.png";
        }
        else if(condition.includes("rain")){
            backgroundURL = 'url("https://i.ibb.co/h2p6Yhd/rain.webp")';
            currentWeatherIconSRC = "https://i.ibb.co/kBd2NTS/39.png";
        }
        else{            
            backgroundURL = 'url("https://i.ibb.co/RDfPqXz/pcn.jpg")';
            currentWeatherIconSRC = "https://i.ibb.co/Kzkk59k/15.png";
        }
    }

    let temp = jsonData.currentConditions.temp;
    let curCondition = jsonData.currentConditions.conditions;
    let presipitation = jsonData.currentConditions.precip;    
    let presentTemp = document.getElementById("presentTemp");
    let presentDayTime = document.getElementById("presentDayTime");
    let preCondition = document.getElementById("preCondition");
    let prePresp = document.getElementById("prePresp");

    presentTemp.innerHTML = `${temp}°<sup>c</sup>`;
    presentDayTime.innerText = convertDateTime(date1[0],date1[1]-1,date1[2],...time1);//converting the date and time in required format
    preCondition.innerText = curCondition;
    prePresp.innerText = `${presipitation? presipitation:0}%`;//if null then placing 0
    document.body.style.backgroundImage = backgroundURL;
    document.getElementById("currentWeatherImage").innerHTML = `<img src=${currentWeatherIconSRC} alt="weatherImg">`
    
    // Clear
    // Rain, Overcast
    // Partially cloudy      - day,night
    // Overcast
    // Rain, Partially cloudy
}

async function getLocation(){
    let presentLocationAPI = "https://geolocation-db.com/json/";
    let rawData = await fetch(presentLocationAPI);
    let jsonData = await rawData.json();
    // console.log(jsonData);
    getWeatherInfo(jsonData.city);
}

export {getLocation,getWeatherInfo};