/*
Divide and conquer is a problem-solving technique used in programming where a problem is broken down into smaller, more manageable subproblems. These subproblems are solved independently, and then their solutions are combined to solve the original problem.

*/

function findMax(arr) {
    // Base case: If the array has only one element, return that element
    if (arr.length === 1) {
      return arr[0];
    }
  
    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
  
    // Recursively find the maximum in each half
    const maxLeft = findMax(leftHalf);
    const maxRight = findMax(rightHalf);
  
    // Combine the solutions from the two halves
    return Math.max(maxLeft, maxRight);
  }
  
  const numbers = [3, 7, 2, 8, 1, 9, 5, 4, 6];
  console.log("Maximum number:", findMax(numbers)); // Output: 9
  