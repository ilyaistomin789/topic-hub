const User = require('../../models/user.model');

module.exports = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, github, twitter, instagram, facebook } = await User.findById(id);
    const data = {
        firstName,
        lastName,
        email,
        github,
        twitter,
        instagram,
        facebook
    }
    res.json(data);
}
