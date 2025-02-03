import express, {Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.get("/", (_req: Request, res: Response) => {
   res.send("Hello World");
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});