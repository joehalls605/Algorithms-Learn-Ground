/*
Heaps are specialised tree-based data structure that satifies the heap property.
In a heap, the value of each node is either greater or equal than the max heap or less than or equal to the min heap the values of it’s children
This is to ensure the root of the heap is a minimum or maximum element in the entire heap

Use cases:
Heaps are used to implement priority queues with elements with higher priorities
Job Scheduling:
Heaps are used in scheduling algorithms where jobs with higher or lower priority (depending on the type of heap) need to be executed first.
When merging sorted files or streams, a heap can be used to efficiently find the smallest element among the current elements from different files.
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] < this.heap[parentIndex]) {
                // Swap the current node with its parent
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break; // The heap property is satisfied
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);

        return min;
    }

    heapify(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let smallest = index;

        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }

        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }

        if (smallest !== index) {
            // Swap the current node with the smallest child
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapify(smallest);
        }
    }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(7);
minHeap.insert(1);

console.log(minHeap.heap); // Output: [1, 2, 7, 4]

console.log(minHeap.extractMin()); // Output: 1
console.log(minHeap.heap); // Output: [2, 4, 7]
