const Post = require('../models/post');
const user = require('../models/user');

// =======when uploading pictures ============
// const S3 = require('aws-sdk/clients/s3');
// const s3 = new S3()
// const { v4: uuidv4 } = require('uuid');

module.exports = {
    index,
    create,
    // delete:deletePost,
    // edit,
    // update
}

async function index(req, res){
    try {
        const posts = await Post.find({}).populate("user").exec();
        res.status(200).json({ posts });
    } catch (err) {
        res.json({error: err})
    }
}

// async function deletePost(){
//     await Post.findOneandDelete({});
//     res.json('/')
// }

async function create(req, res){
    console.log(req.file, req.body, req.user)
    try {
        const postDoc = await Post.create({
            user: req.user,
            title: req.body.title,
            content:req.body.content,
            // category: req.body.category,
            // sector:req.body.sector
        })
    await postDoc.populate('user')
    res.status(201).json({post: postDoc})

    } catch (error) {
        console.log('error creating blog post')
        res.json({error: 'problem creating post, please try again'})
    }
}

// function edit(){

// }

// function update(){

// }
