// async function asyncfunc(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data[10]);
// }
// asyncfunc();

// const cart = ["Shoes"];
// async function createOrder(cart){
//     const result = await validateOrder(cart);
//     console.log("await");
//     console.log(result)
// }

// function validateOrder(cart){
//     return new Promise setTimeout(() => {
//         console.log("success");
//     }, 3000);
// }

// createOrder()

// async function f(){
//     return Promise.resolve(1);

// }


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