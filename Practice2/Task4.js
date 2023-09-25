console.log("Task №4");

function findUser(initialObject) {

    const user = [];

    // Використовуємо метод forEach для перебору ключів об'єкта (імен)
    Object.keys(initialObject).forEach(function (name){
        const person = initialObject[name];

        // Перевіряємо, чи має об'єкт властивість "city" і чи вона рівна "London"
    // а також перевіряємо вік особи
        if (person.city === 'London' && person.age >= 18) {
            user.push(name);// Додаємо ім'я до масиву
        }

    });

    console.log(user);

}

const object = {
    Max: {age: 23, city: 'London'},
    Mike: {age: 20, city: 'NY'},
};
findUser(object);