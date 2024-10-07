import {getLocation,getWeatherInfo} from "./getCurrentLocation/getLocation.js";

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
        getWeatherInfo(val.trim());
        // console.log("Entered ELSE");
    }
    
    document.getElementById("inputLocation").value = "";
});

// function search(){
//     let val = document.getElementById("inputLocation").value;

//     console.log(val);
    
//     if(value.trim!="" && value!=null){
//         getWeatherInfo(value.trim());
//         console.log("Entered IF");
//     }
//     else{
//         alert("Please enter a valid location");
//         console.log("Entered ELSE");
        
//     }
// }

