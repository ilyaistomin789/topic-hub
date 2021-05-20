const {Router} = require('express');
const PostController = require('../controllers/postController')

const router = Router();

router.get('/posts/:topicId', PostController.getPostsByTopicId);
router.get('/post/:postId', PostController.getPostByPostId);
router.post('/post', PostController.createPostForTopicId);
router.put('/post/:postId', PostController.editPostByPostId);
router.delete('/post/:postId', PostController.deletePostByPostId);
module.exports = router;
