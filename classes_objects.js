console.log("Object oriented Programming");

console.log("Classes and objects");

class trainForm {
    submit() {
        console.log("Form is submitted by :" + this.name + " with Train Number " + this.trainNo);
    }
    cancel() {
        console.log("Form is cancelled by :" + this.name + " with Train Number " + this.trainNo);
    }
    fill(name, trainNo) {
        this.name = name;
        this.trainNo = trainNo;
    }
}


// Create a new object with trainForm
let prashantForm = new trainForm();

//Fill the form
prashantForm.fill("Prashant" , 12345);

// Create a new objects with trainForm
let rohanForm1 = new trainForm();
let rohanForm2 = new trainForm();

rohanForm1.fill("Rohan" , 67890);
rohanForm2.fill("Rohan" , 23456);


prashantForm.submit();
rohanForm1.submit();
rohanForm2.submit();
prashantForm.cancel();
rohanForm1.cancel();