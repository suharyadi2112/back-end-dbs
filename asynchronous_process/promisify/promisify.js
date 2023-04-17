
/*
Node.js menawarkan solusi, yaitu menggunakan fungsi promisify dari core module util. Dengannya, kita bisa secara mudah membuat fungsi baru yang mengimplementasikan Promise berdasarkan fungsi callback-based.
*/

// mengubah fungsi asynchronous callback-based menjadi Promise-based dengan mudah, ia bernama "promisify".
const { promisify } = require('util');
 
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
     if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
 
    callback(null, users);
  }, 3000);
}
 
/*
*get user dengan callback biasa
*/
function usersCallback(error, users) {
  if (error) {
    console.log('process failed:', error.message);
    return;
  }
  console.log('process success:', users);
}

getUsers(false, usersCallback);
/*
------------------
*/

/*
*menggunakan promise dalam melakukan get
*/

// create a Promise version of getUsers
const getUsersPromise = promisify(getUsers);

getUsersPromise(true)
.then(users => console.log(users)) //success dari "resolve()"
.catch(err => console.log(err.message)); //dapakan error jika code bermasalah dari "reject()"
