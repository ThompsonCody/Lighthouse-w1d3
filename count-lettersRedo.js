/*

  1. Define a countLetters function
  2. Create an empty object
  3. Loop over the passed-in word's letters
    - push count of letters to empty object
  4. return object - where the keys are each letter in the word, and the value is the occurance of that letter

*/

const args = process.argv.slice(2).join('').toLowerCase();

if(!args) console.log("please enter a string, I wants to counts letters");


var countLetters = (word) => {
  let match = {};
  for(let letter in word){
    let char = word[letter];

    if (match[char]) {
      match[char]++; // if more than one occurance, increase the key value by 1
    } else {
      match[char] = 1; // if no match, only one occurance
    }
  }

  return match;
}

const result = countLetters(args);

for(let key in result){
  console.log(`${key}: ${result[key]}`);
}
