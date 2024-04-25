/* 
1. Understand the problem:
Algorithm: Finding the Maximum Number in a List

2. Design the Algorithm:

    Data structure used: Array
    Why:
    This is because the algorithm needs to access each number in the list sequentially to compare them.
    You need individual access to the elements by index
    The ordered collection is good

    Start with the assumption that the first number in the list is the maximum
    Iterate through the list, starting from the second number
        For each number in thre list:
            If the number is greater than the assumed maximum, update the maximum to be the current number
            If the current number is not greater than the assumed maximum, move to the next number
        After iterating throught he entire list, the assumed maximum will be the actual maximum number in the list
    Return the maximum number found

 3. Pseudocode:
function findMax(list):
    // Assume the first number in the list is the maximum
    maxNumber = list[0]
    
    // Iterate through the list starting from the second number
    for number in list[1:]:
        // Update maxNumber if the current number is greater
        if number > maxNumber:
            maxNumber = number
    
    // Return the maximum number found
    return maxNumber
    */

// 4. Write the code:

function findMax(list){
    // Assume the first number in the list is the maximum
    let maxNumber = list[0];

    for(let i = 1; i < list.length; i++){
        const number = list[i];
        if(number > maxNumber){
            maxNumber = number;
        }
    }

    return maxNumber;


}
/*

 5. Analysis of algorithm

 n = size of the input list
 O = order of magnitude, describes the runtime of an algorithm grows relative to the size of its input

  Time Complexity: 
    The loop iterates through each element in the list once, excluding the first element.
    Therefore the time complexity is O(n) (linearly) where n is the number of elements in the list
  
    This means that if you double the size of the input list, the algorithm will take roughly twice as long to execute. 
    If you triple the size of the list, the algorithm will take approximately three times as long, and so on.  
  
    Space Complextiy:
    The algorithm only uses a constant amount of additional memory, regardless of the input size.
    It creates a  single varaible 'maxNumber' to store the maximum value found
    So the space complexity is O(1) indicating constant space usage.

    Summary:
    Time Complexity: O(n)
    Space Complexity: O(1)

6. 
Efficiency and Optimization: This algorithm is relatively efficient for finding the maximum number in a list, especially for small to medium-sized lists. However, for very large lists, alternative approaches or optimizations might be considered, 
such as parallelization or utilizing specialized data structures. */

// 7. Testing:

// Quick test:
const numbers = [10, 5, 8, 20, 3];
console.log("Maximum number:", findMax(numbers)); 



