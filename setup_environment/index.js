/*console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");*/

//import jika hanya 1 variable
// const coffeeStock = require('./state');

// import untuk lebih dari 1 variable //destructuring object untuk mendapatkan nilai yang di-import
// const {coffeeStock, isCoffeeMachineReady} = require('./state');// nama variable harus sama saat diexport
 
// console.log(coffeeStock)
// console.log(isCoffeeMachineReady)
 

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//       console.log("Kopi berhasil dibuat!");
//     } else {
//       console.log("Biji kopi habis!");
//     }
//   }
   
// makeCoffee("robusta", 80);
/* output
Kopi berhasil dibuat!
*/

// versi es6 module, ( perlu di tambahkan "type": "module" di package json)
import coffeeStockNew from "./state.js";
console.log(coffeeStockNew)