console.log("Task №3");

function filterArray(initialArray) {
    
    const filterArray = initialArray.filter(function(item) {
        return typeof item === 'string';
    })

    console.log(filterArray);

}

const mixArray = [2, 5, 'string', 6, 'test', 8, 1, 'word'];
filterArray(mixArray);