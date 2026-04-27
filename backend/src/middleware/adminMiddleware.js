const { getBearerToken } = require("../utils/helpers");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../constant");
const db = require("../db");

exports.requireAdmin = async (req, res, next) => {
  try {
    const token = getBearerToken(req.headers.authorization);

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Check role from token (faster) or from database (more secure)
    if (decoded.role === "admin") {
      req.user = { id: decoded.sub, role: decoded.role };
      return next();
    }

    // Fallback: verify role in database
    const [users] = await db.query("SELECT id, role FROM users WHERE id = ? AND role = 'admin'", [decoded.sub]);

    if (!users.length) {
      return res.status(403).json({ success: false, message: "Forbidden: Admin access required" });
    }

    req.user = { id: decoded.sub, role: "admin" };
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
  }
};
