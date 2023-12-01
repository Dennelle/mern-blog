const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/comments');

router.post('/api/posts/:id/comments', commentsCtrl.create)
router.delete('/api/comments/:id', commentsCtrl.deleteComment)

module.exports = router;
