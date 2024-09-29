const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++)
    console.log(colors[i]);

console.log();
colors.forEach((color) => console.log(color));
console.log();

const sparseArray = ["first", "second", , "fourth"];
sparseArray.forEach((element) => { console.log(element); });

if (sparseArray[2] === undefined)
    console.log("sparseArray[2] is undefined");

const nonsparseArray = ["first", "second", undefined, "fourth"];
nonsparseArray.forEach((element) => console.log(element));