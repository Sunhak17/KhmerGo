const express = require("express");
const authController = require("../controllers/authController");
const destinationController = require("../controllers/destinationController");
const serviceController = require("../controllers/serviceController");
const interactionController = require("../controllers/interactionController");
const adminController = require("../controllers/adminController");
const { authenticateRequest } = require("../middleware/authMiddleware");
const { requireAdmin } = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/auth/signup", authController.signup);
router.post("/auth/login", authController.login);
router.get("/auth/me", authenticateRequest, authController.me);

router.get("/health", destinationController.health);
router.get("/provinces", destinationController.listProvinces);
router.get("/provinces/:provinceId", destinationController.getProvince);
router.get("/provinces/:provinceId/places", destinationController.listPlacesByProvince);

router.get("/provinces/:provinceId/stays", serviceController.listStaysByProvince);
router.get("/service/provinces", serviceController.listServiceProvinceSections);
router.get("/stays/:stayId", serviceController.getStay);
router.get("/stays/slug/:provinceId/:staySlug", serviceController.getStayBySlug);

router.post("/contact-messages", interactionController.submitContactMessage);
router.post("/bookings", interactionController.submitBooking);

// Admin Routes - All require admin authentication
router.get("/admin/provinces", requireAdmin, adminController.getProvinces);
router.post("/admin/provinces", requireAdmin, adminController.createProvince);
router.put("/admin/provinces/:id", requireAdmin, adminController.updateProvince);
router.delete("/admin/provinces/:id", requireAdmin, adminController.deleteProvince);

router.get("/admin/places", requireAdmin, adminController.getPlaces);
router.post("/admin/places", requireAdmin, adminController.createPlace);
router.put("/admin/places/:id", requireAdmin, adminController.updatePlace);
router.delete("/admin/places/:id", requireAdmin, adminController.deletePlace);

router.get("/admin/stays", requireAdmin, adminController.getStays);
router.post("/admin/stays", requireAdmin, adminController.createStay);
router.put("/admin/stays/:id", requireAdmin, adminController.updateStay);
router.delete("/admin/stays/:id", requireAdmin, adminController.deleteStay);

router.get("/admin/bookings", requireAdmin, adminController.getBookings);
router.put("/admin/bookings/:id", requireAdmin, adminController.updateBooking);
router.delete("/admin/bookings/:id", requireAdmin, adminController.deleteBooking);

router.get("/admin/contact-messages", requireAdmin, adminController.getContactMessages);
router.put("/admin/contact-messages/:id", requireAdmin, adminController.updateContactMessage);
router.delete("/admin/contact-messages/:id", requireAdmin, adminController.deleteContactMessage);

router.get("/admin/users", requireAdmin, adminController.getUsers);
router.put("/admin/users/:id", requireAdmin, adminController.updateUser);
router.delete("/admin/users/:id", requireAdmin, adminController.deleteUser);

module.exports = router;
