// What is callback function?

// setTimeout(() => {
//     console.log("timer")
// }, 5000);

// function a(b){
//     console.log("a")
//     b();
// }
// a(function (){
//     console.log("b")
// });


// when the event occurs the function passed (callback function) will be added in call stack
document.getElementById('clickme').addEventListener('click', function xyz() {
    console.log("Button clicked")
})

// Closures with eventlisteners

function a(){
    let count = 0;
    document.getElementById('clickcount').addEventListener('click', function clickfun(){
        console.log("Button Clicked",++count);
    })
    
}
a();

// Eventlisteners are heavy, eventhough they are not in use they occupy the memory.
//So it is necessary to remove eveent listerner. If not they will slow down the speed of website


// callback hell
let products = ["Shoes", "Bat", "Bottle"];

api.createCart(products, function (){
    api.proceedToPayment(function (){
        api.updateWallet();
    })
})

// Here in above code there is a callback inside a callback and so on
// so the issue is to maintain the flow of code and inversion of control i.e, updateWallet api depends on proceedToPayment api to get called
   