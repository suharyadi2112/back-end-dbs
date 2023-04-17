//Pola callback merupakan salah satu cara menangani proses asynchronous.


function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
 
    if (isOffline) {
      //callback parameter pertama, berisi error jika gagal, parameter kedua berisi data
      callback(new Error('cannot retrieve users due offline'), null); //new Error membuat error manual
      return;
    }
 
    callback(null, users);
  }, 3000);
}
 
function usersCallback(error, users) {
  if (error) {
    console.log('process failed:', error.message);
    return;
  }
  console.log('process success:', users);
}
 
getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
getUsers(true, usersCallback); // process failed: cannot retrieve users due offline


