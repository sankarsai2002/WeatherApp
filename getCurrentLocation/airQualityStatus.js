export default function airQualityStatus(jsonData) {
    let stationName = jsonData.currentConditions.stations[0];
    let val = jsonData.stations[stationName].quality;

    let status = "";
    if (val >= 0 && val <= 0.03) {
        status =  "Good 👌";
    }
    else if (val > 0.03 && val <= 0.16) {
        status =  "Moderate 😐";
    } 
    else if (val > 0.16 && val <= 0.35) {
        status =  "Unhealthy for Sensitive Groups 😷";
    } 
    else if (val > 0.35 && val <= 1.13) {
        status =  "Unhealthy 😷";
    } 
    else if (val > 1.13 && val <= 2.16) {
        status =  "Very Unhealthy 😨";
    } 
    else{
        status =  "Hazardous 😱";
    }
    return  status;
}