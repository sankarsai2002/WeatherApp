export default function uvStatus(jsonData) {
    let val = jsonData.currentConditions.uvindex;
    let status = "";
    if(val<=2){
        status =  "Low";
    }
    else if(val>=3 && val<=5){
        status = "Moderate";
    }
    else if(val>=6 && val<=7){
        status = "High";
    }
    else if(val>=8 && val<=10){
        status = "Very High";
    }
    else{
        status = "Extreme";
    }
    return status;
}