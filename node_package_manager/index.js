/*
contoh penggunaan package "Lodash"
Lodash adalah sebuah pustaka utilitas JavaScript open-source yang menyediakan banyak fungsi dan utilitas untuk memanipulasi dan memanipulasi data pada objek, array, string, dan tipe data lainnya dalam JavaScript
*/
import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
console.log(sum);
 
/* output
10
*/

//uninstall package 
/*
Jika package terdapat pada devDependencies, kita cukup menambahkan --save-dev di akhir perintahnya.
*/
// npm uninstall <package-name> --save-dev

/*
Jika package berada pada objek dependencies, kita dapat menghapusnya menggunakan perintah:
*/
//npm uninstall <package-name>