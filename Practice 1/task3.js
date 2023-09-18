console.log("Task №3");

function printSeasonByMonth(month) {
    
    switch (month) {
        case "JANUARY":
        case "FEBRUARY":
        case "DECEMBER":
            console.log("winter");
            break;
        case "MARCH":
        case "APRIL":
        case "MAY":
            console.log("spring");
            break;
        case "JUNE":
        case "JULY":
        case "AUGUST":
            console.log("summer");
            break;
        case "SEPTEMBER":
        case "OCTOBER":
        case "NOVEMBER":
            console.log("autumn");
            break;
        default:
            console.log("It's not a time of year ");
    }

}
    
printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");