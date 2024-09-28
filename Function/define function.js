function myFunc(theObject) {
    theObject.make = "Toyota";
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998
};

console.log(mycar.make);
myFunc(mycar);
console.log(mycar.make, '\n');

function modifyArray(theArr) {
    theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]);
modifyArray(arr);
console.log(arr[0]);