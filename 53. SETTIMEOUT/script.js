// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time
//                            Times are approximate
//                            setTimeout(callback, delay)
/* function sayHello() {
  console.log("Hello");
}

setTimeout(sayHello, 3000); */

/* const timeoutId = setTimeout(() => console.log("Hello"), 3000);
clearTimeout(timeoutId); */
let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => console.log("STARTER"), 3000);
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("CLEARED")
}