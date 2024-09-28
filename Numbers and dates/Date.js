const xmas95 = new Date("1995-12-25");

console.log(xmas95.getFullYear());
console.log(xmas95.getMonth());
console.log(xmas95.getDate());
console.log();

const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999);

endYear.setFullYear(today.getFullYear());

const msPerDay = 24 * 60 * 60 * 1000;
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft);

console.log(daysLeft);