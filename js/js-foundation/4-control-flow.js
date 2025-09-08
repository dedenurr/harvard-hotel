// if - else
    let age = 20;
if(age >= 18) {
    console.log("dewasa");
} else {
    console.log("anak-anak");
}

// else if
let score = 85;
if(score >= 90) {
    console.log("A");
} else if (score >= 75) {
    console.log("B");
} else{
    console.log("C");
}


// switch
let day = "senin";
switch(day) {
    case "senin":
    console.log("awal minggu");
    break;
    case "jumat":
    console.log("akhir minggu");
    break;
    default:
    console.log("hari biasa");
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log("Perulangan ke-" + i);
}

// while loop
let count = 0;
while (count < 3) {
    console.log("Hitung: " + count);
    count++;
}


// do...while
let num = 0;
do {
    console.log("Nomor: " + num);
    num++;
} while (num < 2);


// for of
const hotels = ["Harvard", "Oxford", "Cambridge"];
for (const h of hotels) {
    console.log(h);
}

// for in
const hotel = {name: "Harvard", rooms:100, location: "USA"};
for (const key in hotel) {
    console.log(`${key}: ${hotel[key]}`);
}
