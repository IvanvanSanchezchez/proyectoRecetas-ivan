const path = require("path");
// Require

// Devolver View
exports.getView = (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(__dirname, "../views/principal.html"));
  } else {
    return res.redirect("/login");
  }
};

// Devolver View Index
exports.getIndex = (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  } else {
    return res.redirect("/login");
  }
};