// the following value are all false
// const b = false;
// const b = undefined;
// const b = null;
// const b = 0;
// const b = NaN;
const b = "";

if (b)
    console.log("b is true");
else
    console.log("b is false");

const a = new Boolean(false);
if (a)
    console.log("a is true");
else
    console.log("a is false");