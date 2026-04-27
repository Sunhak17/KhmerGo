const { pool } = require("../db");

async function findUserById(userId) {
  const [rows] = await pool.query(
    `SELECT id, full_name, email, phone, role, is_active, created_at
     FROM users
     WHERE id = ?
     LIMIT 1`,
    [userId]
  );

  return rows[0] || null;
}

async function findUserWithPasswordByEmail(email) {
  const [rows] = await pool.query(
    `SELECT id, full_name, email, phone, role, is_active, password_hash
     FROM users
     WHERE email = ?
     LIMIT 1`,
    [email]
  );

  return rows[0] || null;
}

async function createUser({ fullName, email, passwordHash, phone }) {
  const [result] = await pool.query(
    `INSERT INTO users (full_name, email, password_hash, phone)
     VALUES (?, ?, ?, ?)`,
    [fullName, email, passwordHash, phone || null]
  );

  return result.insertId;
}

module.exports = {
  findUserById,
  findUserWithPasswordByEmail,
  createUser,
};
