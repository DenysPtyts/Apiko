console.log("Task №3");

const cat = {  
    sound: 'meow',
    greet: function() {
        
        const setTimeout = function() {
            console.log(this.sound)
        }
        
        const setTimeoutTime = setTimeout.bind(this);

        setTimeoutTime();
    }
};

cat.greet();
console.log("-----------------------");