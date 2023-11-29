const mongoose = require("mongoose");

// ====== embedding comments in the blog post schema =======
const commentSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    // userAvatar: String
},
{
    timestamps: true,
}
);

const postSchema = new mongoose.Schema({
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // userName:{
    //     type: String,
    // },
    // userAvatar:{
    //     type: String,
    // },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    // ======= category displays all emerging tech and should be updated ======
    category: {
        type: String,
        enum: ['5G','Edge Computing','Quantum Computing','Artifical Intelligence (AI)','Machine Learning','Extended Reality(XR(VR,AR,MR))','Internet of Things(IoT)','BlockChain','Autonomous Vehicles','Additive Manufacturing (3d Printing)','Smart Cities Technology','Nanotechnology','Synthetic Biology','Advanced Robotics','Neuromorphic Computing','Biometric Technology','Digital Twins','Satellite Internet','Clean Energy','CyberSecurity']
    },
    // ===== this includes tech sectors and industries =======
    sector: {
        type: String,
        enum: ['Government Technology','Financial Technology','Healthcare Technology','Education Technology','Agricultural Technology','Retail Technology','CyberSecurity','Legal Technology','Advertisitn Technology','Clean Technology','Aerospace and Defense Technology','BioTechnology','Telecommunications','Software','Hardware','Ecommerce','Data and Analytics','Robotics','IoT','BlockChain','Software Development and Programming','Internet and Web Services','Cloud Computing','Environmental Technology','Gaming Technology','Automotive Technology', 'Space Technology']
    },
    comments: [commentSchema],
    },
    {
    timestamps: true,
    }
);

module.exports = mongoose.model("Post", postSchema);
