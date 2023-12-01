const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/posts");

// const multer = require('multer')
// const upload = multer()

router.post("/api/posts/", postsCtrl.create);
router.get("/api/posts/", postsCtrl.index);
router.delete("/api/posts/:id", postsCtrl.delete);
// router.put('/api/posts/:id', postsCtrl.update);

module.exports = router;
