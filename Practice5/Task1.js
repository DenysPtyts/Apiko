function Calculator() {
    this.sum = (a, b) => a + b;
    this.subtract = (a, b) => a - b;
};

function AdvancedCalculator (){
    Calculator.call(this);

    this.multiply= (a, b) => a * b;
    this.divide = (a, b) => a / b;
};

AdvancedCalculator.prototype = Object.create(Calculator.prototype);
AdvancedCalculator.prototype.constructor = AdvancedCalculator;

const advCalcolator = new AdvancedCalculator();
console.log(advCalcolator.sum(13, 6));
console.log(advCalcolator.subtract(37, 9));
console.log(advCalcolator.multiply(13, 32));
console.log(advCalcolator.divide(25, 5));