const GetCommentsByPostIdService = require('../services/comment/getCommentsByPostIdService');
const CreateCommentService = require('../services/comment/createCommentService');

exports.getCommentsByPostId = (req, res) => GetCommentsByPostIdService(req,res);
exports.createComment = (req, res) => CreateCommentService(req, res);
