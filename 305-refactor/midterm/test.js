// Write a function that prints numbers from n down to 1. 
// For multiples of 3, print "Fizz" instead of the number. 
// For multiples of 5, print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function reverseFizzBuzz(n) {
    for (let i = n; i >= 1; i--) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

reverseFizzBuzz(15);