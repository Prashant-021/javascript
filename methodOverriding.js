console.log("Method Overiding");

class Employee {
    constructor(user)   { 
        this.user  = user;
    }
    login(){
        console.log(`${this.user} Login`);
    }
    logout(){
        console.log(`${this.user} Logout`);
    }
    getLeaves(leaves){
        console.log(`Employee requested for ${leaves} leaves`);
    }
    getCoffee(noOfUnits, msg = "Enjoy your coffees!"){
        console.log(`Employee requested for ${noOfUnits} coffees (${msg})`);
    }
}

class Programmer extends Employee {
    // By default this constructor is called by javascript engine if there is no constructor in child classes
    // constructor(...args) {
    //     super(...args);
    // }
    //Method Overiding
    getLeaves(leaves){     
        console.log(`Programmer requested for ${leaves+1} (one extra leave)`); 
    }

    //use of super keyword
    getCoffee(noOfUnits) {
        super.getCoffee(noOfUnits+1, " one extra coffee");
    }


}

let employee = new Employee("Employee");
let programmer = new Programmer('Programmer');

employee.login();
programmer.login();
employee.getLeaves(2);
programmer.getLeaves(2);
employee.getCoffee(3);
programmer.getCoffee(3);
employee.logout();
programmer.logout();

