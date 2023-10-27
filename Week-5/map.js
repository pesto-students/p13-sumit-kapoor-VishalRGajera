function calcWordFrequencies(input) {
  const words = input.split(' ');
  const wordMap = new Map();
  for (const word of words) {
    const lowercaseWord = word.toLowerCase();
    if (wordMap.has(lowercaseWord)) {
      wordMap.set(lowercaseWord, wordMap.get(lowercaseWord) + 1);
    } else {
      wordMap.set(lowercaseWord, 1);
    }
  }

  for (const [word, frequency] of wordMap) {
    console.log(`${word} ${frequency}`);
  }
}

calcWordFrequencies("hey hi Mark hi mark");
