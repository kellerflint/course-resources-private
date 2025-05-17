// ********************* Array Search Questions ********************* //

// Write a function that returns the number of times the element appears in the array
// Edge case: empty array should return -1
// Edge case: element not found should return 0
function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}

// Write a function that returns the number of elements in the array greater than the value
function countGreaterThan(arr, value) {
    if (arr.length === 0) return -1;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            count++;
        }
    }
    return count;
}

// Return the number of occurrences of the element in the array within the range
function countInRange(arr, min, max) {
    if (arr.length === 0) return -1;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            count++;
        }
    }
    return count;
}

// Return the index of the last occurrence of the element in the array
// Edge case: empty array should return -1
// Edge case: element not found should return -1
function findLastIndex(arr, element) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

// Return the indices of all occurrences of the element in the array
// Edge case: empty array should return empty array
// Edge case: element not found should return empty array
function findAllIndices(arr, element) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            indices.push(i);
        }
    }

    return indices;
}



// ********************* Reverse Questions ********************* //

// Return the reverse of the array passed in
// Edge case: empty array should return empty array
// Edge case: array with one element should return the same array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// ********************* FizzBuzz Questions ********************* //

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

// Write a function that prints numbers from 1 to n.
// For multiples of 3, print "Fizz" instead of the number.
// For multiples of 5, print "Buzz" instead of the number.
// For numbers that are greater than 10, append "Big" to the start of any output.
function bigFizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        if (!output) output = i;
        if (i > 10) output = "Big" + output;
        
        console.log(output);
    }
 }

 reverseFizzBuzz(15);