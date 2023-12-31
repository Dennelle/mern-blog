const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      unique: true,
    },
    password: String,
    photoUrl: {
      type: String,
      default:
        "https://media.istockphoto.com/id/165924655/vector/people-icon.jpg?s=612x612&w=0&k=20&c=-FHLv6Q_bWCcXAlNGnuKHnC522Pdc0fkFb8syRvR_p8=",
    }, // string from aws!
    isAdmin: {
      type: Boolean,
      default: true,
    },

    role: {
      type: String,
      enum: ["Admin", "User"],
    },
    viewedBy: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  },
});
/// in controller

// this is if you populate the user
userSchema.set("toObject", {
  transform: (doc, ret, opt) => {
    delete ret.password;
    return ret;
  },
});

// DO NOT DEFINE instance methods with arrow functions,
// they prevent the binding of this
userSchema.pre("save", function (next) {
  // 'this' will be set to the current document
  const user = this;
  // check to see if the user has been modified, if not proceed
  // in the middleware chain
  if (!user.isModified("password")) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
  console.log(cb, " this is cb");
  // 'this' represents the document that you called comparePassword on
  bcrypt.compare(tryPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);

    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema);
