require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const AuthRouter = require('./routes/authRouter');
const app = express();
const passport = require('passport');
const mongoose = require('mongoose');
const initializePassport = require('./config/passport-config');


mongoose.connect(process.env.MONGODB_KEY, {
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

app.use(AuthRouter);
app.listen(process.env.PORT);
