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
  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) { //jika bernilai true
    const response = h.response({
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

module.exports = { addNoteHandler };