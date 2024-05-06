/* 
Problem: Write a program that takes a list of numbers as input and returns the largest number in the list?

1. Understand the problem:
Postcondtion: search through the list of numbers and return the largest number
Input: Array numsArray
Output: Int largestNumber

2. Design the algorithm:

Data structure: Array
Why: An array is indexed and easy for me to loop through.

Algorithm design:

iterate through the array
largestNumber assigned zero
for each number in numbers array
if the number is greater than the largest number
assign number to the largest number
return largest number

3.
Pseudocode:
iterate through the numbersArray:
    largestNumber assigned zero
    for each number in numbersArray
        if number > largestNumber
        largest number = number
    return largestNumber
*/
// 4. Write the code:

function findLargestNumber(numbersArray){
    let largestNumber = 0;
    for(let i = 0; i < numbersArray.length; i++){
        if(numbersArray[i] > largestNumber){
            largestNumber = numbersArray[i]
        }
    };
return largestNumber;
}

/* 5. Analysis of Algorithm:

Time Complexity: 
The time complexity is O(n), this is because the peformance grows linearly with the size of the numbersArray input.
    
 Space Complexity:
I would also say the space complexity is 0(n) because the space would grow linearly with the amount of operations applied as the array scales.

6.
*/
// Test cases
function runTests() {
    let result = findLargestNumber([1, 4, 7, 8, 9]);
    console.log("Test case 1: ):", result);
}

// Run tests
runTests();