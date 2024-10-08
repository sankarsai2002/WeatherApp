export default function convertTo12(time){
    let [hour,minute,seconds] = time.split(":");
    
    let snippet = (hour>=12)? "PM" : "AM";
    let hourInt = parseInt(hour);
    let minutesInt = parseInt(minute);    

    let hour12 = hourInt%12 || 12;
    let minutefor = (minutesInt<10)?'0'+minutesInt:minutesInt;

    return `${hour12}:${minutefor} ${snippet}`;
}