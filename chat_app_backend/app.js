// Import the Express and HTTP modules.
const express = require('express');
const http = require("http");

// Import the Socket.io module.
const { Socket } = require('socket.io');

// Create an Express app.
const app = express();

// Import the Path module.
const path = require('path');

// Set the port number.
const port = process.env.port || 80;

// Serve static files from the `public` directory.
app.use(express.static(path.resolve("./public")));

// Create a Node.js HTTP server.
const server = app.listen(port, () => {
    console.log("server is started on", port);
});

// Define a route to serve the index.html file.
app.get('/', (req, res) => {
    return res.sendFile("./public/index.html");
});

// Create a Socket.io server.
const io = require('socket.io')(server);

// Listen for the `connection` event.
io.on('connection', (socket) => {
    socket.on('message', (message) => {
        io.emit('message',message);
        console.log("message is", message);
    })
    console.log("connected successfully", socket.id);
});
