// primitives

let title: string = "harvard hotel";
let rooms: number = 120;
let isOpen: boolean = true;


// array & tuple
const tags: string[] = ["city", "business"];
const capacities: Array<number> = [1, 2, 3, 4];
type Coordinates = [number, number];
const coords: Coordinates = [-6.200000, 106.816666];

// Type Alias (contoh pola ID)
type HotelId = `hotel_${number}`;
let hid: HotelId = "hotel_1";

// function dengan return type
function genId(prefix: string, n: number): string {
    return `${prefix}_${n}`;
}

console.log({ title, rooms, isOpen, tags, capacities, coords, hid });
console.log("genId:", genId("hotel", 2));


type Currency = "IDR" | "USD" | "EUR";
let defaultCurrency: Currency = "IDR";

console.log("Default Currency: ", defaultCurrency);
