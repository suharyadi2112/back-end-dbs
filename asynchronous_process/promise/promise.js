function getUsers(isOffline) {
  // return a Promise object
  return new Promise((resolve, reject) => {
 
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
    
      if (isOffline) {
        reject(new Error('cannot retrieve users due offline'));
        return;
      }
  
      // Dalam kasus yang menyebabkan proses asynchronous error, kita bisa bawa error tersebut menggunakan reject "reject()"
      resolve(users); //sedangkan pada kasus proses asynchronous berjalan sukses, kita bisa bawa nilai tersebut dengan "resolve()"
    }, 3000);
  
  });
}


/* 
Fungsi yang mengembalikan objek Promise akan memiliki fungsi ".then" dan ".catch". Fungsi tersebut digunakan untuk mengambil nilai yang dibawa oleh "resolve" dan "reject".
*/
getUsers(true)
.then(users => console.log(users)) //success dari "resolve()"
.catch(err => console.log(err.message)); //dapakan error jika code bermasalah dari "reject()"