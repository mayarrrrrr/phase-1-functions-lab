// Code your solution in this file!

function distanceFromHqInBlocks(passenger_location){

    const hq_location = 42;
    const blocks = Math.abs(hq_location-passenger_location);
    return blocks
    
}
// let result = distanceFromHqInBlocks(50)
// console.log(result)

function distanceFromHqInFeet(passenger_location) {
   const feet = distanceFromHqInBlocks(passenger_location) * 264;

    
     return feet
}
// console.log(distanceFromHqInFeet(50))


function distanceTravelledInFeet(start,destination) {
    const travelfeet = Math.abs(start-destination)*264
    return travelfeet
    
}
// console.log(distanceTravelledInFeet(34,38))

function calculatesFarePrice(start,destination){ 
    const travelfeet = distanceTravelledInFeet(start,destination);
    if (travelfeet <= 400){
        return 0;
    }   
    else if( travelfeet > 400 && travelfeet <= 2000 ){
        return (travelfeet - 400) * 0.02;
    }
    else if( travelfeet > 2000 && travelfeet <= 2500){
        return  25;
    }
    else {
     return "cannot travel that far"
    }
    

}
console.log(calculatesFarePrice())



