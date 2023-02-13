console.log("Debouncing")

let counter = 0;
//When getData function is called using keyup then it will be calledevery time key is pressed

const getData = () =>{
    console.log("Getting data", counter++);
}

//So to reduce the number of calls to getData function and optimze performance debouncing concept is used.

function debounceFunc(fn , delay) {
    let timer;
    return function () {                            //clearTimeout function is used to cancel the timeout previously established by calling the setTimeout function. 
        clearTimeout(timer);                        //Here, getData will be executed after 100 milliseconds. 
        timer = setTimeout(() => {                  //timer will store the integer returned by the setTimeout function.
            fn();
        }, delay);
    }
    
}

const debounce = debounceFunc(getData, 800);


// Debounce function can be used when the function or any fetch method is called multiple times 
// such events can be scorll or typing in searchbar.



