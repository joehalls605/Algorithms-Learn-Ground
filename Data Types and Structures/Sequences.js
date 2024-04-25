/*
An ordered collection of elements or values. 
The order in which items appear is important as each item is identified by it’s position or index in sequence

Use case:
A to do list where the order of the tasks matters
*/


// In Javascript we can create a sequence using an array
const mySequence = [1, 2, 3, 4, 5];

// Accessing elements in the sequence
console.log(mySequence[0]); // Output: 1
console.log(mySequence[2]); // Output: 3

// Modifying elements in the sequence
mySequence[1] = 10;
console.log(mySequence); // Output: [1, 10, 3, 4, 5]

// Adding elements to the end of the sequence
mySequence.push(6);
console.log(mySequence); // Output: [1, 10, 3, 4, 5, 6]

// Removing elements from the end of the sequence
const removedElement = mySequence.pop();
console.log(removedElement); // Output: 6
console.log(mySequence); // Output: [1, 10, 3, 4, 5]

// Iterating through the sequence
for (const element of mySequence) {
    console.log(element);
}
// Output:
// 1
// 10
// 3
// 4
// 5
