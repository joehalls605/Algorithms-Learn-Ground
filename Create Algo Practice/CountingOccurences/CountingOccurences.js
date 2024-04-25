

/* 
Problem: Count the occurences of each element in the array

1. Understand the problem:
 - Given an array of elements, I want to count how many times each element appears in array
 - Input: array of elements
 - Output: a mapping of each element to its count

2. Design the algorithm:

Data structure: Object (known as dictionary or map)
Why: We need to keep track of counts for each element, using an object allows me to associate each element with its count efficiently

Iterate through the array
    for each element:
    if the element is not already in the object, add it and initialise its count to 1
    if the element is not in the object, increment its count
    after iterating through the array, the object will contain the counts for each element
    Return the object containing element counts

3.
Pseudocode:

function countOccurences(array):
    for each element in the array:
        If the element is not in the object:
            Add the element to the object with a count of 1
        Else 
            Increment the count for the element in the object
        Return the object containing the element counts
*/
// 4. Write the code:

function countOccurences(array){
    const counts = {};
    for(const element of array){
        if(counts[element] === undefined){
            counts[element] = 1;
        }
        else{
            counts[element]++;
        }
    }
    return counts;
}

/* 5. Analysis of Algorithm:

Time Complexity:
    The loop iterates through each element in the array once.
    Therefore, the time complexity is O(n) where n is the number of elements in the array.
 Space Complexity:
    The algorithm uses additional memory to store the counts in a object
    The space complexity is O(k) where k is the number of distinct elements in the array

6. This algorithm is efficient, but for very large arrays, parrelisation might be considered.
    */