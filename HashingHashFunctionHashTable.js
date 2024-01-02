/*
Hashing occurs when converting input data into a fixed string of characters.
Turning "Blue" into "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae"

The hash function formula achives this.

The hash table is the storage system used to store and retrieve data quickly.


The load factor = Total number of buckets in the hash table /  Number of elements in the hash table​



*/

// Hash Function
function simpleHash(key, tableSize) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % tableSize;
}

// Hash Table
class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    put(key, value) {
        const index = simpleHash(key, this.size);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push({ key, value });
    }

    get(key) {
        const index = simpleHash(key, this.size);
        const bucket = this.table[index];
        if (bucket) {
            for (const entry of bucket) {
                if (entry.key === key) {
                    return entry.value;
                }
            }
        }
        return null;
    }
}

// Example usage
const myHashTable = new HashTable(10);

// Inserting values into the hash table
myHashTable.put("name", "John");
myHashTable.put("age", 25);
myHashTable.put("city", "Example");

// Retrieving values from the hash table
console.log(myHashTable.get("name")); // Output: John
console.log(myHashTable.get("age"));  // Output: 25
console.log(myHashTable.get("city")); // Output: Example
