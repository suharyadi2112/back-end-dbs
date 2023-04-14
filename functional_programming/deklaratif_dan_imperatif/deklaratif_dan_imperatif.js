/*
Contoh kode merupakan salah satu gaya penulisan kode imperatif.

Fungsi deklaratif: Fungsi deklaratif adalah jenis fungsi yang didefinisikan menggunakan kata kunci "function" dan memiliki nama. 
*/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

/* output:
   [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/



/*
Contoh kode merupakan salah satu gaya penulisan kode deklaratif.

Fungsi impresif: Fungsi impresif adalah jenis fungsi yang biasanya tidak memiliki nilai pengembalian (return value) dan mengubah kondisi dari variabel atau objek di luar fungsi itu sendiri.
*/
const namess = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMarkk = names.map((namess) => `${namess}!`);

console.log(newNamesWithExcMarkk);

/* output:
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */ 