
/*
 *
 * 
 *
 * 
 *Sintaks JavaScript modern (ES6) menawarkan cara membuat constructor function dengan menggunakan keyword class.
 *
 *
 *
 *
 */

class Car {
  constructor(brand, color, maxSpeed, chassisNumber) { //menggunakan constructor
    this.brand = brand; //property
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;

    // Set a random chassis number (set nilai default property)
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
  
  //chill method didalam class
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn() {
    console.log(`${this.brand} ${this.color} is turning`);
  }

  checkChess() { //panggil default nilai property
      console.log(`${this.chassisNumber} cek default nilai property`)
  }
}
 
// Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
 
console.log(car1);
console.log(car2);
console.log(car3);
 
car1.drive();
car2.drive();
car3.drive();

/* tampilkan checkChess method dengan property default*/
car3.checkChess();
 
/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/