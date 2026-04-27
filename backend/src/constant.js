require("dotenv").config();

const PORT = Number(process.env.PORT || 5000);

const DB_CONFIG = {
	host: process.env.DB_HOST || "localhost",
	port: Number(process.env.DB_PORT || 3306),
	user: process.env.DB_USER || "root",
	password: process.env.DB_PASSWORD || "",
	database: process.env.DB_NAME || "khmergo_db",
};

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "*";
const JWT_SECRET = process.env.JWT_SECRET || "change-this-dev-jwt-secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

module.exports = {
	PORT,
	DB_CONFIG,
	FRONTEND_ORIGIN,
	JWT_SECRET,
	JWT_EXPIRES_IN,
};
