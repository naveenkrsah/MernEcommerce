const passport = require("passport");

exports.isAuth = (req, res, next) => {
  // if (req.user) {
  //   next();
  // } else {
  //   res.send(401);
  // }
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};
  