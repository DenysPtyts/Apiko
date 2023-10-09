console.log("Task №5");

let convert = function(bytes) {
    const mb = bytes / 1024 / 1024; // Переводимо байти в мегабайти
    const formattedMb = mb.toFixed(2); // Форматуємо результат до двох знаків після коми
    return `${formattedMb} Mb`;
};
  
// Виклик функції за допомогою методу call
const bytes = 10000;
const result = convert.call(null, bytes);
console.log(result);

console.log("-----------------------");