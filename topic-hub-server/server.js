require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const AuthRouter = require('./routes/authRouter');
const app = express();
const passport = require('passport');
const mongoose = require('mongoose');
const initializePassport = require('./config/passport-config');
const server = require('http').Server(app);
const io = require('socket.io')(server);


mongoose.connect(process.env.MONGODB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(r => {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.log(e.message);
})

initializePassport(passport);
app.use(passport.initialize());


app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.urlencoded({ extended: false }));


io.use((socket, next) => {
    console.log(socket.handshake.auth.username);
    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid username"));
    }
    socket.username = username;
    next();
});
io.on('connection', socket => {
    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: socket.username,
        });
    }
    console.log(users);
    socket.emit("users", users);
    socket.broadcast.emit("user connected", {
        userID: socket.id,
        username: socket.username,
    });
})

app.use(AuthRouter);
server.listen(process.env.PORT);
