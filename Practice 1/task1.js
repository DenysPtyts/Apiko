console.log("Task №1");

function printPowsOf2(number) {

    if (number !== parseInt(number)) {
        console.log("incorrect type");
    }

    for (let i = 1; i < number; i *= 2) {
        console.log(i);
    }

}
    
printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);