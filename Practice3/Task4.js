console.log("Task №4");

const dog = {
    sound: 'bark',
    greet: function() {

        setTimeout(() => {
            console.log(this.sound)
        },0)
        
    }
}
    
dog.greet();
console.log("-----------------------");