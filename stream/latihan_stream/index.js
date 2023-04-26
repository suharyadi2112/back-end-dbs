const fs = require('fs');
 
const readableStream = fs.createReadStream('./input.txt', { //lokasi file
    /*
    "highWaterMark" Ukuran buffer pada Readable Stream adalah ukuran maksimum data yang dapat disimpan pada buffer internal stream sebelum data tersebut dibaca dan diproses oleh pengguna stream
    
    Buffer di dalam stream adalah memori sementara yang digunakan oleh stream dalam menyimpan data hingga data tersebut dikonsumsi.

    */
    highWaterMark: 15
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});

/*
 "readableStream.on('data', (chunk) => {}" adalah cara untuk menangani data yang dikirim melalui Readable Stream. Ketika ada data yang tersedia di Readable Stream, event data akan dipicu dan fungsi yang diberikan pada argumen kedua on() akan dijalankan dengan argumen chunk yang berisi data yang tersedia.

 "on('data') akan dipicu dan fungsi yang diberikan pada argumen kedua akan dijalankan dengan argumen chunk yang berisi data yang tersedia."
*/

const writableStream = fs.createWriteStream('output.txt'); //lokasi file yang ingin di timpa

readableStream.on('data', (chunk) => {
  writableStream.write(`${chunk}\n`);
});

// writableStream.end();


