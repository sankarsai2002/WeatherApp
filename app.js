import {getLocation,getWeatherInfo} from "./getCurrentLocation/getLocation.js";

import {celTofah,fahTocel} from "./getCurrentLocation/unitConversions.js";


(function(){
    getLocation();
})()

function validate(){
    let val = document.getElementById("inputLocation").value.trim();
    if(val.length==0){
        alert("Please enter a valid location");
    }
    else{
        getWeatherInfo(val);
    }
    // document.getElementById("inputLocation").value = "";
}

searchBtn.addEventListener("click",()=>{
    console.log("Clicked");
    validate();
});

document.getElementById("inputLocation").onkeydown = (e)=>{
    if(e.key === 'Enter'){
        console.log("enter pressed");
        
        validate();
    }
}

document.getElementById("weekBtn").addEventListener("click",()=>{
    document.querySelector(".todayBtn").classList.remove("selected");
    document.querySelector(".weekBtn").classList.add("selected");
    document.querySelector(".Hours").classList.add("hideTemp");
    document.querySelector(".Weeks").classList.remove("hideTemp");
});

document.getElementById("todayBtn").addEventListener("click",()=>{
    document.querySelector(".todayBtn").classList.add("selected");
    document.querySelector(".weekBtn").classList.remove("selected");
    document.querySelector(".Weeks").classList.add("hideTemp");
    document.querySelector(".Hours").classList.remove("hideTemp");
});

document.getElementById("celsiusBtn").addEventListener("click",()=>{
    document.getElementById("celsiusBtn").classList.add("unitActive");
    document.getElementById("fahrenheitBtn").classList.remove("unitActive");

    let unit = document.querySelector(".unit");
    let presentTemp = document.querySelector(".presentTemp");
    let temperature = document.querySelectorAll(".temperature");
    
    if(unit.innerHTML!="°C"){
        temperature.forEach((value)=>{
            let val = value.innerHTML;
            value.innerHTML = `${fahTocel(val.substring(0,val.length-2))}°C`;
        })
        
        presentTemp.innerHTML = fahTocel(presentTemp.childNodes[0].data)+"<sup class='unit'>°C</sup>";
    }
    else{
        console.log("Already in celcius"); 
    }
    
});

document.getElementById("fahrenheitBtn").addEventListener("click",()=>{
    document.getElementById("fahrenheitBtn").classList.add("unitActive");
    document.getElementById("celsiusBtn").classList.remove("unitActive");

    let unit = document.querySelector(".unit");
    let presentTemp = document.querySelector(".presentTemp");
    let temperature = document.querySelectorAll(".temperature");
    if(unit.innerHTML!="°F"){
        temperature.forEach((value)=>{
            let val = value.innerHTML;            
            value.innerHTML = `${celTofah(val.substring(0,val.length-2))}°F`;
        })
        presentTemp.innerHTML = celTofah(presentTemp.childNodes[0].data)+"<sup class='unit'>°F</sup>";
    }
    else{
        console.log("Already in Fahrenheit"); 
    }
});
