const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io")

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PATCH", "UPDATE", "DELETE"]
    }
});

const rooms = {};

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.emit('rooms', Object.keys(rooms)); 

    socket.on("join_room", (room) => {
        socket.join(room);
        console.log(`${socket.id} has created room: ${room}`)

        if (!rooms[room]) {
            rooms[room] = true;
            io.emit('rooms', Object.keys(rooms));
            console.log(`New room created: ${room}`);
        }
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit('receive_message', data)
        console.log(data);
    })

    socket.on("disconnect", () => {
        console.log(`${socket.id} has disconnected.`)
    });
})

server.listen(3001, () => {
    console.log("Server online");
}); 