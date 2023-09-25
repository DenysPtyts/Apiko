console.log("Task №2");

function isEvenArray(initialArray) {
    
    let allEven = true;

    initialArray.forEach(function (number) {
        if (number % 2 !== 0) {
            allEven = false;
        }
    });

    if (allEven) {
        console.log("YES");
    }else {
        console.log("NO");
    }

}

const evenArray = [2, 8, 4, 6];
isEvenArray(evenArray);

const array2 = [2, 8, 3, 6];
isEvenArray(array2);