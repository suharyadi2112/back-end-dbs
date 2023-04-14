class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }
  
  //Properti Getter dan Setter (accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter.)
  get chassisNumber() { 
    return this._chassisNumber;
  }
 
  set chassisNumber(chassisNumber) { //batasi akses untuk set nilai properti (protek perubahan nilai)
    console.log('you are not allowed to change the chassis number');
  }

   _generateChassisNumber() { //contoh method didalam class
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
 
const car = new Car('BMW', 'red', 200);
console.log(car.chassisNumber); //akses atau get property chessisNumber
car.chassisNumber = 'BMW-1'; //coba untuk merubah nilai dari property chessisNumber
console.log(car.chassisNumber); //hasil tidak bisa berubah dikarena accessor property

console.log(car._generateChassisNumber())//akses method didalam class
 
/* Output:
BMW-232
you are not allowed to change the chassis number
BMW-232
*/