// var = function-scoped
// let = block-scoped, bisa diubah nilainya
// const = block-scoped, tidak bisa diubah nilainya

var globalVar = "saya var"; 
let blockVar = "saya let";
const constantVar = "saya const";

function testScope() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
        console.log("Inside block:", x, y, z);
    }
    console.log("var masih ada:", x);
   // console.log(y); // ❌ error
}

testScope()
