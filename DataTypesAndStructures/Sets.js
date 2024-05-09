/*
a set is a built-in object that allows you to store unique values of any type, whether primitive values or object references. 
Sets are particularly useful when you need to store a collection of distinct values and ensure that each value appears only once within the set.

Here are some key points about sets in JavaScript:

Unique Values: Sets automatically eliminate duplicate values. If you try to add a value to a set that already exists, it will not be added again.
Ordering: Sets maintain the insertion order of elements. When you iterate over a set, the values will be returned in the order they were inserted.
Iterability: Sets are iterable, meaning you can loop through them using various methods like forEach, for...of loop, or entries() method.
Value Equality: Sets use strict equality (===) to determine whether two values are the same. For objects, this means that two objects are considered equal only if they reference the same object in memory.
Methods: Sets have methods for adding, removing, checking the presence of, and retrieving values, such as add(), delete(), has(), and clear().


use case:
In a list of user IDs, converting it to a set can quickly identify if there are any duplicate IDs.
Sets are efficient for checking whether an element is present or absent. This is valuable when you want to verify if a particular item is part of a larger collection.
Sets can be used for mathematical operations like union, intersection, and difference. For instance, finding common elements between two sets or combining unique elements from multiple sets.
*/

// Creating a Set
const mySet = new Set();

// Adding values to the set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Adding a duplicate value, which will be ignored

// Checking the size of the set (should be 3)
console.log("Size of set:", mySet.size);

// Checking if a value exists in the set
console.log("Is 2 in the set?", mySet.has(2)); // Output: true

// Removing a value from the set
mySet.delete(2);

// Iterating over the set
console.log("Values in the set:");
for (let item of mySet) {
    console.log(item);
}
