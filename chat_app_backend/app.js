const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const port = process.env.port || 80;
const server = app.listen(port, () => {
    console.log("server is started on", port)
});
const io = require('socket.io')(server);
io.on('connection', (Socket) => {
    console.log("sonnected succesfully", Socket.id);
});