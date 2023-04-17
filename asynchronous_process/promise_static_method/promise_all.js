/*
Promise.all() digunakan untuk mengeksekusi banyak Promise secara paralel. Method ini menerima sebuah array yang berisi beberapa Promise sebagai argumen. 
*/

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values)); // [1, 2, 3] setelah 3 detik

/*
Jika terdapat rejection pada salah satu Promise, Promise.all() akan langsung menghasilkan rejected tanpa mengembalikan nilai Promise lain yang statusnya fulfilled.
*/
const promise11 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise22 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
const promise33 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise11, promise22, promise33])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message)); // ups

