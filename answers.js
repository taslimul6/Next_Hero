//Ques 1

function describeValue(item){

    let value1 = typeof item;
    let value2 = item ? "truthy" : "falsy";

    return `${value1} | ${value2}`
}

//ques 2

function getDayType(day) {
    day = day.toLowerCase();
    switch (day) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

//ques 3



function validateUsername(user){
    if(user.length<4){
        return "Too Short";
    }
    if(user.includes(" ")){
        return "No Space Allowed";
    }
    if(user.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    
    return "Available";
}

//ques 4


function getCngFare(distance, isNight=false, waitingMinutes = 0){

    let fare = 50;

    if(distance>2){
        fare = fare +( (distance-2)*15);
    }
    if(waitingMinutes>0){
        fare = fare + waitingMinutes*2
    }
    if(isNight===true){
        fare = fare + (fare*20)/100;
        
    }
    return fare;

}

//ques 5



const getChaseVerdict = (target, scored, ballsLeft) =>{

    let runsNeeded = target - scored;

    if(runsNeeded <= 0){
        return "Won"
    }
    if(ballsLeft <= 0){
        return "Lost"
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6
    let state;

    if(requiredRate <=6 ){
        state = "Comfortable"
    }
    else if(requiredRate <= 12 ){
        state = "Tough"
    }
    else{
        state = "Almost Impossible"
    }

    return `Need ${target - scored} runs in ${ballsLeft} balls | ${state}`


}
