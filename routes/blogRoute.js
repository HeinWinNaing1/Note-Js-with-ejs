const express = require('express');
const blogController = require('../controllers/blogController')


const router = express.Router();

router.get('/',blogController.getAllBlogs)

router.post('/',blogController.createBlog)

router.get('/create',blogController.blog_details_get)

router.get('/:id',blogController.getBlogById)

router.delete('/:id',blogController.deleteBlogById)

module.exports = router;
