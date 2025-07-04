const role = (requiredRole) => (req, res, next) => {
  if (req.user.role !== requiredRole) {
    return res.status(403).json({ msg: "Access denied" });
  }
  next();
};

module.exports = role;
