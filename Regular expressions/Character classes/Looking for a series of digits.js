const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigit = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigit));