// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function addAll(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) total += arr[i];
    return total;
}

function average(arr) {
    return addAll(arr) / arr.length;
}

function biggest(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) if (arr[i] > result) result = arr[i];
    return result;
}

function smallest(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) if (arr[i] < result) result = arr[i];
    return result;
}
rl.question("How many numbers? ", (input) => {
    const n = parseInt(input);

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        rl.close();
        return;
    }

    const numbers = [];
    let count = 0;

    function askNumber() {
        rl.question(`Enter number ${count + 1}: `, (val) => {
            numbers.push(parseFloat(val));
            count++;
            if (count < n) {
                askNumber();
            } else {
                console.log("\nResults:");
                console.log("Sum:     " + addAll(numbers));
                console.log("Average: " + average(numbers));
                console.log("Maximum: " + biggest(numbers));
                console.log("Minimum: " + smallest(numbers));
                rl.close();
            }
        });
// =============================================================================


