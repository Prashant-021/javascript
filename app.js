

const obj1 = {
    myName: 'Prashant',
    printName: function () {
        console.log(this.myName);
    }
}

obj1.printName(); // this will console 'Prashant'

const obj2 = {
    myName: 'Patel',
}

// call()
obj1.printName.call(obj2); //This will console 'patel'

//apply()
function greet(greet, msg) {
    console.log(`${greet}! ${this.myName} ${msg}`);
}

const obj = {
    myName: 'Prashant s patel',
}
// call method
greet.call(obj, "Hello", "Good Morning this is call method");
// apply method
greet.apply(obj, ["Hello", "Good Morning this is apply method"]);



// bind()
function sayHello(greet) {
    console.log(`${greet} ${this.myName}`);
}

const obj3 = { myName: "Prashant" };
const newFunc = sayHello.bind(obj3, "Hello");
newFunc(); 