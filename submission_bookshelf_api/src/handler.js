/*
 nanoid merupakan salah satu library yang populer untuk menangani id
 A tiny, secure, URL-friendly, unique string ID generator for JavaScript.
*/
const { nanoid } = require('nanoid');
const books_shelf = require('./books_shelf');

const addBooksHandler = (request, h) => {

 const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

 const id = nanoid(16); //set id dari library nanoid
 const insertedAt = new Date().toISOString(); //tanggal sekarang ke string
 const updatedAt = insertedAt; //mengambil dari tanggal created_at

  //cek readpage jika lebih besar dari page count
  if (readPage > pageCount) { 
    const response = h.response({ // h adalah toolkit dari hapi
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);

    return response;
  } 

  //cek jika nama buku kosong
  if (name === undefined) {
    const response = h.response({ // h adalah toolkit dari hapi
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);

    return response;
  }

  //apakah buku telah selesai dibaca atau belum
  let finished = false;
  if (pageCount === readPage) { 
    finished = true;
  }

  const newBooks = {
    id,
    name,
    publisher,
    year,
    author,
    summary,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt, updatedAt,
  };
  books_shelf.push(newBooks); //push ke new array file notes.js

  //jika bernilai true, yang mana id sebelumnya disimpan ada
  const isSuccess = books_shelf.filter((note) => note.id === id).length > 0;
  if (isSuccess) { 
    const response = h.response({ // h adalah toolkit dari hapi
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response; //kembalikan nilai
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan',
  });

  response.code(500);
  return response;

};

const getBooksHandler = (request, h) => {
  //buat array baru untuk syarat yang ingin di tampilkan
  const books = books_shelf.map(book => {
    return {
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    };
  });

  //balikan data
  const response = h.response({
    status: 'success',
    data: {
      books,
    },
  });
  response.code(200);

  return response;
};

const getBooksByIdHandler = (request, h) => {
  const { bookId } = request.params;//parameter bookId

  //filter / cari data berdasarkan id
  const book = books_shelf.filter((n) => n.id === bookId)[0];

  if (book !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        book,
      },
    });
    response.code(200);

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });

  response.code(404);
  return response;

};

const editBooksByIdHandler = (request, h) => {
  const { bookId } = request.params;

  const index = books_shelf.findIndex((bookParam) => bookParam.id === bookId);
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
  const updatedAt = new Date().toISOString();

  //cek jika nama buku kosong
  if (name === undefined) {
    const response = h.response({ // h adalah toolkit dari hapi
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
    response.code(400);

    return response;
  }

  //cek readpage jika lebih besar dari page count
  if (readPage > pageCount) { 
    const response = h.response({ // h adalah toolkit dari hapi
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);

    return response;
  } 

  /*
   Spread operator pada kode di atas digunakan untuk mempertahankan nilai books[index] yang tidak perlu diubah.
  */
  if (index !== -1) {
    books_shelf[index] = {
      ...books_shelf[index],
      name,
      publisher,
      year,
      author,
      summary,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });

    response.code(200);
    return response;

  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });

  response.code(404);
  return response;

};
  

const deleteBooksByIdHandler = (request, h) => {

  const { id } = request.params;

  const index = books_shelf.findIndex((bookDel) => bookDel.id === id);

  if (index !== -1) {
    books_shelf.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }


  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;

};


// eslint-disable-next-line object-curly-newline
module.exports = { addBooksHandler, getBooksHandler, getBooksByIdHandler, editBooksByIdHandler, deleteBooksByIdHandler }; //export variable handler