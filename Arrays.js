/* */

/* 
Arrays are a data structure that stores a colleciton of elements.
Each element is identified by an index or key.
Elements are typically the same data type
Provide constant time acess to any element index
Arrays are ordered collections
*/

const numbers = [1,2,3,4,5];


//Mixed types 
var mixedArray = [1, "two", true, { name: "John", age: 30 }, null];

// Nested arrays

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Array of objects
var people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

/* 
Use case:

To store and acess elements that allow constant time access.
For tasks that require quick and direct acess to data
Implementing lists that provide dynamic sizing
For use of multidimensional arrays for use in graphics or mathematics
Sorting and searching algorithms like binary seach and quick sort
*/
