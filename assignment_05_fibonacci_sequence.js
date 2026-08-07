// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function printFibonacci(n) {
    let first = 0, second = 1;
    let output = [];
    for (let i = 0; i < n; i++) {
        output.push(first);
        const next = first + second;
        first = second;
        second = next;
    }
    console.log("Fibonacci sequence: " + output.join(" "));
}

function checkFibonacci(num) {
    let first = 0, second = 1;
    if (num === 0) return true;
    while (first <= num) {
        const next = first + second;
        first = second;
        second = next;
        if (first === num) return true;
    }
    return false;
}
rl.question("How many terms? ", (input) => {
    const n = parseInt(input);

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
    } else {
        printFibonacci(n);
    }

    rl.question("Enter a number to check: ", (numInput) => {
        const num = parseInt(numInput);

        if (num < 0) {
            console.log("Error: number must be a positive integer.");
        } else if (checkFibonacci(num)) {
            console.log(num + " is a Fibonacci number.");
        } else {
            console.log(num + " is NOT a Fibonacci number.");
        }

        rl.close();
    });
});
// =============================================================================


