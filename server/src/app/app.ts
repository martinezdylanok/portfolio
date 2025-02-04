import server from "./server.js";
import dotenv from "dotenv";

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

server.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});