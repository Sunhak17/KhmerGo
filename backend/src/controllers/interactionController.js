const { isValidEmail, toNumber } = require("../utils/helpers");
const { createContactMessage } = require("../model/contactModel");
const { createBooking } = require("../model/bookingModel");
const { stayExists } = require("../model/stayModel");

async function submitContactMessage(req, res, next) {
  try {
    const fullName = String(req.body.fullName || "").trim();
    const email = String(req.body.email || "").trim();
    const subject = String(req.body.subject || "").trim();
    const message = String(req.body.message || "").trim();

    if (!fullName || !email || !message) {
      return res.status(400).json({ message: "fullName, email, and message are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const id = await createContactMessage({ fullName, email, subject, message });
    return res.status(201).json({ id, message: "Contact message submitted" });
  } catch (error) {
    return next(error);
  }
}

async function submitBooking(req, res, next) {
  try {
    const userId = req.body.userId == null ? null : toNumber(req.body.userId);
    const stayId = toNumber(req.body.stayId);
    const guestName = String(req.body.guestName || "").trim();
    const guestEmail = String(req.body.guestEmail || "").trim();
    const guestPhone = String(req.body.guestPhone || "").trim();
    const checkIn = String(req.body.checkIn || "").trim();
    const checkOut = String(req.body.checkOut || "").trim();
    const adults = toNumber(req.body.adults) || 1;
    const children = toNumber(req.body.children) || 0;
    const rooms = toNumber(req.body.rooms) || 1;
    const totalPrice = req.body.totalPrice == null ? null : Number(req.body.totalPrice);
    const note = String(req.body.note || "").trim();

    if (stayId == null || !guestName || !guestEmail || !checkIn || !checkOut) {
      return res.status(400).json({
        message: "stayId, guestName, guestEmail, checkIn, and checkOut are required",
      });
    }

    if (!isValidEmail(guestEmail)) {
      return res.status(400).json({ message: "Invalid guestEmail format" });
    }

    const exists = await stayExists(stayId);
    if (!exists) {
      return res.status(404).json({ message: "Stay not found" });
    }

    const id = await createBooking({
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
    });

    return res.status(201).json({ id, message: "Booking created" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  submitContactMessage,
  submitBooking,
};
