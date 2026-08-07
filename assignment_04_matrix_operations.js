// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function transpose(matrix, rows, cols) {
    const result = [];
    for (let j = 0; j < cols; j++) {
        result.push([]);
        for (let i = 0; i < rows; i++) {
            result[j].push(matrix[i][j]);
        }
    }
    return result;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].map(n => String(n).padStart(5)).join(''));
    }
}

rl.question("Enter number of rows: ", (rowsInput) => {
    const rows = parseInt(rowsInput);
    rl.question("Enter number of columns: ", (colsInput) => {
        const cols = parseInt(colsInput);
        const matrix = [];
        let i = 0, j = 0;
  function askElement() {
            rl.question(`Enter element [${i}][${j}]: `, (val) => {
                if (!matrix[i]) matrix[i] = [];
                matrix[i][j] = parseInt(val);
                j++;
                if (j === cols) { j = 0; i++; }

                if (i === rows) {
                    console.log("Original Matrix:");
                    printMatrix(matrix);
                    console.log("Transposed Matrix:");
                    printMatrix(transpose(matrix, rows, cols));
                    rl.close();
                } else {
                    askElement();
                }
            });
        }

        askElement();
    });
});

// =============================================================================



