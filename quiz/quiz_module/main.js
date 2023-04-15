/**
 * TODO 1 (Tiger.js):
 * Ekspor nilai dari class Tiger
 *
 * TODO 2 (Wolf.js)
 * Ekspor nilai dari class Wolf
 *
 * TODO 3 (main.js)
 * Impor class Tiger dan Wolf
 *
 * TODO 4 (main.js)
 * Ekspor fungsi fight, myTiger, myWolf, dan result
 *
 */


// TODO 3
/*
versi old
const Tiger = require('./Tiger');
const Wolf = require('./Wolf');
*/
//versi es6
import Tiger from "./tiger.js";
import Wolf from "./wolf.js";

const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
      return tiger.growl();
    }
    if (wolf.strength > tiger.strength) {
      return wolf.howl();
    }
    return 'Harimau dan serigala sama-sama kuat!';
  };
  
  const myTiger = new Tiger();
  const myWolf = new Wolf();
  
  const result = fight(myTiger, myWolf);
  
  
  // TODO 4
  /*
  versi old
  module.exports = { fight, myTiger, myWolf, result};
  */
 //versi es6
  export default { fight, myTiger, myWolf, result};
  