/*

Recursion is a programming concept where a function calls itself directly or indirectly in order to solve a problem.

A simple explanation of recursion:
Base case: every recursive function has a base case, which is a condition where the function stops calling itself and causing infinite loops.
Recursive step: in each recusive call, the function works on a smaller or simpler version of the problem, until it reaches the base case
Stack mechanism. Each time a function calls itself, the current state of the function is saved in memory(stack). When the base case is reached, the function starts to ‘unwind’ the stack, returning the values as it goes back through each recursive call.


A simple example of recursion is calculating the factorial of a number. The factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n.
*/

function factorial(n) {
    // Base case: If n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive step: n! = n * (n-1)!
    else {
        return n * factorial(n - 1);
    }
}

// Example usage:
console.log(factorial(5)); // Outputs: 120 (5 * 4 * 3 * 2 * 1)

/*
The base case is when n is 0 or 1, in which case the function returns 1.
In the recursive step, the function calls itself with n - 1, until it reaches the base case.
Each recursive call calculates the factorial of a smaller number until the base case is reached, and then the results are combined as the stack unwinds.
*/