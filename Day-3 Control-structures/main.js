// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let number = -1

if (number >= 0) {
    console.log('This number is positive');
} else (
    console.log('this number is negative')
)

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console. 

let age = 15

if (age >= 18) {
    console.log('you are eligible for vote');
} else {
    console.log('you are not eligible for vote');
}

// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 10;
let num2 = 8;
let num3 = 15;

if (num1 >= num2) {
    console.log(`largest number ${num1}`);
} else if (num2 >= num3) {
    console.log(`largest number ${num3}`);
} else {
    console.log(`largest number ${num1}`);
}

// Activity 3: Switch Case
// ⚫ Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function checkDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log('sunday');
            break;

        case 2:
            console.log('mondya');
            break;
        case 3:
            console.log('tuesday');
            break;
        case 4:
            console.log('wednesday');
            break;
        case 5:
            console.log('thursday');
            break;
        case 6:
            console.log('friday');
            break;
        case 7:
            console.log('saturday');
            break;
    }
}

checkDay(2)
checkDay(3)
checkDay(4)

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

function getGrade(score) {
    let grade;
    
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score. Please enter a score between 0 and 100.';
    }
    
    console.log(grade);
}

// Example usage
getGrade(95);  // Outputs: A
getGrade(85);  // Outputs: B
getGrade(75);  // Outputs: C
getGrade(65);  // Outputs: D
getGrade(50);  // Outputs: F
getGrade(105); // Outputs: Invalid score. Please enter a score between 0 and 100.

// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let checkNumber = 7

checkNumber % 2 === 0 ? console.log(`this is even number`) : console.log('this is odd number')

