const {Router} = require('express');
const TopicController = require('../controllers/topicController');
const router = Router();
const passport = require('passport');

router.get('/topic', passport.authenticate('jwt', {session: false}), TopicController.getTopics);
router.get('/topic/:name', TopicController.getTopicByName);
router.post('/topic', TopicController.createTopic);
router.put('/topic/:topicId', TopicController.editTopicById)
router.delete('/topic/:topicName', TopicController.deleteTopicByName)

module.exports = router;
