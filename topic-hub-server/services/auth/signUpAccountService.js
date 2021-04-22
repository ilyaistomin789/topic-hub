const User = require('../../models/user.model');
module.exports = async (req, res) => {
    const userExists = await User.findOne({
        username: req.body.username
    })
    if (userExists !== null) {
        return res.status(409).json({ message: 'This user already exists' });
    }
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
