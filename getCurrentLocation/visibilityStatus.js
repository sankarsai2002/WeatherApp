export default function visibilityStatus(jsonData) {
    let val = jsonData.currentConditions.visibility;

    let status = "";
    if (val >= 0 && val <= 0.03) {
        status =  "Dense Fog";
    }
    else if (val > 0.03 && val <= 0.16) {
        status =  "Moderate Fog";
    } 
    else if (val > 0.16 && val <= 0.35) {
        status =  "Light Fog";
    } 
    else if (val > 0.35 && val <= 1.13) {
        status =  "Very Light Fog";
    } 
    else if (val > 1.13 && val <= 2.16) {
        status =  "Light Mist";
    } 
    else if (val > 2.16 && val <= 5.4) {
        status =  "Very Light Mist";
    } 
    else if (val > 5.4 && val <= 10.8) {
        status =  "Clear Air";
    } 
    else {
        status =  "Very Clear Air";
    }

    return  status;
}