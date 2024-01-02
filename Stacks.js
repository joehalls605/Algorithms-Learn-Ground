/* 
A collection of operations to push (add) elements onto the top and pop (remove) elements form the top
Use cases:

Function call managment
Undo in text editors 
Backtracking in algorithms

*/

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // Example usage:
  const myStack = new Stack();
  
  // Pushing elements onto the stack
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  
  // Popping elements from the stack
  console.log(myStack.pop()); // Output: 3
  
  // Peeking at the top of the stack
  console.log(myStack.peek()); // Output: 2
  
  // C
  