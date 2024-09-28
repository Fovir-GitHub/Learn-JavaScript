const regex = /First(?= test)/g;

console.log("First test".match(regex));
console.log("First peach".match(regex));
console.log("This is a First test in a year.".match(regex));
console.log("This is a First peach in a month.".match(regex));