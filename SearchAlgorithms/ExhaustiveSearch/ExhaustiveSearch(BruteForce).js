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

// Function to generate all possible combinations (ways to arrange elements) of a given array
function generateCombinations(arr) {
    const result = [];
  
    // Recursive function to generate combinations
    function generate(current, index) {
      if (index === arr.length) {
        result.push(current.slice()); // Add a copy of the current combination
        return;
      }
      generate(current, index + 1); // Generate combination without including current element
      current.push(arr[index]);
      generate(current, index + 1); // Generate combination including current element
      current.pop(); // Backtrack
    }
  
    generate([], 0); // Start with an empty combination at index 0
    return result;
  }
  
  // Example usage
  const elements = [1, 2, 3];
  const combinations = generateCombinations(elements);
  console.log("All possible combinations:", combinations);
  