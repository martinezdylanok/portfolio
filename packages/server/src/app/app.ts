import dotenv from "dotenv";
import path from "path";
import server from "./server.js";

// --- Load environment variables consistently ---
const envPath = process.env.NODE_ENV === "development" ? path.resolve(process.cwd(), ".env.development") : path.resolve(process.cwd(), ".env");

console.log(`[App] Loading environment variables from: ${envPath}`);
const dotenvResult = dotenv.config({ path: envPath });

if (dotenvResult.error) {
   console.error(`[App] Error loading .env file from ${envPath}:`, dotenvResult.error);
}

const PORT: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 3000;

if (isNaN(PORT)) {
   console.error(`[App] Invalid SERVER_PORT defined in environment: ${process.env.SERVER_PORT}. Using default 3000.`);
   throw new Error("Invalid SERVER_PORT defined");
}

server.listen(PORT, () => {
   console.log(`[App] Server is running on http://0.0.0.0:${PORT}`);
   console.log(`[App] NODE_ENV is set to: ${process.env.NODE_ENV}`);
});
