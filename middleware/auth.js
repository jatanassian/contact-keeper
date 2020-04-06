const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Set the user in the request with the user in the jwt payload so we can access it inside the route
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(500).json({ msg: 'Token is not valid' });
  }
};
