# 🏨 Harvard Hotel — Learning Path

Belajar **JavaScript → Express.js → TypeScript** dengan studi kasus **Hotel API**.  
Metode belajar pakai gaya **Harvard Case Method**:  
1. **Warmup**: pahami konsep fundamental dengan contoh sederhana.  
2. **Case Study**: langsung praktek membangun aplikasi "Hotel API" step by step.  

---

## 📂 Struktur Folder

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


---

## ⚙️ Setup

Hanya install dependencies sekali di root (monorepo).  
```bash
cd harvard-hotel
npm init -y
npm install express typescript ts-node @types/express


```Menjalankan Project
node js/hotel-js/index.js
node express/express-hotel/index.js
npx ts-node ts/ts-hotel/index.ts


