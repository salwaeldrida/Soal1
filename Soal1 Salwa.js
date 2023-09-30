const hitung = require('./hitung');

// Menggunakan modul untuk menghitung luas dan keliling persegi
const sisiPersegi = 5;
console.log(`Luas Persegi: ${hitung.LuasPersegi(sisiPersegi)}`);
console.log(`Keliling Persegi: ${hitung.KelilingPersegi(sisiPersegi)}`);

// Menggunakan modul untuk menghitung luas dan keliling persegi panjang
const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;
console.log(`Luas Persegi Panjang: ${hitung.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
console.log(`Keliling Persegi Panjang: ${hitung.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);