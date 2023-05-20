function extractInformation(text, extractType) {
    // Remove hyphens, dots, and spaces from the text
    const cleanedText = text.replace(/[-. ]/g, "");
  
    // Regular expressions for different extract types
    const extractPatterns = {
      phone: /(\+\d{1,2}\s?)?(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})/g,
      email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
      address: /\d+\s+([A-Za-z]+\s*)+/g,
      "16digit": /\b\d{16}\b/g,
      "12digit": /\b\d{12}\b/g,
    };
  
    // Check the extract type and extract information accordingly
    const extractPattern = extractPatterns[extractType.toLowerCase()];
    const extractedInfo = cleanedText.match(extractPattern);
  
    return extractedInfo;
  }
  
  // Example usage
//   const text = "John Doe, 123 Main St, john@example.com, 555-123-4567";
//   const extractedPhoneNumbers = extractInformation(text, "phone");
//   console.log(extractedPhoneNumbers); // Output: ["5551234567"]
  
//   const extractedEmails = extractInformation(text, "email");
//   console.log(extractedEmails); // Output: ["john@example.com"]
  
//   const extractedAddresses = extractInformation(text, "address");
//   console.log(extractedAddresses); // Output: ["123 Main St"]
  
//   const extracted16DigitNumbers = extractInformation(text, "16digit");
//   console.log(extracted16DigitNumbers); // Output: []
  
//   const extracted12DigitNumbers = extractInformation(text, "12digit");
//   console.log(extracted12DigitNumbers); // Output: []
  