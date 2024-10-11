export default function convertDateTime(year, month, day, hour, minute, second){
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(year, month, day, hour, minute, second);
    let hours12 = ((parseInt(hour))%12 )|| 12; // converts 12 to 12 and 0 to 12 (0||12 is 12) and (12||12 is 12)
    let suffix = ((parseInt(hour)>=12)? "PM":"AM");

    return `${days[date.getDay()]} ${hours12}:${minute} ${suffix}`;
}