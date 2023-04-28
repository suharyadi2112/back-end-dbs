const { addBooksHandler, getBooksHandler, getBooksByIdHandler, editBooksByIdHandler, deleteBooksByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    // handler: (request, h) => {},//sebelumnya handler langsung disini
    handler: addBooksHandler, //mereferer handler.js

    // cors bisa di set dari HAPI framework
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  {
    method: 'GET',
    path: '/books',
    // handler: (request, h) => {},//sebelumnya handler langsung disini
    handler: getBooksHandler, //mereferer handler.js

    // cors bisa di set dari HAPI framework
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  {
    method: 'GET',
    path: '/books/{bookId}',
    // handler: (request, h) => {},//sebelumnya handler langsung disini
    handler: getBooksByIdHandler, //mereferer handler.js

    // cors bisa di set dari HAPI framework
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  {
    method: 'PUT',
    path: '/books/{bookId}',
    // handler: (request, h) => {},//sebelumnya handler langsung disini
    handler: editBooksByIdHandler, //mereferer handler.js

    // cors bisa di set dari HAPI framework
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    // handler: (request, h) => {},//sebelumnya handler langsung disini
    handler: deleteBooksByIdHandler, //mereferer handler.js

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