/*
pakai array untuk menetapkan lebih dari satu route configuration dalam method server.route()
*/
const routes = [
    {
        method: 'GET',
        path: '/home',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
    },

    /*
    Anda bisa lihat beberapa properti method memiliki nilai ‘*’, itu artinya route dapat diakses menggunakan seluruh method yang ada pada HTTP. 
    */
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },

    /*
    nilai ‘/{any*}’ pada route paling akhir, ini berfungsi untuk menangani permintaan masuk pada path yang belum Anda tentukan. Ini merupakan salah satu teknik dalam menetapkan routing yang dinamis menggunakan Hapi.
    */
    {
        method: '*',
        path: '/{any*}', //sebelum menggunakan any error akan terlihat seperti ini "{"statusCode":404,"error":"Not Found","message":"Not Found"}"
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },

    /*
    Path parameter atau parameter jalur adalah cara untuk mengirim data dari sebuah URL ke sebuah aplikasi web atau API.
    */
    {
        method: 'GET',
        path: '/hello/{user}', //{user} adalah parameter
        handler: function (request, h) {
            const { user } = request.params
            return `Hello ${user}! ini bro`;
        }
    },

    /*
    tanda ? path parameter bersifat opsional, jika tidak di isi parameter makan akan default menjadi stanger, yang sudah di tetapkan 
    */
    {
        method: 'GET',
        path: '/users/{username?}', 
        handler: (request, h) => {
            const { username = 'stranger' } = request.params;    
            return `Hello, ${username}!`;
        },
    },
    /*
    query parameter, teknik ini umum digunakan pada permintaan yang membutuhkan kueri dari client, contohnya seperti pencarian dan filter data. 

    curl -X GET http://localhost:5000?name=harry^&location=bali  (diwindows tambahkan ^ di & pemisah parameter)
    */
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const { name, location } = request.query;
            return `Hello, ${name} from ${location}`;
        },
    },

    /*
    latihan path parameter dan query dijadikan 1 kesatuan
    */
    {
        method: 'GET',
        path: '/latihan/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params; // set default jika param "name" tidak ada
            const { lang } = request.query;
            
            if(lang === 'id') { //jika query perameter ada masuk kesini
                return `Hai, ${name}!, ${lang}`;
            }

            return `Hello, ${name}! , ${lang}`; //jika tidak ditemukan query parameter
        },
    },

];


module.exports = routes;