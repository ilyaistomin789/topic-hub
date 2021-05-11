const Topic = require('../../models/topic.model');

module.exports = async (req, res) => {
    const topic = new Topic({
        name: req.body.name,
        createBy: req.body.userId
    })
    await topic.save().catch(e => {
        console.log(e.message);
    })
    res.json({ name: req.body.name, createBy: req.body.userId});
}
