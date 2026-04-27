const { pool } = require("../db");

async function createBooking({
  userId,
  stayId,
  guestName,
  guestEmail,
  guestPhone,
  checkIn,
  checkOut,
  adults,
  children,
  rooms,
  totalPrice,
  note,
}) {
  const [result] = await pool.query(
    `INSERT INTO bookings (
        user_id, stay_id, guest_name, guest_email, guest_phone,
        check_in, check_out, adults, children, rooms, total_price, note
     )
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      userId,
      stayId,
      guestName,
      guestEmail,
      guestPhone || null,
      checkIn,
      checkOut,
      adults,
      children,
      rooms,
      totalPrice,
      note || null,
    ]
  );

  return result.insertId;
}

module.exports = {
  createBooking,
};
