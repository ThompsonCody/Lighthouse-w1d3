//So instead of returning the number of character occurances, return those occurances's index position (indices)

/*
"lighthouse in the house"

- loop over string, pushing a letters occurances indice into an empty array value


{
  l: 0
  i: [1, 9 or 10]
  ......
}
*/

// function charIndices(str, find) {
//   var str = str.split(' ').join('').toLowerCase(),
//       result = [], i;
//   for (i = 0; i < str.length; i++) {
//     find = str[i].charAt(0);
//     if (str[i] === find)
//       result.push(i)
//   }

//   console.log(result);
// }

// charIndices("lighthouse in the house");


// Same thing as below, except the returning object value is an array of the letters index occurance



function countLetters(str){
  let newStr = str.split(' ').join('').toLowerCase(); //should be able to compare back just using "this"
      matching = {};

  for (let key in newStr) {
    let element = newStr[key];
    // let idx = newStr.indexOf(newStr[key]);
    // console.log(idx);
    if(matching[element]){
      for (var i = 0; i < newStr.length; i++) {
       matching[element] = newStr.indexOf(i);
      }
    } else {
       matching[element] = newStr.indexOf(this);
    }
  }
  return matching;
}

let show = countLetters("lighthouse in the house");

for (let key in show){
    console.log( key + ' : ' + show[key]);
}

/*


----JSFIDDLE----

//So instead of returning the number of character occurances, return those occurances's index position (indices)

// Same thing as below, except the returning object value is an array of the letters index occurance

function findIndices(str, val){
  str.split(' ').join('').toLowerCase();
  let matching = {}, i;
    for (i = 0; i < str.length; i++){
      if(str[i] === val) {
        matching.push(i);
      }
      return matching;
    }
}

let show = findIndices("lighthouse in the house", i);

for (let key in show){
    console.log( key + ' : ' + show[key]);
}



*/