// Створити клас який містить поле name.
// Зробити так щоб це поле автоматично через 5с занулювалося(ставало null) після створення об’єкта
// Також добавити функцію(метод) цього класу яка буде зупиняти(скасовувати) це занулювання

class Basket {
    constructor() {
      this.name = "Denys";
      this.id = null;
      this.ball();
    }
    ball() {
      const id = setTimeout(() => {
        this.id = id;
        this.key = null;
        console.log("Splash");
      }, 5000);
      this.id = id;
    }
    hit() {
      clearTimeout(this.id);
      console.log("Ball in basket");
    }
  }
  
  const newBasket = new Basket();
  newBasket.hit();