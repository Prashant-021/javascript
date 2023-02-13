console.log("Debouncing")

let counter = 0;
//When getData function is called using keyup then it will be calledevery time key is pressed

const getData = () =>{
    console.log("Getting data", counter++);
}

//So to reduce the number of calls to getData function and optimze performance debouncing concept is used.

function debounceFunc(fn , delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
    
}

const debounce = debounceFunc(getData, 800);


// Debounce function can be used when the function or any fetch method is called multiple times 
// such events can be scorll or typing in searchbar.



