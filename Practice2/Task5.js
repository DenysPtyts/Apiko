console.log("Task №5");

function removeObj(arrayOfObj, keyName, value) {
    
    // Використовуємо метод filter для створення нового масиву,
   // в якому лишаються тільки об'єкти, які не мають поле keyName зі значенням value
   const filterArray = arrayOfObj.filter(function (obj) {
    return obj[keyName] !== value;
   });

   console.log(filterArray);

}
     
const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
removeObj(arr, "age", 2);
removeObj(arr, "year", 2);