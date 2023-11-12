// Дано: обєкт Date та його методи https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// Створити ф-ію clock, яка імітує поведінку годинника: кожну секунду виводить в консоль час у форматі "Hours:Minutes:Seconds";

function clock() {
    const id = setInterval(() => {
        const time = new Date();
        const hours = time.getHours().toString().padStart();
        const minutes = time.getMinutes().toString().padStart();
        const seconds = time.getSeconds().toString().padStart();
    
        const formattedDate = hours + ":" + minutes + ":" + seconds;
        console.log(formattedDate);
    }, 1000);
    return id;
}

const id = clock();

setTimeout(() => clearInterval(id), 2000);