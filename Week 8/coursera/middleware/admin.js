const jet = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = require("../config");

function adminMiddleware(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

  if (decoded) {
    req.userID = decoded.id;
    next();
  } else {
    res.status(403).json({
      message: "you are not signed in",
    });
  }
}

module.exports = { adminMiddleware: adminMiddleware };
