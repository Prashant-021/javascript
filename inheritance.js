console.log("Object oriented Programming");

console.log("Inheritance");

class Animal {
    constructor(name) {
        this.name = name;
    }
    run(){
        console.log(this.name + " is running");
    }
}

class Dog extends Animal {
    bark(){
        console.log(this.name + " is barking");
    }
}

let animal = new Animal("Chiku"); // Object creation
let dog = new Dog("Bruno");

animal.run();
dog.run();
dog.bark();
// animal.bark(); //This will give an error as bark is not available in animal





