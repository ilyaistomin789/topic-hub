const User = require('../../models/user.model');

module.exports = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, img, email, github, twitter, instagram, facebook } = req.body;
    console.log(req.body);
    await User.updateOne({_id: id}, {
        $set: {
            firstName,
            lastName,
            img,
            email,
            github,
            twitter,
            instagram,
            facebook
        }
    })
        .then(result => res.json(result))
        .catch(e => res.json({message: e.message}))
}
