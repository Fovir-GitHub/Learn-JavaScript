const aliceExcerpt =
    "There was a long silence after this, and Alice could only hear whispers now and then.";
const regexpVowels = /[aeiou]/gi;

console.log("Number of vowels:",
    aliceExcerpt.match(regexpVowels).length
);