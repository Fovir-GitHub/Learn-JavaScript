const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
    fruit.replace(/(?<=ripe )orange/, "apple"));

console.log(newFruits);