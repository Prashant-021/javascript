console.log("Async/Await");

async function asyncfunc(){
    console.log("Inside function");
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    return users;
}

console.log("Before calling");
let a = asyncfunc();
console.log("After calling");
console.log(a);
a.then(data => console.log(data));
console.log("after response");
console.log("Last line");