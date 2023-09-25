console.log("Task №1");

function unicFn(initialArray) {

    const unicFn= [];

    for (const item of initialArray) {
        // Якщо елемент ще не зустрічався унікальному масиві, то додаємо його
        if (!unicFn.includes(item)) {
          unicFn.push(item);
        }
      }

    console.log(unicFn);

}

const array = [1, 1, 4, 5, 4, 7, "string", 2, "something", "string"];
unicFn(array);