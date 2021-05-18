const CreateTopicService = require('../services/topic/createTopicService')
const GetTopicsService = require('../services/topic/getTopicsService');
const GetTopicByNameService = require('../services/topic/getTopicByNameService');
exports.createTopic = (req,res) => CreateTopicService(req, res);
exports.getTopics = (req, res) => GetTopicsService(req, res);
exports.getTopicByName = (req, res) => GetTopicByNameService(req, res);
