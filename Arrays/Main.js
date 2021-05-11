// .split is used to split a string into an array of substrings and returns the new array.
// must use .split(' ') a space to seperate the string by word.
// Otherwise use .split('') to seperate each character. This includes spaces as characters.
let stp = "How are you doing today?";
let res = stp.split("");
console.log('split: ', res)

// Use Regex to delete whitspace
let nospaces = stp.replace(/\s/g,'');
let turnToArray = nospaces.split('');
console.log('turned to array: ', turnToArray)

// Reverse Array
let reversed = turnToArray.reverse();
console.log('Reversed: ', reversed);

// Add to Array
// .push adds strings to arrays
res.push('world');
console.log('Here is res + world: ', res)

// remove items from array
// .pop removes the last element in an array
res.pop()
console.log(res)