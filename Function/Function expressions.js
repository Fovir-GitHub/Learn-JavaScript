const square = function(number) {
    return number * number;
};

console.log(square(4), '\n');

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3), '\n');

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++)
        result[i] = f(a[i]);

    return result;
}

const cube = function(x) {
    return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers));
console.log();