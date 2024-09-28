const text = "A quick fox";

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));

const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));