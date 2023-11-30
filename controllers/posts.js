const Post = require('../models/post');
const user = require('../models/user');

// =======when uploading pictures ============
// const S3 = require('aws-sdk/clients/s3');
// const s3 = new S3()
// const { v4: uuidv4 } = require('uuid');

module.exports = {
  index,
  create,
  delete: deletePost,
  // update
};

async function index(req, res) {
  try {
    const posts = await Post.find({}).populate("user").exec();
    res.status(200).json({ posts });
  } catch (err) {
    res.json({ error: err });
  }
}

async function deletePost(req, res) {
  try {
    const postDoc = await Post.findOne({ "posts._id": req.paramas.id });
    postDoc.posts.remove(req.params.id);
    await postDoc.save();
    res.json({ data: "post removed" });
  } catch (error) {
    res.status(400).json({ err });
  }
}

async function create(req, res) {
  console.log(req.file, req.body, req.user);
  try {
    const postDoc = await Post.create(req.body);
    // await postDoc.populate('user')
    res.status(201).json({ post: postDoc });
  } catch (error) {
    console.log("error creating blog post", error);
    res.json({ error: "problem creating post, please try again" });
  }
}

// function update(){

// }
