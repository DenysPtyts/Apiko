const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
 
let compose = (...fns) => arg =>
    fns.reduce((result, fnc) => fnc(result), arg); // your compose function
 
let modifyArray = modifyCondition =>
    (data) => modifyCondition(data); // your modify array function
 
let capitalizeAllFirst = (arr) => {
    const word = arr.map((words) => words.toLowerCase().split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("-")
    );

    const resultWords = word.join("-");

    console.log(`Result: ${resultWords} length: ${resultWords.length}`);
}; // use compose + modifyArray here
 
let allToLower = (arr) => {
    const result = arr.map((str) => str.toLowerCase()).join(" - ");
    console.log(`Result: ${result} length: ${result.length}`);
}; // use compose + modifyArray here

const capitalizeAllFirstModified = compose(modifyArray(capitalizeAllFirst));
const allToLowerModified = compose(modifyArray(allToLower));
 
capitalizeAllFirst(arr) // в консолі 'Result: Custom-Web-And-Mobile-Platforms length: 31'
allToLower(arr) // в консолі 'Result: custom - web - and - mobile - platforms length: 39'