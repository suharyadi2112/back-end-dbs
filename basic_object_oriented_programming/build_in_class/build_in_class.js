/*

JavaScript memiliki beberapa kelas bawaan (built-in classes) yang telah disediakan secara default oleh bahasa JavaScript itu sendiri

*/
class UniqueArray extends Array { //sub class dari class bawaan javascript
    constructor(...args) {
      // make sure args is unique before passing it to super
    //   Array filter() adalah salah satu metode dalam JavaScript untuk memfilter elemen-elemen tertentu dari sebuah array.
    //  indexOf() adalah sebuah metode pada objek Array di JavaScript yang digunakan untuk mencari indeks dari sebuah elemen pada array.
      const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);
   
      super(...uniqueValue);
    }
   
    push(item) {
      // make sure only unique item is added
      if (!this.includes(item)) {
        super.push(item);
      }
    }
  }
   
  const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
  console.log(someArray); // ['a', 'b', 'c']
  someArray.push('d');
  console.log(someArray); // ['a', 'b', 'c', 'd']
  someArray.push('a');
  console.log(someArray); // ['a', 'b', 'c', 'd']