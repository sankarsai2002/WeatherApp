import convertTo12 from "./convert_To_12Hour.js";
import {linksOnTime , linksOnWeek} from "./LinksBasedOnTime.js";
import insertHighlights from "./insertingHighlightsData.js";

function insertingTodayData(jsonData){
    let eachHour = document.querySelectorAll("[id^='eachHour']");
    let eachConditon = document.querySelectorAll("[id^='eachConditon']");
    let eachTemp = document.querySelectorAll("[id^='eachTemp']");

    let i = 0;
    eachHour.forEach((value)=>{
        value.innerHTML = convertTo12(jsonData.days[0].hours[i].datetime);
        i++;
    })
    
    i = 0;
    eachConditon.forEach((value)=>{        
        let [backgroundURL,currentWeatherIconSRC] = linksOnTime(jsonData,jsonData.days[0].hours[i].datetime.split(":"),jsonData.days[0].sunset.split(":"));
        value.setAttribute("src",currentWeatherIconSRC);
        i++;
    });

    i=0;
    eachTemp.forEach((value)=>{
        value.innerHTML = jsonData.days[0].hours[i].temp+"°C";
        i++;
    });

    insertingWeekData(jsonData);
    insertHighlights(jsonData)
}

function insertingWeekData(jsonData){
    let eachWeek = document.querySelectorAll("[id^='eachWeek']");
    let eachconditonweek = document.querySelectorAll("[id^='eachconditonweek']");
    let eachweekTemp = document.querySelectorAll("[id^='eachweekTemp']");

    let ymd = jsonData.days[0].datetime.split("-");
    let date = new Date(ymd[0],ymd[1]-1,ymd[2]);
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let i = 0;
    eachWeek.forEach((value)=>{
        value.innerHTML = weekDays[(date.getDay()+i)%7];
        i++;
    });

    i = 0;
    eachconditonweek.forEach((value)=>{
        let  dayWeatherIconSRC = linksOnWeek(jsonData,i);
        value.setAttribute("src",dayWeatherIconSRC);
        i++;
    });

    i = 0;
    eachweekTemp.forEach((value)=>{
        value.innerHTML = jsonData.days[i].temp+"°C";
        i++;
    });
}

export {insertingTodayData,insertingWeekData}