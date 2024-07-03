const Router = require('express');
const postController = require('../controller/post.controller');

const router = new Router();
/* (создаем эндпоинты для пути /post) */
router.post('/post', postController.createPost);
router.get('/post', postController.getPostsByUser);

module.exports = router; /* (подключаем в index.js) */