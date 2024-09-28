let x = 0,
    z = 0;

labelCacelLoops: while (true) {
    console.log("Outer loops:", x);
    x += 1;
    z = 1;
    while (true) {
        console.log("Inner loops:", z);
        z += 1;
        if (z === 10 && x === 10)
            break labelCacelLoops;
        else if (z === 10)
            break;
    }

    console.log("break the inner loop");
}

console.log("break the whole loop");