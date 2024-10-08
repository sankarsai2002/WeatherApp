function fetchingWeather(city){
    return new Promise((resolve,reject)=>{
        resolve(fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`));
    });
}

function cityIdentification(){
    return new Promise((resolve,reject)=>{
        resolve(fetch("https://geolocation-db.com/json/"));
    });
}

export {fetchingWeather,cityIdentification}