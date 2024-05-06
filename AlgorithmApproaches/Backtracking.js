/*
Backtracking is a problem-solving algorithmic technique used in situations where you need to make a sequence of choices that may or may not lead to a solution. 
It's particularly useful for solving problems such as constraint satisfaction problems, puzzles, and combinatorial optimization problems.

The basic idea behind backtracking is to incrementally build a solution one piece at a time and then backtrack when you reach a point where you can't proceed any further. 
At that point, you backtrack to the most recent decision point and try a different option.

The "rat in a maze" problem is used to illustrate the concept of backtracking. In this problem, you have a maze represented as a 2D grid. The rat starts at the top-left corner and needs to find a path to reach the bottom-right corner, navigating through the maze.
*/

function solveMaze(maze) {
    const solution = new Array(maze.length).fill().map(() => new Array(maze[0].length).fill(0));

    // Helper function to check if the current position is valid
    function isSafe(row, col) {
        return row >= 0 && row < maze.length && col >= 0 && col < maze[0].length && maze[row][col] === 1;
    }

    // Helper function to solve the maze recursively
    function solve(row, col) {
        // If the rat reaches the destination, return true
        if (row === maze.length - 1 && col === maze[0].length - 1) {
            solution[row][col] = 1;
            return true;
        }

        // Check if the current position is valid
        if (isSafe(row, col)) {
            // Mark the current cell as part of the solution path
            solution[row][col] = 1;

            // Move right
            if (solve(row, col + 1)) {
                return true;
            }
            // Move down
            if (solve(row + 1, col)) {
                return true;
            }

            // If moving right or down doesn't lead to a solution, backtrack
            solution[row][col] = 0;
            return false;
        }

        return false; // If the current position is not valid, return false
    }

    // Start solving the maze from the top-left corner
    if (solve(0, 0)) {
        console.log("Solution found:");
        console.log(solution.map(row => row.join(' ')).join('\n'));
    } else {
        console.log("No solution exists.");
    }
}

// Example usage
const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
];

solveMaze(maze);
