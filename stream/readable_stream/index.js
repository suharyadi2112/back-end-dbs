const fs = require('fs');
 
const readableStream = fs.createReadStream('./article.txt', { //lokasi file
    /*
    "highWaterMark" Ukuran buffer pada Readable Stream adalah ukuran maksimum data yang dapat disimpan pada buffer internal stream sebelum data tersebut dibaca dan diproses oleh pengguna stream
    
    Buffer di dalam stream adalah memori sementara yang digunakan oleh stream dalam menyimpan data hingga data tersebut dikonsumsi.

    */
    highWaterMark: 10
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