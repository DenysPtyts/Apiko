// Дано: Функція для генерації ID
// 1) Створити клас TodoItem із полями(властивостями): id(генерується у конструкторі за допомогою функції), 
// name, checked(за замовчуванням false). Для поля checked написати гетер та сетер (добавити валідацію: поле 
// може приймати лише булеве значення true або false)
// 2) Створити клас TodoList із полями: id(генерується у конструкторі за допомогою функції), name, items(за замовчуванням пустий масив).
// Добавити наступні методи:
// addItem - метод який добавляє елементи до масиву (потрібно зробити валідацію на тип TodoItem)
// removeItemById - метод який видаляє елемент з масиву по id
// getItemById - метод який повертає елемент TodoItem з масиву по id
// 3) Створити екземпляр класу TodoList;
// 4) Створити 4 екземпляри класу TodoItem, добавити їх у TodoList та вивести у консоль екземпляр класу TodoList.
// 5) Поміняти значення checked у одного екземпляру TodoItem та вивести TodoList у консоль( у масиві items це поле має бути оновлене)
// 6) Видалити 2 екземпляри TodoItem із TodoList та вивести у консоль TodoList(у масиві items має залишитись лише 2 екземпляри TodoItem)

function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

class TodoItem {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.checked = false;
    }

    get isChecked() {
        return this._checked;
    }

    set isChecked(value) {
        if (typeof value === 'boolean') {
            return this.checked = value;
        }
    }

}

class TodoList {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.items = [];        
    }

    addItem(item) {
        if (item.id) {
            this.items.push(item);
            console.log(this.items);
          }
    }

    removeItemById(id) {
        console.log(this.items.find((item) => item.id === id));
        this.items = this.items.filter((item) => item.id !== id);
    }

    getItemById(id) {
        console.log(this.items.find((item) => item.id === id));
        return this.items.find((item) => item.id === id);
    }

}

const list = new TodoList("ToDoList");

const toDo1 = new TodoItem("1", "1");
const toDo2 = new TodoItem("2", "2");
const toDo3 = new TodoItem("3", "3");
const toDo4 = new TodoItem("4", "4");

list.addItem(toDo1);
list.addItem(toDo2);
list.addItem(toDo3);
list.addItem(toDo4);

toDo2.isChecked = true;

list.removeItemById("3");
list.removeItemById("4");

console.log(list.items);