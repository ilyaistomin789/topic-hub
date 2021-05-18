const GetPostsByTopicIdService = require('../services/post/getPostsByTopicIdService');
const CreatePostForTopicIdService = require('../services/post/createPostForTopicIdService');
const GetPostByPostIdService = require('../services/post/getPostByPostIdService');

exports.getPostsByTopicId = (req, res) => GetPostsByTopicIdService(req, res);
exports.createPostForTopicId = (req, res) => CreatePostForTopicIdService(req, res);
exports.getPostByPostId = (req, res) => GetPostByPostIdService(req, res);
