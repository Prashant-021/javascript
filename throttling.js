console.log("Throttling...");

let counter = 0;
function getData(temp){
    console.log("Button ",temp," clicked",counter++);
}
element1 = document.getElementById("myBtnWithoutThrottle");
console.log("Without throttling");

const withoutThrottle = () => {getData("without throttling")};
element1.addEventListener("click",withoutThrottle);

// with Throttle
console.log("With throttling");
element2 = document.getElementById("myBtnWithThrottle");
const Throttle = function (fn , time) {
    let flag = true;
    return function () {
        let context =this, args = arguments;
        if (flag) {
            flag = false;
            fn.apply(context,["With throttling"]);
            setTimeout(function () {
                flag = true;
            }, time);
        }
    }
}

element2.addEventListener("click",Throttle(getData,1000));



