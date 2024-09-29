const fruitsWithDescription = ["Red apple",
    "Orange orange", "Green Avocado"
];

const enEdSelection = fruitsWithDescription.filter((descr) =>
    /(en|ed)\b/.test(descr));

console.log(enEdSelection);