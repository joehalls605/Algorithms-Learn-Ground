/* */

/* 
Linked list is a collection of nodes where each nodes contains data in reference to the next node in the sequence.
Unlike arrays, linked lists do not have a fixed size
The elements are not stored in contiguous memory locations
Each node pointing to the next node is forming a chain

Analysing a linked list:

Head - starting point of linked list that points to the first node
Tail - last node in the linked list that points to none

Singly linked list - each node has reference to the next
Doubly linked list - each node has reference to both the next and previous nodes
*/

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage in a to-do list application:
  const todoList = new LinkedList();
  
  // Adding tasks
  todoList.append("Buy groceries");
  todoList.append("Finish homework");
  todoList.append("Go for a run");
  
  // Displaying tasks
  console.log("To-Do List:");
  todoList.print();

  // Udemy tutorial:
  class Node{
     constructor(value){
      this.value = value;
      this.next = null;
     }
  }

  // when creating a new node, we would use this line:
  const newNode = new Node(4)


  class LinkedList{

    constructor(value){
      //creates a new node at the time of creating a linked list
      const newNode = new Node(value)
      this.head = newNode();
      this.tail = this.head;
      this.length = 1;
    }

    push(value){
      // creates a new node, adds to the end
    }
    unshift(value){
      // creates a new node, adds to the beginning
    }
    insert(value){
       // creates a new node, inserts where needed
    }

  }

  
    // using the constructor
  let myLinkedList = new LinkedList(4);

  
  
