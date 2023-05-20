function tokenizeString(str) {
    // Remove leading/trailing whitespace and convert to lowercase
    str = str.trim().toLowerCase();
  
    // Tokenize the string by splitting on whitespace
    const tokens = str.split(/\s+/);
  
    return tokens;
  }
  
  function calculateStringSimilarity(str1, str2) {
    const tokens1 = tokenizeString(str1);
    const tokens2 = tokenizeString(str2);
  
    // Create a set of unique tokens from both strings
    const uniqueTokens = new Set([...tokens1, ...tokens2]);
  
    // Calculate token frequencies for each string
    const freq1 = calculateTokenFrequencies(tokens1);
    const freq2 = calculateTokenFrequencies(tokens2);
  
    // Calculate the cosine similarity between the token frequency vectors
    const similarity = calculateCosineSimilarity(freq1, freq2);
  
    return similarity;
  }
  
  function calculateTokenFrequencies(tokens) {
    const frequencies = {};
  
    // Count the frequency of each token
    for (const token of tokens) {
      if (frequencies[token]) {
        frequencies[token]++;
      } else {
        frequencies[token] = 1;
      }
    }
  
    // Normalize the frequencies by dividing by the total number of tokens
    const totalTokens = tokens.length;
    for (const token in frequencies) {
      frequencies[token] /= totalTokens;
    }
  
    return frequencies;
  }
  
  function calculateCosineSimilarity(freq1, freq2) {
    // Calculate the dot product of the token frequency vectors
    let dotProduct = 0;
    for (const token in freq1) {
      if (freq2[token]) {
        dotProduct += freq1[token] * freq2[token];
      }
    }
  
    // Calculate the magnitudes of the token frequency vectors
    let magnitude1 = 0;
    let magnitude2 = 0;
    for (const token in freq1) {
      magnitude1 += freq1[token] ** 2;
    }
    for (const token in freq2) {
      magnitude2 += freq2[token] ** 2;
    }
    magnitude1 = Math.sqrt(magnitude1);
    magnitude2 = Math.sqrt(magnitude2);
  
    // Calculate the cosine similarity
    const similarity = dotProduct / (magnitude1 * magnitude2);
  
    return similarity;
  }
  

//   const string1 = "Hello world";
//   const string2 = "World hello";
//   const similarity = calculateStringSimilarity(string1, string2);
//   console.log(similarity); // Output: 0.9999999999999998
  