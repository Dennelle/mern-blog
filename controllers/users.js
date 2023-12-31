const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  profile
};

// const S3 = require('aws-sdk/clients/s3');
// const s3 = new S3()
// const { v4: uuidv4 } = require('uuid');

async function profile(req, res){
  try{
    const user = await User.findOne({username: req.params.username})
    if (!user) return res.status(404).json({error: 'User not found'})
    //add post here
  }catch(err){
    console.log(err)
    res.status(400).json({err})
  }
}

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {

  try {
    const user = await User.findOne({email: req.body.email});

    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.password, (err, isMatch) => {

      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
