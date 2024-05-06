/*

Sets are an unordered collection of unique elements
The order does not matter, they only appear once

use case:
In a list of user IDs, converting it to a set can quickly identify if there are any duplicate IDs.
Sets are efficient for checking whether an element is present or absent. This is valuable when you want to verify if a particular item is part of a larger collection.
Sets can be used for mathematical operations like union, intersection, and difference. For instance, finding common elements between two sets or combining unique elements from multiple sets.
*/

// Creating a Set
const mySet = new Set();

// Adding elements to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicates are automatically ignored in a Set

console.log(mySet); // Output: Set { 1, 2, 3 }

// Checking if an element is in the Set
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(4)); // Output: false

// Removing an element from the Set
mySet.delete(1);
console.log(mySet); // Output: Set { 2, 3 }

// Iterating through the Set
for (const value of mySet) {
    console.log(value);
}
// Output:
// 2
// 3
