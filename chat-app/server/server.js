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
        console.log(`${socket.id} has joined room: ${room}`);

        // Add user to room
        if (!rooms[room]) {
            rooms[room] = {
                users: new Set()
            };
        }
        rooms[room].users.add(socket.id);

        // Broadcast to all users in the room that a new user has joined
        socket.to(room).emit('user_joined', { room, user: socket.id });

        // Broadcast updated list of rooms to all users
        io.emit('rooms', Object.keys(rooms));
        console.log(`New room created: ${room}`);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit('receive_message', data)
        console.log(data);
    })

    socket.on("disconnect", () => {
        console.log(`${socket.id} has disconnected.`)

        for (const room in rooms) {
            if (rooms[room].users.has(socket.id)) {
                rooms[room].users.delete(socket.id);
                if (rooms[room].users.size === 0) {
                    delete rooms[room];
                    io.emit('rooms', Object.keys(rooms));
                    console.log(`Room closed: ${room}`);
                } else {
                    socket.to(room).emit('user_left', { room, user: socket.id });
                }
                break;
            }
        }
    });
});

server.listen(3001, () => {
    console.log("Server online");
});
