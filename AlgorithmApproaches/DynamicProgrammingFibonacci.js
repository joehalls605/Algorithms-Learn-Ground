// Dynamic Programming:
/*
Dynamic programming is a problem-solving technique where you solve a problem by breaking it down into simpler subproblems. 
You solve each subproblem only once and store its result so that you can use it again later if needed. 
This technique is particularly useful when the problem can be divided into overlapping subproblems, 
meaning that the same subproblems recur multiple times.

A simple example with the fibonacci sequence.
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. It starts with 0 and 1. So, it goes like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on. Each number in the sequence (after the first two) is found by adding up the two numbers before it. 
It's like a number pattern that keeps growing by adding the last two numbers together.
*/

function fibonacci(n) {
    let fib_sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fib_sequence.push(fib_sequence[i-1] + fib_sequence[i-2]);
    }
    return fib_sequence.slice(0, n);
}

// Example usage:
console.log(fibonacci(10)); // Prints the first 10 Fibonacci numbers


