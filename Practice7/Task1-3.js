//Task 1
// Завдання: Отримати список користувачів з віддаленого ресурсу /users.
// Використати fetch.

const baseUrl = "https://jsonplaceholder.typicode.com";

const fetchAllUsers = () => {
    fetch(baseUrl + "/users")
    .then((responce) => {
        if (!responce.ok) {
            throw new Error("Something is wrong...");
        }
    return responce.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
fetchAllUsers();

//Task 2
// Завдання. Отримати список усіх альбомів які належать користувачу з id - 10.
// Використати fetch.
// Після отримання відповіді від API, перевірити чи запит виконався успішно (чи знаходиться код відповіді в діапазоні 200-299)

const fetchAlbumsByUserId = (id) => {
    fetch(`${baseUrl}/users/${id}/albums`)
        .then((responce) => {
            if (!responce.ok) {
                throw new Error("Something is wrong...");
            }
        return responce.json();
        })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    };

fetchAlbumsByUserId(10);

//Task 3
// Завдання. Створити нового користувача - зробити POST запит на ендпоінт 'https://jsonplaceholder.typicode.com/users'.
// Використати fetch.
// Для нового користувача вказати поля name, username, email.
// Оскільки дане API працює з JSON то body запиту повинне бути у JSON форматі.
// Вказати для запиту заголовок 'Content-type' з значенням 'application/json'
// Після отримання відповіді від API, перевірити чи запит виконався успішно

const createNewUser = (user) => {
    fetch(`${baseUrl}/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((responce) => {
        if (!responce.ok) {
            throw new Error("Something is wrong...");
        }
        return responce.json();
      })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    };

createNewUser({
    name: "Name LastName",
    username: "UserName",
    email: "usermail@gmail.com",
});