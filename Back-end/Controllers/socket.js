const express = require("express");
const app = express();

const http = require("http");
const server = http.Server(app);

const socketIO = require("socket.io");
const io = socketIO(server);

io.on("connection", (socket) => {
  socket.on("join", (data) => {
    socket.join(data.room);
    socket.broadcast.to(data.room).emit("New user joined");
  });
});

server.listen(3100, () => {
  console.log("Listening on port 3100");
});
