/*
 nanoid merupakan salah satu library yang populer untuk menangani id
 A tiny, secure, URL-friendly, unique string ID generator for JavaScript.
*/
const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {

 const { body, tags, title } = request.payload;

 const id = nanoid(16); //set id dari library nanoid
 const createdAt = new Date().toISOString(); //tanggal sekarang ke string
 const updatedAt = createdAt; //mengambil dari tanggal created_at

 const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };
  notes.push(newNote); //push ke new array file notes.js

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) { //jika bernilai true
    const response = h.response({ // h adalah toolkit dari hapi
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);

    /*
  	bisa menggunakan tanda * pada nilai origin untuk memperbolehkan data dikonsumsi oleh seluruh origin.
  	response.header('Access-Control-Allow-Origin', '*');

  	nilai header ‘Access-Control-Allow-Origin’ dengan nilai origin luar yang akan mengkonsumsi datanya (aplikasi client).
    */
    // response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
    return response; //kembalikan nilai
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });

  response.code(500);
  return response;

};

const getNoteHandler = (request, h) => {
  const response = h.response({
    status: 'success',
    data: {
      notes,
    },
  });
  response.code(201);

  return response;

};

const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        note,
      },
    });
    response.code(201);

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal di tampilkan',
  });

  response.code(500);
  return response;

};

const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex((note) => note.id === id);

  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();

  /*
   Spread operator pada kode di atas digunakan untuk mempertahankan nilai notes[index] yang tidak perlu diubah.
  */
  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbarui',
    });

    response.code(200);
    return response;

  }

  const response = h.response({
    status: 'fail',
    message: 'id note tidak ditemukan',
  });

  response.code(404);
  return response;

};
  

const deleteNoteByIdHandler = (request, h) => {

  const { id } = request.params;

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil dihapus',
    });
    response.code(200);
    return response;
  }


  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;

};


// eslint-disable-next-line object-curly-newline
module.exports = { addNoteHandler, getNoteHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler }; //export variable handler