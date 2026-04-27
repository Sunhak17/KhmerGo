const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_EXPIRES_IN, JWT_SECRET } = require("../constant");
const { isValidEmail } = require("../utils/helpers");
const { createUser, findUserWithPasswordByEmail } = require("../model/authModel");

function signAuthToken(user) {
  return jwt.sign({ sub: user.id, email: user.email, role: user.role }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

async function signup(req, res, next) {
  try {
    const fullName = String(req.body.fullName || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    const phone = String(req.body.phone || "").trim();

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "fullName, email, and password are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const existing = await findUserWithPasswordByEmail(email);
    if (existing) {
      return res.status(409).json({ message: "Email is already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const userId = await createUser({ fullName, email, passwordHash, phone });

    const user = {
      id: userId,
      fullName,
      email,
      phone: phone || null,
      role: "user",
    };

    const token = signAuthToken(user);
    return res.status(201).json({ message: "Account created", token, user });
  } catch (error) {
    return next(error);
  }
}

async function login(req, res, next) {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (!email || !password) {
      return res.status(400).json({ message: "email and password are required" });
    }

    const record = await findUserWithPasswordByEmail(email);
    if (!record) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (record.is_active !== 1) {
      return res.status(403).json({ message: "Account is inactive" });
    }

    const isMatch = await bcrypt.compare(password, record.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = {
      id: record.id,
      fullName: record.full_name,
      email: record.email,
      phone: record.phone,
      role: record.role,
    };

    const token = signAuthToken(user);
    return res.json({ message: "Login successful", token, user });
  } catch (error) {
    return next(error);
  }
}

function me(req, res) {
  res.json({ user: req.user });
}

module.exports = {
  signup,
  login,
  me,
};
