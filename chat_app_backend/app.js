const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors"); // Import the CORS middleware.

const app = express();
const port = process.env.PORT || 80;
const server = http.createServer(app);
const io = require("socket.io")(server);

// Use the CORS middleware before your route handling.
app.use(cors({ origin: "*" }));

// Serve static files from the `public` directory.
// app.use(express.static(path.resolve('./public')));
// Create a Node.js HTTP server.
server.listen(port, () => {
  console.log("Server is started on", port);
});
// Define a route to serve the index.html file.
// app.get('/', (req, res) => {
//     return res.sendFile('./pserver.listen(port, () => {
//     console.log('Server is started on', port);
// });ublic/index.html');
// });

// Create a Socket.io server.

// Listen for the `connection` event.
io.on("connection", (socket) => {
  socket.on("message", (message) => {
    io.emit("message", message);
    console.log("message is", message);
  });
  console.log("connected successfully", socket.id);
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
  socket.on("error", (err) => {
    console.log("received error from client:", socket.id);
    console.log(err);
  });
});
