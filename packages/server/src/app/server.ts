import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import projectRoutes from "../routes/projectRoutes/projectRoutes.js";

const server = express();

/* Middlewares */
server.use(cors());
server.use(express.json());

/* Static files */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientDistPath = path.join(__dirname, "../../../client/dist");

server.use(express.static(clientDistPath));

/* Routes */
server.get("*", (__, res) => {
   res.sendFile(path.join(clientDistPath, "index.html"));
});

server.use("/projects", projectRoutes);

export default server;
