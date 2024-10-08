import convertTo12 from "./convert_To_12Hour.js";
import linksOnTime from "./LinksBasedOnTime.js";

function insertingTodayData(jsonData){
    console.log("inserting today");
    
    document.querySelector(".todayBtn").classList.add("selected");
    document.querySelector(".weekBtn").classList.remove("selected");
    document.querySelector(".Weeks").classList.add("hideTemp");
    document.querySelector(".Hours").classList.remove("hideTemp");
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
        value.innerHTML = jsonData.days[0].hours[i].temp+"°c";
        i++;
    });
}

function insertingWeekData(jsonData){
    console.log("Inserting week");
    
    document.querySelector(".todayBtn").classList.remove("selected");
    document.querySelector(".weekBtn").classList.add("selected");
    document.querySelector(".Hours").classList.add("hideTemp");
    document.querySelector(".Weeks").classList.remove("hideTemp");

}

export {insertingTodayData,insertingWeekData}