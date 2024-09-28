const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr)
    console.log(i);

console.log();

for (const i of arr)
    console.log(i);

console.log();

const obj = { foo: 1, bar: 2 };
for (const [key, val] of Object.entries(obj))
    console.log(key, val);