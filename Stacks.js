/* 
A collection of operations to push (add) elements onto the top and pop (remove) elements form the top
Use cases:

Function call managment
Undo in text editors 
Backtracking in algorithms

*/

// Definition of a Stack class
class Stack {
  // Constructor to initialize an empty stack
  constructor() {
    // Initialize an empty array to store stack elements
    this.items = [];
  }

  // Method to add an element to the top of the stack
  push(item) {
    this.items.push(item);
  }

  // Method to remove and return the element at the top of the stack
  pop() {
    // Check if the stack is empty
    if (this.isEmpty()) {
      return null; // Return null if stack is empty
    }
    // Remove and return the last element in the array (top of the stack)
    return this.items.pop();
  }

  // Method to return the element at the top of the stack without removing it
  peek() {
    // Check if the stack is empty
    if (this.isEmpty()) {
      return null; // Return null if stack is empty
    }
    // Return the last element in the array (top of the stack)
    return this.items[this.items.length - 1];
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0; // Returns true if stack is empty, false otherwise
  }

  // Method to return the number of elements in the stack
  size() {
    return this.items.length; // Return the length of the stack array
  }
}

// Example usage of the Stack class
const myStack = new Stack(); // Create a new stack instance

// Pushing elements onto the stack
myStack.push(1);
myStack.push(2);
myStack.push(3);

// Popping an element from the stack
console.log(myStack.pop()); // Output: 3

// Peeking at the top of the stack
console.log(myStack.peek()); // Output: 2

  

  