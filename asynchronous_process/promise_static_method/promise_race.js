/*
Promise.race() digunakan untuk mengeksekusi beberapa Promise secara paralel seperti Promise.all(). Namun, ia hanya mengembalikan nilai Promise yang paling cepat menyelesaikan eksekusinya.
*/
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 10000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value)); // 2 setelah 1 detik



/*
Jika proses rejection merupakan proses yang paling cepat, ia akan mengembalikan rejection tersebut. Jika rejection tidak kalah cepat dengan proses lain yang nilainya fulfilled, ia akan tetap mengembalikan nilai resolved tercepat.
*/
const promise11 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 10000));
const promise22 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise33 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Promise.race([promise11, promise22, promise33])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // Ups