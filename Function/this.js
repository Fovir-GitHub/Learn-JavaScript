function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 1);
}

const p = new Person();

for (let i = 0; i < 1000000; i++)
    console.log(p);