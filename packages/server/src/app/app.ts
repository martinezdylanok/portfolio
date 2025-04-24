import dotenv from "dotenv";
import server from "./server.js";

dotenv.config();

const PORT: number = parseInt(process.env.SERVER_PORT as string, 10) || 3000;

server.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
