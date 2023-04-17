function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error('Not enough money to withdraw'));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error('not enough money to buy ticket'));
      }

      resolve('ticket-1');
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error('no ticket'));
      }

      resolve('enjoy the movie');
    }, 1000);
  });
}

function watchMovie() {
  /*
  Dalam chaining Promise seperti yang ditunjukkan oleh kode di atas, penting untuk diingat bahwa setiap fungsi .then() harus mengembalikan Promise baru untuk melanjutkan proses chaining karena nilai yang dikembalikan tersebut akan dibawa ke fungsi .then() selanjutnya.
  */
  withDrawMoney(10)
    .then((money) => {
      return buyCinemaTicket(money);//mengembalikan promise baru
    })
    .then((ticket) => {
      return goInsideCinema(ticket);//mengembalikan promise baru
    })
    .then((result) => {
      console.log(result);//end dari promise berantai (hasil akhir)
    })
    .catch((error) => {
      console.log(error.message); //catch menangkap jika salah satu dari promise berantai menggalamai error
    });

}
/* 
kode tampak lebih bersih dan singkat dengan memanfaatkan arrow function implisit return. Namun, tips ini hanya dapat digunakan jika arrow function hanya memiliki satu baris kode saja.

function watchMovie() {
  withDrawMoney(10)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goInsideCinema(ticket))
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
}
*/

watchMovie();
