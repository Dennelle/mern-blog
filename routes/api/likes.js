const express = require('express');
const router = express.Router();
const likesCtrl = require('../../controllers/likes')

router.post('/api/posts/:id/likes', likesCtrl.create)
router.delete('/api/likes/:id', likesCtrl.deleteLike)

module.exports = router;
