// Define first function
function firstFunction() {
    console.log("Inside firstFunction"); // Log a message indicating entry into firstFunction
    secondFunction(); // Call second function
}

// Define second function
function secondFunction() {
    console.log("Inside secondFunction"); // Log a message indicating entry into secondFunction
    thirdFunction(); // Call third function
}

// Define third function
function thirdFunction() {
    console.log("Inside thirdFunction"); // Log a message indicating entry into thirdFunction
}

// Starting point of the program
console.log("Starting program"); // Log a message indicating the start of the program
firstFunction(); // Call the first function
console.log("Ending program"); // Log a message indicating the end of the program

/*
This sequence of function calls and returns is managed by the call stack. Each function call adds a new frame to the stack, 
and when a function returns, its frame is removed from the stack.

*/