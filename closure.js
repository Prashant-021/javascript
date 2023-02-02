// closure is the function along with it's lexical environment

//here we can access the grandparent variable inside inner most function
function out_func() {
    let a = 5;
    function in_func() {
        console.log(a)
    }
    return in_func;
}
out_func()();

// above 2 parathesis is same as below code
// var close = out_func();
// close();


function grandparent() {
    let val = 1000;
    function outer_func() {
        let a = 5;
        function inner_func() {
            console.log(a, val)
        }
        inner_func();

    }
    outer_func();
}
grandparent();


//Timeout + closure

// using var due to global scope the value of i will be refered after loop is traversed 
// function timeout_plus_closure() {
//     for (var i = 1; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello") // This line will be executed first
// }
// timeout_plus_closure();
//output will be 
// 5
// 5
// 5
// 5


// to print number in sequence then change var to let 
// because of block scope of let the value assign to each timeout callback function will be different
// function timeout_plus_closure() {
//     for (let i = 1; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello") // This line will be executed first
// }
// timeout_plus_closure();
//output will be 
// 1
// 2
// 3
// 4


// to get above output closure cabe used 
function timeout_plus_closure() {
    for (let i = 1; i < 5; i++) {
        function close(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
    console.log("Hello") // This line will be executed first
}
timeout_plus_closure();






