const express = require("express");
const cors = require("cors");
const path = require("path");
const { FRONTEND_ORIGIN } = require("./constant");
const apiRouter = require("./routes/api");

function createServer() {
	const app = express();

	app.use(
		cors({
			origin:
				FRONTEND_ORIGIN === "*"
					? true
					: FRONTEND_ORIGIN.split(",")
							.map((origin) => origin.trim())
							.filter(Boolean),
			credentials: true,
		})
	);

	app.use(express.json({ limit: "1mb" }));

	app.use("/assets", express.static(path.resolve(__dirname, "../../frontend/src/assets")));

	app.get("/", (_req, res) => {
		res.json({ ok: true, message: "KhmerGo backend running" });
	});

	app.use("/api", apiRouter);

	app.use((err, _req, res, _next) => {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	});

	return app;
}

module.exports = {
	createServer,
};
