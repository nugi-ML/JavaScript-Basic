function maskEmail(email) {
  // 1. Pisahkan username dan domain berdasarkan karakter '@'
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  // 2. Ambil karakter pertama dan terakhir dari username
  const firstChar = username[0];
  const lastChar = username[username.length - 1];

  // 3. Buat deretan asteris (*) sebanyak karakter di antara huruf pertama dan terakhir
  const asterisks = "*".repeat(username.length - 2);

  // 4. Gabungkan dan kembalikan email yang sudah disamarkan
  return firstChar + asterisks + lastChar + domain;
}

// Deklarasi variabel email di luar fungsi
const email = "apple.pie@example.com";

// Panggil fungsi dan cetak hasilnya ke konsol
console.log(maskEmail(email));