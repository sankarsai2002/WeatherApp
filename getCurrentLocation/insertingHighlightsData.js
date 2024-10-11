import uvStatus from "./uvIndexStatus.js";

import convertTo12 from "./convert_To_12Hour.js";

import humidityStatus from "./humidityStatus.js";

import visibilityStatus from "./visibilityStatus.js";

import airQualityStatus from "./airQualityStatus.js";

export default function insertHighlights(jsonData){

    //Inserting UV Index Information
    let uvIndexValue = document.getElementById("highLightInfo1");
    let uvIndexStatus = document.getElementById("subHighLightFoot1");
    uvIndexValue.innerHTML = jsonData.currentConditions.uvindex;    
    uvIndexStatus.innerHTML = uvStatus(jsonData);

    // Inserting Wind Speed Information
    let windValue = document.getElementById("highLightInfo2");
    windValue.innerHTML = jsonData.currentConditions.windspeed;

    // Inserting Sunrise and sunSet Information
    let sunrise = document.getElementById("highLightInfo3");
    let sunset = document.getElementById("subHighLightFoot3");
    sunrise.innerHTML = convertTo12(jsonData.currentConditions.sunrise);
    sunset.innerHTML = convertTo12(jsonData.currentConditions.sunset);

    // Inserting Humidity Information
    let humidityValue = document.getElementById("highLightInfo4");
    let humidStatus = document.getElementById("subHighLightFoot4");
    humidityValue.innerHTML = jsonData.currentConditions.humidity;
    humidStatus.innerHTML = humidityStatus(jsonData)

    // Inserting Visibility Information
    let visibilityValue = document.getElementById("highLightInfo5");
    let visibleStatus = document.getElementById("subHighLightFoot5");
    visibilityValue.innerHTML = jsonData.currentConditions.visibility;
    visibleStatus.innerHTML = visibilityStatus(jsonData);

    let airQualityValue = document.getElementById("highLightInfo6");
    let airQuaStatus = document.getElementById("subHighLightFoot6");

    let stationName = jsonData.currentConditions.stations[0];
    airQualityValue.innerHTML = jsonData.stations[stationName].quality;
    airQuaStatus.innerHTML = airQualityStatus(jsonData);
    // airQualityValue.innerHTML = jsonData.stations[0];
}

