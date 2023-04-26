'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./route');

const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    // import route dari file route.js
    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();