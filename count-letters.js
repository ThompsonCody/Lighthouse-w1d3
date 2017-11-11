/*
 pass a string into countletters
 turn into array
 count for same characters in word
 return str letters as object keys, and count as value
*/

/*
var stringBase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_'];
Ex online compares str with this regular expression of letters. Can we not compare str with str, and output letterCount?

  -take passed function str, compare using this?
*/


function countLetters(str){
  var str = str.split(' ').join('').toLowerCase(), //should be able to compare back just using "this"
      matching = {};

  // for(var i = 0; i < str.length; i++){

  //   if(str[i] === str[i]){
  //     letterCount++;
  //     for (var i = 0; i < str.length; i++) {
  //       var currentChar = str[i];
  //       matchingLetters[currentChar] = letterCount;
  //     }
  //   }
  // }

  for(let i in str){
    var char = str[i];
    if(matching[char])
      matching[char]++;
    else
      matching[char] = 1; //if none are matching, occured only once
  }

  // for (let key in matching ){
  //   matching = key + ' : ' + matching[key];
  // }
  return matching
}

//console.log(countLetters"lighthouse in the house");

var show = countLetters("lighthouse in the house");

for (let key in show){
    console.log( key + ' : ' + show[key]);
} // returns countLetters output, but formated