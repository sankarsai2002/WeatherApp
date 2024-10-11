function linksOnTime(jsonData,time1,time2){
    let date1 = jsonData.days[0].datetime.split('-');
    let dateStamp1 =  new Date(date1[0],date1[1]-1,date1[2],...time1);  

    let dateStamp2 = new Date(date1[0],date1[1]-1,date1[2],...time2);

    let condition = jsonData.currentConditions.conditions.toLowerCase();
    let backgroundURL = "";
    let currentWeatherIconSRC = "";
    if(dateStamp1<dateStamp2){
        if(condition.includes("clear")){
            backgroundURL = 'url("https://i.ibb.co/WGry01m/cd.jpg")';
            currentWeatherIconSRC = "https://i.ibb.co/rb4rrJL/26.png";
            // console.log("Day clear");
            
        }
        else if(condition.includes("rain")){
            backgroundURL = 'url("https://i.ibb.co/h2p6Yhd/rain.webp")';
            currentWeatherIconSRC = "https://i.ibb.co/kBd2NTS/39.png";
            // console.log("Day rain");
        }
        else{
            backgroundURL = 'url("https://i.ibb.co/qNv7NxZ/pc.webp")';
            currentWeatherIconSRC = "https://i.ibb.co/PZQXH8V/27.png";
            // console.log("Day other");
        }
    }
    else{
        if(condition.includes("clear")){
            backgroundURL = 'url("https://i.ibb.co/kqtZ1Gx/cn.jpg")';
            currentWeatherIconSRC = "https://i.ibb.co/1nxNGHL/10.png";
            // console.log("Night clear");
        }
        else if(condition.includes("rain")){
            backgroundURL = 'url("https://i.ibb.co/h2p6Yhd/rain.webp")';
            currentWeatherIconSRC = "https://i.ibb.co/kBd2NTS/39.png";
            // console.log("Night rain");
        }
        else{            
            backgroundURL = 'url("https://i.ibb.co/RDfPqXz/pcn.jpg")';
            currentWeatherIconSRC = "https://i.ibb.co/Kzkk59k/15.png";
            // console.log("Night other");
        }
    }
        
    // overall conditions that can be -
    // Clear
    // Rain, Overcast
    // Partially cloudy      - day,night
    // Overcast
    // Rain, Partially cloudy
    return [backgroundURL, currentWeatherIconSRC]
}

function linksOnWeek(jsonData,dayNum){
    let dayWeatherIconSRC = "";
    let condition = jsonData.days[dayNum].conditions.toLowerCase();
    if(condition.includes("clear")){
        dayWeatherIconSRC = "https://i.ibb.co/rb4rrJL/26.png";
    }
    else if(condition.includes("rain")){
        dayWeatherIconSRC = "https://i.ibb.co/kBd2NTS/39.png";
    }
    else{
        dayWeatherIconSRC = "https://i.ibb.co/PZQXH8V/27.png";
    }
    return dayWeatherIconSRC;
}

export {linksOnTime , linksOnWeek}