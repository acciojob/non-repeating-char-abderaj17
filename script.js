function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count the occurrence of each character
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
