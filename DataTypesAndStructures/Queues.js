/* 

A collection of elements with operations to add elements at the back and remove elements from the front.
(FIFO)

Use cases:
Task scheduling systems that need a first in first out structure. A printer queue for example
Breadth-First Search - in graph algorithms queues are used to explore nodes by level
Order processing in e-commerce
*/

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // Example usage:
  const myQueue = new Queue();
  
  // Enqueueing elements
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  
  // Dequeueing elements
  console.log(myQueue.dequeue()); // Output: 1
  
  // Front of the queue
  console.log(myQueue.front()); // Output: 2
  
  // Checking if the queue is empty
  console.log(myQueue.isEmpty()); // Output: false
  
  // Checking the size of the queue
  console.log(myQueue.size()); // Output: 2
  