const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const initializePassport = (passport) => {
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.JWT_SECRET;
    const authenticateUser = async (username, password, done) => {
        await User.findOne({username: username}, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username'})
            }
            if (user.password !== password){ return done(null, false, {message: 'Incorrect password'}) }
            return done(null, {id: user.id, username: user.username, img: user.img, role: user.role});
        })
    }
    passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
        User.findById(jwt_payload.id, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
    passport.use(new LocalStrategy({ usernameField: 'login', passwordField: 'password' }, authenticateUser));


}
module.exports = initializePassport;
