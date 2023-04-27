const { addNoteHandler } = require('./handler');

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
];

// eslint-disable-next-line eol-last
module.exports = routes;