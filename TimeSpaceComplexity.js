/*
Time Complexity Is the amount of time an algorithm takes to complete a function of the size of the input. 
It gives an estimation of the maximum number of basic operations (comparisons, assignments, arithmetic operations an algorithm will perform.
Time complexity is expressed using the big O notation O(n) where n represents the size of the inputs
An algorithm with time complexity means it grows linearly with the size of the input


Space complexity refers to the amount of memory space an algorithm requires as a function of the size of the input. It includes the memory used by the algorithm for variables, data structures etc
Also expressed with O(n)
An algorithm with space complexity O(n) indicates that the amount of memory it uses increases linearly with the size of the input

What is the purpose of space and time complexity.

Helps programmers and researchers compare different algorithms and choose the most efficient one for a task
In many cases, there is a trade off between time and space complexity. Optimizing one aspect may result in an increase in the other. It is about finding the optimal balance
For example, a hash table for quick look ups might increase space complexity, but reduce time complexity compared to a linear search


Notations:
O(1):
Constant time complexity. The algorithm's running time or space usage remains constant, regardless of the input size.
O(log n):
Logarithmic time complexity. Common in algorithms that divide the input in each step, like binary search.
O(n):


Linear time complexity. The running time or space usage grows linearly with the input size.
O(n^2):
Quadratic time complexity. Common in algorithms with nested loops.
O(2^n):
Exponential time complexity. Common in algorithms with recursive calls that double with each step.
*/