const { pool } = require("../db");

async function createContactMessage({ fullName, email, subject, message }) {
  const [result] = await pool.query(
    `INSERT INTO contact_messages (full_name, email, subject, message)
     VALUES (?, ?, ?, ?)`,
    [fullName, email, subject || null, message]
  );

  return result.insertId;
}

module.exports = {
  createContactMessage,
};
