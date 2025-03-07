/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/
// Count vowels
let hasThreeVowels = function(string) {
    // Your code here
    let counter = 0;
    let vowels = 'aeiou';
    let seen = '';

    string = string.split('');
    string.forEach(letter => {
        if (vowels.includes(letter) && !seen.includes(letter)) {
            counter++;
            seen += letter;
        }
    })

    if (counter >= 3) {
        return true;
    }

    return false;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
