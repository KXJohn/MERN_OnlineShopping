const user = require("../model/user");
const User = require("../model/user");

exports.getStatus = (req, res, next) => {
  User.findById(req.userId)
    .then((result) => {
      if (!result) {
        const error = new Error("User not found.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({
        status: result.status,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateStatus = (req, res, next) => {
  const updatedStatus = req.body.status;
  User.findById(req.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found.");
        error.statusCode = 404;
        throw error;
      }
      user.status = updatedStatus;
      return user.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Status Updated", user: user._id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
