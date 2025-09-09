// function : parameter & return type
function add(a: number, b: number): number {
    return a + b
}

// arrow function + literal union
const formatPrice = (value: number, currency: "IDR" | "USD" | "EUR" = "IDR"): string =>
    new Intl.NumberFormat(
        currency === "IDR" ? "id-ID"
            : currency === "EUR" ? "de-DE"
                : "en-US",
        {
            style: "currency",
            currency
        }).format(value);

// generics function
function pick<T>(arr: T[], index: number): T | undefined {
    return arr[index];
}

// generic constraints
function getById<T extends { id: string }>(list: T[], id: string): T | undefined {
    return list.find(item => item.id === id);
}

//overloads
function toArray(x: string): string[];
function toArray(x: number): number[];
function toArray(x: string | number) {
    return typeof x === "string" ? x.split("") : [x];
}

//demo
console.log(`penjumlahan ${add(3, 5)}`);
console.log("Format Price:", formatPrice(150_000, "EUR"));
console.log("pick:", pick(["a", 2, "c"], 5));
console.log(
    "getById:",
    getById([{ id: "a", v: 1 }, { id: "b", v: 2 }], "b")
);
console.log("toArray(str):", toArray("OK"));
console.log("toArray(num):", toArray(7));

