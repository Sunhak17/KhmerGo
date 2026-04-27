const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../constant");
const { toNumber } = require("../utils/helpers");
const { findUserById } = require("../model/authModel");

function getBearerToken(headerValue) {
  const value = String(headerValue || "").trim();
  if (!value.startsWith("Bearer ")) {
    return null;
  }

  return value.slice("Bearer ".length).trim() || null;
}

async function authenticateRequest(req, res, next) {
  try {
    const token = getBearerToken(req.headers.authorization);
    if (!token) {
      return res.status(401).json({ message: "Authorization token is required" });
    }

    let payload;
    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (_error) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const userId = toNumber(payload.sub);
    if (userId == null) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    const user = await findUserById(userId);
    if (!user || user.is_active !== 1) {
      return res.status(401).json({ message: "User account is inactive" });
    }

    req.user = {
      id: user.id,
      fullName: user.full_name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      createdAt: user.created_at,
    };

    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  authenticateRequest,
};
