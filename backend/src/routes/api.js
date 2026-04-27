const express = require("express");
const authController = require("../controllers/authController");
const destinationController = require("../controllers/destinationController");
const serviceController = require("../controllers/serviceController");
const interactionController = require("../controllers/interactionController");
const { authenticateRequest } = require("../middleware/authMiddleware");

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

module.exports = router;
