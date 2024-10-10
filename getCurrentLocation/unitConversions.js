function celTofah(val) {
    let fahrenheitVal = (val*(9/5))+32;
    return fahrenheitVal.toFixed(1);
}
function fahTocel(val){
    let celciusVal = (val-32)*(5/9);
    return celciusVal.toFixed(1);
}
export {celTofah,fahTocel}