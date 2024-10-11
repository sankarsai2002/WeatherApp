export default function humidityStatus(jsonData) {
    let val = jsonData.currentConditions.humidity;
    let status = "";
    if(val<30){
        status =  "Low";
    }
    else if(val>=30 && val<=60){
        status = "Moderate";
    }
    else if(val>60 && val<=80){
        status = "High";
    }
    else if(val>80 && val<=95){
        status = "Very High";
    }
    else{
        status = "Extreme";
    }
    return status;
}