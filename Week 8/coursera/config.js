require("dotenv").config();

console.log("JWT_ADMIN_PASSWORD:", process.env.JWT_ADMIN_PASSWORD);
console.log("JWT_USER_PASSWORD:", process.env.JWT_USER_PASSWORD);

module.exports = {
  JWT_ADMIN_PASSWORD: process.env.JWT_ADMIN_PASSWORD,
  JWT_USER_PASSWORD: process.env.JWT_USER_PASSWORD,
};
