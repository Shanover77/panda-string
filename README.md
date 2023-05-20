panda-string is a lightweight npm package that provides string similarity calculations based on tokenization and cosine similarity. It offers functions to tokenize strings, calculate token frequencies, and compute the cosine similarity between two strings.

## Installation
You can install the panda-string package using npm:
npm install panda-string

## Usage:
// Import the functions from the panda-string package  
const { calculateStringSimilarity } = require('panda-string');

## Implementation:

const string1 = "Hello world";  
const string2 = "World hello";  
const similarity = calculateStringSimilarity(string1, string2);  
console.log(similarity); // Output: 0.9999999999999998  

## License  
panda-string is released under the MIT License. You are free to use, modify, and distribute this package.
