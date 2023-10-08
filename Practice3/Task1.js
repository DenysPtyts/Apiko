console.log("Task №1");

//Global Scope
let globalScope = "This is the global scope";

const getGlobalScope = () => {
    console.log(globalScope);
}

getGlobalScope();

//Function Scope
const functionScope = "This text is outside the function"

const getFunctionScope = () => {
    const functionScope = "This text in function";

    console.log(functionScope);
}

getFunctionScope();
console.log(functionScope);

//Block Scope
function A() {
    const blockScope = "This text is outside block";

    function B (){
        var blockScope = "This text in block";

        console.log( blockScope);
    }

    console.log (blockScope);
    return B;
}

A();
console.log("-----------------------");