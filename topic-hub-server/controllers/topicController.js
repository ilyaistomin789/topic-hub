const CreateTopicService = require('../services/topic/createTopicService')
const GetTopicsService = require('../services/topic/getTopicsService');
exports.createTopic = (req,res) => CreateTopicService(req, res);
exports.getTopics = (req, res) => GetTopicsService(req, res);
