const { PORT } = require("./constant");
const { testDatabaseConnection } = require("./db");
const { createServer } = require("./server");

async function start() {
	try {
		await testDatabaseConnection();
		console.log("Database connected");

		const app = createServer();
		app.listen(PORT, () => {
			console.log(`Backend listening on port ${PORT}`);
		});
	} catch (error) {
		console.error("Failed to start backend:", error.message);
		process.exit(1);
	}
}

start();
