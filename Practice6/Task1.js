// Створити ф-ію isString, яка першим параметром отримує функцію колбек та другим значення. 
// Перевіряє чи передане значення це стрічка і колбек це функція та виконує колбек із цим 
// значенням або виводить помилку в консоль якщо це не стрічка або колбек не є функцією


function isString (val, callback) {
    if (typeof val === 'string' && typeof callback === 'function') {
        return callback(val);
    }else {
        console.error("This value is't a string or callback is't a function");
    }

}

isString("This is a test", (val) => console.log(val));