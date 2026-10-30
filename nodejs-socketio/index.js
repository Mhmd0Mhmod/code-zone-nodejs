const express = require("express");
const { createServer } = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message : ", msg);
    io.emit("send_messages_to_all_users", msg);
  });
  console.log("a user connected with Socket id : ", socket.id);
  socket.on("typing", (msg) => {
    if (msg) socket.broadcast.emit("typing_status", true);
    else socket.broadcast.emit("typing_status", false);
  });
});

server.listen(3000, () => {
  console.log("Listening on PORT 3000!");
});
