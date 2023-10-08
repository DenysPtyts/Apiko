console.log("Task №2");

const car = {
    name : "Tesla",
    model : "X",
};
    
function showCarInfo() {
    console.log(`Name a car ${this.name}`);
    console.log(`Model a car ${this.model}`);
}

const showCarFullInfo = showCarInfo.bind(car);

showCarFullInfo();
console.log("-----------------------");