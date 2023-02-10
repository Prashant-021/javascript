

// const user = fetch('https://api.github.com/users/Prashant-021');

// console.log(user); // this will return promise pending but the state will be fullfilled as after sometime the promise is fulfilled

// user.then((data) => console.log(data));



// // Consume a promise

// // inversion of control issue is resolved using promises
// const cart = ["Shoes", "Pant", "Kurta"];

// // // using callback
// // // here the callback function is passed
// // createCart(cart, function(orderId){
// //     proceedToPayment(orderId);
// // });

// // // using promises
// // // here when the promise is resolved then callback function is attached to it
// // const promise = createCart(cart);

// // promise.then(function (orderId){
// //     proceedToPayment(orderId);
// // });


// // to solve the callback hell issue use promise chain

// // using callback
// // this is callback hell
// createCart(cart, function (orderId) {
//     proceedToPayment(orderId, function (paymentInfo) {
//         ShowOrderSummary(paymentInfo, function (payment) {
//             updateWallet(payment)
//         })
//     })
// });


// // using Promises chain
// //return is must in promise chain while using functions
// createCart(cart)
//     .then(function (orderId) {
//         return proceedToPayment(orderId) 
//     })
//     .then(function (paymentInfo){
//         return ShowOrderSummary(paymentInfo)
//     })
//     .then(function(payment){
//         return updateWallet(payment)
//     });

// // we can also use arrow function for better reading

// createCart(cart)
//     .then((orderId) => proceedToPayment(orderId))
//     .then((paymentInfo) => ShowOrderSummary(paymentInfo))
//     .then((payment) => updateWallet(payment));



// create a promise

// createorder, proceedtopayment, ordersummary, updatewallet

const cart = ["shoes", "jacket"];
let orderId = 0, payment = true;
const price = [
    { productName: 'shoes', price: 1300 },
    { productName: 'jacket', price: 1000 },
    { productName: 'pant', price: 500 },
];
const orderList = [];
// console.log(orderList);
// consuming a promise
createOrder(cart)
    .then(function (values) {
        let temp = JSON.stringify(values)
         console.log(`Order Created,${values}`);
        return temp;
    })
    .catch((err) => {                   //catch errors for creating cart
        console.log(err.message);
    })
    .then(function (values) {
        console.log()
        return proceedToPayment(values);
    })
    .then(function (paymentMsg) {
        console.log("Payment Successful");
        return updateWallet(paymentmsg);
    })
    .catch((err) => {                   //Catch error for payment method
        console.log(err.message);
    })
    .then(function () {
        console.log("This will always execute")
    });


//Creating Promise

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (cart.length == 0) {
            let err = new Error("cart is not valid");
            setTimeout(() => {
                reject(err);
            }, 2000);
        }
        else {
            orderId++;
            // let sum = 0;
            // cart.forEach(element => {
            //     sum += price[element];
            // });
            orderList.push({ orderNo: `${orderId}`, orderdetail: `${cart}` });
            console.log(orderList)
            resolve(orderList)
        }
    })
    return pr;
}

function proceedToPayment(values) {
    return new Promise(function (resolve, reject) {
        if (!validatepayment(values[0])) {
            let err = new Error("Payment Unsuccessful")
            setTimeout(() => {
                reject(err);
            }, 2000);
        }
        else if (payment) {
            resolve(values[1]);
        }
    })
}

function validatepayment(orderId) {
    if (orderId) {
        return true;
    }
    else { return false }
}
