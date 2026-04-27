const db = require("../db");

// Provinces CRUD
exports.getProvinces = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM provinces ORDER BY id ASC");
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createProvince = async (req, res) => {
  try {
    const { id, name, slug, province_type, description, image_url } = req.body;

    if (!id || !name || !slug || !province_type) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    await db.query(
      "INSERT INTO provinces (id, name, slug, province_type, description, image_url) VALUES (?, ?, ?, ?, ?, ?)",
      [id, name, slug, province_type, description || null, image_url || null]
    );

    res.status(201).json({ success: true, message: "Province created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateProvince = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug, province_type, description, image_url } = req.body;

    await db.query(
      "UPDATE provinces SET name=?, slug=?, province_type=?, description=?, image_url=? WHERE id=?",
      [name, slug, province_type, description || null, image_url || null, id]
    );

    res.status(200).json({ success: true, message: "Province updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteProvince = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM provinces WHERE id=?", [id]);
    res.status(200).json({ success: true, message: "Province deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Places CRUD
exports.getPlaces = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM places ORDER BY province_id ASC, id ASC"
    );
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createPlace = async (req, res) => {
  try {
    const { province_id, name, slug, tag, best_for, detail, image_url } = req.body;

    if (!province_id || !name || !slug) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    await db.query(
      "INSERT INTO places (province_id, name, slug, tag, best_for, detail, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [province_id, name, slug, tag || null, best_for || null, detail || null, image_url || null]
    );

    res.status(201).json({ success: true, message: "Place created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updatePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const { province_id, name, slug, tag, best_for, detail, image_url } = req.body;

    await db.query(
      "UPDATE places SET province_id=?, name=?, slug=?, tag=?, best_for=?, detail=?, image_url=? WHERE id=?",
      [province_id, name, slug, tag || null, best_for || null, detail || null, image_url || null, id]
    );

    res.status(200).json({ success: true, message: "Place updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deletePlace = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM places WHERE id=?", [id]);
    res.status(200).json({ success: true, message: "Place deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Stays CRUD
exports.getStays = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM stays ORDER BY province_id ASC, id ASC"
    );
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createStay = async (req, res) => {
  try {
    const { province_id, name, slug, stay_type, best_for, detail, price_min, price_max, currency_code, image_url } = req.body;

    if (!province_id || !name || !slug || !stay_type) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    await db.query(
      "INSERT INTO stays (province_id, name, slug, stay_type, best_for, detail, price_min, price_max, currency_code, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [province_id, name, slug, stay_type, best_for || null, detail || null, price_min || null, price_max || null, currency_code || 'USD', image_url || null]
    );

    res.status(201).json({ success: true, message: "Stay created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateStay = async (req, res) => {
  try {
    const { id } = req.params;
    const { province_id, name, slug, stay_type, best_for, detail, price_min, price_max, currency_code, image_url } = req.body;

    await db.query(
      "UPDATE stays SET province_id=?, name=?, slug=?, stay_type=?, best_for=?, detail=?, price_min=?, price_max=?, currency_code=?, image_url=? WHERE id=?",
      [province_id, name, slug, stay_type, best_for || null, detail || null, price_min || null, price_max || null, currency_code || 'USD', image_url || null, id]
    );

    res.status(200).json({ success: true, message: "Stay updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteStay = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM stays WHERE id=?", [id]);
    res.status(200).json({ success: true, message: "Stay deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Bookings CRUD
exports.getBookings = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT b.*, s.name as stay_name, p.name as province_name FROM bookings b LEFT JOIN stays s ON b.stay_id = s.id LEFT JOIN provinces p ON s.province_id = p.id ORDER BY b.created_at DESC"
    );
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, note } = req.body;

    await db.query(
      "UPDATE bookings SET status=?, note=? WHERE id=?",
      [status, note || null, id]
    );

    res.status(200).json({ success: true, message: "Booking updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM bookings WHERE id=?", [id]);
    res.status(200).json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Contact Messages CRUD
exports.getContactMessages = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM contact_messages ORDER BY created_at DESC"
    );
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateContactMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await db.query(
      "UPDATE contact_messages SET status=? WHERE id=?",
      [status, id]
    );

    res.status(200).json({ success: true, message: "Message updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteContactMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM contact_messages WHERE id=?", [id]);
    res.status(200).json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Users management
exports.getUsers = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, full_name, email, phone, role, is_active, created_at FROM users ORDER BY created_at DESC"
    );
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { role, is_active } = req.body;

    await db.query(
      "UPDATE users SET role=?, is_active=? WHERE id=?",
      [role, is_active, id]
    );

    res.status(200).json({ success: true, message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM users WHERE id=?", [id]);
    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
