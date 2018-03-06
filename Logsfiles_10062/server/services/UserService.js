var dao = require("../daos/UserDao")

module.exports.get_user = function (username, password, callback) {
  dao.get_user(username, password, function (user, error) {
    if (error) {
      callback(error);
    } else {
      user[0].id = user[0]._id;
      console.log("the service response ----->", user[0])
      callback(user[0]);
    }
  });
}
