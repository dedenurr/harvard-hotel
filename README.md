# 🏨 Harvard Hotel — Learning Path

Belajar **JavaScript → Express.js → TypeScript** dengan studi kasus **Hotel API**.  
Metode belajar pakai gaya **Harvard Case Method**:  
1. **Warmup**: pahami konsep fundamental dengan contoh sederhana.  
2. **Case Study**: langsung praktek membangun aplikasi "Hotel API" step by step.  

---

## 📂 Struktur Folder + Setup

```txt
harvard-hotel/
│
├─ 📁 js/
│  ├─ 📁 js-foundation/       # Fundamental JS
│  └─ 📁 hotel-js/            # Studi kasus hotel pakai JS vanilla
│
├─ 📁 express/
│  ├─ 📁 express-foundation/  # Dasar Express
│  └─ 📁 express-hotel/       # Studi kasus hotel pakai Express
│
├─ 📁 ts/
│  ├─ 📁 ts-foundation/       # Fundamental TypeScript
│  └─ 📁 ts-hotel/            # Studi kasus hotel pakai TS + Express
│
└─ README.md

# 1. Install dependencies (sekali saja di root)
cd harvard-hotel
npm init -y
npm install express typescript ts-node @types/express

# 2. Menjalankan Project

## JavaScript (Vanilla)
node js/hotel-js/index.js

## Express
node express/express-hotel/index.js

## TypeScript + Express
npx ts-node ts/ts-hotel/index.ts
