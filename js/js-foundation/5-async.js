// promise
function fetchHotel(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) resolve({id: 1, name: "Harvard Hotel"});
            else reject("Hotel tidak ditemukan");
            }, 1000);
    });
}


// async/await
async function getHotel(id) {
  try {
    const hotel = await fetchHotel(id);
    console.log("Ditemukan:", hotel);
  } catch (err) {
    console.error("Error:", err);
  }
}

getHotel(1);
getHotel(2);
