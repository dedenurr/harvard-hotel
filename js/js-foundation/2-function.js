// function biasa
function greet (name) {
    return `Hello ${name}`
}
console.log(greet('Budi'));


// function expression
const greetExpr = function(name) {
    return `Hello ${name}`
}
console.log(greetExpr('Ani'));


// arrow function
const greetArrow = (name) => {
    return `Hello ${name}`
}
console.log(greetArrow('Susi'));


// arrow function implicit return
const greetImplicit = name => `Hello ${name}`
console.log(greetImplicit('Joko'));


// arrow function tanpa parameter
const greetNoParam = () => 'Hello World'
console.log(greetNoParam());


// arrow function dengan lebih dari satu parameter
const add = (a, b) => a + b;
console.log(add(2, 3));


// arrow function dengan lebih dari satu baris kode
const multiply = (a, b) => {
    const result = a * b;
    return result;
}
console.log(multiply(2, 3));


// default parameter
function multiplyDefault(a, b = 1 ) {
    return a * b;
}
console.log(multiplyDefault(5)); 


// rest parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); 


// high-order function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(3, (i) => console.log(`Perulangan ke ${i}`));       
