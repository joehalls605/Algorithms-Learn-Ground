/*
Exhaustive Search (known as brute forche search)

Is used to systematically examine examine all possible solutions to a problem. It involves considering every possible option, combination or permutation until the correct solution is found.


This is how it works:
Generate all potential candidates or solutions to the problem
 Evaluate each candidate against the problem’s criteria or constraints to determine if it is a valid solution
Iterate through the candidates, examining thoroughly.
Select the optimal solution, selecting the best solution among all candidates that meet’s the problem’s requirements.

Exhaustive search can be very simple to implement and gurantees finding the optimal solution if one exists within a search space. 
However it’s drawback is inefficiency. As the size of the problem increases the number of pontential solutions grows exponentially.  Making it it impractical or impossible for certain problems.

Example problem: we want to find all possible combinations of a given set of numbers that add up to a specific target sum:
*/

function findCombinations(numbers, targetSum) {
    const result = [];

    // Define a recursive function to explore all possible combinations
    function explore(index, currentSum, currentCombination) {
        // Base case: if the current sum equals the target sum, add the combination to the result
        if (currentSum === targetSum) {
            result.push(currentCombination.slice()); // Make a copy of the current combination
            return;
        }

        // Base case: if the current sum exceeds the target sum or all numbers have been considered.
        // Stops the function from calling itself forever
        if (currentSum > targetSum || index === numbers.length) {
            return;
        }

        // Explore including the current number at the current index
        currentCombination.push(numbers[index]);
        explore(index, currentSum + numbers[index], currentCombination);
        currentCombination.pop(); // Backtrack

        // Explore excluding the current number at the current index
        explore(index + 1, currentSum, currentCombination);
    }

    explore(0, 0, []);

    return result;
}

// Example usage:
const numbers = [2, 4, 6, 8];
const targetSum = 8;
const combinations = findCombinations(numbers, targetSum);
console.log("Combinations that add up to", targetSum, ": ", combinations);