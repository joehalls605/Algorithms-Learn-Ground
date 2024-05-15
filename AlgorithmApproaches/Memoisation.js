function fibonacci(n) {
    let fib_sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fib_sequence.push(fib_sequence[i-1] + fib_sequence[i-2]);
    }
    return fib_sequence.slice(0, n);
}

// Example usage:
console.log(fibonacci(10)); // Prints the first 10 Fibonacci numbers
