// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const students = [];

function average(student) {
    const total = student.scores.reduce((sum, s) => sum + s, 0);
    return (total / student.scores.length).toFixed(2);
}

function addStudent(callback) {
    rl.question("Student name: ", (name) => {
        rl.question("Student ID: ", (idInput) => {
            const id = parseInt(idInput);
            rl.question("How many scores? ", (countInput) => {
                const count = parseInt(countInput);
                const scores = [];
                let i = 0;

                function askScore() {
                    rl.question(`Enter score ${i + 1}: `, (val) => {
                        scores.push(parseFloat(val));
                        i++;
                        if (i < count) {
                            askScore();
                        } else {
                            students.push({ name, id, scores });
                            console.log(`Student "${name}" added successfully.`);
                            callback();
                        }
                    });
                }

                askScore();
            });
        });
    });
}

function displayStudents() {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }
    students.forEach((s) => {
        console.log("Name: " + s.name);
        console.log("ID: " + s.id);
        console.log("Scores: " + s.scores.join(" "));
        console.log("Average: " + average(s));
        console.log("");
    });
}

function studentAverage(callback) {
    rl.question("Enter student ID: ", (idInput) => {
        const id = parseInt(idInput);
        const student = students.find(s => s.id === id);

        if (student) {
            console.log(`${student.name}'s average score: ${average(student)}`);
        } else {
            console.log("Student ID not found.");
        }

        callback();
    });
}

function showMenu() {
    console.log("\n====================================");
    console.log("     STUDENT RECORD SYSTEM MENU");
    console.log("====================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");

    rl.question("Enter your choice (1-4): ", (choice) => {
        if (choice === "1") {
            addStudent(showMenu);
        } else if (choice === "2") {
            displayStudents();
            showMenu();
        } else if (choice === "3") {
            studentAverage(showMenu);
        } else if (choice === "4") {
            console.log("Goodbye!");
            rl.close();
        } else {
            console.log("Invalid choice, please try again.");
            showMenu();
        }
    });
}

showMenu();


// =============================================================================


