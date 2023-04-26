/*
pakai array untuk menetapkan lebih dari satu route configuration dalam method server.route()
*/
const routes = [
    {
        method: 'GET',
        path: '/',
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

];


module.exports = routes;