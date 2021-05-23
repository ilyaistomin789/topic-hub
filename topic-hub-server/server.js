require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const AuthRouter = require('./routes/authRouter');
const TopicRouter = require('./routes/topicRouter');
const UserRouter = require('./routes/userRouter');
const PostRouter = require('./routes/postRouter');
const CommentRouter = require('./routes/commentRouter');
const app = express();
const passport = require('passport');
const mongoose = require('mongoose');
const initializePassport = require('./config/passport-config');

const fs = require('fs');
const https = require('https');

const options = {
    cert: fs.readFileSync('./config/stmnl.crt'),
    key: fs.readFileSync('./config/stmnl.key')
}

const server = require('https').createServer(options,app);
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
var messages = [];
var users = [];
io.on('connection', socket => {
    console.log("connected");
    socket.on('JOIN', ({username}) => {
        console.log("JOIN on")
        if (users.some(user => user.username === username)){
            users = users.filter(user => user.username !== username);
        }
        users.push({userID: socket.id, username: username});
        console.log("set users emit broadcast")
        socket.broadcast.emit("SET_USERS", users);
        console.log("socket data emit")
        socket.emit("SOCKET_DATA", {
            users: users,
            messages: messages
        })
        console.log("socket data emit broadcast")
        socket.broadcast.emit("SOCKET_DATA", {
            users: users,
            messages: messages
        })
    })
    console.log("new message on")
    socket.on("NEW_MESSAGE", ({username, message}) => {
        const obj = {
            username,
            message
        };
        messages.push(obj);
        console.log("new message emit broadcast")
        socket.broadcast.emit("NEW_MESSAGE", obj);
        socket.emit("SOCKET_DATA", {
            users: users,
            messages: messages
        })
        console.log("socket data emit brodacast")
        socket.broadcast.emit("SOCKET_DATA", {
            users: users,
            messages: messages
        })
    })
    socket.on("USER_DISCONNECTED", username => {
        users = users.filter(user => user.username !== username);
        console.log("socket data emit broadcast")
        socket.broadcast.emit("SOCKET_DATA", {
            users: users,
            messages: messages
        })
    })
})

app.use(AuthRouter);
app.use(TopicRouter);
app.use(CommentRouter);
app.use(UserRouter);
app.use(PostRouter);

server.listen(process.env.PORT);
