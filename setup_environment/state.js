//variable object
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}
//variable biasa
const isCoffeeMachineReady = true;


//export single variable
// module.exports = coffeeStock;

//export multiple variable menggunakan object literals ({ }).
module.exports = {coffeeStock, isCoffeeMachineReady}; 

// console.log(module) //melihat detail module didalam export