const User = require('../models/user.model');
const AuthAccountService = require('../services/auth/authAccountService');
exports.signUpUser = async (req, res) => {
    console.log(req.body)
    const user = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        img: {},
        role: 'user'
    })
    await user.save().catch(e => {
        console.log(e.message)});
    res.json({message: 'Sign up success'});
}
exports.getAccount = (req) => {
    return AuthAccountService(req.user);
}

exports.logout = (req, res) => {
    req.logout();
    res.json({message: 'log out success'});
}
