console.log("Object oriented Programming");

console.log("Constructor");

//Constructor is called when the object is created by default
//If you do not provide a constructor then by default 
//Constructor is called automatically as constructor(){}

class trainForm {
    constructor(name, trainNo) {
        this.name = name;
        this.trainNo = trainNo;
    }
    preview() {
        console.log("Form is previewed by :" + this.name + " with Train Number " + this.trainNo);
    }
    submit() {
        console.log("Form is submitted by :" + this.name + " with Train Number " + this.trainNo);
    }
    cancel() {
        console.log("Form is cancelled by :" + this.name + " with Train Number " + this.trainNo);
        this.trainNo = 0;
    }
    // fill(name, trainNo) {
    //     this.name = name;
    //     this.trainNo = trainNo;
    // }
}


// Create a new object with trainForm
let prashantForm = new trainForm("Prashant" , 12345);

// No need to Fill the form explicitly
// prashantForm.fill("Prashant" , 12345);

prashantForm.preview();
prashantForm.submit();
prashantForm.cancel();
prashantForm.preview();