const User = require("../model/user.model");
const http = require("../utils/http");
const AppError = require("../utils/errors");
const Session = require("../model/session.model");
const bcrypt = require("../utils/bcrypt");
const jwt = require("../utils/jwt");

async function register(req, res, next) {
  const { firstName, lastName, email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser) {
    return next(
      AppError.create("This email is Already assigned before", 400, http.FAIL),
    );
  }
  // passowrd hashing
  const hashdPassowrd = await bcrypt.hash(password);
  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashdPassowrd,
    avatar: req.file.path,
  });
  await newUser.save();
  return res.status(201).json({
    status: http.SUCCESS,
    data: {
      user: newUser,
    },
  });
}
async function login(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      AppError.create("Email and Password are required", 400, http.FAIL),
    );
  }
  const user = await User.findOne({ email });
  if (!user) {
    return next(
      AppError.create("There r no user with this email , try to sign up "),
    );
  }
  const matchedPassword = await bcrypt.compare(password, user.password);
  if (matchedPassword) {
    const token = jwt.sign({
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    });
    const session = await Session.create({
      token,
      userId: user._id,
    });
    return res.status(200).json({
      status: http.SUCCESS,
      data: {
        user,
        session,
      },
    });
  }
  return next(AppError.create("Wrong Passowrd , Try again", 400, http.FAIL));
}
async function logout(req, res) {}
module.exports = {
  register,
  login,
  logout,
};
