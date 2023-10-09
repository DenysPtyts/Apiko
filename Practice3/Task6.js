console.log("Task №6");

const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
      const fullName = this.firstName + ' ' + this.lastName;
      return fullName;
    }
};
  
const testArgs = ['sushi', 'hiking'];
  
function logPersonNameAndInterests() {
    const fullName = Person.getFullName();
    const interests = Array.from(arguments); // Перетворюємо аргументи у масив
    const interestsThings = interests.join(', ');
  
    console.log(`${fullName} loves: ${interestsThings}`);
}
  
logPersonNameAndInterests.apply(Person, testArgs);