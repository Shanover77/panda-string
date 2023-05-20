## panda-string
panda-string is a lightweight npm package that provides string similarity calculations based on tokenization and cosine similarity. It offers functions to tokenize strings, calculate token frequencies, and compute the cosine similarity between two strings. It also provides additional functionality to extract phone numbers, emails, addresses, 16-digit numbers, and 12-digit numbers from a given text.

Baseline for applications: text similirity for social media posts, resume-jd matching, skill matching

## Installation  
You can install the panda-string package using npm:  
npm install panda-string  

## Usage:  
const { calculateStringSimilarity, extractInformation } = require('panda-string');


## Implementation of String similarity:  

const string1 = "Hello world";    
const string2 = "World hello";  
const similarity = calculateStringSimilarity(string1, string2);  
console.log(similarity); // Output: 0.9999999999999998  

## Implementation of info extraction:  

const text = "John Doe, 123 Main St, john@example.com, 555-123-4567";  
const extractedPhoneNumbers = extractInformation(text, "phone");  
console.log(extractedPhoneNumbers); // Output: ["5551234567"]  

const extractedEmails = extractInformation(text, "email");  
console.log(extractedEmails); // Output: ["john@example.com"]  

const extractedAddresses = extractInformation(text, "address");  
console.log(extractedAddresses); // Output: ["123 Main St"]  

const extracted16DigitNumbers = extractInformation(text, "16digit");  
console.log(extracted16DigitNumbers); // Output: []  

const extracted12DigitNumbers = extractInformation(text, "12digit");  
console.log(extracted12DigitNumbers); // Output: []  


## License  
panda-string is released under the MIT License. You are free to use, modify, and distribute this package.
