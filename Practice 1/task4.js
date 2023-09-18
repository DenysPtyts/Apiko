console.log("Task №4");

function calculateWordsInString(string) {
    
    let wordCount = 0;
    let inWord = false;

    for (let i = 0; i < string.length; i++) {

        if (string[i] !== " " && !inWord) {
            inWord = true;
            wordCount++;
        }else if (string[i] === " " && inWord) {
            inWord = false;
        }
    }

    console.log("Кількість слів: " + wordCount);

}

calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");