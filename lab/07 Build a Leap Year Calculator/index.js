function isLeapYear(year) {
  // Aturan tahun kabisat: habis dibagi 400 ATAU (habis dibagi 4 DAN tidak habis dibagi 100)
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// 2. Deklarasi variabel year di luar fungsi
const year = 2024;

// 6 & 7. Panggil fungsi, simpan ke variabel result, dan tampilkan ke console
const result = isLeapYear(year);
console.log(result);