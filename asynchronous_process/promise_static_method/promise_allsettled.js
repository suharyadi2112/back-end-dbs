/*
Promise.allSettled() bekerja mirip seperti Promise.all(). Namun, Promise.allSettled() mengembalikan seluruh hasil dari Promise yang dieksekusi dalam bentuk array of object dengan format berikut.
*/

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1, promise2, promise3])
 .then((results) => console.log(results));
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik