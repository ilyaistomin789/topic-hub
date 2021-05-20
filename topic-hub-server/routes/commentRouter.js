const {Router} = require('express');
const CommentController = require('../controllers/commentController');

const router = Router();

router.get('/comments/:postId', CommentController.getCommentsByPostId)
router.post('/comment', CommentController.createComment);
router.get('/comment/:commentId', CommentController.getCommentByCommentId);
router.put('/comment/:commentId', CommentController.editCommentByCommentId);
router.delete('/comment/:commentId', CommentController.deleteCommentByCommentId);

module.exports = router;
