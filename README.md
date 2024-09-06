# Random Code Matcher

## Deskripsi

Script ini adalah program Node.js yang meminta pengguna untuk memasukkan sebuah kode numerik antara 1 dan 100. Program kemudian menghasilkan angka acak dalam rentang yang sama hingga angka acak yang dihasilkan cocok dengan kode yang dimasukkan oleh pengguna. Ketika kecocokan ditemukan, program akan menampilkan pesan yang memberitahukan bahwa kode yang dimasukkan cocok.

## Prasyarat

- Node.js terinstal di sistem Anda.

## Instalasi

1. Pastikan Node.js terinstal. Anda bisa mengunduhnya dari [nodejs.org](https://nodejs.org/).

2. Salin kode ke dalam file, misalnya `randomCodeMatcher.js`.

3. Buka terminal atau command prompt dan arahkan ke direktori tempat file disimpan.

## Cara Menjalankan

1. Jalankan file dengan perintah:
    ```sh
    node randomCodeMatcher.js
    ```

2. Masukkan kode numerik antara 1 dan 100 saat diminta oleh program.

## Penjelasan Kode

1. **Membaca Input:**
   - Program menggunakan modul `readline` untuk membaca input dari pengguna.
   - Fungsi `rl.question` menampilkan prompt dan menunggu input dari pengguna.

2. **Validasi Input:**
   - Input pengguna dikonversi menjadi integer dengan `parseInt`.
   - Jika input tidak valid (bukan angka atau di luar rentang 1-100), program akan menampilkan pesan kesalahan dan keluar.

3. **Mencocokkan Kode:**
   - Fungsi `getRandomNumber` menghasilkan angka acak antara `min` dan `max`.
   - Program menghasilkan angka acak dalam loop sampai angka acak tersebut cocok dengan kode yang dimasukkan oleh pengguna.
   - Ketika kecocokan ditemukan, program menampilkan pesan keberhasilan.

4. **Menutup Interface:**
   - Setelah kecocokan ditemukan atau jika terjadi kesalahan, interface readline ditutup dengan `rl.close()`.

## Contoh Output

```plaintext
Masukkan kode Anda (1-100): 42
Angka acak yang dihasilkan: 57
Angka acak yang dihasilkan: 42
Kecocokan ditemukan! Kode Anda adalah 42
```

## Catatan

- Program ini akan terus menghasilkan angka acak hingga menemukan kecocokan, sehingga durasinya bisa bervariasi.
