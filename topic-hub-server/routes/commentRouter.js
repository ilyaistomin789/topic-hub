const {Router} = require('express');
const CommentController = require('../controllers/commentController');

const router = Router();

router.get('/comments/:postId', CommentController.getCommentsByPostId)
router.post('/comment', CommentController.createComment);

module.exports = router;
