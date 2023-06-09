const { addNoteHandler, getNoteHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    // handler: (request, h) => {},//sebelumnya handler langsung disini
    handler: addNoteHandler, //mereferer handler.js

    // cors bisa di set dari HAPI framework
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  {
    method: 'GET',
    path: '/notes',
    // handler: (request, h) => {},//sebelumnya handler langsung disini
    handler: getNoteHandler, //mereferer handler.js

    // cors bisa di set dari HAPI framework
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    // handler: (request, h) => {},//sebelumnya handler langsung disini
    handler: getNoteByIdHandler, //mereferer handler.js

    // cors bisa di set dari HAPI framework
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    // handler: (request, h) => {},//sebelumnya handler langsung disini
    handler: editNoteByIdHandler, //mereferer handler.js

    // cors bisa di set dari HAPI framework
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  {
    method: 'DELETE',
    path: '/notes/{id}',
    // handler: (request, h) => {},//sebelumnya handler langsung disini
    handler: deleteNoteByIdHandler, //mereferer handler.js

    // cors bisa di set dari HAPI framework
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
];

// eslint-disable-next-line eol-last
module.exports = routes;