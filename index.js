let firstTwo;
const returnFirstTwoDrivers = function(drivers = []){
    return firstTwo = [drivers[0], drivers[1]]
}
let LastTwo;
const returnLastTwoDrivers = function(drivers = []){
    return LastTwo = drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let farePrice;
function createFareMultiplier(multiplier){
    return function(fare){
        return fare*multiplier}
};
function fareDoubler(fare){
    const double = createFareMultiplier(2);
    return double(fare);
}
function fareTripler(fare){
    const triple = createFareMultiplier(3);
    return triple(fare);
}
function selectDifferentDrivers(arrayOfDrivers, Function){
    return Function(arrayOfDrivers);
}