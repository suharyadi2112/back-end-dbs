//variable object
// const coffeeStock = {
//     arabica: 100,
//     robusta: 150,
//     liberica: 200
// }
// //variable biasa
// const isCoffeeMachineReady = true;


// //export single variable
// // module.exports = coffeeStock;

// //export multiple variable menggunakan object literals ({ }).
// module.exports = {coffeeStock, isCoffeeMachineReady}; 

// console.log(module) //melihat detail module didalam export
 
// versi es6 module, ( perlu di tambahkan "type": "module" di package json)
const coffeeStockNew = {
    arabicaNew: 100,
    robustaNew: 150,
    liberica: 200
  };
   
export default coffeeStockNew;