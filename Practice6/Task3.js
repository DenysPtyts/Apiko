// Створити ф-ію timer, яка приймає число(секунди) та імітує поведінку таймера: 
// кожну секунду виводить в консоль стрічку Timer: ${s}, де ${s} - кількість секунд що залишилось

function timer(seconds) {
    const timerId = setInterval(() => {
        if (seconds === 0) {
          clearInterval(timerId);
        }
        console.log(`Timer: ${seconds}`);
        seconds -= 1;
    }, 1000);
    return timerId;
}

const timerId = timer(6);