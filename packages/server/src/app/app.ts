import server from "./server.js";

const PORT: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 3000;

if (isNaN(PORT)) {
   console.error(`[App] Invalid SERVER_PORT defined in environment: ${process.env.SERVER_PORT}. Using default 3000.`);
   throw new Error("Invalid SERVER_PORT defined");
}

server.listen(PORT, () => {
   console.log(`[App] Server is running on http://0.0.0.0:${PORT}`);
   console.log(`[App] NODE_ENV is set to: ${process.env.NODE_ENV}`);
});
