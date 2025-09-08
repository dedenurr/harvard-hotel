// array
const numbers = [1, 2, 3, 4, 5];

// Map -> menghasilkan array baru
const squared = numbers.map(n => n * n);

// Filter -> saring nilai berdasarkan kondisi
const even = numbers.filter(n => n % 2 === 0);

// reuduce -> mengakumulasi nilai
const sum = numbers.reduce((acc , n) => acc + n, 0);

// forEach -> iterasi array
const forEachResult = [];
numbers.forEach(n => forEachResult.push(n * 2));

// find -> mencari elemen berdasarkan kondisi
const found = numbers.find(n => n > 3);

// some -> cek apakah ada elemen yang memenuhi kondisi
const hasEven = numbers.some(n => n % 2 === 0);

// every -> cek apakah semua elemen memenuhi kondisi
const allPositive = numbers.every(n => n > 0);

console.log('Original:', numbers);
console.log('Squared:', squared);
console.log('Even:', even);
console.log('Sum:', sum);
console.log('forEachResult:', forEachResult);
console.log('Found > 3:', found);
console.log('Has Even:', hasEven);
console.log('All Positive:', allPositive);

// object
const hotel ={
    id: 1,
    name: "Harvard Hotel",
    location: "Boston",
    rooms: 100,
}

// destructuring
const {name, location} = hotel;
console.log(`Hotel ${name} berlokasi di ${location}`);

// spread operator
const newHotel = {...hotel, rooms: 130};
console.log('Updated Hotel:', newHotel);
console.log('data asli tetap', hotel.rooms);

