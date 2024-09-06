const readline = require("readline");

// Fungsi untuk menghasilkan angka acak antara min dan max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan kode Anda (1-100): ", (input) => {
  const userCode = parseInt(input, 10);

  if (isNaN(userCode) || userCode < 1 || userCode > 100) {
    console.log(
      "Kode yang dimasukkan tidak valid. Harap masukkan angka antara 1 dan 100."
    );
    rl.close();
    return;
  }

  // Loop sampai ditemukan kecocokan
  let matchFound = false;
  while (!matchFound) {
    const randomNumber = getRandomNumber(1, 100);
    console.log("Angka acak yang dihasilkan: " + randomNumber);

    if (randomNumber === userCode) {
      console.log("Kecocokan ditemukan! Kode Anda adalah " + userCode);
      matchFound = true;
    }
  }

  rl.close();
});
