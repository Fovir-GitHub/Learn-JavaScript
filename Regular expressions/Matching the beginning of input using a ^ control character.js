const fruits = ["Apple", "Watermelon", "Orange", "Avocado",
    "Strawberry"
];

const fruitsStartsWithA = fruits.filter((fruits) => /^A/.test(fruits));
console.log(fruitsStartsWithA);

const fruitsStartsWithNotA = fruits.filter((fruits) =>
    /^[^A]/.test(fruits));

console.log(fruitsStartsWithNotA);