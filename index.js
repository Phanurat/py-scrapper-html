'use strict'

const Hapi = require('@hapi/hapi'); // ใช้ @hapi/hapi แทน hapi

const init = async () => {
    const server = Hapi.server({
        port: 8088,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/{appId}',
        handler: (req, h) => { // เปลี่ยน reply เป็น h
            return { message: 'Hello World' };
        }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();
