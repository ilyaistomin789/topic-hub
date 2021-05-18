const {Router} = require('express');
const PostController = require('../controllers/postController')

const router = Router();

router.get('/posts/:topicId', PostController.getPostsByTopicId);
router.get('/post/:postId', PostController.getPostByPostId);
router.post('/post', PostController.createPostForTopicId);
module.exports = router;
