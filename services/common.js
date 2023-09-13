const passport = require("passport");

exports.isAuth = (req, res, next) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["token"];
  }
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmM1YjgxOWI3MjM3OTQzNjk1NGJhOCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk0MjYwNDQxfQ.qvkNorj2frms2JmFXKva1jHDIoP6zCY83qpdfICg7Bk";
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmMzYTBiOWUwOWEwMWViY2RiNWEyMCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NDUwNjU2NH0.oIxyeoCzHq-gIYbemRQBKWArPdDjJXg_svqGdBTiMmo";
  return token;
};
