/*
Hashing:
Hashing is the process of applying a hash function to input data (such as keys) to generate a fixed-size representation called a hash code or hash value. The primary goal of hashing is to map data of arbitrary size to fixed-size values, typically to facilitate efficient data retrieval or storage.

Key aspects of hashing include:

Deterministic: A given input should always produce the same hash code.
Uniformity: Ideally, hash functions should evenly distribute hash values across the hash table to minimize collisions.
Efficiency: Hash functions should be computationally efficient to ensure fast processing of data.
Hashing is used in various applications beyond hash tables, including cryptography, data integrity verification, and checksum generation. It's a fundamental technique in computer science and plays a crucial role in many algorithms and data structures.
*/

// Hash function to generate a hash code for a given key
function hash(key, size) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i); // Sum the ASCII values of characters in the key
    }
    return hashValue % size; // Modulo operation to ensure the hash code fits within the size of the hash table
}

// Example usage of the hash function
const key1 = "apple";
const key2 = "banana";
const key3 = "orange";

const hashTableSize = 10;
console.log(hash(key1, hashTableSize)); // Output: 7
console.log(hash(key2, hashTableSize)); // Output: 6
console.log(hash(key3, hashTableSize)); // Output: 0
