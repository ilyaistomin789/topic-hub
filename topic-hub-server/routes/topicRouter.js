const { Router } = require('express');
const TopicController = require('../controllers/topicController');
const router = Router();
const passport = require('passport');

router.get('/topic',passport.authenticate('jwt', { session: false }), TopicController.getTopics);
router.post('/topic', TopicController.createTopic);

module.exports = router;