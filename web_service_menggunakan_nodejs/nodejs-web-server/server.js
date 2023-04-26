/*
HTTP (Hypertext Transfer Protocol) Server is a software program that runs on a computer and listens to incoming requests from clients, such as web browsers, and provides responses in the form of web pages, images, or other resources.
*/
const http = require('http');
 
const requestListener = (request, response) => {

    /*
    sub bab Response Header
	Method setHeader() menerima dua parameter, yakni nama properti dan nilai untuk headernya.
    
	Karena kita ingin mengubah Content-Type menjadi JSON, maka ubah text/html menjadi application/json. 
    */
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    /*************************/
 	
 	/****************************
 	sub bab Response Status
 	*/
    response.statusCode = 200;
    /***************************/

    /*******************************************
    Method/Verb Request

	Properti method bernilai tipe method dalam bentuk string. Nilainya dapat berupa “GET”, “POST”, “PUT”, atau method lainnya sesuai dengan yang client gunakan ketika melakukan permintaan.
    */
    const { url, method } = request;

    //sub bab "Routing Request"
    if(url === '/') { //kondisi url 

	    if(method === 'GET') {
	        response.end('<h1>INI GET!</h1>');
	    }else{

	    	/****************************
		 	sub bab Response Status
		 	*/
		    response.statusCode = 404;
		    /***************************/
	    	response.end('<h1>TIDAK DITEMUKAN BRODI!</h1>');
	    }
		

	} else if(url === '/about') { //jika slash /about masuk sini
	 
	    if(method === 'POST') {
	        // response.end('<h1>INI POST!</h1>');
			/*
			sub bab "body request"
			*/
			let body = [];

			request.on('data', (chunk) => {
			  body.push(chunk);
			});

			request.on('end', () => {
			  body = Buffer.concat(body).toString();
			  const { name } = JSON.parse(body); //ubah json "{"name": "Dicoding"}" menjadi name yang harapkan
			  response.end(`<h1>Hai, ${name}!</h1>`);
			});
		    
	    }
 
	    if(method === 'PUT') {
	        response.end('<h1>INI PUT!</h1>');
	    }
	 
	    if(method === 'DELETE') {
	        response.end('<h1>INI DELETE!</h1>');
	    }
	}else{

		/****************************
	 	sub bab Response Status
	 	*/
	    response.statusCode = 404;
	    /***************************/
        response.end(JSON.stringify({
            message: `Halaman tidak dapat diakses menggunakan ${method}, request` //response dengan format json
        }));
	
	}
    /******************************************/

};
 
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
/*
Method listen() dapat menerima 4 parameter, berikut detailnya:

port (number) : jalur yang digunakan untuk mengakses HTTP server.
hostname (string) : nama domain yang digunakan oleh HTTP server.
backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).
*/

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});