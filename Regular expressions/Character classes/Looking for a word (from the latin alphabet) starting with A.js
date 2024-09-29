const aliceExcerpt =
    "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";

const regexpWordStartingWithA = /\b[aA]\w+/g;
console.table(aliceExcerpt.match(regexpWordStartingWithA));